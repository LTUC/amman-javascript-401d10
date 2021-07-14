class BinaryTree {
  constructor(root) {
    this.root = root;
  }
  // root -> left -> right
  preOrder() {
    const result = [];
    const _traverse = (node) => {
      result.push(node.val);
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return result;
  }

  postOrder() {
    const result = [];
    const _traverse = (node) => {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      result.push(node.val);
    };
    _traverse(this.root);
    return result;
  }
  inOrder() {
    const result = [];
    const _traverse = (node) => {
      if (node.left) _traverse(node.left);
      result.push(node.val);
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return result;
  }
}

module.exports = BinaryTree;
