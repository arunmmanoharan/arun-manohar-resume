import React from 'react';
import NavLink from './NavLink';
import navigation from '../../constants';
import {keys, map, uniqueId} from 'lodash';
import {ANGULAR_URL} from '../../constants/URL_Constants';

const handleGoToAngular = () => {
	window.open(ANGULAR_URL, '_self');
};

const Navigation = () => (
	<nav id='nav-wrap' className='opaque' style={{background: '#313131'}}>
		<a className='mobile-btn' href='#nav-wrap' title='Show navigation'>Show navigation</a>
		<a className='mobile-btn' href='#' title='Hide navigation'>Hide navigation</a>
		<ul id='nav' className='nav'>
			{map(keys(navigation), (navigationLink) => {
				const navigationName = navigation[navigationLink];
				return (
					<NavLink key={uniqueId()}
							 link={navigationLink}
							 name={navigationName}/>
				);
			})}
		</ul>
		<button id="goToAngular" onClick={handleGoToAngular}> Switch to Angular Version</button>
	</nav>
);

export default Navigation;
