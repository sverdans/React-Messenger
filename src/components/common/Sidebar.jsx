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
		<Stack m={0} p={0} width={50} height={'100vh'} bgcolor="background.alternate"
			alignItems="center" justifyContent="center" sx={{ borderRight: 1, borderColor: 'background.main' }}>
			<IconButton>
				<PersonIcon sx={{color: "text.secondary"}} />
			</IconButton>
			
			<IconButton onClick={handleOpen}>
				<GroupIcon sx={{color: "text.secondary"}} />
			</IconButton>
			
			<IconButton>
				<SettingsIcon sx={{color: "text.secondary"}} />
			</IconButton>

			<Modal open={open} onClose={handleClose}>
				<Box className="modal-wrapper" sx={{bgcolor: 'rgb(23,33,43)', color:'rgb(245,245,245)'}}>
					<div className='modal'>
						<div className='modal-header'>
						</div>
						
						<Box>						
							<Stack m={0} p={0} width={1}>
							{
								users.map(contact =>
									user.user.id !== contact.id &&
									<ContactCard key={contact.id} user={contact} />)
							}
							</Stack>
						</Box>

						<div className='modal-footer'>
						</div>
					</div>
				</Box>
			</Modal>
		</Stack>
	);
})

export default Sidebar
