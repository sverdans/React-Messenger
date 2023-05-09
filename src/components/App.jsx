import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { Messenger, SignIn, SignUp, Settings, Error } from './pages'
import user from '../store/User'

const App = observer( () => 
{
	const theme = 'dark'
	
	console.log(user.user)

	return (
		<div className={"App " + theme}>

			<Routes>

				<Route path="/error" element={<Error />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="*" element={<Navigate to="/error" replace />} />
				
				{
					user.isAuth 
					?
						<>
							<Route index element={<Navigate to="/" />} />
							<Route path="/" element={<Messenger />} />
							<Route path="/settings" element={<Settings />} />
							<Route path="*" element={<Navigate to="/error" replace />} />
						</>
					:
						<Route index element={<Navigate to="/signin" />} />
				}
				
			</Routes>
		</div>
	);
})

export default App
