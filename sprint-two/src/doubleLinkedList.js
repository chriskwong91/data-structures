var DoubleLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.tail === null) {
      list.initialNode(value);
    } else {
      var newTail = new Node(value);
      list.tail.next = newTail;
      newTail.prev = list.tail;
      list.tail = newTail;
    }
  };

  list.removeHead = function() {
    var newHead = list.head.next;
    var oldHeadValue = list.head.value;
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

  list.addToHead = function(value) {
    if (list.head === null) {
      list.initialNode(value);
    } else {
      var newHead = new Node(value);
      list.head.prev = newHead;
      newHead.next = list.head;
      list.head = newHead;
    }
  };

  list.initialNode = function(value) {
    var initialNode = new Node(value);
    list.head = initialNode;
    list.tail = initialNode;
  };

  list.removeTail = function() {
    var oldValue = list.tail.value;

    if (list.tail === null) {
      return;
    } else if (list.tail.prev === null) {
      return oldValue;
    }
    list.tail = list.tail.prev;
    list.tail.next = null;

    return oldValue;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
