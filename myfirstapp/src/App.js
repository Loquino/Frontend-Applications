import React from 'react';
import './App.css';
import Timer from './timer';
import Newblock from './newblock';
import Zoekbalk from './search'; 
import { BrowserRouter as Router, Route } from "react-router-dom";


// Databases


class App extends React.Component {
  state = {
    data: [0]

  };
componentDidMount() {
  this.getData()
}

async getData(){
  const url ="https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-15/sparql"
  //Note that the query is wrapped in es6 template strings to allow for easy copy pasting
  const query = `
  PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
  PREFIX edm: <http://www.europeana.eu/schemas/edm/>
  PREFIX dct: <http://purl.org/dc/terms/>
  PREFIX dc: <http://purl.org/dc/elements/1.1/>
  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

  SELECT ?datum ?title ?link ?foto WHERE {
    ?sub dct:created ?datum.
    ?sub dc:title ?title.
    ?sub edm:isShownBy ?link.
    ?sub edm:isShownAt ?foto.
  } LIMIT 100
  `
  let response = await fetch(url+"?query="+ encodeURIComponent(query) +"&format=json")
  const results = await response.json();
  this.setState({
    data: results.results.bindings
        }
      )
}


render() {
  let items = this.state.data.map((item, i)=>{
    if(item===0){
      return <p>loading....</p>
    }else{
      return <Newblock key={i} data={item} />
    }
  })
  console.log(items)
  return (
   <Router>
     <Route 
       path="/"
        render={props => (
          <div className="App">
            <header className="App-header">
              <h1>Get Inspired</h1>
              <Timer></Timer>
              <Zoekbalk/>
            </header>

            <main>
             {items}
            </main>
          </div>
        )}
    />
  </Router>
  );
}
}
export default App;

//{this.state.data.length > 0 ? <Name info={this.state.data}></Name> : 'Loading...'}
//<Name name={"Loco"} leeftijd={12} hobby={"Dansen"}></Name>
//{this.state.data.title.length > 0 ? <Name data={this.state.data}></Name> : 'Loading...'}
//<Name data={this.state.data}/>