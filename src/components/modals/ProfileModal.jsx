import React from 'react'
import { observer } from 'mobx-react-lite'
import { Button, Stack, Typography, Avatar, Badge, Box, TextField } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'

import { MyModal, MyModalHeader, MyModalFooter, MyModalBody } from 'components/common'
import { stringAvatar } from 'utils'
import { user } from 'store'
import socket from 'api'

const ProfileModal = observer(({open, setOpen}) =>
{
    const profile = user.user
    const fullname = profile.name + ' ' + profile.surname

    const [file, setFile] = React.useState(null)

	const [name, setName] = React.useState(profile.name)
	const [surname, setSurname] = React.useState(profile.surname)
    const [profileImage, setProfileImage] = React.useState(profile.image)

    React.useEffect( () => { 
        console.log('ProfileModal::useEffect')
        setName(profile.name)
        setSurname(profile.surname)
        setProfileImage(profile.image)
     }, [ profile ])


	const [loadingButton, setLoadingButton] = React.useState(false) // for save

    const isSaveButtonDisable = () => {
        if (name !== profile.name ||
            surname !== profile.surname || 
            profileImage !== profile.image)
            return false
        return true
    }

    const onServerResponse = (res) => 
	{
		console.log('[debug]', 'ProfileModal server response', res)
		setLoadingButton(false)
		
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
		setLoadingButton(true)
		socket.emit('upload', file, 
            { 
                event: 'UpdateProfile',
                data: { name, surname, user: profile }
            },
			onServerResponse
		)
	}

    const onDeleteButtonClick = () => 
    {
        socket.emit('message', 
            { 
                event: 'UpdateProfile',
                data: { user: profile }
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

                <LoadingButton disabled={isSaveButtonDisable()}
                    loading={loadingButton}
                    color='success' sx={{ fontWeight: 'bold', marginLeft: 'auto'}}
                    onClick={() => { onSaveButtonClick() }}>
                    Save
                </LoadingButton>

                <Button sx={{ fontWeight: 'bold', marginLeft: 'auto'}}
                    onClick={() => { setOpen(false) }}>
                    Close
                </Button>
            </MyModalFooter>

        </MyModal>
	);
})

export default ProfileModal
