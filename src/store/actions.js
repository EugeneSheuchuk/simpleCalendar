import * as ACTIONS from './actionTypes';

export const _changeCurrentYear = (change) => ({
    type: ACTIONS.DATEREDUCER_CHANGE_CURRENT_YEAR,
    change,
});

export const _changeCurrentDay = () => ({
    type: ACTIONS.DATEREDUCER_CHANGE_CURRENT_DAY,
});
