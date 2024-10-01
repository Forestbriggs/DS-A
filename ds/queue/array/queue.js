class Queue {
    constructor() {
        this.array = [];
    }

    peek() {
        return this.array[this.array.length - 1];
    }

    enqueue(value) {
        this.array.unshift(value);
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        const popped = this.array.pop();
        return popped;
    }

    isEmpty() {
        return this.array.length === 0;
    }
}

module.exports = Queue;
