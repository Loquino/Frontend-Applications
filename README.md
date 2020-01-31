# Wordt geinpireerd door een mini carousel spel.
![Afbeelding van de Inpiredsel](https://raw.githubusercontent.com/Loquino/frontend-applications/master/proces%20afbeeldingen/foto-concept.png)
## Concept
Het Concept was om een een carousel te maken met de objecten van rijksmuseum. De Bedoeling was om een platform te maken voor kunstenaars. Waar je doormiddel van een knop de inspiratie kan halen uit een random object ( beeld, schilderij, afbeelding). De gebruiker kan zijn inspiratiebron bewaren zodat hij op een ander moment het object sneller terug kan vinden.

## Api

Tijdesn mijn project moet ik een app maken met React. De data data ik ophaalkomt van Netwerk Digitaal erfgoed. Dit maakt het mogelijk om je favoriete object te vinden door middel van het programma Sparql.

Hieronder zie je welke API ik heb gebruikt met de sparql data query.
```sparql

`PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX edm: <http://www.europeana.eu/schemas/edm/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?obj ?datum ?titel ?link ?foto WHERE {
  
  ?sub edm:object ?obj.
  ?sub dct:created ?datum.
  ?sub dc:title ?titel.
  ?sub edm:isShownBy ?link.
  ?sub edm:type ?foto.
  
} LIMIT 5000 `
```
## Dit is wat mijn applicatie kan doen

Met deze applicatie kan je een simpel game instaleren. 

## Voor dat je de app installeerd heb je het volgende al in je folder hebben geinstalleerd
* Install Node.js
* Install a Code Editor
* Een linux CLI(Command Line Interface) zoals bash 
* Used (necessary sources)
* NPM
* React
* Node-fetch
* React-router-dom

## Installation
`git clone https://github.com/Loquino/Frontend-Applications` 

`cd frontend-apllications/myfirstapp/`

### Install used npm packages

`npm install`
### Run the application

`npm run start`

Leef je uit :)!

### Credit
- Giovanni
- Kyle
- Victor
- Dorus
- Kris

License
MIT
