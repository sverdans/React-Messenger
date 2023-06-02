import React from 'react'
import { FormControl, Input, InputAdornment, Stack, Box, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import { Message, MessageInput } from 'components/common'

import moment from 'moment'

const MY_USER_ID = 'apple'

const renderMessages = (messages) => 
{
	let i = 0;
	let messageCount = messages.length;
	let tempMessages = [];

	while (i < messageCount)
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
			const friendlyTimestamp = moment(current.timestamp).format('LLLL');

			tempMessages.push(
				<Box sx={{width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '8px'}}>
					<Button sx={{backgroundColor: 'background.alternate',
						borderRadius: '20px',
						padding: '5px 10px',
						color: 'text.primary',
						fontWeight: 'bold',
						textTransform: 'none'}}>
						{ friendlyTimestamp }
					</Button>
				</Box>
		)}

		tempMessages.push(
			<Message key={i} isMine={isMine} isStart={isStart} isEnd={isEnd} data={current}/>
		);
		
		i += 1;
	}

	return tempMessages;
}

const Chat = () =>
{
	const [messages, setMessages] = React.useState([])

	React.useEffect(() => { getMessages(); }, [])

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
		<Stack sx={{bgcolor: 'background.main', height: '100vh', maxHeight: '100vh'}}>
			
			<Box height={50} display={'flex'} alignItems={'center'} sx={{bgcolor: 'background.alternate'}}>
				<FormControl fullWidth sx={{bgcolor: 'background.secondary', margin: '0 10px', padding: '0 10px', borderRadius: '5px'}}>
					<Input placeholder='Search' disableUnderline startAdornment={
						<InputAdornment position="start">
							<SearchIcon sx={{color: "text.secondary"}} />
						</InputAdornment>}/>
				</FormControl>
			</Box>
		
			<Box m={0} p={0} height={'calc(100vh - 100px)'} maxHeight={'calc(100vh - 100px)'} overflow={'auto'}>
				<Stack sx={{margin: 0, padding: '10px 15px'}}>
					{renderMessages(messages)}
				</Stack>
			</Box>

			<MessageInput />

		</Stack>
	);
}

export default Chat
