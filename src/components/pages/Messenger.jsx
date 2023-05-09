import React from 'react';
import { Conversations, Chat, Sidebar } from '../common';

const Messenger = () => 
{
	return (
	<div className="messenger">
		<Sidebar />
		<Conversations />
		<Chat />
	</div>
	);
}

export default Messenger