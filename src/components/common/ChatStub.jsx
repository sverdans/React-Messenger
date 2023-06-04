import React from 'react'
import { Box, Typography } from '@mui/material'

const ChatStub = () => 
{
	return (
        <Box sx={{bgcolor: 'background.main', height: '100vh', maxHeight: '100vh', 
            display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Typography sx={{backgroundColor: 'background.alternate',
                borderRadius: '20px',
                padding: '5px 10px',
                color: 'text.primary',
                fontWeight: 'bold',
                textTransform: 'none',
                userSelect: 'none'}}>
                Select a chat to start messaging
            </Typography>
        </Box>
	);
}

export default ChatStub
