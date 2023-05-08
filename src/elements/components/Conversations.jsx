import React, { useState, useEffect } from 'react';
import { ConversationListItem } from './index';
import axios from 'axios';

const Conversations = (props) => 
{
	const [conversations, setConversations] = useState([]);
	useEffect(() => { getConversations() },[])

	const getConversations = () => 
	{
		axios.get('https://randomuser.me/api/?results=20').then(response => {
			let newConversations = response.data.results.map(result => {
			return {
				photo: result.picture.large,
				name: `${result.name.first} ${result.name.last}`,
				text: 'Hello world! This is a long message that needs to be truncated.'
			};
			});
			setConversations([...conversations, ...newConversations])
		});
	}

	return (
		<div className="conversation-list-wrapper">
			
			<div className="header">
				<input type="search" className="search-input" placeholder="Search"/>
			</div>

			<div className="conversation-list scrollable">
				{
					conversations.map(conversation =>
						<ConversationListItem
						key={conversation.name}
						data={conversation}
						/>
					)
				}
			</div>
		</div>
	);
}

export default Conversations