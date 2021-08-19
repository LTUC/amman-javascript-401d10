class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this._adjacencyList = new Map();
  }
  addVertex(vertex) {
    // we need to add the vertex to the adjacency list and set an empty array for the edges
    this._adjacencyList.set(vertex, []);
  }
  addDirectedEdge(startVertex, endVertex) {
    if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
      throw new Error('Invalid vertex');
    }
    const adjacencies = this._adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex));
  }
  printAll() {
    for (const [vertex, edge] of this._adjacencyList.entries()) {
      console.log(vertex);
      console.log(edge);
    }
  }
}

const graph = new Graph();
const ten = new Vertex(10);
const two = new Vertex(2);
const six = new Vertex(6);
const four = new Vertex(4);

graph.addVertex(ten);
graph.addVertex(two);
graph.addVertex(six);
graph.addVertex(four);

graph.addDirectedEdge(ten, two);
graph.addDirectedEdge(ten, six);
graph.addDirectedEdge(two, six);
graph.addDirectedEdge(two, four);
graph.addDirectedEdge(six, four);

console.log(graph);
graph.printAll();
