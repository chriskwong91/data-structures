var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  var indexArray = Object.keys(this.storage);
  var index = indexArray.length === 0 ? 0 : Math.max.apply(null, indexArray) + 1;
  this.storage[index] = value;
};

Queue.prototype.dequeue = function() {
  var indexArray = Object.keys(this.storage);
  var index = Math.min.apply(null, indexArray);
  var temp = this.storage[index];
  delete this.storage[index];

  return temp;
};

Queue.prototype.size = function () {
  return Object.keys(this.storage).length;
};
