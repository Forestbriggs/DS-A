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
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }
    }

    lookup(value) {
        return this.head;
    }

    delete(value) {

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

const newNode = new Node();

// const list = new SinglyLinkedList(10)

module.exports = {
    SinglyLinkedList,
    Node
}