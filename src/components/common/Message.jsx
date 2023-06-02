import React from 'react'
import { Box, Typography } from '@mui/material'


const Message = ({data, isMine, isStart, isEnd}) => 
{
	const myMessageStyle = 
	{
		backgroundColor: 'messageBg.primary',
	}
	
	const otherMessageStyle = 
	{
		backgroundColor: 'messageBg.secondary',
	}

	const myBubbleStyle =
	{
		justifyContent: 'end',
	} 

	const otherBubbleStyle = 
	{
		justifyContent: 'start',
	}

	const bubbleStyle = 
	{
		marginBottom: (isEnd ? '8px' : '2px'),
		display: 'flex',
		...(isMine ? myBubbleStyle : otherBubbleStyle)
	}

	const messageStyle = {
		display: 'flex',
		color: 'text.primary',
		maxWidth: '75%',
		padding: '10px 15px',
		borderRadius: '20px',
		...(isMine ? myMessageStyle : otherMessageStyle)
	}

	return (
		<Box sx={{...bubbleStyle}}>
			<Box className="bubble" sx={{...messageStyle}}>
				{ data.message }
			</Box>
		</Box>
	);
}

export default Message