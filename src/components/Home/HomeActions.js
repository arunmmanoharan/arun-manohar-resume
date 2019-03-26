import {FETCH_RESUME_DATA_FAILURE, FETCH_RESUME_DATA_REQUEST, FETCH_RESUME_DATA_SUCCESS} from './HomeActionTypes';
import getService from '../../services/apiService';

const fetchResumeDataRequest = () => ({
	type: FETCH_RESUME_DATA_REQUEST,
});

const fetchResumeDataFailure = (error) => ({
	type: FETCH_RESUME_DATA_FAILURE,
	payload: error,
});

const fetchResumeDataSuccess = (response) => {
	if (response.data) {
		return {
			type: FETCH_RESUME_DATA_SUCCESS,
			payload: response.data,
		};
	} else {
		return fetchResumeDataFailure(response);
	}
};

export const fetchResumeData = () => {
	const actions = {
		requestAction: fetchResumeDataRequest,
		successAction: fetchResumeDataSuccess,
		failureAction: fetchResumeDataFailure,
	};
	const options = {
		actions: actions,
		shouldRequest: true,
	};

	return getService(options);
};
