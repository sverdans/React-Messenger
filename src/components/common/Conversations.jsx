import React from 'react'
import { observer } from 'mobx-react-lite'
import { Box, FormControl, Input, InputAdornment, Stack } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import { ChatCard } from 'components/common'
import user from 'store/User'
import contacts from 'store/Contacts'

const Conversations =  observer( () => 
{
	console.log(contacts.users)

	const users =  Object.entries(contacts.users).map(user => ({
		id: user[1].id,
		name: user[1].name,
		surname: user[1].surname,
		image: user[1].image,
		online: user[1].online
	}))

	return (
		<Box m={0} p={0} width={300} position={'relative'} height={'100vh'} 
		bgcolor="background.alternate" sx={{ borderRight: 1, borderColor: 'background.main' }}>
			<Box height={50} display={'flex'} alignItems={'center'}>
				<FormControl fullWidth sx={{bgcolor: 'background.secondary', margin: '0 10px', padding: '0 10px', borderRadius: '5px'}}>
					<Input placeholder='Search' disableUnderline startAdornment={
						<InputAdornment position="start">
							<SearchIcon sx={{color: "text.secondary"}} />
						</InputAdornment>}/>
				</FormControl>
			</Box>

			<Box m={0} p={0} maxHeight={'calc(100vh - 50px)'} overflow={'auto'}>
				<Stack m={0} p={0} width={1} className='chat-cards-list'>
					{
						users.map(contact =>
							user.user.id !== contact.id &&
							<ChatCard key={contact.id} user={contact} />)
					}
				</Stack>
			</Box>
		</Box>
	);
})

export default Conversations