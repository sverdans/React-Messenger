import React from 'react'
import moment from 'moment'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { Stack, Box } from '@mui/material'

import { ChatHeader, Message, MessageInput, ChatStub, ChatTimestamp } from 'components/common'
import { chats, user } from 'store'
import { getChatDate } from 'utils'
import socket from 'api'

const renderMessages = (messages) => 
{
	let i = 0;
	let tempMessages = [];

	while (i < messages.length)
	{
		let previous = messages[i - 1]
		let current = messages[i]
		let next = messages[i + 1]
		
		let isMine = current.authorId === user.user.id
		let currentMoment = moment(current.timestamp)

		let prevBySameAuthor = false
		let nextBySameAuthor = false
		let isStart = true
		let isEnd = true
		let showTimestamp = false

		if (i === 0)
			showTimestamp = true

		if (previous)
		{
			let previousMoment = moment(previous.timestamp)
			let previousDuration = moment.duration(currentMoment.diff(previousMoment))
			prevBySameAuthor = previous.authorId === current.authorId
			
			if (prevBySameAuthor && previousDuration.as('hours') < 1)
				isStart = false

			const prevDate = new Date(previous.createdAt)
			const curDate = new Date(current.createdAt)

			if (prevDate.getFullYear() !== curDate.getFullYear() || 
				prevDate.getMonth() !== curDate.getMonth() ||
				prevDate.getDay() !== curDate.getDay())
				showTimestamp = true	
		}

		if (next) 
		{
			let nextMoment = moment(next.timestamp);
			let nextDuration = moment.duration(nextMoment.diff(currentMoment))
			nextBySameAuthor = next.authorId === current.authorId

			if (nextBySameAuthor && nextDuration.as('hours') < 1)
				isEnd = false	
		}

		if (showTimestamp)
		{
			const timestamp = getChatDate(current.createdAt)
			tempMessages.push(<ChatTimestamp key={timestamp}>{ timestamp }</ChatTimestamp>)
		}

		tempMessages.push(
			<Message key={i} isMine={isMine} isStart={isStart} isEnd={isEnd} data={current}/>
		);
		
		i += 1;
	}

	return tempMessages;
}

const Chat = observer(() =>
{
	const currentChat = chats.current
	const companion = currentChat?.user

	const ref = React.useRef();

	React.useEffect( () => { scrollToBottom() }, [ chats.current ])

	const scrollToBottom = () => 
	{
		ref.current?.scrollIntoView({ behavior: 'smooth' })
	}

	const onServerResponse = (res) => 
	{
		console.log('[debug]', 'Chat::onServerResponse res:', res)
		
		if (res.status === 200)
		{
			switch (res.event)
			{
				case 'MessageToUser': 
					chats.addMessageToChat(res.data.chat, res.data.message);
					break;
				case 'NewChat':
					const newChat = chats.addChat(res.data.chat)
					chats.setCurrent(newChat);
					break;
				default:
					console.log('unexpected event:', res.event);
					break;
			}
		}
	}

	const onSendClick = (message, to) =>
	{
		console.log('[debug', 'Chat::onSendClick message:', message, 'to:', toJS(to))
		socket.emit("message", { 
			event: "MessageFromUser",
			data: { 
				from: user.user,
				to: to,
				message: message
			}}, onServerResponse)
	}
	
	return(
		currentChat.id ? 
			<Stack sx={{bgcolor: 'background.main', height: '100vh', maxHeight: '100vh'}}>
				
				<ChatHeader user={companion}/>
			
				<Box sx={{margin: 0, padding: 0, overflow: 'auto', 
					height: 'calc(100vh - 100px)', maxHeight: 'calc(100vh - 100px)'}}>
					<Stack sx={{margin: 0, padding: '10px 15px'}}>
						{ renderMessages( chats.messages ) }
						<div ref={ref} />
					</Stack>
				</Box>

				{
					(companion !== undefined) &&
					<MessageInput onSendClick={onSendClick} to={companion} />
				}
				
			</Stack>
		: 
			<ChatStub />

	);
})

export default Chat
