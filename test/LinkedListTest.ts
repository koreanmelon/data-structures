import { LinkedList } from "../lib/LinkedList"

import "vanilla-latte-ts";
import { ClassTest, Test } from "vanilla-latte-ts/dist/Decorators";
import { assertEquals } from "vanilla-latte-ts/dist/Assert";

@ClassTest
class LinkedListTest {

    @Test
    testPush() {
        let test = new LinkedList(2);
        assertEquals(2, test.head, "testPush", 0);
        
        test.push(3);
        assertEquals(3, test.tail?.head, "testPush", 0);
    }

    @Test
    testLength() {
        let test = new LinkedList(1);
        test.push(2);
        test.push(3);
        test.push(4);
        assertEquals(4, test.length, "length", 0);

    }

    @Test
    testGet() {
        let test = new LinkedList(1);
        test.push(2);
        test.push(3);
        test.push(4);

        assertEquals(2, test.get(1), "testGet", 0);
        assertEquals(4, test.get(3), "testGet", 0);
    }
}
