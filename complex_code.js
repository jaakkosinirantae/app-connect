/* filename: complex_code.js */

// This code is an implementation of a complex data structure called a graph
// It represents a directed graph using an adjacency list
// The graph can add vertices, add edges, remove vertices, remove edges, and perform depth-first search

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  removeVertex(vertex) {
    if (this.adjacencyList.has(vertex)) {
      this.adjacencyList.forEach((list, key) => {
        list = list.filter(v => v !== vertex);
        this.adjacencyList.set(key, list);
      });
      this.adjacencyList.delete(vertex);
    }
  }

  addEdge(source, destination) {
    if (
      this.adjacencyList.has(source) &&
      this.adjacencyList.has(destination)
    ) {
      this.adjacencyList.get(source).push(destination);
    }
  }

  removeEdge(source, destination) {
    if (
      this.adjacencyList.has(source) &&
      this.adjacencyList.has(destination)
    ) {
      let list = this.adjacencyList.get(source);
      list = list.filter(v => v !== destination);
      this.adjacencyList.set(source, list);
    }
  }

  dfs(startingVertex) {
    const visited = new Set();
    const traverse = vertex => {
      visited.add(vertex);
      const neighbors = this.adjacencyList.get(vertex);
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          traverse(neighbor);
        }
      }
    };
    traverse(startingVertex);
    return visited;
  }
}

// Example usage:

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('D', 'A');
graph.addEdge('A', 'C');

console.log(graph.dfs('A'));

// Output: Set { 'A', 'B', 'C', 'D' }