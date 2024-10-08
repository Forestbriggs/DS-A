const { BinaryTreeNode, BinarySearchTree } = require('./binaryTree');

describe('BinaryTreeNode works', () => {
    test('can be created', () => {
        const newNode = new BinaryTreeNode(10);
        expect(newNode.value).toEqual(10);
        expect(newNode.left).toEqual(null);
        expect(newNode.right).toEqual(null);
    });
});

describe('BinarySearchTree works', () => {
    let newTree;

    beforeEach(() => {
        newTree = new BinarySearchTree();
    });

    test('can create tree', () => {
        expect(newTree.root).toEqual(null);
    });

    test('insert works', () => {
        expect(newTree.root).toEqual(null);
        newTree.insert(10);
        expect(newTree.root.value).toEqual(10);
        expect(newTree.root.left).toEqual(null);
        expect(newTree.root.right).toEqual(null);
    });

    test('insert works with left child', () => {
        newTree.insert(10);
        newTree.insert(5);
        expect(newTree.root.value).toEqual(10);
        expect(newTree.root.left.value).toEqual(5);
        expect(newTree.root.right).toEqual(null);
    });

    test('insert works with right child', () => {
        newTree.insert(10);
        newTree.insert(5);
        newTree.insert(30);
        expect(newTree.root.value).toEqual(10);
        expect(newTree.root.left.value).toEqual(5);
        expect(newTree.root.right.value).toEqual(30);
    });

    test('insert works with multiple children', () => {
        newTree.insert(10);
        newTree.insert(5);
        newTree.insert(30);
        newTree.insert(2);
        newTree.insert(50);
        expect(newTree.root.value).toEqual(10);
        expect(newTree.root.left.value).toEqual(5);
        expect(newTree.root.right.value).toEqual(30);
        expect(newTree.root.left.left.value).toEqual(2);
        expect(newTree.root.right.right.value).toEqual(50);
    });

    test('lookup works with empty tree', () => {
        expect(newTree.lookup(60)).toEqual(undefined);
    });

    test('lookup works with multiple children', () => {
        newTree.insert(10);
        newTree.insert(5);
        newTree.insert(30);
        newTree.insert(2);
        newTree.insert(50);
        expect(newTree.lookup(10)).toEqual(true);
        expect(newTree.lookup(5)).toEqual(true);
        expect(newTree.lookup(30)).toEqual(true);
        expect(newTree.lookup(2)).toEqual(true);
        expect(newTree.lookup(50)).toEqual(true);
        expect(newTree.lookup(60)).toEqual(undefined);
    });
});