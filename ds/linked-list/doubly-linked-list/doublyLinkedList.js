const { Node } = require('../singly-linked-list/linkedList');

class DoubleNode extends Node {
    constructor(value) {
        super(value);
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = new DoubleNode(value);
        this.tail = this.head;
        this.length = 1;
    };

    append(value) {
        const newNode = new DoubleNode(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const oldHead = this.head;
        const newHead = new DoubleNode(value);
        oldHead.prev = newHead;
        newHead.next = oldHead;
        this.head = newHead;
        this.length++;
        return this;
    }

    insert(index, value) {
        if (index === 0) {
            return this.prepend(value);
        }

        if (index > this.length || index < 0) {
            throw new Error('index out of range');
        }

        const newNode = new DoubleNode(value);
        // * grab index before insertion
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        return this;
    }

    remove(index) {
        if (index > this.length || index < 0) {
            throw new Error('index out of range');
        }

        if (index === 0) {
            const toBeDeleted = this.head;
            const newHead = toBeDeleted.next;
            this.head = newHead;
            newHead.prev = null;
            this.length--;
            return this;
        }

        // * grab index before removal
        const leader = this.traverseToIndex(index - 1);
        const toBeDeleted = leader.next;
        const follower = toBeDeleted.next;
        leader.next = follower;
        follower.prev = leader;
        this.length--;
        return this;
    }

    lookup(value) {
    }

    traverseToIndex(index) {
        if (index > this.length || index < 0) {
            throw new Error('index out of range');
        };

        const halfwayMark = this.length - 1;
        if (index < halfwayMark) {
            return this.traverseFromHead(index);
        } else {
            return this.traverseFromTail(index);
        }
    }

    traverseFromHead(index) {
        if (index > this.length || index < 0) {
            throw new Error('index out of range');
        };

        let currNode = this.head;

        for (let i = 0; i < index; i++) {
            currNode = currNode.next
        }

        return currNode
    }

    traverseFromTail(index) {
        if (index > this.length || index < 0) {
            throw new Error('index out of range');
        };

        let currNode = this.tail;
        for (let i = this.length - 1; i > index; i--) {
            currNode = currNode.prev;
        }

        return currNode;
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
    DoublyLinkedList,
    DoubleNode
};