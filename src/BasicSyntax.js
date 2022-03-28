export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    for (let j = 0; j < str.length; j++) {
        if (roman[str[j]] < roman[str[j + 1]]) {
            result = result - roman[str[j]];
        } else {
            result = result + roman[str[j]];
        }
    }

    return result;
}
