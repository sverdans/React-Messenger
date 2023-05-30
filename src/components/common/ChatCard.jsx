import React from 'react'
import { Button } from '@mui/material'
import { UserAvatar } from 'components/common'

const CharCard = ({user}) => 
{
	const text = "Hello world!"

	console.log(user);
	const fullName = user.name + ' ' + user.surname

	return (
		<Button m={0} p={0} sx={{borderRadius: 0}} className="chat-card" color="info">
			<div className="chat-card-inner">
				<UserAvatar user={user} size={50} />
				<div className="conversation-info">
					<h1 className="conversation-title">{ fullName }</h1>
					<p className="conversation-snippet">{ text }</p>
				</div>
			</div>
		</Button>
	);
}

export default CharCard