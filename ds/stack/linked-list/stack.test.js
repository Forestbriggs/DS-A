const { Node, Stack } = require('./stack');

describe('Node works', () => {
    test('can be created', () => {
        const newNode = new Node(10);
        expect(newNode.value).toEqual(10);
        expect(newNode.next).toEqual(null);
    });
});

describe('Stack works', () => {
    let newStack;

    beforeEach(() => {
        newStack = new Stack();
    });

    test('can create stack', () => {
        expect(newStack.top).toEqual(null);
        expect(newStack.bottom).toEqual(null);
        expect(newStack.length).toEqual(0);
    });

    test('push works', () => {
        expect(newStack.top).toEqual(null);
        expect(newStack.bottom).toEqual(null);
        expect(newStack.length).toEqual(0);
        newStack.push(10);
        expect(newStack.top.value).toEqual(10);
        expect(newStack.bottom.value).toEqual(10);
        expect(newStack.length).toEqual(1);
    });

    test('pop works', () => {
        newStack.push(10);
        expect(newStack.pop()).toEqual(10);
        expect(newStack.top).toEqual(null);
        expect(newStack.bottom).toEqual(null);
        expect(newStack.length).toEqual(0);
    });

    test('peek works', () => {
        newStack.push(10);
        expect(newStack.peek()).toEqual(10);
    });

});