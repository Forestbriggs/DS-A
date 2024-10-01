class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first.value;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue() {
        if (this.length === 0) {
            throw new Error('Queue is empty');
        }

        if (this.length === 1) {
            const holdingPointer = this.first;
            this.first = null;
            this.last = null;
            this.length = 0;
            return holdingPointer.value;
        }

        const holdingPointer = this.first;
        this.first = holdingPointer.next;
        this.length--;
        return holdingPointer.value;
    }

    isEmpty() {
        return this.length === 0;
    }
}

module.exports = {
    Node,
    Queue
}