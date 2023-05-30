import React from 'react'
import { observer } from 'mobx-react-lite'
import { Routes, Route, Navigate } from 'react-router-dom'

import { useMediaQuery, Container, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Messenger, SignIn, SignUp, Settings, Error } from 'components/pages'

import user from 'store/User'

const App = observer(() => 
{
	const theme = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light'
	const muiTheme = createTheme({ 
		palette: {
			mode: theme,
			background: {
				main: '#0e1621',
				alternate: '#17212b'
			}
		} 
	});

	console.log(muiTheme.palette)
	return (
		<ThemeProvider theme={muiTheme}>
			<Box m={0} p={0} width={'100vw'} height={'100vh'} >
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
								<Route path="/settings" element={<Settings />} />
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
