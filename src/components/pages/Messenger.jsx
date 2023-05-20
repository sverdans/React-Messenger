import React from 'react'
import { observer } from 'mobx-react-lite'
import { Conversations, Chat, Sidebar } from '../common';


const Messenger = observer( () => 
{
	return (
	<div className="messenger">
		<Sidebar />
		<Conversations />
		<Chat />
	</div>
	);
})

export default Messenger