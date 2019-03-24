import React, {Fragment} from 'react';
import About from './About/About';
import Work from './Work/Work';
import Education from './Education/Education';
import Skills from './Skills/Skills';
import Portfolio from './Portfolio/Portfolio';
import References from './References/References';

const Section = () => {
	return (
		<Fragment>
			<About/>
			<Work/>
			<Education/>
			<Skills/>
			<Portfolio/>
			<References/>
		</Fragment>
	);
};

export default Section;