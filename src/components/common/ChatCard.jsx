import React from 'react';
import { UserAvatar } from 'components/common';

const CharCard = ({user}) => 
{
	const text = "Hello world!"

	console.log(user);
	const fullName = user.name + ' ' + user.surname

	return (
	<div className="conversation-list-item">
		<div className="conversation-list-item-inner">

			<UserAvatar user={user} size={50} />
			
			<div className="conversation-info">
				<h1 className="conversation-title">{ fullName }</h1>
				<p className="conversation-snippet">{ text }</p>
			</div>
		</div>
	</div>
	);
}

export default CharCard