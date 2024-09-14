class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }

    get(index) {
        if (this.length > 0) {
            return this.data[index];
        } else {
            return undefined;
        }
    }

    push(item) {
        this.data[this.length] = item
        this.length++
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return lastItem
    }
}

const newArr = new MyArray()
newArr.push('hi')
newArr.push('you')
console.log(newArr)
newArr.pop()
console.log(newArr)