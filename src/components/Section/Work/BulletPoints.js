import React from 'react';
import {map, uniqueId} from 'lodash';

const BulletPoints = (props) => {
	return (
		<div>
			{map(props.points, (point) => {
				return (
					<p key={uniqueId()} className='point'>
						<span className='bullet-point'>&bull; </span>
						{point}
					</p>
				);
			})}
		</div>
	);
};

export default BulletPoints;