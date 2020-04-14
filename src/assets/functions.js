export function getCurrentDateInString() {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function getNextDateInString(currentDateInString) {
    const date = new Date(currentDateInString);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let currentDate = date.getDate();
    const daysInMonth = new Date(year, month, 0).getDate();
    if (currentDate + 1 > daysInMonth) {
        month += 1;
        currentDate = 1;
    } else {
        currentDate += 1;
    }
    if (month > 12) {
        year += 1;
        month = 1;
    }
    return `${year}-${month}-${currentDate}`;
}

export function currentDayData(stringDate) {
    const time = Date.now();
    const date = new Date(stringDate);
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();
    const currentDate = date.getDate();
    const nextDay = new Date(getNextDateInString(stringDate)).getTime();
    const timeToNextDay = nextDay - time;
    return {
        currentYear,
        currentMonth,
        currentDate,
        timeToNextDay,
    };
}

export function prepareDataForMonth(currentLanguage, currentYear, month) {
    const daysInMonth = new Date(currentYear, month + 1, 0).getDate();
    let firstDayInMonth = new Date(currentYear, month, 1).getDay();
    firstDayInMonth =
        currentLanguage === 'en' ? firstDayInMonth : firstDayInMonth - 1;
    const numbers = [];
    let daysBeforeMonth = 0;
    let daysAfterMonth = 0;
    for (let i = 0; i < 42; i++) {
        if (i <= firstDayInMonth) {
            numbers.push(
                new Date(
                    currentYear,
                    month,
                    1 - (firstDayInMonth - i)
                ).getDate()
            );
            daysBeforeMonth += 1;
        } else if (i > firstDayInMonth && i < firstDayInMonth + daysInMonth) {
            numbers.push(i - firstDayInMonth + 1);
        } else {
            numbers.push(
                new Date(currentYear, month, i - firstDayInMonth + 1).getDate()
            );
            daysAfterMonth += 1;
        }
    }
    const weekendIndex = {
        en: [0, 6, 7, 13, 14, 20, 21, 27, 28, 34, 35, 41],
        ru: [5, 6, 12, 13, 19, 20, 26, 27, 33, 34, 40, 41],
        by: [5, 6, 12, 13, 19, 20, 26, 27, 33, 34, 40, 41],
    };
    return {
        numbers,
        daysBeforeMonth,
        daysAfterMonth,
        daysInMonth,
        weekendIndex,
    };
}
