import React from 'react'
import { observer } from 'mobx-react-lite'
import { Button, Box, Typography } from '@mui/material'

import { UserAvatar } from 'components/common'
import { chats, contacts, user } from 'store'
import { getDate } from 'utils'

const CharCard = observer(({chat}) => 
{
	const lastMessage = chat.Messages ? chat.Messages[chat.Messages.length - 1] : undefined

	// console.log('[debug]', 'CharCard({chat}) chat:', chat);
	// console.log('[debug]', 'CharCard({chat}) last message:', text)

	const fullName = chat.user.name + ' ' + chat.user.surname
	const author = contacts.users[chat.user.id]
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
			<UserAvatar user={author} size={50} />
			
			<Box sx={{display: 'flex', flexDirection: 'column', width: '100%'}}>
				<Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
					<Typography color="text.primary" textAlign={'left'} textTransform={'none'} fontWeight={'bold'}>
						{ fullName }
					</Typography>
					
					<Typography color="text.secondary" textAlign={'left'} textTransform={'none'}>
						{ getDate(lastMessage?.createdAt) }
					</Typography>
				</Box>

				<Box sx={{display: 'flex', flexDirection: 'row', gap: '5px'}}>
					{
						lastMessage.authorId === user.user.id 
						? <Typography textTransform={'none'}>You:</Typography>
						: <></>
					}
					<Typography color="text.secondary" textAlign={'left'} textTransform={'none'}>
						{ lastMessage?.text }
					</Typography>
				</Box>
			</Box>
		</Button>
	);
})

export default CharCard
