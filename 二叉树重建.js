//输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin){
    var tree = getNode(pre,vin)
    return tree
}
function getNode(pre, vin){
    if(!pre||pre.length==0){
        return pre
    }else if(pre.length === 1) {
            var lastTree = new TreeNode(pre[0]);
            return lastTree;
    }
    else{
        var rootnode = pre[0]
        var index = vin.indexOf(rootnode)
        var pnode = new TreeNode(rootnode)
        var leftnodevin = vin.slice(0,index)
        var leftnodepre = pre.slice(1,index+1)
        var leftnode = getNode(leftnodepre,leftnodevin)
        if(leftnode.val){
            pnode.left = leftnode
        }
        var rightnodepre = pre.slice(index+1)
        var rightnodevin = vin.slice(index+1)
        var rightnode = getNode(rightnodepre,rightnodevin)
        if(rightnode.val){
            pnode.right = rightnode
        }
        return pnode
    }
}