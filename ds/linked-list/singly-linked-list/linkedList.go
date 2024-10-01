package main

import "fmt"

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

// figure out nested formatting for nodes
func main() {
	l := New()
	fmt.Println(l)
	l = l.append(10)
	fmt.Printf("head %v, tail %v, length %v\n", l.head, l.tail, l.length)
	l = l.append(20)
	fmt.Printf("head %v, tail %v, length %v\n", l.head, l.tail, l.length)
}
