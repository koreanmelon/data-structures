import { LinkedList } from "../lib/LinkedList"
import "vanilla-latte-ts";
import { ClassTest, Test } from "vanilla-latte-ts/dist/Decorators";
import { assertEquals } from "vanilla-latte-ts/dist/Assert";

@ClassTest
class LinkedListTest {

    @Test
    testAdd() {
        let test = new LinkedList(2);

        assertEquals(2, test.head);
    }
}