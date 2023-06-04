import React from 'react'
import { FormControl, Input, InputAdornment, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const ChatHeader = ({user}) => 
{
	return (
        <Box height={50} display={'flex'} alignItems={'center'} sx={{bgcolor: 'background.alternate'}}>
            <FormControl fullWidth sx={{bgcolor: 'background.secondary', margin: '0 10px', padding: '0 10px', borderRadius: '5px'}}>
                <Input placeholder='Search' disableUnderline startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon sx={{color: "text.secondary"}} />
                    </InputAdornment>}/>
            </FormControl>
        </Box>
	);
}

export default ChatHeader
