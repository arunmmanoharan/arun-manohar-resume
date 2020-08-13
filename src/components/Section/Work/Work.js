import React from 'react';
import {connect} from 'react-redux';
import BulletPoints from './BulletPoints';
import {map, uniqueId} from 'lodash';
import Datetime from '../../../utils/Datetime';

const Entry = (props) => {

	const startDate = Datetime.getDisplayFromDate(props.entry.startDate);
	const endDate = Datetime.getDisplayFromDate(props.entry.endDate);
	const index = props.index + 1;
	const divider = index === props.total ? (<br/>) : (<hr/>);

	return (
		<div className='row item'>
			<div className='twelve columns'>
				<h3>
					<a href={props.entry.website}>{props.entry.company}</a>
				</h3>
				<p className='info'>
					{props.entry.position}
					<span> &bull; </span>
					<span className='info-summary'>{props.entry.location}</span>
					<span> &bull; </span>
					<em className='date'>{startDate} - {endDate}</em>
				</p>
				<p className={'info '}>{props.entry.description}</p>
				<BulletPoints points={props.entry.highlights}/>
			</div>
			{divider}
		</div>
	);
};

const Work = (props) => {

	const numEntries = props.content.length;

	return (
		<section id='work'>
			<div className='row work'>
				<div className='two columns header-col'>
					<h1>
						<span>Work</span>
					</h1>
				</div>
				<div className='ten columns main-col'>
					{map(props.content, (entry, index) => {
						return (
							<Entry key={uniqueId()} index={index} total={numEntries} entry={entry}/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

const mapStateToProps = state => ({content: state.resumeDataReducer.data.work});

export default connect(mapStateToProps)(Work);
