import React from 'react'
import { observer } from 'mobx-react-lite'
import { Button, Stack, Typography } from '@mui/material'

import { ContactCard, MyModal, MyModalHeader, MyModalFooter, MyModalBody } from 'components/common'

import { user, contacts, chats } from 'store'

const ContactsModal = observer(({open, setOpen}) =>
{
	const users = Object.entries(contacts.users).map(user => ({
		id: user[1].id,
		name: user[1].name,
		surname: user[1].surname,
		image: user[1].image,
		online: user[1].online
	}))

    const onCardClick = (user) =>
    {
		console.log('[debug]', 'ContactCard::onButtonClick', user)
        const chat = chats.getChatWithUser(user.id)

        if (chat)
            chats.setCurrent(chat)
        else
            chats.setCurrentStub(user)
            
		setOpen(false)
    }

	return (
        <MyModal open={open} setOpen={setOpen}>

            <MyModalHeader>
                <Typography color="text.primary" fontWeight="bold" sx={{alignSelf: 'center'}}>
                    Contacts
                </Typography> 
            </MyModalHeader>

            <MyModalBody>
                <Stack m={0} p={0} width={'100%'}>
                {
                    users.map(contact =>
                        user.user.id !== contact.id &&
                        <ContactCard key={contact.id} user={contact} 
                            onClick={ () => {onCardClick(contact)} } />)
                }
                </Stack>
            </MyModalBody>

            <MyModalFooter>
                <Button sx={{ fontWeight: 'bold', marginLeft: 'auto'}} 
                    onClick={() => { setOpen(false) }}>
                    Close
                </Button>
            </MyModalFooter>

        </MyModal>
	);
})

export default ContactsModal
