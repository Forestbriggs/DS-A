const reverse = require('./reverseAString');

describe('reverse function works', () => {

    test('works with no input', () => {
        expect(reverse('')).toEqual('');
    });

    test('properly reverses "Hello world"', () => {
        expect(reverse('Hello world')).toEqual('dlrow olleH')
    });

    test('works with single letter', () => {
        expect(reverse('I')).toEqual('I')
    });
})