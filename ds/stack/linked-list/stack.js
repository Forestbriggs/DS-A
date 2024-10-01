class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top.value;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.length) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null
        }

        const holdingPointer = this.top;
        this.top = holdingPointer.next;
        this.length--;
        return holdingPointer.value;
    }
};

// const stack = new Stack();
// stack.push('google');
// stack.push('udemy')
// stack.push('discord')
// stack.pop();
// stack.pop()
// console.log(stack.pop())
// console.log(stack)

module.exports = {
    Node,
    Stack
}