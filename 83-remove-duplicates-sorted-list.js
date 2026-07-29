/**
 * 
 * Instructions:
 * 
 * Given the head of a sorted linked list, delete all duplicates such that each
 * element appears only once. Return the linked list sorted as well.
 * 
 * ---
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  const existing = new Set();
  const dummy = new ListNode(0, head);
  let pivot = dummy;

  while (pivot && pivot.next) {
    if (existing.has(pivot.next.val)) {
      pivot.next = pivot.next.next;
    } else {
      existing.add(pivot.next.val);
      pivot = pivot.next;
    }
  }

  return dummy.next;
};
