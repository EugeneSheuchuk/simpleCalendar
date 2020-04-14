import React, { useState, useEffect } from 'react';
import style from './App.module.css';
import Month from './containers/month/Month';
import { connect } from 'react-redux';
import {
    _changeCurrentDay,
    _changeCurrentLanguage,
    _changeViewYear,
    _getToday,
    _switchTheme,
} from './store/actions';
import { getDate } from './store/selectors';
import { prepareDataForMonth } from './assets/functions';
import Languages from './containers/languages/Languages';
import en from './assets/textEn';
import ru from './assets/textRu';
import by from './assets/textBy';
import Theme from './components/theme/Theme';

function App({
    changeViewYear,
    changeCurrentLanguage,
    currentYear,
    viewYear,
    currentMonth,
    currentDate,
    timeToNextDay,
    changeCurrentDay,
    currentLanguage,
    languages,
    getToday,
    currentTheme,
    switchTheme,
}) {
    useEffect(() => {
        setLoading(() => true);
        changeCurrentLanguage(window.navigator.language);
        setLoading(() => false);
        const timerId = setTimeout(() => changeCurrentDay(), timeToNextDay);
        return () => {
            clearTimeout(timerId);
        };
    }, [changeCurrentLanguage, changeCurrentDay, timeToNextDay]);

    const [isLoading, setLoading] = useState(true);

    let textObj = {};
    if (currentLanguage === 'en') textObj = { ...en };
    else if (currentLanguage === 'ru') textObj = { ...ru };
    else if (currentLanguage === 'by') textObj = { ...by };

    const theme = currentTheme === 'light' ? 'dark' : 'light';

    const list = [];
    for (let i = 0; i < 12; i++) {
        const data = prepareDataForMonth(currentLanguage, viewYear, i);
        list.push(
            <Month
                isCurrentMonth={currentYear === viewYear && i === currentMonth}
                currentDate={currentDate}
                daysOfWeek={textObj.days}
                monthName={textObj.month[i]}
                data={data}
                currentLanguage={currentLanguage}
                currentTheme={currentTheme}
                key={`${currentYear}-${i}`}
            />
        );
    }

    return isLoading ? null : (
        <div
            className={`${style.mainBoard} ${
                style[`${currentTheme}_mainBoard`]
            }`}
        >
            <div className={style.header}>
                <div className={style.options}>
                    <div className={`${style.opItem}`}>
                        <Languages
                            currentLanguage={currentLanguage}
                            languages={languages}
                            action={changeCurrentLanguage}
                        />
                    </div>
                    <div className={`${style.opItem}`}>
                        <Theme
                            name={textObj.theme.name}
                            value={textObj.theme.options[theme]}
                            action={switchTheme}
                        />
                    </div>
                    <div
                        className={`${style.opItem} ${style.today}`}
                        onClick={() => getToday()}
                    >
                        <span>{textObj.today}</span>
                    </div>
                </div>
                <div className={style.year}>
                    <div
                        className={`${style.yearItem} ${style.prev}`}
                        onClick={() => changeViewYear(-1)}
                    >
                        <span>{textObj.year.previous}</span>
                    </div>
                    <div className={`${style.yearItem} ${style.currentYear}`}>
                        {textObj.year.current} - {viewYear}
                    </div>
                    <div
                        className={`${style.yearItem} ${style.next}`}
                        onClick={() => changeViewYear(1)}
                    >
                        <span>{textObj.year.next}</span>
                    </div>
                </div>
            </div>
            <div className={style.months}>{list}</div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return getDate(state);
};
const mapDispatchToProps = (dispatch) => {
    return {
        changeViewYear(change) {
            dispatch(_changeViewYear(change));
        },
        changeCurrentDay() {
            dispatch(_changeCurrentDay());
        },
        changeCurrentLanguage(language) {
            dispatch(_changeCurrentLanguage(language));
        },
        getToday() {
            dispatch(_getToday());
        },
        switchTheme() {
            dispatch(_switchTheme());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
