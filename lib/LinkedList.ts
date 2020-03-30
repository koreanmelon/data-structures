import { List } from "./List";
import util from "util";

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

    length() {
        let tempList: any = this;
        let count = 0;
        while (tempList != null) {
            tempList = tempList._tail;
            count += 1;
        }
        return count;
    }

    push(value: any): void {
        let tempList: any = this;
        while (tempList._tail != null) {
            tempList = tempList._tail;
        }
        tempList._tail = new LinkedList(value);
    }

    get(index: number) {
        if (index >= this.length()) {
            throw new Error("Index out of bounds.");
        }
        let tempList: any = this;
        while (index != 0) {
            index -= 1;
            tempList = tempList._tail;
        }
        return tempList._head;
    }

    [util.inspect.custom]() {
        let repr = "LinkedList ["
        let tempList: LinkedList | any = this;
        while (tempList._tail != null) {
            repr += ` ${tempList._head},`;
            tempList = tempList._tail;
        }
        repr += ` ${tempList._head} ]`;
        return repr;
    }

}
