import { Node } from './node.js';
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    insert(key, value) {
        const newNode = new Node(key, value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    delete(key) {
        let current = this.head;
        let previous = null;
        while (current) {
            if (current.key === key) {
                if (previous) {
                    previous.next = current.next;
                } else {
                    this.head = current.next;
                }
                this.size--;
            }
            previous = current;
            current = current.next;
        }
    }
}

export { LinkedList };