import React, { useEffect } from 'react';
import style from './App.module.css';
import Month from './containers/month/Month';
import { connect } from 'react-redux';
import { _changeCurrentDay, _changeViewYear } from './store/actions';
import { getDate } from './store/selectors';
import { prepareDataForMonth } from './assets/functions';

function App({
                 changeViewYear,
                 currentYear,
                 daysOfWeek,
                 monthsNames,
                 viewYear,
                 currentMonth,
                 currentDate,
                 timeToNextDay,
                 changeCurrentDay,
             }) {
    useEffect(() => {
        const timerId = setTimeout(() => changeCurrentDay(), timeToNextDay);
        return () => {
            clearTimeout(timerId);
        };
    }, [changeCurrentDay, timeToNextDay]);

    const list = [];
    for (let i = 0; i < 12; i++) {
        const data = prepareDataForMonth(viewYear, i);
        list.push(
            <Month
                isCurrentMonth={currentYear === viewYear && i === currentMonth}
                currentDate={currentDate}
                daysOfWeek={daysOfWeek}
                monthName={monthsNames[i]}
                data={data}
                key={`${currentYear}-${i}`}
            />
        );
    }

    return (
        <div className={style.mainBoard}>
            <div className={style.header}>
                <div className={style.options}>
                    <div className={`${style.opItem} ${style.language}`}>Language</div>
                    <div className={`${style.opItem} ${style.theme}`}>Theme</div>
                    <div className={`${style.opItem} ${style.today}`}>today</div>
                </div>
                <div className={style.year}>
                    <div
                        className={`${style.yearItem} ${style.prev}`}
                        onClick={() => changeViewYear(-1)}
                    >
                        Previous
                    </div>
                    <div className={`${style.yearItem} ${style.currentYear}`}>
                        Current year - {viewYear}
                    </div>
                    <div
                        className={`${style.yearItem} ${style.next}`}
                        onClick={() => changeViewYear(1)}
                    >
                        Next
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);