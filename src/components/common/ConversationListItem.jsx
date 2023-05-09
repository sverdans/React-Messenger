import React, {useEffect} from 'react';

const ConversationListItem = (props) => 
{
	const { photo, name, text } = props.data;

	return (
	<div className="conversation-list-item">
		<img className="conversation-photo" src={photo} alt="conversation" />
		<div className="conversation-info">
			<h1 className="conversation-title">{ name }</h1>
			<p className="conversation-snippet">{ text }</p>
		</div>
	</div>
	);
}

export default ConversationListItem