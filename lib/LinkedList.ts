import { List } from "./List";

export class LinkedList implements List {


    private _head: any;

    private _tail: LinkedList | undefined;
    
    constructor(head: any);
    constructor(head: any, tail: LinkedList);
    constructor(head: any, tail?: LinkedList) {
        this._head = head;
        this._tail = tail;
    }

    public get head(): any { return this._head; }
    public set head(v: any) { this._head = v; }
    public get tail(): LinkedList | undefined { return this._tail; }
    public set tail(v: LinkedList | undefined) { this._tail = v; }

    push(value: any): void {
        let tempList = this._tail ? this._tail : new LinkedList(0);
        while (tempList._tail != null) {
            tempList = tempList._tail;
        }
        tempList._head = value;
    }
    get(index: number) {
        let tempList = this._tail ? this._tail : new LinkedList(0);
        while (tempList._tail != null) {
            tempList = tempList._tail;
        }
        return tempList._head;
    }

}