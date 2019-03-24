import React from 'react';
import {map, uniqueId} from 'lodash';

const mapIcon = (socialMedia) => {
	const media = socialMedia.replace(/ /g, '-');
	switch (socialMedia) {
		case 'email':
			return (
				<i className={'fa fa-envelope'}/>
			);
		case 'quora':
			return (
				<i className='fa fa-fw'>
					<strong className='fa-quora'>Q</strong>
				</i>
			);
		default:
			return (
				<i className={'fa fa-' + media}/>
			);
	}
};

const SocialMedia = (props) => {
	return (
		<ul className={props.ulClass}>
			{map(props.profiles, (profile) => {
				const icon = mapIcon(profile.network.toLowerCase());
				return (
					<li key={uniqueId()}>
						<a href={profile.url}>
							{icon}
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default SocialMedia;