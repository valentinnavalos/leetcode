class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * Add Two Numbers
 *
 * You are given two non-empty linked lists repreenting two non-negative
 * integers. The digits are stored in reverse order, and each of their nodes
 * contains a single digit. Add the two numbers and return the sum as a
 * linked list
 *
 * You may assume the two numbers do not contain any leading zero, except
 * the number 0 itself.
 *
 * - Example 1:
 *      Input: l1 = [2,4,3], l2 = [5,6,4]
 *      Output: [7,0,8]
 *      Explanation: 342 + 465 = 807
 *
 * - Example 2:
 *      Input: l1 = [0], l2 = [0]
 *      Output: [0]
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const l1Numbers = extractNumbersFromLinkedList(l1);
  const l2Numbers = extractNumbersFromLinkedList(l2);

  const l1Value = parseInt(l1Numbers.join(""));
  const l2Value = parseInt(l2Numbers.join(""));
  const sum = l1Value + l2Value;

  const result = String(sum).split("").reverse();

  return recursiveCreateLinkedList(result);
};

const extractNumbersFromLinkedList = function (linkedList) {
  const numbers = [];
  let pivot = linkedList;
  
  while (pivot.next) {
    numbers.unshift(pivot.val);
    pivot = pivot.next;
  }

  numbers.unshift(pivot.val);
  return numbers;
};

const recursiveCreateLinkedList = function (values, curIdx = 0) {
  if (curIdx === values.length - 1) {
    return new ListNode(values[curIdx]); // last element
  }

  return new ListNode(
    values[curIdx],
    recursiveCreateLinkedList(values, curIdx + 1)
  );
};

/**
 * Iterate over the linkedList just printing the "val" values.
 *
 * @param {ListNode} linkedList
 */
const printLinkedList = function (linkedList) {
  let nodeCount = 0;
  let pivot = linkedList;

  while (pivot.next) {
    nodeCount++;
    console.log(`Node ${nodeCount}: ${pivot.val}`);
    pivot = pivot.next;
  }

  if (pivot.val) {
    nodeCount++;
    console.log(`Node ${nodeCount}: ${pivot.val}`);
  }
};

const main = function () {
  const l1 = recursiveCreateLinkedList([2, 4, 3]);
  const l2 = recursiveCreateLinkedList([5, 6, 4]);

  const response1 = addTwoNumbers(l1, l2);
  printLinkedList(response1);
};

main();
