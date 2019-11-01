Nationaal Stichting Wereld Culturen
Wordt geinpireerd door een mini carousel mini spel.

## Beschrijving 
Tijdesn mijn project moet ik een app maken met React. De data data ik ophaalkomt van Netwerk Digitaal erfgoed. Dit maakt het mogelijk om je favoriete object te vinden door middel van het programma Sparql.

## Api
Hieronder zie je welke API ik heb gebruikt met de sparql data query.
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

## Dit is wat mijn applicatie kan doen

Met deze applicatie kan je een simpel game instaleren. 

## Voor dat je de app installeerd installeer de volgende op je map
* Install Node.js
* Install a Code Editor
* Een linux CLI(Command Line Interface) zoals bash 
* Used (necessary sources)
* NPM
* React
* Node-fetch
* React-router-dom

## Installation
git clone https://github.com/GiovanniKaaijk/frontend-applications.git
Get into the right folder

cd frontend-apllications/my-app/
Install used npm packages

npm install
Run the application

npm run start
Usage
Start the application

npm run start
To compile the code

npm run build
Keep up to date
Make sure you pull the repository once in a while since we are still working on this project, you can do this by using git pull

Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

License
MIT
