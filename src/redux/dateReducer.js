const CHANGE_CURRENT_YEAR = 'simpleCalendar/dateReduser/CHANGE_CURRENT_YEAR';

const currentYear =new Date().getFullYear();

let initialState = {
    currentYear: currentYear,
    monthsNames: ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'],
    daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
};

export const dateReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CURRENT_YEAR:
            return {
                ...state,
                currentYear: state.currentYear + action.change,
            };
        default:
            return state;
    }
};

export const changeCurrentYearAC = (change) => ({type: CHANGE_CURRENT_YEAR, change});