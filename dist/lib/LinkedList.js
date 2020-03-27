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
    push(value) {
        let tempList = this._tail ? this._tail : new LinkedList(0);
        while (tempList._tail != null) {
            tempList = tempList._tail;
        }
        tempList._head = value;
    }
    get(index) {
        let tempList = this._tail ? this._tail : new LinkedList(0);
        while (tempList._tail != null) {
            tempList = tempList._tail;
        }
        return tempList._head;
    }
}
exports.LinkedList = LinkedList;
