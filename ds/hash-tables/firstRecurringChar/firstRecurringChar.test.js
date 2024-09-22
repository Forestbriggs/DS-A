const firstRecurringChar = require('./firstRecurringChar');

describe('firstRecurringChar works', () => {

    test('works with no recurrence', () => {
        const arr = [2, 3, 4, 5];
        expect(firstRecurringChar(arr)).toBeUndefined()
    })

    test('works with empty array', () => {
        const arr = []
        expect(firstRecurringChar(arr)).toBeUndefined()
    })

    test('works with single element', () => {
        const arr = [1]
        expect(firstRecurringChar(arr)).toBeUndefined()
    })

    test('works with basic recurrence', () => {
        const arr = [2, 5, 1, 2, 3, 5, 1, 2, 4]
        expect(firstRecurringChar(arr)).toEqual(2)
    })

    test('works with immediate recurrence', () => {
        const arr = [2, 2, 4, 5]
        expect(firstRecurringChar(arr)).toEqual(2)
    })

    test('works with large gap', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 10, 1]
        expect(firstRecurringChar(arr)).toEqual(1)
    })
});