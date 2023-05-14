import React from 'react'
import { 
	Container,
	Button,
	IconButton,
	Input,
	InputLabel,
	InputAdornment,
	FormControl,
	FormLabel,
	TextField,
	Link,
} from '@mui/material'
import { Visibility,VisibilityOff }  from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { useNavigate } from "react-router-dom"

import user from '../../store/User'
import socket from '../../api'

const SignIn = () => 
{
	const navigate = useNavigate();

	const [showPassword, setShowPassword] = React.useState(false)
	const [loadingButton, setLoadingButton] = React.useState(false)

	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')

	const onSubmitClick = async () => 
	{
		function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)) }

		setLoadingButton(true)
		await sleep(1000)

		socket.emit("message", { 
			event: "signin",
			data: { email, password }
		})
		navigate("/messenger")
		setLoadingButton(false)
	}

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => 
	{
    	event.preventDefault();
	};

	return (
		<div className='signin-page'>
			<Container sx={{height: "100%", width: "270px"}}>
				<div className='signin-form'>

					<FormLabel className='signin-label' color='error'>Sign In</FormLabel>

					<TextField 
						id="standard-basic" 
						label="Email" 
						variant="standard" 
						value={email} 
						onChange={e => setEmail(e.target.value)}/>
					
					<FormControl variant="standard" style={{ marginTop: 20 }}>
						<InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
						
						<Input
							id="standard-adornment-password"
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

					<LoadingButton loading={loadingButton}
						variant="contained"
						style={{ marginTop: 20 }}
						className="signin-button"
						onClick={onSubmitClick}>
						Next
					</LoadingButton>

					<Link href="/signup" style={{ fontSize: 14, textAlign: 'center', marginTop: 40 }}>
						Not a user? Sign up
					</Link>
				</div>
			</Container>
		</div>
		
	);
}

export default SignIn