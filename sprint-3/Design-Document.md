
# Draft Design Document

## Use Case Necessities
For the user login use case to lead to a solution, the user interface must properly handle user input and send the data securely to the server for authentication. The server must store the user credentials securely and authenticate the information correctly. The server must then authenticate the request, allowing the user to access the application and use its services.

To fetch data from the API correctly, the webpage must access the API upon the webpage being opened. It must be able to call the correct endpoint based on the user input and correctly process the data from the API. The server must be contantly serving these endpoints. The server database must have populated data. 

To display a graph that brings up the cities when you click on the state correctly, the data retrieved must be properly formatted and stored.chart.js. The front-end must properly implement a dynamic graphing function or an existing library such as chart.js. 

## Component Communication
The front-end code will be written in HTML, CSS, and JavaScript. It will be hosted on a server. To retrieve data, the front-end will call an API end-point. The end-point will retrieve data from an Augur Postgresql database installed on the same server. 

## Design Decisions Reasoning
Our front-end design is intended to be both user-friendly and simple, but also interesting and allow for useful analysis tools. We want a new user to be able to intuitively use the service, so we only have a few basic functions available at the UI (login, pick repo, view map). But there will also be more complex tools for users, such as a zoom tool for the map, view the top 5 cities per state for commit/issue/pull-request, and the ability to view how these contributor locations change over time.
	
	
