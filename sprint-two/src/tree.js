var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _(newTree).extend(treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(new Tree(value));
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



/*
 * Complexity: What is the time complexity of the above functions?
 */
