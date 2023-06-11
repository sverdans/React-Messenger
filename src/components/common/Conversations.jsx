import React from 'react'
import { observer } from 'mobx-react-lite'
import { Box, FormControl, Input, InputAdornment, Stack } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import { ChatCard } from 'components/common'
import { user, chats } from 'store'

const Conversations = observer(() => 
{
	return (
		<Box bgcolor="background.alternate"
			sx={{margin: 0, padding: 0, width: '300px', 
				position: 'relative', height: '100vh',
				borderRight: 1, borderColor: 'background.main'}} >
			<Box height={50} display={'flex'} alignItems={'center'}>
				<FormControl fullWidth sx={{bgcolor: 'background.secondary', margin: '0 10px', padding: '0 10px', borderRadius: '5px'}}>
					<Input placeholder='Search' disableUnderline startAdornment={
						<InputAdornment position="start">
							<SearchIcon sx={{color: "text.secondary"}} />
						</InputAdornment>}/>
				</FormControl>
			</Box>

			<Box m={0} p={0} maxHeight={'calc(100vh - 50px)'} overflow={'auto'}>
				<Stack m={0} p={0} width={1}>
					{
						chats.chats.map(chat =>
							user.user.id !== chat.user.id &&
							<ChatCard key={chat.user.id} chat={chat} />)
					}
				</Stack>
			</Box>

		</Box>
	);
})

export default Conversations
