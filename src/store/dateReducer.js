import * as ACTIONS from './actionTypes';
import {
    currentDayData,
    getCurrentDateInString,
    getNextDateInString,
} from '../assets/functions';

const stringCurrentDate = getCurrentDateInString();
const initialData = currentDayData(stringCurrentDate);

let initialState = {
    ...initialData,
    stringCurrentDate,
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
            const stringNextDate = getNextDateInString(state.stringCurrentDate);
            const nextDateData = currentDayData(stringNextDate);
            return {
                ...state,
                ...nextDateData,
                stringCurrentDate: stringNextDate,
                viewYear: nextDateData.currentYear,
            };
        default:
            return state;
    }
};
