import React from 'react'
import { Stack, IconButton } from '@mui/material'

import GroupIcon from '@mui/icons-material/Group'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'

import { ContactsModal, ProfileModal } from 'components/modals'

const Sidebar = () =>
{
	const [isContactModalOpen, setIsContactModalOpen] = React.useState(false)
	const [isProfileModalOpen, setIsProfileModalOpen] = React.useState(false)

	return (
		<Stack m={0} p={0} width={50} height={'100vh'} bgcolor="background.alternate"
			alignItems="center" justifyContent="center" sx={{ borderRight: 1, borderColor: 'background.main' }}>
			<IconButton onClick={() => {setIsProfileModalOpen(true)}}>
				<PersonIcon sx={{color: "text.secondary"}} />
			</IconButton>
			
			<IconButton onClick={() => {setIsContactModalOpen(true)}}>
				<GroupIcon sx={{color: "text.secondary"}} />
			</IconButton>
			
			<IconButton>
				<SettingsIcon sx={{color: "text.secondary"}} />
			</IconButton>

			<ContactsModal open={isContactModalOpen} setOpen={setIsContactModalOpen}/>
			<ProfileModal open={isProfileModalOpen} setOpen={setIsProfileModalOpen}/>
		</Stack>
	);
}

export default Sidebar
