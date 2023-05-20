import React, {useEffect} from 'react';
import { Avatar, Badge } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': 
    {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        bottom: 5,
        right: 5,
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
	return {
		sx: { bgcolor: stringToColor(name) },
		children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
	};
}

const ContactCard = ({user}) => 
{
	console.log(user);
	const fullName = user.name + ' ' + user.surname

	return (
	<div className="contact-card">
		<div className="contact-card-inner">
            {
                user.online ?
                <StyledBadge verlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
                    <Avatar sx={{ width: 50, height: 50 }} src={user.image} {...stringAvatar(fullName)}/>
                </StyledBadge>

                : <Avatar sx={{ width: 50, height: 50 }} src={user.image} {...stringAvatar(fullName)}/>
            }
            
			<div className="contact-card-info">{ fullName }</div>
		</div>
	</div>
	);
}

export default ContactCard