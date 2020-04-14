import React from 'react';
import style from './DayOfMonth.module.css';

function DayOfMonth({ value, styleClassName, isToday = false, currentTheme }) {
    const toDay = isToday ? 'toDay' : null;
    return (
        <div
            className={`${style.date} 
            ${style[`${styleClassName}_${currentTheme}`]} 
            ${style[`${toDay}_${currentTheme}`]}`}
        >
            {value}
        </div>
    );
}

export default DayOfMonth;
