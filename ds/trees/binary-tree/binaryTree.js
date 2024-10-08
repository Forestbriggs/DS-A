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
            return false;
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

        return false;
    }

    remove(value) {
        if (!this.root) {
            return undefined;
        }
        let currNode = this.root;
        let parentNode = null;
        while (currNode) {
            if (value < currNode.value) {
                parentNode = currNode;
                currNode = currNode.left;
            } else if (value > currNode.value) {
                parentNode = currNode;
                currNode = currNode.right;
            } else if (currNode.value === value) {

                if (currNode.right === null) {
                    if (parentNode === null) {
                        this.root = currNode;
                    } else {
                        // If parent > current value, make current
                        // left child a left child of parent
                        if (currNode.value < parentNode.value) {
                            parentNode.left = currNode.left;
                            // If parent < current value, make left
                            // child a right child of parent
                        } else {
                            parentNode.right = currNode.left;
                        }
                    }

                } else if (currNode.right.left === null) {
                    if (parentNode === null) {
                        this.root = currNode.left;
                    } else {
                        currNode.right.left = currNode.left;

                        if (currNode.value < parentNode.value) {
                            parentNode.left = currNode.right;
                        } else {
                            parentNode.right = currNode.right;
                        }
                    }
                } else {
                    // find the Right child's left most child
                    let leftmost = currNode.right.left;
                    let leftmostParent = currNode.right;
                    while (leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    // Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currNode.left;
                    leftmost.right = currNode.right

                    if (parentNode === null) {
                        this.root = leftmost;
                    } else {
                        if (currNode.value < parentNode.value) {
                            parentNode.left = leftmost;
                        } else {
                            parentNode.right = leftmost;
                        }
                    }
                }
                return true;
            }
        }
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