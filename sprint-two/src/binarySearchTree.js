var BinarySearchTree = function(value) {

  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  var branch = new BinarySearchTree(value);

  var findPos = function(node) {
    var nodeVal = node.value;
    var right = node.right;
    var left = node.left;

    if (value > nodeVal && right === null) {
      node.right = branch;
    } else if (value > nodeVal) {
      findPos(right);
    }

    if (value < nodeVal && left === null) {
      node.left = branch;
    }else if (value < nodeVal){
      findPos(left);
    }

  };
  findPos(this);
};

BinarySearchTree.prototype.contains = function(value) {
  var found = false;

  var findValue = function (node) {
    if  (found === true) { return true; }
    if (node.value === value) {
      found = true;
      return;
    }
    if (node.right !== null && value > node.value) {
      findValue(node.right);
    } else if (node.left !== null && value > node.value){
      findValue(node.left);
    }
  };

  findValue(this);
  return found;
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {

  var check = function(node) {
    callback(node.value);
    if (node.left !== null) {
      check(node.left);
    }
    if (node.right !== null) {
      check(node.right);
    }
  };
  check(this);
};

BinarySearchTree.prototype.breadthFirstLog = function(callback) {

  var check = function(nodes) {
    parents = nodes;
    var children = [];

    for(var i = 0; i < parents.length; i++) {
      if (parents[i].left !== null) {
        children.push(parents[i].left);
      }
      if (parents[i].right !== null) {
        children.push(parents[i].right);
      }
      callback(parents[i].value);
    }

    if (children.length > 0 ) { check(children); }
  };
  check([this]);
};

