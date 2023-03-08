import {format, parseISO, isAfter} from 'date-fns';

const Datetime = {
	getDisplayFromDate: (datetime) => {
		const applyFunc = () => {
			const date = parseISO(datetime);
			if (isAfter(date, new Date(2023, 2, 20))) {
				return format(date, 'MMM yyyy');
			}
			return format(date, 'MMM yyyy', { addSuffix: true });
		};
		return datetime === 'Present' ? datetime : applyFunc();
	}
};

export default Datetime;