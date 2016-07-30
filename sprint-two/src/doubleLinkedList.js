var DoubleLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.size = 0;

  list.addToTail = function(value) {
    if (list.tail === null) {
      list.initialNode(value);
    } else {
      var newTail = new Node(value);
      list.tail.next = newTail;
      newTail.prev = list.tail;
      list.tail = newTail;
    }
    list.size++;
  };

  list.removeHead = function() {
    var oldHeadValue = list.head.value;

    if (list.size === 0) {
      return undefined;
    } else if (list.size === 1) {
      return list.emptyList();
    }
    list.head = list.head.next;
    list.head.prev = null;
    list.size--;
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
    list.size++;
  };

  list.initialNode = function(value) {
    var initialNode = new Node(value);
    list.head = initialNode;
    list.tail = initialNode;
  };

  list.emptyList = function () {
    var value = list.head.value;
    list.head = null;
    list.tail = null;
    list.size = 0;
    return value;
  };

  list.removeTail = function() {
    var oldValue = list.tail.value;

    if (list.size === 0) {
      return;
    } else if (list.size === 1) {
      return list.emptyList();
    }

    list.tail = list.tail.prev;
    list.tail.next = null;

    list.size--;
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
