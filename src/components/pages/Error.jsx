import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Button } from '@mui/material'

const Error = () => 
{
	const navigate = useNavigate();

	return (
		<div className='error-page'>
			<Container sx={{height: "100%", width: "270px"}}>
				<div className='error-container'>
					<span className='error-title'>404</span>
					<Button onClick={() => navigate(-1)}>Return</Button>
				</div>
			</Container>
		</div>
	);
}

export default Error