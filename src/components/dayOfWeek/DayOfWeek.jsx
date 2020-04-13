import React from 'react';
import style from './DayOfWeek.module.css';

function DayOfWeek({ value, styleClassName }) {
    return <div className={style[styleClassName]}>{value}</div>;
}

export default DayOfWeek;
