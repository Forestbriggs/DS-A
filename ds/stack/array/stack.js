class Stack {
    constructor() {
        this.array = [];
    }

    peek() {
        return this.array[this.array.length - 1];
    }

    push(value) {
        this.array.push(value);
        return this;
    }

    pop() {
        const poppedValue = this.array.pop();
        return poppedValue;
    }
}

// const stack = new Stack();
// stack.push('google');
// stack.push('udemy')
// stack.push('discord')
// console.log(stack)
// stack.pop();
// stack.pop()
// console.log(stack.pop())
// console.log(stack)

module.exports = Stack;