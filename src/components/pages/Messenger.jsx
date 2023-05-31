import React from 'react'
import { Conversations, Chat, Sidebar } from 'components/common'
import { Stack, Box } from '@mui/material'

const Messenger = () => 
{
	return (
		<Stack direction={'row'} spacing={0} m={0} p={0} width={'100%'} height={'100%'} maxHeight={'100%'}>
			<Box m={0} p={0} >
				<Sidebar />
			</Box>

			<Box m={0} p={0}>
				<Conversations />
			</Box>

			<Box m={0} p={0} width={'100%'}>
				<Chat />
			</Box>
		</Stack>
	);
}

export default Messenger