const SET_CURRENT_YEAR = 'simpleCalendar/dateReduser/SET_CURRENT_YEAR';
const CHANGE_CURRENT_YEAR = 'simpleCalendar/dateReduser/CHANGE_CURRENT_YEAR';

let initialState = {
    currentYear: null,
    monthsNames: ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'],
    daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
};

export const dateReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_YEAR:
            return {
                ...state,
                currentYear: action.year,
            };
        case CHANGE_CURRENT_YEAR:
            return {
                ...state,
                currentYear: state.currentYear + action.change,
            };
        default:
            return state;
    }
};

export const setCurrentYearAC = (year) => ({type: SET_CURRENT_YEAR, year});
export const changeCurrentYearAC = (change) => ({type: CHANGE_CURRENT_YEAR, change});