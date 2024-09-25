
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        if (index > this.length || index < 0) {
            throw new Error('index out of range');
        }

        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }

        // * grabs index before insertion
        const prev = this.traverseToIndex(index - 1);
        // * grabs index to come after insertion
        const after = prev.next;
        const newNode = new Node(value);
        // * sticks newNode at goal index, between the prev and after nodes
        prev.next = newNode;
        newNode.next = after;
        this.length++;
        return this;
    }

    traverseToIndex(index) {
        if (index > this.length || index < 0) {
            throw new Error('index out of range');
        }

        let currNode = this.head;

        for (let i = 0; i < index; i++) {
            currNode = currNode.next;
        };

        return currNode;
    }

    lookup(value) {

    }

    remove(index) {
        if (index >= this.length || index < 0) {
            throw new Error('index out of range');
        }

        if (index === 0) {
            const nodeToDelete = this.head;
            const newHead = nodeToDelete.next;
            this.head = newHead;
            this.length--
            return this;
        }

        // * grab index before removal
        const prev = this.traverseToIndex(index - 1);
        const nodeToDelete = prev.next;
        prev.next = nodeToDelete.next;
        this.length--
        return this;
    }

    printList() {
        const array = [];
        let currNode = this.head;
        while (currNode != null) {
            array.push(currNode.value);
            currNode = currNode.next;
        }
        return array;
    }
}

module.exports = {
    SinglyLinkedList,
    Node
}