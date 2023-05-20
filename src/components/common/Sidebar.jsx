import React from 'react'
import { IoSettingsSharp, IoPerson, IoPeople } from 'react-icons/io5'
import { Modal, Box } from '@mui/material';
import { observer } from 'mobx-react-lite'

import { IconButton, ContactCard } from './index'
import contacts from '../../store/Contacts';
import user from '../../store/User';

const Sidebar =  observer( () =>
{
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const users =  Object.entries(contacts.users).map(user => ({
		id: user[1].id,
		name: user[1].name,
		surname: user[1].surname,
		image: user[1].image,
		online: user[1].online
	}))

	return (
		<div className="sidebar-wrapper">
			<div className="sidebar">
				<div className='sidebar-button'>
					<IconButton iconSize="20px">
						<IoPerson />
					</IconButton>
				</div>

				<div className='sidebar-button'>
					<IconButton iconSize="22px" onClick={handleOpen}>
						<IoPeople />
					</IconButton>

					<Modal
						open={open}
						onClose={handleClose}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description"
					>
						<Box className="modal-wrapper" sx={{bgcolor: 'rgb(23,33,43)', color:'rgb(245,245,245)'}}>
							<div className='modal'>
								<div className='modal-header'>

								</div>
								
								<div className='modal-body'>
								{
									users.map(contact =>
										user.user.id !== contact.id &&
										<ContactCard
											key={contact.id}
											user={contact}
										/>
									)
								}
								</div>
								
								<div className='modal-footer'>
									
								</div>
							</div>
							
						</Box>
					</Modal>

				</div>

				<div className='sidebar-button'>
					<IconButton iconSize="20px">
						<IoSettingsSharp />
					</IconButton>
				</div>
			</div>
		</div>
	);
})

export default Sidebar
