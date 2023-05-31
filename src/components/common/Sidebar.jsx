import React from 'react'
import { observer } from 'mobx-react-lite'
import { Stack, Modal, Box, IconButton } from '@mui/material'

import GroupIcon from '@mui/icons-material/Group'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'

import { ContactCard, MyModal, MyModalHeader, MyModalFooter } from 'components/common'

import contacts from 'store/Contacts'
import user from 'store/User'

const Sidebar =  observer(() =>
{
	const [isContactModalOpen, setIsContactModalOpen] = React.useState(false)

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
			
			<IconButton onClick={() => {setIsContactModalOpen(true)}}>
				<GroupIcon sx={{color: "text.secondary"}} />
			</IconButton>
			
			<IconButton>
				<SettingsIcon sx={{color: "text.secondary"}} />
			</IconButton>

			<MyModal open={isContactModalOpen} setOpen={setIsContactModalOpen}>

				<MyModalHeader>
					
				</MyModalHeader>

				<Stack m={0} p={0} width={1}>
				{
					users.map(contact =>
						user.user.id !== contact.id &&
						<ContactCard key={contact.id} user={contact} />)
				}
				</Stack>

				<MyModalFooter>
					
				</MyModalFooter>

			</MyModal>
		</Stack>
	);
})

export default Sidebar
