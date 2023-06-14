import React from 'react'
import { styled } from '@mui/material/styles'
import { Button, Stack, Typography, Avatar, Badge, Box, IconButton } from '@mui/material'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'

import { MyModal, MyModalHeader, MyModalFooter, MyModalBody } from 'components/common'
import { stringAvatar } from 'utils'
import { user } from 'store'

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': 
    {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.alternate}`,
        bottom: 6,
        right: 6,
    }
}))


const ProfileModal = ({open, setOpen}) =>
{
    const fullName = user.user.name + ' ' + user.user.surname

	return (
        <MyModal open={open} setOpen={setOpen}>

            <MyModalHeader>
                <Typography color="text.primary" fontWeight="bold" sx={{alignSelf: 'center'}}>
                    Profile
                </Typography> 
            </MyModalHeader>

            <MyModalBody>
                <Stack sx={{margin: '0', padding: '10px 0', width: '100%', gap: '10px'}}>

                    <Box sx={{margin: '0', padding: '0', width: '100%', display: 'flex', justifyContent: 'center'}}>
                        <Badge anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            overlap="circular"
                            badgeContent=
                            {
                                <IconButton component="label"> 
                                    <input type="file" hidden />
                                    <PhotoCameraIcon />
                                </IconButton>
                            }
                        >
                            <Avatar src={user.user.image} {...stringAvatar(fullName, 100)}/>
                        </Badge>
                    </Box>

                    
                </Stack>
            </MyModalBody>

            <MyModalFooter>
                <Button sx={{ fontWeight: 'bold', marginLeft: 'auto'}} 
                    onClick={() => { setOpen(false) }}>
                    Close
                </Button>
            </MyModalFooter>

        </MyModal>
	);
}

export default ProfileModal
