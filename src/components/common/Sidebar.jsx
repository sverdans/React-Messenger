import React from 'react'
import { observer } from 'mobx-react-lite'
import { Stack, Modal, Box, IconButton } from '@mui/material'

import GroupIcon from '@mui/icons-material/Group'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'

import { ContactCard } from 'components/common'

import contacts from 'store/Contacts'
import user from 'store/User'

const Sidebar =  observer(() =>
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
		<Stack m={0} p={0} width={50} height={'100vh'} alignItems="center" justifyContent="center" >
			<IconButton>
				<PersonIcon />
			</IconButton>
			
			<IconButton onClick={handleOpen}>
				<GroupIcon />
			</IconButton>
			
			<IconButton>
				<SettingsIcon />
			</IconButton>


			<Modal open={open} onClose={handleClose}>
				<Box className="modal-wrapper" sx={{bgcolor: 'rgb(23,33,43)', color:'rgb(245,245,245)'}}>
					<div className='modal'>
						<div className='modal-header'>
						</div>
						
						<Stack m={0} p={0} width={1}>
							{
								users.map(contact =>
									user.user.id !== contact.id &&
									<ContactCard key={contact.id} user={contact} />)
							}
						</Stack>

						<div className='modal-footer'>
						</div>
					</div>
				</Box>
			</Modal>
		</Stack>
	);
})

export default Sidebar
