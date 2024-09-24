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

    // seperate tests ?
    test('can create linked list', () => {
        // const newList = new SinglyLinkedList(10);
        expect(newList.head instanceof Node).toBe(true);
        expect(newList.head.value).toEqual(10);
        expect(newList.head.next).toEqual(null);
        expect(newList.tail).toEqual(newList.head);
        expect(newList.length).toEqual(1);
    });

    test('append works', () => {
        expect(newList.head.next).toBeNull()
        newList.append(20);
        expect(newList.head.next).not.toBeNull()
        // expand on tests
    })
})