import moment from 'moment';

const Datetime = {
	getDisplayFromDate: (datetime) => {
		const applyFunc = () => {
			const d = moment(datetime, 'YYYY-MM-DD');
			const date = d.date();
			if (date > 20) {
				return d.add(1, 'months').format('MMM YYYY');
			}
			return d.format('MMM YYYY');
		};
		return datetime === 'Present' ? datetime : applyFunc();
	}
};

export default Datetime;