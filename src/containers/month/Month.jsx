import React from 'react';
import style from './Month.module.css';
import Week from '../week/Week';
import DayOfMonth from '../../components/dayOfMonth/DayOfMonth';

function Month({
    monthName,
    daysOfWeek,
    isCurrentMonth,
    currentDate,
    data,
    currentLanguage,
}) {
    const days = data.numbers.map((item, index) => {
        const isToday = isCurrentMonth && currentDate === item;
        if (
            index < data.daysBeforeMonth - 1 ||
            index > data.daysBeforeMonth + data.daysInMonth - 2
        ) {
            return (
                <DayOfMonth
                    value={item}
                    styleClassName={'dateNotInThisMonth'}
                    key={`${monthName}-${index}`}
                />
            );
        } else {
            return data.weekendIndex[currentLanguage].includes(index) ? (
                <DayOfMonth
                    value={item}
                    styleClassName={'weekend'}
                    isToday={isToday}
                    key={`${monthName}-${index}`}
                />
            ) : (
                <DayOfMonth
                    value={item}
                    isToday={isToday}
                    key={`${monthName}-${index}`}
                />
            );
        }
    });

    return (
        <div className={style.monthContainer}>
            <div className={style.monthName}>{monthName}</div>
            <Week daysOfWeek={daysOfWeek} styleClassName={'dayOfWeak'} />
            {days}
        </div>
    );
}

export default Month;
