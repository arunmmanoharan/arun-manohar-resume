import React from 'react';
import {connect} from 'react-redux';
import SocialMedia from '../SocialMedia/SocialMedia';

const Footer = (props) => {
	return (
		<footer>
			<div className='row'>
				<div className='twelve columns'>
					<SocialMedia ulClass='social-links' profiles={props.content.profiles}/>
				</div>
				<div id='go-top'>
					<a className='smoothscroll' title='Back to Top' href='#home'>
						<i className='icon-up-open'/>
					</a>
				</div>
			</div>
		</footer>
	);
};

const mapStateToProps = state => ({content: state.resumeDataReducer.data.basics});

export default connect(mapStateToProps)(Footer);
