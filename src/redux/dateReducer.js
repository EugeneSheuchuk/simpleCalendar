const SET_CURRENT_YEAR = 'simpleCalendar/dateReduser/SET_CURRENT_YEAR';

const currentYear =new Date().getFullYear();

let initialState = {
    currentYear: currentYear,
    monthsNames: ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'],
    daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
};

export const dateReducer = (state = initialState, action) => {
    switch (action.type) {
        // case SET_CURRENT_YEAR:
        //     return {
        //         ...state,
        //         currentYear: action.year,
        //     };
        default:
            return state;
    }
};

// export const setCurrentYearAC = (year) => ({type: SET_CURRENT_YEAR, year});