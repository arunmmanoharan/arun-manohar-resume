import {FETCH_RESUME_DATA_FAILURE, FETCH_RESUME_DATA_REQUEST, FETCH_RESUME_DATA_SUCCESS} from './HomeActionTypes';

const initialState = {
	data: [],
	isFetching: false
};

const resumeDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_RESUME_DATA_REQUEST: {
			return {
				...state,
				isFetching: true
			};
		}

		case FETCH_RESUME_DATA_SUCCESS: {
			return {
				...state,
				isFetching: false,
				data: action.payload
			};
		}

		case FETCH_RESUME_DATA_FAILURE: {
			return {
				...state,
				isFetching: false,
			};
		}

		default:
			return state;
	}
};

export default resumeDataReducer;
