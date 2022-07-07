/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const n = l1.length > l2.length ? l1.length : l2.length, arr = []
    let sum_n = 0
    for (let index = n - 1; index >= 0; index--) {
        // console.log(l1[index] * Math.pow(10, index),l2[index] * Math.pow(10, index) );
        if (l1[index] != undefined) {
            sum_n += l1[index] * Math.pow(10, index)
        }
        if (l2[index] != undefined) {
            sum_n += l2[index] * Math.pow(10, index)
        }
    }
    while (sum_n != 0) {
        arr.unshift(sum_n % 10);
        sum_n = Math.trunc(sum_n / 10);
    }
    return arr
};

// @lc code=end

