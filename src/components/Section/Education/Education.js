import React from 'react';
import {connect} from 'react-redux';
import {map, uniqueId} from 'lodash';
import Datetime from '../../../utils/Datetime';

const Entry = (props) => {

	const startDate = Datetime.getDisplayFromDate(props.entry.startDate);
	const endDate = Datetime.getDisplayFromDate(props.entry.endDate);

	return (
		<div className='row item'>
			<div className='twelve columns'>
				<h3>{props.entry.institution}</h3>
				<p className='info'>
					{props.entry.area}
					<span> &bull; </span>
					<span className='info-summary'>{props.entry.summary}</span>
					<span> &bull; </span>
					<em className='date'>{startDate} - {endDate}</em>
				</p>
			</div>
		</div>
	);
};

const Education = (props) => (
	<section id='education'>
		<div className='row education'>
			<div className='two columns header-col'>
				<h1>
					<span>Education</span>
				</h1>
			</div>
			<div className='ten columns main-col'>
				{map(props.content, (entry) => {
					return (
						<Entry key={uniqueId()} entry={entry}/>
					);
				})}
			</div>
		</div>
	</section>
);

const mapStateToProps = state => ({content: state.default.education});

export default connect(mapStateToProps)(Education);