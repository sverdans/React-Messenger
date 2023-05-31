import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Typography, Button, Box, Stack, Divider } from '@mui/material'

const Error = () => 
{
	const navigate = useNavigate();

	return (
		<Box height={'100vh'} width={'100vw'} display={'flex'} alignItems={'center'} justifyContent={'center'} bgcolor="background.alternate">
			<Stack sx={{height: "100%", width: "270px"}} spacing={2} justifyContent={'center'}>
				<Stack flexDirection={'row'} alignItems={'center'} justifyContent={'center'} gap={2}>
					<Typography variant="h5" color="text.primary" fontWeight="bold" textAlign={'center'}>
						404
					</Typography>
					
					<Divider bgcolor="text.primary" orientation="vertical" />
					
					<Typography color="text.primary" textAlign={'center'}>
						Not found
					</Typography>
				</Stack>
				
				<Button fontWeight="bold" onClick={() => navigate(-1)}>Return</Button>
			</Stack>
		</Box>
	);
}

export default Error