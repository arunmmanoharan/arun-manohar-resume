import React from 'react';
import Carousel from 'nuka-carousel';
import {connect} from 'react-redux';
import {map, uniqueId} from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

const Entry = (props) => (
	<div className={'centerReferences'}>
		<h3 style={{color: 'white'}}>{props.entry.name}</h3>
		<h4 style={{color: 'white'}}>{props.entry.company}</h4>
		<p>{props.entry.reference}</p>
	</div>
);

const References = (props) => {

	const carouselConfig = {
		autoplay: true,
		decorators: [],
		wrapAround: true,
		speed: 600,
		enableKeyboardControls: true,
		transitionMode: 'scroll3d',
	};

	return (
		<section id='references'>
			<div className='text-container'>
				<div className='row'>
					<div className='flexslider'>
						<Carousel
							autoplay={carouselConfig.autoplay}
							enableKeyboardControls={carouselConfig.enableKeyboardControls}
							decorators={carouselConfig.decorators}
							transitionMode={carouselConfig.transitionMode}
							renderBottomCenterControls={() => null}
							renderCenterLeftControls={({ previousSlide }) => (
								<button onClick={previousSlide}><FontAwesomeIcon icon={faChevronCircleLeft} /></button>
							)}
							renderCenterRightControls={({ nextSlide }) => (
								<button onClick={nextSlide}><FontAwesomeIcon icon={faChevronCircleRight} /></button>
							)}
							wrapAround={carouselConfig.wrapAround}>
							{map(props.content, (entry) => {
								return (
									<Entry key={uniqueId()} entry={entry}/>
								);
							})}
						</Carousel>
					</div>
				</div>
			</div>
		</section>
	);
};

const mapStateToProps = state => ({content: state.default.references});

export default connect(mapStateToProps)(References);