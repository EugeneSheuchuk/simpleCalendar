import React from 'react';
import style from './DayOfMonth.module.css';

function DayOfMonth({ value, styleClassName, isToday = false }) {
    const toDay = isToday ? 'toDay' : null;
    return (
        <div
            className={`${style.date} ${style[styleClassName]} ${style[toDay]}`}
        >
            {value}
        </div>
    );
}

export default DayOfMonth;
