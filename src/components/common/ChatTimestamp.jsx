import React from 'react'
import { Box, Button } from '@mui/material'

const ChatTimestamp = ({children}) => 
{
	return (
        <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '8px'}}>
            <Button sx={{backgroundColor: 'background.alternate',
                borderRadius: '20px',
                padding: '5px 10px',
                color: 'text.primary',
                fontWeight: 'bold',
                textTransform: 'none'}}>
                { children }
            </Button>
        </Box>
	);
}

export default ChatTimestamp
