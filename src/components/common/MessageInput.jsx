import React from 'react'
import { FormControl, Input, IconButton, Box } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import AttachFileIcon from '@mui/icons-material/AttachFile'

const MessageInput = ({onSendClick, to}) =>
{
	const [message, setMessage] = React.useState("")

	return (
		<Box sx={{height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', 
			gap: '10px', bgcolor: 'background.alternate', padding: '0 10px'}} >
			<IconButton>
				<AttachFileIcon sx={{color: "text.secondary"}} />
			</IconButton>

			<FormControl fullWidth m={0} p={0} variant="standard">
				<Input disableUnderline placeholder='Write a message...'
					value={message} onChange={e => setMessage(e.target.value)}/>
			</FormControl>

			<IconButton onClick={ () => { onSendClick(message, to); setMessage("") } }>
				<SendIcon sx={{color: "text.secondary"}} />
			</IconButton>
		</Box>
	);
}

export default MessageInput
