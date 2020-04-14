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
    currentTheme,
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
                    currentTheme={currentTheme}
                    key={`${monthName}-${index}`}
                />
            );
        } else {
            return data.weekendIndex[currentLanguage].includes(index) ? (
                <DayOfMonth
                    value={item}
                    styleClassName={'weekend'}
                    currentTheme={currentTheme}
                    isToday={isToday}
                    key={`${monthName}-${index}`}
                />
            ) : (
                <DayOfMonth
                    value={item}
                    currentTheme={currentTheme}
                    isToday={isToday}
                    key={`${monthName}-${index}`}
                />
            );
        }
    });

    return (
        <div className={style.monthContainer}>
            <div className={`${style.monthName} ${style[currentTheme]}`}>
                {monthName}
            </div>
            <Week daysOfWeek={daysOfWeek} currentTheme={currentTheme} />
            {days}
        </div>
    );
}

export default Month;
