import React from 'react';
import './App.css';
import Timer from './timer';
import Name from './myname';
// Databases
const url ="https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-15/sparql"
//Note that the query is wrapped in es6 template strings to allow for easy copy pasting

const query = `
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX edm: <http://www.europeana.eu/schemas/edm/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?datum ?titel ?link ?foto WHERE {
  ?sub dct:created ?datum.
  ?sub dc:title ?titel.
  ?sub edm:isShownBy ?link.
  ?sub edm:isShownAt ?foto.
} LIMIT 100
`
runQuery(url, query)

function runQuery(url, query){
  //Test if the endpoint is up and print result to page 
  // (you can improve this script by making the next part of this function wait for a succesful result)

	// Call the url with the query attached, output data
	fetch(url+"?query="+ encodeURIComponent(query) +"&format=json")
	.then(res => res.json())
	.then(json => {
	console.log(json)
  console.table(json.results.bindings);

  })
}


class App extends React.Component{
    
  props = {
    data: [],
    place: '',
    
  }

render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Know the unknow</h1>
        <Timer></Timer>
        <Name></Name>
       </header>
    </div>
  );
}
}
export default App;