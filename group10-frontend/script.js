const app = document.getElementById('root');

//create a variable called container & give it a class "container"
const container = document.createElement('div');
container.setAttribute = ('class', 'containter');
app.appendChild(container);

//calls html page & changes container element
var request = new XMLHttpRequest();
request.open('GET', 'http://mudcats.augurlabs.io:5003/api/unstable/repos', true);

//function to parse data
request.onload = function() {
    
    //parse
    var data = JSON.parse(this.response);

    //if you have a valid request
    if(request.status >= 200 && request.status < 400) {
        //for every repo
        data.forEach(repo => {
            //log the repo_name
            console.log(repo.repo_name);
            
            //create div elements
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
            
            const h1 = document.createElement('h1');
            h1.textContent = repo.repo_name;
            
            container.appendChild(card);
            //put repo name in card
            card.appendChild(h1);
        });
    }
}

request.send()
