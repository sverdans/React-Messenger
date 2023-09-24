import React from 'react'
import { 
	Box,
	Stack,
	Input,
	IconButton,
	InputLabel,
	InputAdornment,
	FormControl,
	Typography,
	TextField,
	Link,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

import { LoadingButton } from '@mui/lab'
import { useNavigate } from 'react-router-dom'

import { user } from 'store'
import socket from 'api'

const SignUp = () => 
{
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = React.useState(false)
	const [loadingButton, setLoadingButton] = React.useState(false)

	const [name, setName] = React.useState('')
	const [login, setLogin] = React.useState('')
	const [email, setEmail] = React.useState('')
	const [surname, setSurname] = React.useState('')
	const [password, setPassword] = React.useState('')

	const onServerResponse = (res) => 
	{
		console.log('[debug]', 'server response', res)
				
		if (res.status === 200)
		{
			user.auth(res.data.jwt)
			setLoadingButton(false)
			navigate("/messenger")
		}
		else if (res.status === 400)
		{
			alert("В поле " + res.id + " ошибка: " + res.info)
			setLoadingButton(false)
		}
		else
		{
			alert("server internal error: " + res.info)
		}
	}

	const onSubmitClick = () => 
	{
		setLoadingButton(true)
		socket.emit("message", { 
			event: "SignUp",
			data: { email, login, name, surname, password }},
			onServerResponse
		)
	}

	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (event) => { event.preventDefault() };

	return (
		<Box height={'100vh'} width={'100vw'} display={'flex'} alignItems={'center'} justifyContent={'center'} bgcolor="background.alternate">
			<Stack sx={{height: "100%", width: "270px"}} justifyContent={'center'}>
				<Typography variant="h5" color="text.primary" fontWeight="bold">
					Sign Up
				</Typography>

				<TextField
					label="Email" 
					variant="standard"
					style={{ marginTop: 10 }} 
					value={email} 
					onChange={e => setEmail(e.target.value)}/>
				
				<TextField 
					label="Login" 
					variant="standard" 
					style={{ marginTop: 20 }}
					value={login} 
					onChange={e => setLogin(e.target.value)}/>

				<TextField 
					label="Name"
					variant="standard"
					style={{ marginTop: 20 }}
					value={name} 
					onChange={e => setName(e.target.value)}/>

				<TextField 
					label="Surname"
					variant="standard"
					style={{ marginTop: 20 }} 
					value={surname} 
					onChange={e => setSurname(e.target.value)}/>

				<FormControl variant="standard" style={{ marginTop: 20 }}>
					<InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
					
					<Input
						type={showPassword ? 'text' : 'password'}
						endAdornment=
						{
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}>
									{
										showPassword 
										? <VisibilityOff style={{ fontSize: 18 }}/> 
										: <Visibility style={{ fontSize: 18 }} />
									}
								</IconButton>
							</InputAdornment>

						}
						value={password}
						onChange={e => setPassword(e.target.value)}/>
				</FormControl>

				<LoadingButton 
					sx={{marginTop: '20px', textTransform: 'none', fontWeight: 'bold'}}
					loading={loadingButton} 
					variant="contained" 
					onClick={onSubmitClick}>
						Next
				</LoadingButton>

				<Link href="/signin" style={{ fontSize: 14, textAlign: 'center', marginTop: 40 }}>
					Already a user? Sign in
				</Link>
			</Stack>
		</Box>
	);
}

export default SignUp
