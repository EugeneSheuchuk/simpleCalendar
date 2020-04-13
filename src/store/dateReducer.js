import * as ACTIONS from './actionTypes';
import { currentDayData } from '../assets/functions';

const initialData = currentDayData();


let initialState = {
	...initialData,
	viewYear: initialData.currentYear,
	monthsNames: [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	],
	daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
};

export const dateReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTIONS.DATEREDUCER_CHANGE_CURRENT_YEAR:
			return {
				...state,
				viewYear: state.viewYear + action.change,
			};
		case ACTIONS.DATEREDUCER_CHANGE_CURRENT_DAY:
			return {
				...state,
				currentDate: state.currentDate + 1,
			};
		default:
			return state;
	}
};
