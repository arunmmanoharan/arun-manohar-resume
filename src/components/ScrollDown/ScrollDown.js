import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const ScrollDown = () => {
	return (
		<p className='scrolldown'>
			<Link className='smoothscroll' to='#about'>
			</Link>
		</p>
	);
};

export default ScrollDown;