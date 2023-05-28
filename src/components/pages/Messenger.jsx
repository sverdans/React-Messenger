import React from 'react'
import { Conversations, Chat, Sidebar } from 'components/common'


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