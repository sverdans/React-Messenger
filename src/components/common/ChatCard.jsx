import React from 'react'
import { observer } from 'mobx-react-lite'
import { Button, Box, Typography } from '@mui/material'

import { UserAvatar } from 'components/common'
import { chats, contacts } from 'store'


const CharCard = observer(({chat}) => 
{
	console.log('[debug]', 'CharCard({chat}) chat:', chat);

	const text = chat.Messages[chat.Messages.length - 1].text

	console.log('[debug]', 'CharCard({chat}) last message:', text)

	const fullName = chat.user.name + ' ' + chat.user.surname
	const user = contacts.users[chat.user.id]
	const isActive = chats.current?.user?.id === chat.user.id 

	const onButtonClick = (user) =>
    {
		console.log('[debug]', 'CharCard::onButtonClick', user)
		chats.setCurrent(chats.getChatWithUser(chat.user.id))
    }

	return (
		<Button variant={isActive ? "contained" : "text"}
			sx={{borderRadius: 0, height: 60, gap:'10px', padding: '0 10px', margin: 0, justifyContent: 'left'}}
			onClick={() => { onButtonClick(chat.user) }}>
			<UserAvatar user={user} size={50} />
			
			<Box display={'flex'} flexDirection={'column'}>
				<Typography color="text.primary" textAlign={'left'} textTransform={'none'} fontWeight={'bold'}>
					{ fullName }
				</Typography>

				<Typography color="text.secondary" textAlign={'left'} textTransform={'none'}>
					{
						text
					}
				</Typography>
			</Box>
		</Button>
	);
})

export default CharCard
