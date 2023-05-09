import React from 'react'
import { IoSend, IoAttach } from 'react-icons/io5'
import { IconButton } from './index'

const Compose = () =>
{
	const onSendClick = () => { }
	const onAttachClick = () => { }

	return (
		<div className='compose-wrapper'>
			<div className="compose">
				<IconButton onClick={onAttachClick} iconSize="27.5px" color="" activeColor="">
					<IoAttach />
				</IconButton>

				<input type="text" 
					className="compose-input" 
					placeholder="Write a message..."/>

				<IconButton onClick={onSendClick} iconSize="20px" color="" activeColor="">
					<IoSend />
				</IconButton>
			</div>
		</div>
	
	);
}

export default Compose
