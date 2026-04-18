/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let current=head;
    const seen = new Set()
    while(current != null){
        if(seen.has(current)){
            return true
        }else{
            seen.add(current)
        }
     current = current.next   
    }
    return false
};


//with map (but with set is better and and simpler)

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */
// var hasCycle = function(head) {
//     let current=head;
//     const seen = new Set()
//     while(current != null){
//         if(map.has(current)){
//             return true
//         }else{
//             map.set(current,true)
//         }
//      current = current.next   
//     }
//     return false
// };