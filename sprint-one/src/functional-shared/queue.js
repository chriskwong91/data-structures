var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  thisQueue = {};
  //_(thisQueue).extend(queueMethods);
  _.extend(thisQueue, queueMethods);
  thisQueue.storage = {};

  return thisQueue;
};

var queueMethods = {
	enqueue: function(value) {
	  var indexArray = Object.keys(this.storage);
	  var index = indexArray.length === 0 ? 0 : Math.max.apply(null, indexArray) + 1;
	  this.storage[index] = value;
	},

	dequeue: function() {
	  var indexArray = Object.keys(this.storage);
	  var index = Math.min.apply(null, indexArray);
	  var temp = this.storage[index];
	  delete this.storage[index];

	  return temp;
	},

	size: function() {
	  return Object.keys(this.storage).length;
	}
};


