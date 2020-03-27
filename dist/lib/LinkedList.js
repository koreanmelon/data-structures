"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LinkedList {
    constructor(head, tail) {
        this._head = head;
        this._tail = tail;
    }
    get head() { return this._head; }
    set head(v) { this._head = v; }
    get tail() { return this._tail; }
    set tail(v) { this._tail = v; }
    length() {
        let tempList = this;
        let count = 0;
        while (tempList != null) {
            tempList = tempList._tail;
            count += 1;
        }
        return count;
    }
    push(value) {
        let tempList = this;
        while (tempList._tail != null) {
            tempList = tempList._tail;
        }
        tempList._tail = new LinkedList(value);
    }
    get(index) {
        if (index >= this.length()) {
            throw new Error("Index out of bounds.");
        }
        let tempList = this;
        while (index != 0) {
            index -= 1;
            tempList = tempList._tail;
        }
        return tempList._head;
    }
}
exports.LinkedList = LinkedList;
