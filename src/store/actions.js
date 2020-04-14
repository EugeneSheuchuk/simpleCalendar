import * as ACTIONS from './actionTypes';

export const _changeViewYear = (change) => ({
    type: ACTIONS.DATEREDUCER_CHANGE_CURRENT_YEAR,
    change,
});

export const _changeCurrentDay = () => ({
    type: ACTIONS.DATEREDUCER_CHANGE_CURRENT_DAY,
});

export const _changeCurrentLanguage = (language) => ({
    type: ACTIONS.DATEREDUCER_CHANGE_CURRENT_LANGUAGE,
    language,
});

export const _getToday = () => ({
    type: ACTIONS.DATEREDUCER_SWITCH_TO_TODAY,
});

export const _switchTheme = () => ({
    type: ACTIONS.DATEREDUCER_SWITCH_THEME,
});
