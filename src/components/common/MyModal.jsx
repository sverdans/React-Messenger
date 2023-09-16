import React from 'react'
import { Modal, Box, Divider, Stack } from '@mui/material'


export const MyModal = ({open, setOpen, width = '350px', children}) =>
{
	return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <Stack sx={{
                    position: 'absolute',
                    bgcolor: 'background.alternate',
                    maxHeight: '90vh',
                    width: width,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '10px',
                    boxShadow: 'rgb(0, 0, 0) 0px 2px 24px',
                }}>
                {
                    children
                }
            </Stack>
        </Modal>
	);
}

export const MyModalHeader = ({ children, divider = true }) =>
{
    return (
        <Box height={'55px'}>
            <Stack sx={{flexDirection: 'row', height: '35px', padding: '10px 20px', alignItems: 'center'}}>
                { children }
            </Stack>
            {
                divider 
                ? <Divider />
                : <></>
            }
        </Box>
    );
}

export const MyModalFooter = ({ children, divider = true }) =>
{
    return (
        <Box height={'55px'}>
            {
                divider 
                ? <Divider />
                : <></>
            }
            
            <Stack sx={{flexDirection: 'row', height: '35px', padding: '10px 20px'}}>
                { children }
            </Stack>
        </Box>
    );
}

export const MyModalBody = ({ children }) =>
{
    return (
        <Box sx={{margin: 0, padding: 0, overflow: 'auto'}}>
            { children }
        </Box>
    );
}
