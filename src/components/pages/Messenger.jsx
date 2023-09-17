import React from 'react'
import { Conversations, Chat, Sidebar } from 'components/common'
import { Stack, Box } from '@mui/material'

const Messenger = () => 
{
	return (
		<Stack sx={{flexDirection: 'row', margin: 0, padding: 0, spacing: 0,
			width: '100%', height: '100%', maxHeight: '100%'}}>
			<Box sx={{ margin: 0, padding: 0 }}>
				<Sidebar />
			</Box>

			<Box sx={{ margin: 0, padding: 0 }}>
				<Conversations />
			</Box>

			<Box sx={{ margin: 0, padding: 0, width: '100%' }}>
				<Chat />
			</Box>
		</Stack>
	);
}

export default Messenger