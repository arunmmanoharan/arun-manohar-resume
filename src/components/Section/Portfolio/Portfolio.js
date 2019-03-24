import React from 'react';
import {connect} from 'react-redux';
import {map, uniqueId} from 'lodash';

const Entry = (props) => (

	<div className='row item'>
		<div className='twelve columns'>
			<h3>
				<a href={props.entry.website}>{props.entry.name}</a>
			</h3>
			<p className='info'>
				<span className='info-summary'>{props.entry.summary}</span>
			</p>
		</div>
	</div>
);

const Portfolio = (props) => {
	return (
		<section id='projects'>
			<div className='row work'>
				<div className='header-col'>
					<div>
						<h1>
							<span>Projects</span>
						</h1>
					</div>
					<div id='portfolio-wrapper' className='ten columns main-col'>
						{map(props.content, (entry, index) => {
							return (
								<Entry key={uniqueId()} index={index} entry={entry}/>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

const mapStateToProps = state => ({content: state.default.publications});

export default connect(mapStateToProps)(Portfolio);