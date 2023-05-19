import React, { useState, useEffect } from 'react';
import { ConversationListItem } from './index';
import axios from 'axios';

import user from '../../store/User'

const Conversations = ({ contacts }) => 
{
	console.log(contacts.users)

	const users =  Object.entries(contacts.users).map(user => ({
		name: user[1].name,
		surname: user[1].surname,
		image: user[1].image,
		id: user[1].id
	}))
	
	console.log(users)

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
}

export default Conversations