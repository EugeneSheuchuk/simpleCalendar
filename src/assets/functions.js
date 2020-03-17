export function prepareDataForMonth (currentYear, month) {
    const dayInMonth = 33 - new Date(currentYear, month, 33).getDate();
    const firstDayInMonth = new Date(currentYear, month, 1).getDay();
    const numbers = [];
    for (let i = 0; i < 42; i++) {
        if (i <= firstDayInMonth) {
            numbers.push(new Date(currentYear, month, 1 - (firstDayInMonth - i)).getDate());
        } else if (i > firstDayInMonth && i < firstDayInMonth + dayInMonth) {
            numbers.push(i - firstDayInMonth + 1);
        } else {
            numbers.push(new Date(currentYear, month, (i - firstDayInMonth + 1)).getDate());
        }
    }
    return numbers;
}

