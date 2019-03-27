import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Banner from '../Banner/Banner';
import ScrollDown from '../ScrollDown/ScrollDown';
import Section from '../Section/Section';
import Footer from '../Footer/Footer';
import {fetchResumeData} from './HomeActions';
import {isEmpty} from 'lodash';

const Home = (props) => {

	useEffect(() => {
		return props.fetchResumeData();
	}, []);

	return (
		<Fragment>
			{!isEmpty(props.data) &&
			<Fragment>
				<Header>
					<Navigation/>
					<Banner/>
					<ScrollDown/>
				</Header>
				<Section/>
				<Footer/>
			</Fragment>
			}
		</Fragment>
	);
};

const mapStateToProps = state => ({data: state.resumeDataReducer.data});

const mapDispatchToProps = dispatch => ({fetchResumeData: () => dispatch(fetchResumeData())});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
