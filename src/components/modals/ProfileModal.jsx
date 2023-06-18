import React from 'react'
import { Button, Stack, Typography, Avatar, Badge, Box, TextField } from '@mui/material'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'

import { MyModal, MyModalHeader, MyModalFooter, MyModalBody } from 'components/common'
import { stringAvatar } from 'utils'
import { user } from 'store'
import socket from 'api'

const ProfileModal = ({open, setOpen}) =>
{
    const fullname = user.user.name + ' ' + user.user.surname

    const [file, setFile] = React.useState(null)
	const [name, setName] = React.useState(user.user?.name)
	const [surname, setSurname] = React.useState(user.user?.surname)
    const [profileImage, setProfileImage] = React.useState(user.user?.image)

    const isSaveButtonDisable = () => {
        if (name !== user.user.name ||
            surname !== user.user.surname || 
            profileImage !== user.user.image)
            return false
        return true
    }

    const onServerResponse = (res) => 
	{
		console.log('[debug]', 'ProfileModal server response', res)
				
		if (res.status === 200)
		{
			user.auth(res.data.jwt)
		}
		else if (res.status === 400)
		{
			alert("В поле " + res.id + " ошибка: " + res.info)
		}
		else
		{
			alert("server internal error: " + res.info)
		}
	}

	const onSaveButtonClick = () => 
	{
		socket.emit('upload', file, 
            { 
                event: 'UpdateProfile',
                data: { name, surname, user: user.user }
            },
			onServerResponse
		)
	}

    const onDeleteButtonClick = () => 
    {
        socket.emit('message', 
            { 
                event: 'UpdateProfile',
                data: { user: user.user }
            },
			onServerResponse
		)
    }

	return (
        <MyModal open={open} setOpen={setOpen}>

            <MyModalHeader>
                <Typography color="text.primary" fontWeight="bold" sx={{alignSelf: 'center'}}>
                    Profile
                </Typography> 
            </MyModalHeader>

            <MyModalBody>
                <Stack sx={{margin: '0 auto', padding: '10px 0',  width: "310px", gap: '5px', justifyContent: 'center'}}>

                    <Box sx={{margin: '20px 0 0 0', padding: '0', width: '100%', display: 'flex', justifyContent: 'center'}}>
                        <Badge anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} overlap="circular"
                            badgeContent=
                            {
                                <Button component="label" variant="contained"
                                    sx={{minWidth: '30px', minHeight: '30px', width: '30px', height: '30px', borderRadius: '50%'}}> 
                                    <input type="file" hidden onChange={(event) => 
                                        {
                                            setProfileImage(URL.createObjectURL(event.target.files[0]))
                                            setFile(event.target.files[0])
                                        }} />
                                    <PhotoCameraIcon fontSize='small' />
                                </Button>
                            }>
                            <Avatar src={profileImage} {...stringAvatar(fullname, 100)}/>
                        </Badge>
                    </Box>

                    <Typography color="text.primary" fontWeight="bold" sx={{alignSelf: 'center'}}>
                        { fullname } 
                    </Typography> 

                    <Typography color="primary" sx={{alignSelf: 'center'}}>
                        online 
                    </Typography> 

                    <TextField 
                        label="Name"
                        variant="standard"
                        style={{ marginTop: 20 }}
                        value={name} 
                        onChange={e => setName(e.target.value)}/>

                    <TextField 
                        label="Surname"
                        variant="standard"
                        sx={{ marginTop: '20px', marginBottom: '20px' }} 
                        value={surname} 
                        onChange={e => setSurname(e.target.value)}/>
                    
                </Stack>
            </MyModalBody>

            <MyModalFooter>
                <Button color='error' sx={{ fontWeight: 'bold'}}
                    onClick={() => { setOpen(false) }}>
                    Delete account
                </Button>

                <Button disabled={isSaveButtonDisable()}
                    color='success' sx={{ fontWeight: 'bold', marginLeft: 'auto'}}
                    onClick={() => { onSaveButtonClick() }}>
                    Save
                </Button>

                <Button sx={{ fontWeight: 'bold', marginLeft: 'auto'}}
                    onClick={() => { setOpen(false) }}>
                    Close
                </Button>
            </MyModalFooter>

        </MyModal>
	);
}

export default ProfileModal
