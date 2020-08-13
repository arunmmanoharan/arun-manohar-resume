import React, {useState} from 'react';
import {startsWith} from 'lodash';
import { HashLink as Link } from 'react-router-hash-link';

const NavLink = props => {

	const [style, handleMouse] = useState({color: '#FFFFFF'});

	const handleMouseEnter = () => handleMouse({color: '#157DEC'});
	const handleMouseLeave = () => handleMouse({color: '#FFFFFF'});

	return (
		<li>
			<Link onMouseEnter={handleMouseEnter}
			   onMouseLeave={handleMouseLeave}
			   style={style}
			   className='smoothscroll'
			   to={startsWith(props.link, 'http') ? props.link : `#${props.link}`}>
				{props.name}
			</Link>
		</li>
	);
};

export default NavLink;
