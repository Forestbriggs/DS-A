class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new BinaryTreeNode(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let currNode = this.root;
        while (currNode) {
            if (newNode.value < currNode.value) {
                if (currNode.left === null) {
                    currNode.left = newNode;
                    return this;
                } else {
                    currNode = currNode.left;
                }
            } else {
                if (currNode.right === null) {
                    currNode.right = newNode;
                    return this;
                } else {
                    currNode = currNode.right;
                }
            }
        }

        return this;
    }

    lookup(value) {
        if (!this.root) {
            return undefined;
        }

        let currNode = this.root;
        while (currNode) {
            if (currNode.value === value) {
                return true;
            } else if (currNode.value > value) {
                currNode = currNode.left;
            } else {
                currNode = currNode.right;
            }
        }

        return undefined;
    }

    remove(value) {

    }
}

// const tree = new BinarySearchTree();
// tree.insert(9);
// tree.insert(4);
// tree.insert(6);
// tree.insert(20);
// tree.insert(170);
// tree.insert(15);
// tree.insert(1);
// console.log(JSON.stringify(traverse(tree.root)));
//       9
//   4      20
// 1   6  15  170
function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

module.exports = {
    BinaryTreeNode,
    BinarySearchTree
}