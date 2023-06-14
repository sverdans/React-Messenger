import React from 'react'
import { Avatar, Badge } from '@mui/material'
import { styled } from '@mui/material/styles'

import { stringAvatar } from 'utils'

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

const UserAvatar = ({ user, size }) => 
{
	if (!user)
		return (<></>)
		
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