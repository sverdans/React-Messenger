import React from 'react'
import { IoSettingsSharp, IoPerson, IoPeople } from 'react-icons/io5'
import { IconButton } from './index'

const Sidebar = () =>
{
	return (
		<div className="sidebar-wrapper">
			<div className="sidebar">
				<div className='sidebar-button'>
					<IconButton iconSize="20px">
						<IoPerson />
					</IconButton>
				</div>

				<div className='sidebar-button'>
					<IconButton iconSize="22px">
						<IoPeople />
					</IconButton>
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
