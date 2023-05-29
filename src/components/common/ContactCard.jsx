import React from 'react'
import { Button } from '@mui/material'

import { UserAvatar } from 'components/common'

const ContactCard = ({user}) => 
{
	const fullName = user.name + ' ' + user.surname

	return (
		<Button m={0} p={0} borderRadius={0} className="contact-card">
			<div className="contact-card-inner">
				<UserAvatar user={user} size={50} />
				<div className="contact-card-info">{ fullName }</div>
			</div>
		</Button>
	);
}

export default ContactCard