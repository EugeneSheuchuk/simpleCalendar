import React from 'react';
import style from './Month.module.css';
import {prepareDataForMonth} from './../../assets/functions';

function Month({currentYear, month, daysOfWeak, monthsNames}) {
    const numbers = prepareDataForMonth(currentYear, month);
    const weakDays = daysOfWeak.map((item, index) => <div
        className={style.daysOfWeak}
        key={`${item} + ${index}`}>{item}</div>);
    const days = numbers.map((item, index) => <div
        className={style.date}
        key={`${month}-${index}`}>{item}</div>);

    return (
        <div className={style.monthContainer}>
            <div className={style.monthName}>{monthsNames[month]}</div>
            {weakDays}
            {days}
        </div>
    );
}

export default Month;