package main

import (
	"fmt"
	"log"
)

type Node struct {
	value int
	next  *Node
}

type LinkedList struct {
	head   *Node
	tail   *Node
	length int
}

func New() LinkedList {
	return LinkedList{nil, nil, 0}
}

func (l LinkedList) append(value int) LinkedList {
	newNode := Node{value, nil}
	if l.tail == nil {
		l.tail = &newNode
		l.head = &newNode
		l.length++
		return l
	}
	l.tail.next = &newNode
	l.tail = &newNode
	l.length++
	return l
}

func (l LinkedList) prepend(value int) LinkedList {
	newNode := Node{value, nil}
	newNode.next = l.head
	l.head = &newNode
	l.length++
	return l
}

func (l LinkedList) insert(index, value int) LinkedList {
	if index > l.length || index < 0 {
		log.Fatalln("index out of range")
	}

	if index == 0 {
		l = l.prepend(value)
		return l
	}

	prev := l.traverseToIndex(index - 1)
	after := prev.next
	newNode := Node{value, nil}
	prev.next = &newNode
	newNode.next = after
	l.length++
	return l
}

func (l LinkedList) traverseToIndex(index int) *Node {
	if index > l.length || index < 0 {
		log.Fatalln("index out of range")
	}

	currNode := l.head

	for i := 0; i < index; i++ {
		currNode = currNode.next
	}

	return currNode
}

func (l LinkedList) reverse() LinkedList {
	if l.length == 1 {
		return l
	}

	i := 1

	for i < l.length {
		oldHead := l.head
		leader := l.traverseToIndex(i - 1)
		newHead := leader.next
		leader.next = newHead.next
		l.head = newHead
		newHead.next = oldHead
		i++
	}

	return l
}

func (l LinkedList) printList() {
	arr := []int{}
	currNode := l.head
	for currNode != nil {
		arr = append(arr, currNode.value)
		currNode = currNode.next
	}
	fmt.Printf("%v\n", arr)
}

func main() {
	l := New()
	l.printList()
	l = l.append(10)
	l.printList()
	l = l.append(20)
	l.printList()
	l = l.prepend(99)
	l.printList()
	l = l.insert(0, 1000)
	l.printList()
	l = l.insert(3, 900)
	l.printList()
	l = l.reverse()
	l.printList()
}
