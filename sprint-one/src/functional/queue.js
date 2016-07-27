var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 100;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    size--;
    nextItem = storage[size];
    delete storage[size];
    return nextItem;

  };

  someInstance.size = function() {
    return size - 100 < 0 ? 0 : size - 100;
  };

  return someInstance;
};
