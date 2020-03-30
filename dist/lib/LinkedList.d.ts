/// <reference types="node" />
import { List } from "./List";
import util from "util";
export declare class LinkedList implements List {
    private _head;
    private _tail;
    constructor(head: any);
    constructor(head: any, tail: LinkedList);
    get head(): any;
    set head(v: any);
    get tail(): LinkedList | undefined;
    set tail(v: LinkedList | undefined);
    length(): number;
    push(value: any): void;
    get(index: number): any;
    [util.inspect.custom](): string;
}
