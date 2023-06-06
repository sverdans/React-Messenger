import React from 'react'
import moment from 'moment'
import { observer } from 'mobx-react-lite'
import { FormControl, Input, InputAdornment, Stack, Box, Button } from '@mui/material'

import { ChatHeader, Message, MessageInput, ChatStub, ChatTimestamp } from 'components/common'
import { chats, user } from 'store'
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
		
		let isMine = current.authorId === user.user?.id
		let currentMoment = moment(current.timestamp)

		let prevBySameAuthor = false
		let nextBySameAuthor = false
		let isStart = true
		let isEnd = true
		let showTimestamp = true

		if (previous)
		{
			let previousMoment = moment(previous.timestamp)
			let previousDuration = moment.duration(currentMoment.diff(previousMoment))
			prevBySameAuthor = previous.authorId === current.authorId
			
			if (prevBySameAuthor && previousDuration.as('hours') < 1)
				isStart = false

			if (previousDuration.as('hours') < 1) 
				showTimestamp = false
		}

		if (next) 
		{
			let nextMoment = moment(next.timestamp);
			let nextDuration = moment.duration(nextMoment.diff(currentMoment))
			nextBySameAuthor = next.author === current.author

			if (nextBySameAuthor && nextDuration.as('hours') < 1)
				isEnd = false
			
		}

		if (showTimestamp)
		{
			const timestamp = moment(current.timestamp).format('LLLL');
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
	
	const [message, setMessage] = React.useState("")

	const onSendClick = (message) =>
	{
		console.log('[debug', 'Chat::onSendClick', message)
		socket.emit("message", { 
			event: "messageSend",
			data: { 
				from: { ...user.user },
				to: { ...currentChat.user },
				message: message
		}})
	}
	
	return(
		currentChat?.user ? 
			<Stack sx={{bgcolor: 'background.main', height: '100vh', maxHeight: '100vh'}}>
				
				<ChatHeader user={currentChat.user}/>
			
				<Box m={0} p={0} height={'calc(100vh - 100px)'} maxHeight={'calc(100vh - 100px)'} overflow={'auto'}>
					<Stack sx={{margin: 0, padding: '10px 15px'}}>
						{ renderMessages(currentChat.messages) }
					</Stack>
				</Box>

				<MessageInput message={message} 
					setMessage={setMessage}
					onSendClick={ () => {onSendClick(message)} }/>

			</Stack>
		: 
			<ChatStub />

	);
})

export default Chat
