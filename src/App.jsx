import React, { useEffect } from 'react';
import style from './App.module.css';
import Month from './components/month/Month';
import { connect } from 'react-redux';
import { _changeCurrentDay, _changeViewYear } from './store/actions';
import { getDate } from './store/selectors';

function App({ changeViewYear, currentYear, daysOfWeek,
                 monthsNames, viewYear,currentMonth, currentDate,
                 timeToNextDay, changeCurrentDay }) {
    useEffect(()=> {
        const timerId = setTimeout(() => changeCurrentDay(), timeToNextDay);
        return () => {clearTimeout(timerId)};
    }, []);

    const list = [];
    for (let i = 0; i < 12; i++) {
        list.push(
            <Month
                viewYear={viewYear}
                currentYear={currentYear}
                currentMonth={currentMonth}
                currentDate={currentDate}
                month={i}
                daysOfWeek={daysOfWeek}
                monthName={monthsNames[i]}
                key={`${currentYear}-${i}`}
            />
        );
    }

    return (
        <div className={style.mainBoard}>
            <div className={style.year}>
                <div
                    className={`${style.header} ${style.prev}`}
                    onClick={() => changeViewYear(-1)}
                >
                    Previous
                </div>
                <div className={`${style.header} ${style.center}`}>
                    {viewYear}
                </div>
                <div
                    className={`${style.header} ${style.next}`}
                    onClick={() => changeViewYear(1)}
                >
                    Next
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
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
