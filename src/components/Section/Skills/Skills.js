import React, {useState} from 'react';
import {connect} from 'react-redux';
import {map, reduce, uniqueId} from 'lodash';

const filterSkills = (input, filter) => {
	const reduced = reduce(input, (previousValue, currentValue) => {
		return {
			output: currentValue.keywords.indexOf(filter) === -1 ? previousValue.output : previousValue.output.concat(currentValue),
			filter: filter
		};
	}, {
		output: [],
		filter: filter
	});
	return reduced.output;
};

const Entry = (props) => {

	const [style, handleMouse] = useState({background: '#313131'});

	const handleMouseEnter = () => handleMouse({background: '#157DEC'});
	const handleMouseLeave = () => handleMouse({background: '#313131'});


	return (
		<li>
			<span
				className={'bar-expand percentage' + props.entry.level}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				style={style}/>
			<em>{props.entry.name}</em>
		</li>
	);
};

const Skill = props => {

	const summary = map(props.summary, (point) => {
		return (
			<p key={uniqueId()} className='skill-summary'>{point}</p>
		);
	});

	return (
		<div className='row inside'>
			<h3>{props.title}</h3>
			{summary}
			<div className='bars'>
				<ul className='skills'>
					{map(props.content, (entry) => {
						return (
							<Entry key={uniqueId()} entry={entry}/>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

const Skills = (props) => {
	const programmingSummary = [
		'Worked primarily with JavaScript and its related frameworks like React.js, Angular, AngularJS and Node.js',
		'Interested in functional programming and serverless architectures, exploring with new JavaScript frameworks respectively.'
	];

	const programmingSkills = filterSkills(props.content, 'programming');

	return (
		<section id='skill'>
			<div className='row skill'>
				<div className='two columns header-col'>
					<h1>
						<span>Skills</span>
					</h1>
				</div>
				<div className='ten columns main-col'>
					<Skill title='Programming Languages' content={programmingSkills} summary={programmingSummary}/>
				</div>
			</div>
		</section>
	);
};

const mapStateToProps = state => ({content: state.resumeDataReducer.data.skills});

export default connect(mapStateToProps)(Skills);
