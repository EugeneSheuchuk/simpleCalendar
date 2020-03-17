import React from 'react';
import style from './Month.module.css';

function Month(props) {
    console.log('props', props);
    const monthName = 'January';
    const daysOfWeak = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    const daysInMonth = 33 - new Date(props.currentYear, props.month, 33).getDate();
    const firstDayOfMonth = new Date(props.currentYear, props.month, 1).getDay();
    const numbers = [];
    for (let i = 0; i < 42; i++) {
        if (i <= firstDayOfMonth) {
            numbers.push(new Date(props.currentYear, props.month, 1 - (firstDayOfMonth - i)).getDate());
        } else if (i > firstDayOfMonth && i < firstDayOfMonth + daysInMonth) {
            numbers.push(i - firstDayOfMonth + 1);
        } else {
            numbers.push(new Date(props.currentYear, props.month, (i - firstDayOfMonth + 1)).getDate());
        }
    }
    return (
        <div className={style.monthContainer}>
            <div className={style.monthName}>{monthName}</div>
            {daysOfWeak.map((item, index) => <div
                className={style.daysOfWeak}
                key={`${item} + ${index}`}>{item}</div>)}
            {numbers.map((item, index) => <div className={style.date}
                key={`${props.month}-${index}`}>{item}</div>)}
        </div>
    );
}

export default Month;