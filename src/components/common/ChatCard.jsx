import React from 'react'
import { Button, Box } from '@mui/material'
import { UserAvatar } from 'components/common'

const CharCard = ({user}) => 
{
	const text = "Hello world!"

	console.log(user);
	const fullName = user.name + ' ' + user.surname

	return (
		<Button sx={{borderRadius: 0, height: 60, margin: 0, padding: 0}}>
			<UserAvatar user={user} size={50} />
			<Box display={'flex'} flexDirection={'column'} alignContent={'start'}>
				<span className="conversation-title">{ fullName }</span>
				<span className="conversation-snippet">{ text }</span>
			</Box>
		</Button>
	);
}

export default CharCard