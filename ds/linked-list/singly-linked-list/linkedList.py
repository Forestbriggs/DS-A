class Node():
    def __init__(self, value):
        self.value = value
        self.next = next


class LinkedList():
    def __init__(self, value):
        self.head = Node(value)
        self.tail = self.head
        self.length = 1
