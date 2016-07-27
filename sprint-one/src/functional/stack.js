var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    debugger;
    storage[size] = value;
    size++;
  };

  someInstance.pop = function() {
    debugger;
    size--;
    lastValue = storage[size];
    delete storage[size];
    return lastValue;
  };

  someInstance.size = function() {
    return size >= 0 ?  size :  0;
  };

  return someInstance;
};
