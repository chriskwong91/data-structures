var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var indexArray = Object.keys(storage);
    var index = someInstance.size() === 0 ? 0 : Math.max.apply(null, indexArray) + 1;
    storage[index] = value;
  };

  someInstance.dequeue = function() {
    var indexArray = Object.keys(storage);
    var index = Math.min.apply(null, indexArray);
    var temp = storage[index];
    delete storage[index];
    return temp;    
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
