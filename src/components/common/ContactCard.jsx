import React, {useEffect} from 'react';
import { UserAvatar } from 'components/common';

const ContactCard = ({user}) => 
{
	console.log(user);
	
	const fullName = user.name + ' ' + user.surname

	return (
	<div className="contact-card">
		<div className="contact-card-inner">
			<UserAvatar size={50} user={user}/>
			<div className="contact-card-info">{ fullName }</div>
		</div>
	</div>
	);
}

export default ContactCard