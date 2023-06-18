import React from 'react'
import { FormControl, Input, InputAdornment, Typography, Stack } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const ChatHeader = ({user}) => 
{
	const fullName = user ? user.name + ' ' + user.surname : 'DELETED'

	return (
        <Stack sx={{height: 50, padding: '0px 10px', bgcolor: 'background.alternate', flexDirection: 'row', alignItems: 'center'}} >

            <Typography color="text.primary" textAlign={'left'} textTransform={'none'} fontWeight={'bold'}>
				{ fullName }
			</Typography>

            <FormControl sx={{bgcolor: 'background.secondary', margin: '0 10px 0 auto', padding: '0 10px', borderRadius: '5px'}}>
                <Input placeholder='Search' disableUnderline startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon sx={{color: "text.secondary"}} />
                    </InputAdornment>}/>
            </FormControl>

        </Stack>
	);
}

export default ChatHeader
