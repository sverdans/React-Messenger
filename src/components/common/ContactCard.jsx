import React from 'react'
import { Button, Typography } from '@mui/material'

import { UserAvatar } from 'components/common'

const ContactCard = ({user, onClick}) => 
{
	const fullName = user.name + ' ' + user.surname
	
	return (
		<Button sx={{borderRadius: 0, height: 60, gap:'10px', padding: '0 10px', margin: 0, justifyContent: 'left'}} 
			onClick={onClick}>
			<UserAvatar user={user} size={50} />
			<Typography color="text.primary" textAlign={'left'} textTransform={'none'} fontWeight={'bold'}>
				{ fullName }
			</Typography>
		</Button>
	);
}

export default ContactCard
