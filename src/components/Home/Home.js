import React, {Fragment} from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Banner from '../Banner/Banner';
import ScrollDown from '../ScrollDown/ScrollDown';
import Section from '../Section/Section';
import Footer from '../Footer/Footer';

const Home = () => {
	return (
		<Fragment>
			<Header>
				<Navigation/>
				<Banner/>
				<ScrollDown/>
			</Header>
			<Section/>
			<Footer/>
		</Fragment>
	);
};

export default Home;
