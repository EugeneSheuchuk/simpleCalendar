import React from 'react';
import style from './DayOfWeek.module.css';

function DayOfWeek({ value, currentTheme }) {
    return (
        <div className={`${style.dayOfWeek} ${style[currentTheme]}`}>
            {value}
        </div>
    );
}

export default DayOfWeek;
