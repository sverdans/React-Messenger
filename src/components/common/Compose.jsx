import React from 'react'
import { FormControl, Input, IconButton, Box } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import AttachFileIcon from '@mui/icons-material/AttachFile'

const Compose = () =>
{
	const onSendClick = () => { }
	const onAttachClick = () => { }

	return (
		<Box height={50} display={'flex'} justifyContent={'center'} alignItems={'center'} gap={20}>
			<IconButton>
				<AttachFileIcon />
			</IconButton>

			<FormControl fullWidth m={0} p={0} variant="standard">
				<Input placeholder='Write a message...' disableUnderline />
			</FormControl>

			<IconButton>
				<SendIcon />
			</IconButton>
		</Box>
	);
}

export default Compose
