import React from 'react'
import { observer } from 'mobx-react-lite'
import { Routes, Route, Navigate } from 'react-router-dom'

import { useMediaQuery, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Messenger, SignIn, SignUp, Error } from 'components/pages'

import { user } from 'store'

const App = observer(() => 
{
	const theme = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light'
	const muiTheme = createTheme({ 
		palette: {
			mode: theme,
			background: {
				main: '#0e1621',
				alternate: '#17212b',
				secondary: '#242f3d',
			},
			text: {
				primary: '#f5f5f5',
				secondary: '#6a7580'
			},
		/*	
			primary: 
			{
				dark: '#2f70a5',
				main: '#3478ab',
			},
		*/
			messageBg: {
				primary: '#2b5378',
				secondary: '#182533'
			} 
		},
		typography: {
			fontFamily: [
			  '-apple-system',
			  'BlinkMacSystemFont',
			  '"Segoe UI"',
			  'Roboto',
			  '"Helvetica Neue"',
			  'Arial',
			  'sans-serif',
			  '"Apple Color Emoji"',
			  '"Segoe UI Emoji"',
			  '"Segoe UI Symbol"',
			].join(','),
		}
	});

	console.log('[debug]', 'muiTheme.palette: ', muiTheme.palette)
	
	return (
		<ThemeProvider theme={muiTheme}>
			<Box sx={{margin: 0, padding: 0, width: '100vw', height: '100vh'}}>
				<Routes>
					<Route path="/error" element={<Error />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="*" element={<Navigate to="/error" replace />} />

					{
						user.isAuth 
						?
							<>
								<Route path="/messenger" element={<Messenger />} />
								<Route index element={<Navigate to="/messenger" />} />
							</>
						: 
							<Route index element={<Navigate to="/signin" />} />
					}
				</Routes>
			</Box>
		</ThemeProvider>
	);
})

export default App
