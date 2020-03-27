"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = require("../lib/LinkedList");
require("vanilla-latte-ts");
const Decorators_1 = require("vanilla-latte-ts/dist/Decorators");
const Assert_1 = require("vanilla-latte-ts/dist/Assert");
let LinkedListTest = class LinkedListTest {
    testPush() {
        var _a;
        let test = new LinkedList_1.LinkedList(2);
        Assert_1.assertEquals(2, test.head, "testPush", 0);
        test.push(3);
        Assert_1.assertEquals(3, (_a = test.tail) === null || _a === void 0 ? void 0 : _a.head, "testPush", 0);
    }
    testLength() {
        let test = new LinkedList_1.LinkedList(1);
        test.push(2);
        test.push(3);
        test.push(4);
        Assert_1.assertEquals(4, test.length(), "length", 0);
    }
    testGet() {
        let test = new LinkedList_1.LinkedList(1);
        test.push(2);
        test.push(3);
        test.push(4);
        Assert_1.assertEquals(2, test.get(1), "testGet", 0);
        Assert_1.assertEquals(4, test.get(3), "testGet", 0);
    }
};
__decorate([
    Decorators_1.Test,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LinkedListTest.prototype, "testPush", null);
__decorate([
    Decorators_1.Test,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LinkedListTest.prototype, "testLength", null);
__decorate([
    Decorators_1.Test,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LinkedListTest.prototype, "testGet", null);
LinkedListTest = __decorate([
    Decorators_1.ClassTest
], LinkedListTest);
