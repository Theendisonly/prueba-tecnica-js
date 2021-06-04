class Grafo {
    // defining vertex array and
    // adjacent list
    constructor(noOfVertices)
    {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();        
    }
    
    // functions to be implemented
  
    // addVertex(v)    
    // add vertex to the graph
    addVertex(v)
    {
        // initialize the adjacent list with a
        // null array
        this.AdjList.set(v, []);
    }
    
    // addEdge(v, w)
    // add edge to the graph
    addEdge(v, w)
    {
        // get the list for vertex v and put the
        // vertex w denoting edge between v and w
        this.AdjList.get(v).push(w);
    
        // Since graph is undirected,
        // add an edge from w to v also
        // this.AdjList.get(w).push(v);
    }

    // printGraph()
  // Prints the vertex and adjacency list
    printGraph()
    {
        // get all the vertices
        var get_keys = this.AdjList.keys();

        // iterate over the vertices
        for (var i of get_keys)
    {
            // great the corresponding adjacency list
            // for the vertex
            var get_values = this.AdjList.get(i);
            var conc = "";

            // iterate over the adjacency list
            // concatenate the values into a string
            for (var j of get_values)
                conc += j + " ";

            // print the vertex and its adjacency list
            console.log(i + " -> " + conc);
        }
    }

    // bfs(v)
    // function to performs BFS
    bfs(startingNode)
    {
    
        // create a visited object
        var visited = {};
        var recorridobfs = [];
    
        // Create an object for queue
        var q = new Queue();
    
        // add the starting node to the queue
        visited[startingNode] = true;
        q.enqueue(startingNode);
    
        // loop until queue is element
        while (!q.isEmpty()) {
            // get the element from the queue
            var getQueueElement = q.dequeue();            
    
            // passing the current vertex to callback funtion
            // console.log(getQueueElement);
            recorridobfs.push(getQueueElement);
    
            // get the adjacent list for current vertex
            var get_List = this.AdjList.get(getQueueElement);
    
            // loop through the list and add the element to the
            // queue if it is not processed yet
            for (var i in get_List) {
                var neigh = get_List[i];
    
                if (!visited[neigh]) {
                    visited[neigh] = true;
                    q.enqueue(neigh);
                }
            }
        }
        return recorridobfs;
    }
    // dfs(v)
    // Main DFS method
    dfs(startingNode)
    {
        var visited = {};        
        var recorridodfs = [];

        this.DFSUtil(startingNode, visited, recorridodfs);        
        return recorridodfs;
    }

    // Recursive function which process and explore
    // all the adjacent vertex of the vertex with which it is called
    DFSUtil(vert, visited, recorridodfs)
    {
        visited[vert] = true;
        // console.log(vert);
        recorridodfs.push(vert);

        var get_neighbours = this.AdjList.get(vert);        

        for (var i in get_neighbours) {
            var get_elem = get_neighbours[i];
            if (!visited[get_elem])
                this.DFSUtil(get_elem, visited, recorridodfs);
        }
    }

}

// ----->>>>>>Queue class
class Queue
{
	// Array is used to implement a Queue
	constructor()
	{
		this.items = [];
	}
				
	// Functions to be implemented
	// enqueue(item)
    // enqueue function
    enqueue(element)
    {	
        // adding element to the queue
        this.items.push(element);
    }

	// dequeue()
    // dequeue function
    dequeue()
    {
        // removing element from the queue
        // returns underflow when called
        // on empty queue
        if(this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }

	// front()
    // front function
    front()
    {
        // returns the Front element of
        // the queue without removing it.
        if(this.isEmpty())
            return "No elements in Queue";
        return this.items[0];
    }

	// isEmpty()
    // isEmpty function
    isEmpty()
    {
        // return true if the queue is empty.
        return this.items.length == 0;
    }

	// printQueue()
    // printQueue function
    printQueue()
    {
        var str = "";
        for(var i = 0; i < this.items.length; i++)
            str += this.items[i] +" ";
        return str;
    }

}


var maximo = 9;
var limite = 5;//cantidad máxima de pasos para llegar a la esquina inderior derecha
var pasos = 0;
var grafo = new Grafo(maximo);
var caminoValidoBFS = false;
var caminoValidoDFS = false;
var recorridobfs = [];
var recorridodfs = [];

console.log("-->PRUEBA 1");
var camino = ["...","##.","#.."];

for(let i=0;i<camino.length;i++){
    console.log(camino[i]);
}

for (var i = 1; i <= maximo; i++) {
    grafo.addVertex(i);
}

grafo.addEdge(1,2);
grafo.addEdge(2,3);
grafo.addEdge(3,6);
grafo.addEdge(6,9);
grafo.addEdge(9,8);

//grafo.printGraph();

recorridobfs = grafo.bfs(1);
if(recorridobfs.includes(maximo)){
    pasos = 0;
    for(let i=1; i<recorridobfs.length;i++){
        if(recorridobfs[i] !== maximo){
            pasos ++;
        }else{
            pasos ++;
            break;
        }
    }
    if(pasos <= limite)
        caminoValidoBFS = true;
}
else{
    console.log("No existe camino");
}

recorridodfs = grafo.dfs(1);
if(recorridodfs.includes(maximo)){
    pasos = 0;
    for(let i=1; i<recorridodfs.length;i++){
        if(recorridodfs[i] !== maximo){
            pasos ++;
        }else{
            pasos ++;
            break;
        }
    }
    if(pasos <= limite)
        caminoValidoDFS = true;
}
else{
    console.log("No existe camino");
}

if(caminoValidoBFS || caminoValidoDFS){
    console.log("Yes");
}
else{
    console.log("No");
}

//-------------------------->prueba 2<-----------------------------------------------
console.log("-->PRUEBA 2");
maximo = 12;
caminoValidoBFS = false;
caminoValidoDFS = false;
grafo = new Grafo(maximo);

var camino = ["..#","..#","#..","#.."];

for(let i=0;i<camino.length;i++){
    console.log(camino[i]);
}

for (var i = 1; i <= maximo; i++) {
    grafo.addVertex(i);
}

grafo.addEdge(1,2);
grafo.addEdge(1,4);
grafo.addEdge(2,5);
grafo.addEdge(4,5);
grafo.addEdge(5,8);
grafo.addEdge(8,9);
grafo.addEdge(8,11);
grafo.addEdge(9,12);
grafo.addEdge(11,12);

grafo.printGraph();

recorridobfs = grafo.bfs(1);
if(recorridobfs.includes(maximo)){
    pasos = 0;
    for(let i=1; i<recorridobfs.length;i++){
        if(recorridobfs[i] !== maximo){
            pasos ++;
        }else{
            pasos ++;
            break;
        }
    }
    if(pasos <= limite)
        caminoValidoBFS = true;
}
else{
    console.log("No existe camino");
}

recorridodfs = grafo.dfs(1);
if(recorridodfs.includes(maximo)){
    pasos = 0;
    for(let i=1; i<recorridodfs.length;i++){
        if(recorridodfs[i] !== maximo){
            pasos ++;
        }else{
            pasos ++;
            break;
        }
    }
    if(pasos <= limite)
        caminoValidoDFS = true;
}
else{
    console.log("No existe camino");
}

if(caminoValidoBFS || caminoValidoDFS){
    console.log("Yes");
}
else{
    console.log("No");
}