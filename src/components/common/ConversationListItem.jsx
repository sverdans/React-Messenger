import React, {useEffect} from 'react';
import { Avatar } from '@mui/material';


const stringToColor = (string) => 
{
	let hash = 0;
	let i;
  
	for (i = 0; i < string.length; i += 1) 
	  	hash = string.charCodeAt(i) + ((hash << 5) - hash);
  
	let color = '#';
  
	for (i = 0; i < 3; i += 1) 
	{
		const value = (hash >> (i * 8)) & 0xff;
		color += `00${value.toString(16)}`.slice(-2);
	}
  
	return color;
  }

  
const stringAvatar = (name) => 
{
	return {
		sx: { bgcolor: stringToColor(name) },
		children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
	};
}

const ConversationListItem = ({user}) => 
{
	const text = "Hello world!"

	console.log(user);
	const fullName = user.name + ' ' + user.surname

	return (
	<div className="conversation-list-item">
		<div className="conversation-list-item-inner">
			<Avatar sx={{ width: 50, height: 50 }} src={user.image} {...stringAvatar(fullName)}/>
			
			<div className="conversation-info">
				<h1 className="conversation-title">{ fullName }</h1>
				<p className="conversation-snippet">{ text }</p>
			</div>
		</div>
	</div>
	);
}

export default ConversationListItem