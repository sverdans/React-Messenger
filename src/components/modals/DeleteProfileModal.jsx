import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Typography, Box } from '@mui/material'
import { LoadingButton } from '@mui/lab'

import { MyModal, MyModalFooter } from 'components/common'

import { user, contacts, chats } from 'store'
import socket from 'api'

const DeleteProfileModal = ({ open, setOpen, profile }) =>
{
    const navigate = useNavigate()

    const [loadingDeleteButton, setLoadingDeleteButton] = React.useState(false)

    const onDeleteServerResponse = (res) =>
    {
        console.log('[debug]', 'ProfileModal::onSaveServerResponse', res)
        setLoadingDeleteButton(false)
        
        if (res.status === 200)
        {
            user.Clear()
            chats.Clear()
            contacts.Clear()
            navigate('/signin')
        }
        else
        {
            alert("server internal error: " + res.info)
        }
    }

    const onDeleteButtonClick = () => 
    {
        setLoadingDeleteButton(true)
        socket.emit('message', 
            { 
                event: 'DeleteProfile',
                data: { user: profile }
            },
            onDeleteServerResponse
        )
    }

	return (
        <MyModal open={open} setOpen={setOpen} width={'300px'}>
            <Box sx={{margin: '35px 15px 0px 15px', padding: 0, overflow: 'auto'}}>
                <Typography color="text.primary" sx={{ alignSelf: 'start' }}>
                    Are you sure you want to delete profile?
                </Typography>
            </Box>

            <MyModalFooter divider={false}>
                <Button sx={{ fontWeight: 'bold', marginLeft: 'auto' }} 
                    onClick={() => { setOpen(false) }}>
                    Cancel
                </Button>

                <LoadingButton loading={loadingDeleteButton}
                    color='error' sx={{ fontWeight: 'bold' }}
                    onClick={() => { onDeleteButtonClick() }}>
                    Delete
                </LoadingButton>
            </MyModalFooter>
        </MyModal>
	);
}

export default DeleteProfileModal
