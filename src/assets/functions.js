export function prepareDataForMonth(currentYear, month) {
    const daysInMonth = new Date(currentYear, month + 1, 0).getDate();
    const firstDayInMonth = new Date(currentYear, month, 1).getDay();
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
    const weekendIndex = [0, 6, 7, 13, 14, 20, 21, 27, 28, 34, 35, 41];
    return {
        numbers,
        daysBeforeMonth,
        daysAfterMonth,
        daysInMonth,
        weekendIndex,
    };
}
