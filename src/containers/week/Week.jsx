import React from 'react';
import DayOfWeek from '../../components/dayOfWeek/DayOfWeek';

function Week({ daysOfWeek, currentTheme }) {
    return daysOfWeek.map((item, index) => (
        <DayOfWeek
            value={item}
            currentTheme={currentTheme}
            key={`${item} + ${index}`}
        />
    ));
}

export default Week;
