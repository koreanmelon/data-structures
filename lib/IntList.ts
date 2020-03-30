import util from "util";
import "./LinkedList";
import { LinkedList } from "./LinkedList";

export class IntList extends LinkedList {

    constructor(head: any);
    constructor(head: any, tail: LinkedList);
    constructor(head: number, tail?: IntList) {
        if (tail) {
            super(head, tail);
        } else {
            super(head);
        }
    }

    [util.inspect.custom]() {
        let repr = "IntList ["
        let tempList: LinkedList | any = this;
        while (tempList._tail != null) {
            repr += ` \x1b[33m${tempList._head}\x1b[0m,`;
            tempList = tempList._tail;
        }
        repr += ` \x1b[33m${tempList._head}\x1b[0m ]`;
        return repr;
    }

}
