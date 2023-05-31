import React from 'react'
import { Modal, Box } from '@mui/material'

export const MyModal = ({open, setOpen, children}) =>
{
	return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <Box className="modal-wrapper" sx={{
                    bgcolor: 'background.alternate',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    overflow: 'hidden',
                    borderRadius: '10px',
                    boxShadow: 'rgb(0, 0, 0) 0px 2px 24px',
                    width: '350px'
                }}>
                {
                    children
                }
            </Box>
        </Modal>
	);
}

export const MyModalHeader = ({children}) =>
{
    return (
        <></>
    );
}

export const MyModalFooter = ({children}) =>
{
    return (
        <></>
    );
}
