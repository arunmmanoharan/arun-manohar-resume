import React, {useState} from 'react';
import {connect} from 'react-redux';
import SocialMedia from '../SocialMedia/SocialMedia';

const Banner = props => {

	const [style, handleMouse] = useState({color: '#FFFFFF'});

	const handleMouseEnter = () => handleMouse({color: '#157DEC'});
	const handleMouseLeave = () => handleMouse({color: '#FFFFFF'});

	return (
		<div className='row banner'>
			<div className='banner-text'>
				<h1 className='responsive-headline'
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					style={style}>{props.basics.name}</h1>
				<br/>
				<hr/>
				<SocialMedia ulClass='social'
							 profiles={props.basics.profiles}/>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		basics: state.default.basics
	};
};

export default connect(mapStateToProps)(Banner);