import React from 'react';
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
} from '@mui/material';
import { Visibility,VisibilityOff }  from '@mui/icons-material'
import { LoadingButton } from '@mui/lab';
import { useNavigate } from "react-router-dom";

import user from '../../store/User';

const SignUp = () => 
{
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = React.useState(false)
	const [loadingButton, setLoadingButton] = React.useState(false)

	const onSubmitClick = async () => 
	{
		setLoadingButton(true)

		
		navigate("/messenger")
		setLoadingButton(false)
	}

	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (event) => { event.preventDefault() };

	return (
		<div className='signin-page'>
			<Container sx={{height: "100%", width: "270px"}}>
				<div className='signin-form'>

					<FormLabel className='signin-label' color='error'>Sign Up</FormLabel>

					<TextField id="standard-basic" label="Email" variant="standard" />
					
					<TextField id="standard-basic" label="Name" variant="standard" style={{ marginTop: 20 }} />

					<TextField id="standard-basic" label="Surname" variant="standard" style={{ marginTop: 20 }} />

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
						/>
					</FormControl>

					<LoadingButton
						loading={loadingButton}
						variant="contained" 
						className="signin-button" 
						onClick={onSubmitClick}
						style={{ marginTop: 20 }}>
						Next
					</LoadingButton>

					<Link href="/signin" style={{ fontSize: 14, textAlign: 'center', marginTop: 40 }}>
						Already a user? Sign in
					</Link>
				</div>
			</Container>
		</div>
		
	);
}

export default SignUp
