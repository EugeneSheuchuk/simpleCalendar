import * as ACTIONS from './actionTypes';
import {
	currentDayData,
	getCurrentDateInString,
	getNextDateInString,
} from '../assets/functions';
import { languages } from '../assets/languages';

const stringCurrentDate = getCurrentDateInString();
const initialData = currentDayData(stringCurrentDate);

let initialState = {
	...initialData,
	stringCurrentDate,
	viewYear: initialData.currentYear,
	currentLanguage: 'en',
	languages: languages,
};

export const dateReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTIONS.DATEREDUCER_CHANGE_CURRENT_YEAR:
			return {
				...state,
				viewYear: state.viewYear + action.change,
			};
		case ACTIONS.DATEREDUCER_CHANGE_CURRENT_DAY:
			const stringNextDate = getNextDateInString(state.stringCurrentDate);
			const nextDateData = currentDayData(stringNextDate);
			return {
				...state,
				...nextDateData,
				stringCurrentDate: stringNextDate,
				viewYear: nextDateData.currentYear,
			};
		case ACTIONS.CHANGE_CURRENT_LANGUAGE:
			let currentLanguage = 'en';
			if (state.languages.hasOwnProperty(action.language)) {
				currentLanguage = action.language;
			}
			return {
				...state,
				currentLanguage,
			};
		default:
			return state;
	}
};
