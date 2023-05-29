import React from 'react'
import { Conversations, Chat, Sidebar } from 'components/common'
import { Grid, Stack, Box } from '@mui/material';

const Messenger = () => 
{
	const sidebarWidth = 50
	const conversationsWidth = 350

	return (
		<Stack direction={'row'} spacing={0} m={0} p={0} width={'100%'} maxHeight={'100%'}>
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