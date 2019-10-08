import React from 'react';
import NavLink from './NavLink';
import navigation from '../../constants';
import {keys, map, uniqueId} from 'lodash';

const Navigation = () => {

	return (
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
		</nav>
	);
};

export default Navigation;
