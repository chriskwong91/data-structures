

var HashTable = function(size) {
  this._limit = size || 8;
  this._storage = LimitedArray(this._limit);
  this._tupleCount = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // Sets the index to an empty bucket if it's undefined.
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }

  // Checks to see if the key exists and overwrites it if it does.
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      return this._storage.get(index)[i][1] = v;
    }
  }

  // Pushes the parameter tuple into the bucket
  this._storage.get(index).push([k, v]);
  this._tupleCount++;
  if (this._tupleCount / this._limit > 0.75) {
    this.double();
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // Sets the index to an empty bucket if it's undefined.
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }

  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      return this._storage.get(index)[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // Sets the index to an empty bucket if it's undefined.
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }

  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      this._storage.get(index).splice(i, 1);
    }
  }

  this._tupleCount--;

  if (this._tupleCount / this._limit < 0.25) {
    this.halve();
  }
};

HashTable.prototype.double = function () {
  var newHashtable = new HashTable(this._limit * 2);
  var bucket;
  for (var i = 0; i < this._limit; i++) {
    bucket = this._storage.get(i);
    _.each(bucket, function(tuple) {
      newHashtable.insert(tuple[0], tuple[1]);
    });
  }

  this._limit = newHashtable._limit;
  this._storage = newHashtable._storage;
};

HashTable.prototype.halve = function () {
  var newHashtable = new HashTable(this._limit / 2);
  var bucket;
  for (var i = 0; i < this._limit; i++) {
    bucket = this._storage.get(i);
    _.each(bucket, function(tuple) {
      newHashtable.insert(tuple[0], tuple[1]);
    });
  }

  this._limit = newHashtable._limit;
  this._storage = newHashtable._storage;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


