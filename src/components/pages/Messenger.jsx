import React from 'react'
import { observer } from 'mobx-react-lite'
import { Conversations, Chat, Sidebar } from '../common';

import contacts from '../../store/Contacts'

const Messenger = observer( () => 
{
	return (
	<div className="messenger">
		<Sidebar />
		<Conversations contacts={contacts}/>
		<Chat />
	</div>
	);
})

export default Messenger