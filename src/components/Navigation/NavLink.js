import React, {useState} from 'react';
import {startsWith} from 'lodash';

const NavLink = props => {

	const [style, handleMouse] = useState({color: '#FFFFFF'});

	const handleMouseEnter = () => handleMouse({color: '#157DEC'});
	const handleMouseLeave = () => handleMouse({color: '#FFFFFF'});

	return (
		<li>
			<a onMouseEnter={handleMouseEnter}
			   onMouseLeave={handleMouseLeave}
			   style={style}
			   className='smoothscroll'
			   href={startsWith(props.link, 'http') ? props.link : `#${props.link}`}>
				{props.name}
			</a>
		</li>
	);
};

export default NavLink;
