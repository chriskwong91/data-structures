var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  _(newTree).extend(treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = new Tree(value);
  newTree.parent = this;
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
	found = false;

	var findTarget = function (tree) {
		if (tree.value === target) {
			found = true;
			return;
		}
		if (tree.children.length !== 0) {
			for (var i = 0; i < tree.children.length; i++) {
				findTarget(tree.children[i]);
			}
		}
	};
	findTarget(this);
	return found;
};

treeMethods.removeFromParent = function(child) {
  pchild = child.parent.children;
  pchild.splice(pchild.indexOf(child), 1);
  child.parent = null;
};

treeMethods.traverse = function(callback, children) {

  var children = children || [this];

  for (var i = 0; i < children.length; i++) {
    callback(children[i].value);
    this.traverse(callback, children[i].children);
  }


};


/*
 * Complexity: What is the time complexity of the above functions?
 */
