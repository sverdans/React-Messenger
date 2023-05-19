import React from 'react'
import { IoSettingsSharp, IoPerson, IoPeople } from 'react-icons/io5'
import { IconButton } from './index'

import { Modal, Typography, Button, Box } from '@mui/material';

const Sidebar = () =>
{
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

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
						<Box className="modal">
							<Typography id="modal-modal-title" variant="h6" component="h2">
								Text in a modal
							</Typography>
							<Typography id="modal-modal-description" sx={{ mt: 2 }}>
								Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
							</Typography>
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
}

export default Sidebar
