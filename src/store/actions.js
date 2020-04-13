import * as ACTIONS from './actionTypes';

export const _changeViewYear = (change) => ({
    type: ACTIONS.DATEREDUCER_CHANGE_CURRENT_YEAR,
    change,
});

export const _changeCurrentDay = () => ({
    type: ACTIONS.DATEREDUCER_CHANGE_CURRENT_DAY,
});

export const _changeCurrentLanguage = (language) => ({
    type: ACTIONS.CHANGE_CURRENT_LANGUAGE,
    language,
});