/// <reference types="node" />
import util from "util";
import "./LinkedList";
import { LinkedList } from "./LinkedList";
export declare class IntList extends LinkedList {
    constructor(head: any);
    constructor(head: any, tail: LinkedList);
    [util.inspect.custom](): string;
}
