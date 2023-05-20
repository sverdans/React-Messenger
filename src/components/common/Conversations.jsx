import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite'
import { ConversationListItem } from './index';

import user from '../../store/User'
import contacts from '../../store/Contacts'

const Conversations =  observer( () => 
{
	console.log(contacts.users)

	const users =  Object.entries(contacts.users).map(user => ({
		id: user[1].id,
		name: user[1].name,
		surname: user[1].surname,
		image: user[1].image,
		online: user[1].online
	}))

	return (
		<div className="conversation-list-wrapper">
			
			<div className="header">
				<input type="search" className="search-input" placeholder="Search"/>
			</div>

			<div className="conversation-list scrollable">
				{
					users.map(contact =>
						user.user.id !== contact.id &&
						<ConversationListItem
							key={contact.id}
							user={contact}
						/>
					)
				}
			</div>
		</div>
	);
})

export default Conversations