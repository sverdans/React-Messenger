import React from 'react'
import { observer } from 'mobx-react-lite'
import { Button, Stack, Typography } from '@mui/material'

import { ContactCard, MyModal, MyModalHeader, MyModalFooter, MyModalBody } from 'components/common'

import contacts from 'store/Contacts'
import user from 'store/User'

const ContactsModal = observer(({open, setOpen}) =>
{
	const users =  Object.entries(contacts.users).map(user => ({
		id: user[1].id,
		name: user[1].name,
		surname: user[1].surname,
		image: user[1].image,
		online: user[1].online
	}))

	return (
        <MyModal open={open} setOpen={setOpen}>

            <MyModalHeader>
                <Typography color="text.primary" fontWeight="bold" sx={{alignSelf: 'center'}}>
                    Contacts
                </Typography> 
            </MyModalHeader>

            <MyModalBody>
                <Stack m={0} p={0} width={1}>
                {
                    users.map(contact =>
                        user.user.id !== contact.id &&
                        <ContactCard key={contact.id} user={contact} />)
                }
                </Stack>
            </MyModalBody>

            <MyModalFooter>
                <Button sx={{ fontWeight: 'bold', marginLeft: 'auto'}} onClick={() => { setOpen(false) }}>Close</Button>
            </MyModalFooter>

        </MyModal>
	);
})

export default ContactsModal
