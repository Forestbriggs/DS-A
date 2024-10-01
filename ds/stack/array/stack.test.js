const Stack = require('./stack');

describe('Stack works', () => {
    let newStack;

    beforeEach(() => {
        newStack = new Stack();
    });

    test('can create stack', () => {
        expect(newStack.array).toEqual([]);
    });

    test('push works', () => {
        expect(newStack.array).toEqual([]);
        newStack.push(10);
        expect(newStack.array).toEqual([10]);
        newStack.push(20);
        expect(newStack.array).toEqual([10, 20]);
    });

    test('pop works', () => {
        newStack.push(10);
        expect(newStack.pop()).toEqual(10);
        expect(newStack.array).toEqual([]);
    });

    test('peek works', () => {
        newStack.push(10);
        expect(newStack.peek()).toEqual(10);
    });

});