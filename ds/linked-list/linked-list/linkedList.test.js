const { SinglyLinkedList, Node } = require('./linkedList');

describe('Node works', () => {

    test('Node can be created', () => {
        const newNode = new Node(10);
        expect(newNode.value).toEqual(10);
        expect(newNode.next).toEqual(null)
    })

})

describe('Singly Linked list works', () => {
    let newList;

    beforeEach(() => {
        newList = new SinglyLinkedList(10);
    })

    // separate tests ?
    test('can create linked list', () => {
        expect(newList.head instanceof Node).toBe(true);
        expect(newList.head.value).toEqual(10);
        expect(newList.head.next).toEqual(null);
        expect(newList.tail).toEqual(newList.head);
        expect(newList.length).toEqual(1);
    });

    test('append works', () => {
        expect(newList.head.next).toBeNull()
        newList.append(20);
        expect(newList.length).toEqual(2)
        expect(newList.head.next).not.toBeNull()
        expect(newList.tail.value).toEqual(20)
    });

    test('prepend works', () => {
        const oldHead = newList.head;
        newList.prepend(27);
        expect(newList.head.value).toEqual(27);
        expect(newList.head.next).toEqual(oldHead);
        expect(newList.tail).toEqual(oldHead);
    });

    test('insert works with 0 index', () => {
        const oldHead = newList.head;
        newList.insert(0, 30);
        expect(newList.head.value).toEqual(30);
        expect(newList.head.next).toEqual(oldHead);
        expect(newList.tail).toEqual(oldHead);
    });

    test('insert works normally', () => {
        newList.append(20);
        newList.append(30);
        newList.append(40);
        expect(newList.printList()).toEqual([10, 20, 30, 40]);
        newList.insert(2, 90);
        expect(newList.printList()).toEqual([10, 20, 90, 30, 40]);
    });

    test('insert catches out of range index', () => {
        expect(() => newList.insert(1000, 90)).toThrow();
    })
})