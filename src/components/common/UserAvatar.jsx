import React from 'react'
import { Avatar, Badge } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': 
    {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.alternate}`,
        bottom: 6,
        right: 6,
    }
}))

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
	const words = name.split(' ')
	
	let text;
	if (words[1] !== '')
		text = `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
	else
		text = `${name.split(' ')[0][0]}`

	return {
		sx: { bgcolor: stringToColor(name), color: 'text.primary', fontWeight: 'bold' },
		children: text,
	};
}

const UserAvatar = ({ user, size }) => 
{
	const fullName = user.name + ' ' + user.surname

	return (
		user.online ?
		<StyledBadge verlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
			<Avatar sx={{ width: size, height: size }} src={user.image} {...stringAvatar(fullName)}/>
		</StyledBadge>
		: <Avatar sx={{ width: size, height: size }} src={user.image} {...stringAvatar(fullName)}/>
	);
}

export default UserAvatar