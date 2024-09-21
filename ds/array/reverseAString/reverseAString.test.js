const reverse = require('./reverseAString');

describe('reverse function works', () => {

    test('works with no input', () => {
        expect(reverse()).toEqual('need a valid string');
    });

    test('works with empty string', () => {
        expect(reverse('')).toEqual('need a valid string');
    });

    test('works with invalid input', () => {
        expect(reverse(2)).toEqual('need a valid string');
    })

    test('works with single letter', () => {
        expect(reverse('I')).toEqual('need a valid string');
    });

    test('properly reverses "Hello world"', () => {
        expect(reverse('Hello world')).toEqual('dlrow olleH');
    });

})