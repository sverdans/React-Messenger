import React from 'react'
import { Button, Box, Typography } from '@mui/material'
import { UserAvatar } from 'components/common'

const CharCard = ({user}) => 
{
	const text = "Hello world!"

	console.log(user);
	const fullName = user.name + ' ' + user.surname

	return (
		<Button sx={{borderRadius: 0, height: 60, gap:'10px', padding: '0 10px', margin: 0, justifyContent: 'left'}} >
			<UserAvatar user={user} size={50} />
			
			<Box display={'flex'} flexDirection={'column'}>
				<Typography color="text.primary" textAlign={'left'} textTransform={'none'} fontWeight={'bold'}>
					{ fullName }
				</Typography>

				<Typography color="text.secondary" textAlign={'left'} textTransform={'none'}>
					{ text }
				</Typography>
			</Box>
		</Button>
	);
}

export default CharCard