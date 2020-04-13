import * as ACTIONS from './actionTypes';

const time = Date.now();
const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth();
const currentDate = date.getDate();
const nextDay = new Date(`${currentYear}-${currentMonth + 1}-${currentDate + 1}`).getTime();
const timeToNextDay = nextDay - time;

let initialState = {
	currentYear,
	currentMonth,
	currentDate,
	timeToNextDay,
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
				currentYear: state.currentYear + action.change,
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
