import axios from 'axios';
import API from '../constants/URL_Constants';

const getService = (options) => {
	return async (dispatch) => {
		const {requestAction, successAction, failureAction} = options.actions;

		if (options.shouldRequest) {
			dispatch(requestAction());
			try {
				const response = await axios.get(API);
				if (response.status === 200) {
					return dispatch(successAction(response, dispatch));
				}
				throw response;
			}
			catch (error) {
				return dispatch(failureAction(error));
			}
		}
		throw new Error('FETCHING');
	};
};

export default getService;
