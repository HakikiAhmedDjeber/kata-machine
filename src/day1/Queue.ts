type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    // add a new itme (at the tail of course)

    enqueue(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.tail || !this.tail) {
            this.head = this.tail = node;
        }

        this.tail.next = node;
        this.tail = node;
    }

    // remove item (the first itme head FIFO)
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;
        const head = this.head;
        this.head = this.head?.next;

        // if there is no garbge collecter we need to free the memorie (not in javascript or modern language)

        return head.value;
    }

    // peek value from the queue (the first itme of cours FIFO)

    peek(): T | undefined {
        return this.head?.value;
    }
}
