//输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

function printListFromTailToHead(head) {
    var arr = []
    if(!head){return arr}
    arr.push(head.val)
    var node = head
    while(node.next) {
        arr.push(node.next.val)
        node = node.next
    }
    return arr.reverse()
}
