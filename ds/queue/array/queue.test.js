const Queue = require('./queue');

describe('Queue works', () => {
    let newQueue;

    beforeEach(() => {
        newQueue = new Queue();
    });

    test('can create queue', () => {
        expect(newQueue.array).toEqual([]);
    });

    test('enqueue works', () => {
        expect(newQueue.array).toEqual([]);
        newQueue.enqueue(10);
        expect(newQueue.array).toEqual([10]);
        newQueue.enqueue(20);
        expect(newQueue.array).toEqual([20, 10]);
    });

    test('enqueue works with multiple elements', () => {
        newQueue.enqueue(10);
        newQueue.enqueue(20);
        newQueue.enqueue(30);
        expect(newQueue.array).toEqual([30, 20, 10]);
    });

    test('dequeue works', () => {
        newQueue.enqueue(10);
        expect(newQueue.dequeue()).toEqual(10);
        expect(newQueue.array).toEqual([]);
    });

    test('dequeue works with multiple elements', () => {
        newQueue.enqueue(10);
        newQueue.enqueue(20);
        newQueue.enqueue(30);
        expect(newQueue.dequeue()).toEqual(10);
        expect(newQueue.array).toEqual([30, 20]);
    });

    test('dequeue catches empty queue', () => {
        expect(() => newQueue.dequeue()).toThrow();
    });

    test('peek works', () => {
        newQueue.enqueue(10);
        expect(newQueue.peek()).toEqual(10);
    });

    test('isEmpty works', () => {
        expect(newQueue.isEmpty()).toEqual(true);
        newQueue.enqueue(10);
        expect(newQueue.isEmpty()).toEqual(false);
    });

});