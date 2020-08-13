import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import NavLink from './NavLink';
import navigation from '../../constants';
import {keys, map, uniqueId} from 'lodash';

const Navigation = () => {

	return (
		<nav id='nav-wrap' className='opaque' style={{background: '#313131'}}>
			<Link className='mobile-btn' to='#nav-wrap' title='Show navigation'>Show navigation</Link>
			<Link className='mobile-btn' to='#' title='Hide navigation'>Hide navigation</Link>
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
