// locations
const airports='PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ')
// routes
const routes=[
    ['PHE','LAX'],
    ['PHE','JFK'],
    ['JFK','OKC'],
    ['JFK','HEL'],
    ['JFK','LOS'],
    ['MEX','LAX'],
    ['MEX','BKK'],
    ['MEX','LIM'],
    ['MEX','EZE'],
    ['LIM','BKK'],
]


const adjacencyList=new Map();

function addNode(airport){
    adjacencyList.set(airport,[]);
}
function addEdge(origin,destination){
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);    
}

airports.forEach(addNode);
routes.forEach(route =>addEdge(...route))

console.log(adjacencyList)