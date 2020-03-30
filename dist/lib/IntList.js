"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __importDefault(require("util"));
require("./LinkedList");
const LinkedList_1 = require("./LinkedList");
class IntList extends LinkedList_1.LinkedList {
    constructor(head, tail) {
        if (tail) {
            super(head, tail);
        }
        else {
            super(head);
        }
    }
    [util_1.default.inspect.custom]() {
        let repr = "IntList [";
        let tempList = this;
        while (tempList._tail != null) {
            repr += ` \x1b[33m${tempList._head}\x1b[0m,`;
            tempList = tempList._tail;
        }
        repr += ` \x1b[33m${tempList._head}\x1b[0m ]`;
        return repr;
    }
}
exports.IntList = IntList;
