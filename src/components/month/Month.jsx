import React from 'react';
import style from './Month.module.css';
import { prepareDataForMonth } from './../../assets/functions';

function Month({
				   viewYear, currentYear, month, daysOfWeek, monthName,
				   currentMonth, currentDate
			   }) {
	const data = prepareDataForMonth(viewYear, month);
	const weekDays = daysOfWeek.map((item, index) => (
		<div className={style.daysOfWeak} key={`${item} + ${index}`}>
			{item}
		</div>
	));
	const thisMonth = month === currentMonth;
	const thisYear = currentYear === viewYear;
	const days = data.numbers.map((item, index) => {
		if (
			index < data.daysBeforeMonth - 1 ||
			index > data.daysBeforeMonth + data.daysInMonth - 2
		) {
			return (
				<div
					className={`${style.date} ${style.dateNotInThisMonth}`}
					key={`${month}-${index}`}
				>
					{item}
				</div>
			);
		} else {
			const toDay = thisYear && thisMonth && currentDate === item
				? style.toDay : null;
			return data.weekendIndex.includes(index) ? (
				<div
					className={`${style.date} ${style.weekend} ${toDay}`}
					key={`${month}-${index}`}
				>
					{item}
				</div>
			) : (
				<div className={`${style.date} ${toDay}`} key={`${month}-${index}`}>
					{item}
				</div>
			);
		}
	});

	return (
		<div className={style.monthContainer}>
			<div className={style.monthName}>{monthName}</div>
			{weekDays}
			{days}
		</div>
	);
}

export default Month;
