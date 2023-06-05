import React from 'react'
import { Button, Typography } from '@mui/material'

import { UserAvatar } from 'components/common'

import { chats } from 'store'

const ContactCard = ({user, setModalOpen}) => 
{
	const fullName = user.name + ' ' + user.surname
	
	const onButtonClick = () => 
	{
		console.log('[debug]', 'ContactCard::onButtonClick', user)

		chats.setCurrent({
			user: {...user},
			messages: []
		})

		setModalOpen(false)
	}

	return (
		<Button sx={{borderRadius: 0, height: 60, gap:'10px', padding: '0 10px', margin: 0, justifyContent: 'left'}} 
			onClick={() => { onButtonClick() }}>
			<UserAvatar user={user} size={50} />
			<Typography color="text.primary" textAlign={'left'} textTransform={'none'} fontWeight={'bold'}>
				{ fullName }
			</Typography>
		</Button>
	);
}

export default ContactCard
