import React, {useEffect, useState} from 'react';

const Header = props => {

	const [state, setState] = useState({
		window: {
			height: 0,
			width: 0
		}
	});

	useEffect(() => {
		window.addEventListener('resize', updateDimensions);
		return () => {
			updateDimensions();
		}
	}, []);

	const updateDimensions = () => {
		setState({
			window: {
				height: window.innerHeight,
				width: window.innerWidth
			}
		});
	}


	const style = {
		height: state.window.height
	};

	return (
		<header id='home' style={style}>
			{props.children}
		</header>
	);
};

export default Header;
