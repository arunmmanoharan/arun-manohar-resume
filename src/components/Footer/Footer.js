import React from 'react';
import {connect} from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';
import SocialMedia from '../SocialMedia/SocialMedia';

const Footer = (props) => {
	return (
		<footer>
			<div className='row'>
				<div className='twelve columns'>
					<SocialMedia ulClass='social-links' profiles={props.content.profiles}/>
				</div>
				<div id='go-top'>
					<Link className='smoothscroll' title='Back to Top' to='#home'>
						<i className='icon-up-open'/>
					</Link>
				</div>
			</div>
		</footer>
	);
};

const mapStateToProps = state => ({content: state.resumeDataReducer.data.basics});

export default connect(mapStateToProps)(Footer);
