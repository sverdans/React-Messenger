import React from 'react'
import moment from 'moment'
import { observer } from 'mobx-react-lite'
import { FormControl, Input, InputAdornment, Stack, Box, Button } from '@mui/material'

import { ChatHeader, Message, MessageInput, ChatStub, ChatTimestamp } from 'components/common'
import { chats } from 'store'

const MY_USER_ID = 'apple'

const renderMessages = (messages) => 
{
	let i = 0;
	let tempMessages = [];

	while (i < messages.length)
	{
		let previous = messages[i - 1];
		let current = messages[i];
		let next = messages[i + 1];
		let isMine = current.author === MY_USER_ID;
		let currentMoment = moment(current.timestamp);
		let prevBySameAuthor = false;
		let nextBySameAuthor = false;
		let isStart = true;
		let isEnd = true;
		let showTimestamp = true;

		if (previous) 
		{
			let previousMoment = moment(previous.timestamp);
			let previousDuration = moment.duration(currentMoment.diff(previousMoment));
			prevBySameAuthor = previous.author === current.author;
			
			if (prevBySameAuthor && previousDuration.as('hours') < 1)
				isStart = false;

			if (previousDuration.as('hours') < 1) 
				showTimestamp = false;
		}

		if (next) 
		{
			let nextMoment = moment(next.timestamp);
			let nextDuration = moment.duration(nextMoment.diff(currentMoment));
			nextBySameAuthor = next.author === current.author;

			if (nextBySameAuthor && nextDuration.as('hours') < 1)
				isEnd = false;
			
		}

		if (showTimestamp)
		{
			const timestamp = moment(current.timestamp).format('LLLL');
			tempMessages.push(<ChatTimestamp>{ timestamp }</ChatTimestamp>)
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
	const [messages, setMessages] = React.useState([])

	const currentChat = chats.current

	React.useEffect(() => { getMessages() }, [])

	const getMessages = () => 
	{
		var tempMessages = [
			{
			id: 1,
			author: 'apple',
			message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
			timestamp: new Date().getTime()
			},
			{
			id: 2,
			author: 'orange',
			message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
			timestamp: new Date().getTime()
			},
			{
			id: 3,
			author: 'orange',
			message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
			timestamp: new Date().getTime()
			},
			{
			id: 4,
			author: 'apple',
			message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
			timestamp: new Date().getTime()
			},
			{
			id: 5,
			author: 'apple',
			message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
			timestamp: new Date().getTime()
			},
			{
			id: 6,
			author: 'apple',
			message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
			timestamp: new Date().getTime()
			},
			{
			id: 7,
			author: 'orange',
			message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
			timestamp: new Date().getTime()
			},
			{
			id: 8,
			author: 'orange',
			message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
			timestamp: new Date().getTime()
			},
			{
			id: 9,
			author: 'apple',
			message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
			timestamp: new Date().getTime()
			},
			{
			id: 10,
			author: 'orange',
			message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
			timestamp: new Date().getTime()
			},
		]
		setMessages([...messages, ...tempMessages])
	}

	return(
		currentChat?.user ? 
			<Stack sx={{bgcolor: 'background.main', height: '100vh', maxHeight: '100vh'}}>
				
				<ChatHeader user={currentChat.user}/>
			
				<Box m={0} p={0} height={'calc(100vh - 100px)'} maxHeight={'calc(100vh - 100px)'} overflow={'auto'}>
					<Stack sx={{margin: 0, padding: '10px 15px'}}>
						{ renderMessages(messages) }
					</Stack>
				</Box>

				<MessageInput />

			</Stack>
		: 
			<ChatStub />

	);
})

export default Chat
