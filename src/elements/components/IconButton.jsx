import React from 'react';
import { IconContext } from "react-icons";

const IconButton = ({children, onClick, iconSize}) =>
{
	return (
		<IconContext.Provider value={{ className: "icon-button", size: iconSize }}>
			<div className="icon-button-wrapper" onClick={() => { onClick && onClick() }}>
				{children}
			</div>
		</IconContext.Provider>
	);
}

export default IconButton
