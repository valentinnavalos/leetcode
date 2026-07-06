/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}

 Complexity: O(n + m)
 */
var mergeTwoLists = function (list1, list2) {
  let pivot1 = list1;
  let pivot2 = list2;

  let resultHead = new ListNode();
  let pivotResult = resultHead;

  // iterate over the lists
  while (pivot1 !== null && pivot2 !== null) {
    if (pivot1.val > pivot2.val) {
      pivotResult.next = pivot2;
      pivot2 = pivot2.next;
    } else {
      pivotResult.next = pivot1;
      pivot1 = pivot1.next;
    }

    pivotResult = pivotResult.next;
  }

  // check if there is something pending in either of the lists.

  if (pivot1) {
    pivotResult.next = pivot1;
  }

  if (pivot2) {
    pivotResult.next = pivot2;
  }

  return resultHead.next;
};
