import React, {useEffect, useState} from 'react';

const Header = props => {

	const [window, updateDimensions] = useState({
		window: {
			height: 0,
			width: 0
		}
	});

	useEffect(() => {
		return () => {
			return window.addEventListener('resize', updateDimensions);
		};
	}, []);


	const style = {
		height: window.height
	};

	return (
		<header id='home' style={style}>
			{props.children}
		</header>
	);
};

export default Header;
