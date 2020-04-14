import React, { useState, useEffect } from 'react';
import style from './App.module.css';
import Month from './containers/month/Month';
import { connect } from 'react-redux';
import { _changeCurrentDay, _changeCurrentLanguage, _changeViewYear } from './store/actions';
import { getDate } from './store/selectors';
import { prepareDataForMonth } from './assets/functions';
import Languages from './containers/languages/Languages';
import { mainPage } from './assets/text';

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

    const list = [];
    for (let i = 0; i < 12; i++) {
        const data = prepareDataForMonth(viewYear, i);
        list.push(
            <Month
                isCurrentMonth={currentYear === viewYear && i === currentMonth}
                currentDate={currentDate}
                daysOfWeek={mainPage.days[currentLanguage]}
                monthName={mainPage.month[currentLanguage][i]}
                data={data}
                currentLanguage={currentLanguage}
                key={`${currentYear}-${i}`}
            />
        );
    }

    return isLoading ? null :(
        <div className={style.mainBoard}>
            <div className={style.header}>
                <div className={style.options}>
                    <div className={`${style.opItem} ${style.language}`}>
                        <Languages currentLanguage={currentLanguage}
                                   languages={languages}
                                   action={changeCurrentLanguage}/>
                    </div>
                    <div className={`${style.opItem} ${style.theme}`}>
                        {mainPage.theme[currentLanguage].name}
                    </div>
                    <div className={`${style.opItem} ${style.today}`}>
                        {mainPage.today[currentLanguage]}
                    </div>
                </div>
                <div className={style.year}>
                    <div
                        className={`${style.yearItem} ${style.prev}`}
                        onClick={() => changeViewYear(-1)}
                    >
                        {mainPage.year[currentLanguage].previous}
                    </div>
                    <div className={`${style.yearItem} ${style.currentYear}`}>
                        {mainPage.year[currentLanguage].current} - {viewYear}
                    </div>
                    <div
                        className={`${style.yearItem} ${style.next}`}
                        onClick={() => changeViewYear(1)}
                    >
                        {mainPage.year[currentLanguage].next}
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
            dispatch(_changeCurrentLanguage(language))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);