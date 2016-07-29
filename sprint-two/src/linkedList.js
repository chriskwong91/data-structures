var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.tail === null) {
      var initialTail = new Node(value);
      list.head = initialTail;
      list.tail = initialTail;
    } else {
      var newTail = new Node(value);
      list.tail.next = newTail;
      list.tail = newTail;
    }
  };

  list.removeHead = function() {
    var newHead = list.head.next;
    var oldHeadValue = list.head.value;
    delete list.head;
    list.head = newHead;
    return oldHeadValue;
  };

  list.contains = function(target) {
    var current = list.head;

    while (true) {
      if (current.value === target) {
        return true;
      }
      if (current.next === null) {
        return false;
      }
      current = current.next;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
