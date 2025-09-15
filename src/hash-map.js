import { LinkedList } from './linkedList.js';
export class HashMap {
    constructor(capacity = 16, loadFactor = 0.75) {
        this.capacity = capacity;
        this.loadFactor = loadFactor;
        this.buckets = new Array(capacity);
        this.size = 0;

        // Initialize the buckets with LinkedList instances
        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = new LinkedList();
        }
    }
    #isLoaded() {
        return this.capacity * this.loadFactor <= this.size;
    }

    #resize(upOrDown = 'up') {
        let newCapacity = 0;
        if (upOrDown === 'down') {
            newCapacity = Math.ceil(this.capacity / 1.5);
        } else {
            newCapacity = Math.floor(this.capacity * 1.5);
        }
        let bucketsResized = new Array(newCapacity)
        let keysBackup = this.entries()
        for (let i = 0; i < bucketsResized.length; i++) {
            bucketsResized[i] = new LinkedList();
        }
        this.capacity = newCapacity
        this.size = 0
        for (let i = 0; i < keysBackup.length; i++) {
            const index = this.#hash(keysBackup[i][0]);
            bucketsResized[index].insert(keysBackup[i][0], keysBackup[i][1]);
            this.size++;
        }
        this.buckets = bucketsResized
    }

    #hash(key) {
        let hash = 0;
        for (const char of key) {
            hash = (hash * 31 + char.codePointAt(0)) % this.capacity;
        }
        return hash;
    }
    set(key, value) {
        if (typeof key !== 'string') {
            throw new TypeError('La clave debe ser un string');
        }
        if (typeof value !== 'string') {
            throw new TypeError('El valor debe ser un string');
        }
        if (this.has(key)) {
            throw new Error('La clave ya existe');
        }
        const index = this.#hash(key);
        this.buckets[index].insert(key, value);
        this.size++;
        if (this.#isLoaded()) {
            this.#resize('up')
        }
    }

    get(key) {
        let result = this.entries().find(el => el[0] === key)
        return result ? result[1] : null
    }
    has(key) {
        return this.entries().some(el => el[0] === key)
    }

    remove(key) {
        if(this.has(key)) {
            const index = this.#hash(key);
            this.buckets[index].delete(key)
            this.size--
            /* if (!this.#isLoaded()) {
                this.#resize('down')
            } */
            return true
        } else {
            return false
        }
    }

    length() {
        return this.size
    }

    clear() {
        this.capacity = 16
        this.size = 0
        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = new LinkedList();
        }
    }

    keys() {
        return this.entries().map((el) => el[0])
    }
    values() {
        return this.entries().map((el) => el[1])
    }
    entries() {
        const all = [];
        for (const bucket of this.buckets) {
            let current = bucket.head;
            while (current) {
                all.push([current.key, current.value]);
                current = current.next;
            }
        }
        return all;
    }
}
