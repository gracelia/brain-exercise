(function main() {
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
  function preorderTranverse(root) {
    let res = [];
    return res;
  }
  
}());


// test cases
Test1
let root = new TreeNode(1);
  root.left = new TreeNode(2)
  root.left.left = new TreeNode(3);
  root.left.right = new TreeNode(4);
  root.right = new TreeNode(5);
  root.right.right = new TreeNode(6)
  root.right.right.left = new TreeNode(7)
  root.right.right.right = new TreeNode(8)
  const result = preorderTranverse(root)
  // const result = inorderTranverse(root)
  // const result = postorderTranvser(root)
  console.log(result.join(','))

// Test2
// let root = null;

// function preorderTranverse(root) {
//   let res = [];
//   if (!root) return res;
//   let stack = [];
//   let node = root;
//   while(stack.length > 0 || node) {
//       while(node) {
//           res.push(node.val);
//           stack.push(node);
//           node = node.left
//       }
//       node = stack.pop()
//       node = node.right
//   }
//   return res;
// }

// recursion
// function preorderTranverse(root) {
//   let res = [];
//   function preOrder(node) {
//       if (node) {
//           res.push(node.val);
//           preOrder(node.left);
//           preOrder(node.right)
//       }

//   }

//   preOrder(root);
//   return res;
// }


// function inorderTranverse(root) {
//   let res = [];
//   return res;
// }
// function postorderTranvser(root) {
//   let res = [];
//   return res;
// }