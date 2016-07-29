

// Instantiate a new graph
var Graph = function() {
	this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = new GraphNode(node);
  this.nodes[node] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes[node] === undefined ? false : true;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (Object.keys(this.nodes[node].edgeWith).length !== 0) {
    var edges = Object.keys(this.nodes[node].edgeWith);
    for (var i = 0; i < edges.length; i++ ) {
      this.removeEdge(edges[i], node);
    }
  }
  delete this.nodes[node];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode].edgeWith[toNode] !== undefined) {
    return this.nodes[fromNode].edgeWith[toNode];
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].edgeWith[toNode] = true;
  this.nodes[toNode].edgeWith[fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.nodes[fromNode].edgeWith[toNode] = false;
  this.nodes[toNode].edgeWith[fromNode] = false;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var nodes = Object.keys(this.nodes);
  for (var i = 0; i < nodes.length; i++) {
    cb(nodes[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


var GraphNode = function(value) {
  var node = {};

  node.value = value;
  node.edgeWith = {};

  return node;
  };
