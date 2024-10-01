const { Node, Queue } = require('./queue');

describe('Node works', () => {
    test('can be created', () => {
        const newNode = new Node(10);
        expect(newNode.value).toEqual(10);
        expect(newNode.next).toEqual(null);
    });
});

describe('Queue works', () => {
    let newQueue;

    beforeEach(() => {
        newQueue = new Queue();
    });

    test('can create queue', () => {
        expect(newQueue.first).toEqual(null);
        expect(newQueue.last).toEqual(null);
        expect(newQueue.length).toEqual(0);
    });

    test('enqueue works', () => {
        expect(newQueue.first).toEqual(null);
        expect(newQueue.last).toEqual(null);
        expect(newQueue.length).toEqual(0);
        newQueue.enqueue(10);
        expect(newQueue.first.value).toEqual(10);
        expect(newQueue.last.value).toEqual(10);
        expect(newQueue.length).toEqual(1);
    });

    test('enqueue works with multiple elements', () => {
        newQueue.enqueue(10);
        newQueue.enqueue(20);
        newQueue.enqueue(30);
        expect(newQueue.first.value).toEqual(10);
        expect(newQueue.last.value).toEqual(30);
        expect(newQueue.length).toEqual(3);
    });

    test('dequeue works', () => {
        newQueue.enqueue(10);
        expect(newQueue.dequeue()).toEqual(10);
        expect(newQueue.first).toEqual(null);
        expect(newQueue.last).toEqual(null);
        expect(newQueue.length).toEqual(0);
    });

    test('dequeue works with multiple elements', () => {
        newQueue.enqueue(10);
        newQueue.enqueue(20);
        newQueue.enqueue(30);
        expect(newQueue.dequeue()).toEqual(10);
        expect(newQueue.first.value).toEqual(20);
        expect(newQueue.last.value).toEqual(30);
        expect(newQueue.length).toEqual(2);
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