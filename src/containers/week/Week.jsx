import React from 'react';
import DayOfWeek from '../../components/dayOfWeek/DayOfWeek';

function Week({ daysOfWeek, styleClassName }) {
    return daysOfWeek.map((item, index) => (
        <DayOfWeek
            value={item}
            styleClassName={styleClassName}
            key={`${item} + ${index}`}
        />
    ));
}

export default Week;
