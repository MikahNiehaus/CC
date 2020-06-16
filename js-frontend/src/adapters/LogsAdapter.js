class LogsAdapter {
  //The constructor property returns a reference to the Object constructor function that created the instance object.
  //  Note that the value of this property is a reference to the function itself, not a string containing the function's name.
  //  The value is only read-only for primitive values such as 1, true and "test".
    constructor()
    {
     //the url used to conect to backend
     this.baseUrl = 'http://localhost:3000/api/v1/logs'
    }   
    
    getLogs() {
    
        const logs = new Logs;
        // The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. 
        // It also provides a global fetch() method
        // The Promise returned from fetch() won’t reject on HTTP error status 
        // fetch() won't receive or send cookies;
        // Here we are fetching a JSON file across the network, The simplest use of fetch() 
    fetch(this.baseUrl).then((response) => { 
         response.json().then((data) => {
            var i;
            var text = "";
           const output = data[data.length-1].id
            for (i = 0; i < data.length; i++) {
                text = data[i]["body"].toString();
                logs.render(text,data[i].id);
              }
              document.getElementById("log_number").innerHTML = data.length;
              document.getElementById("log_id").innerHTML = output;
            return output
        }).catch((err) => {
            console.log(err);
        }) 
    });
    }
  
    deleteLog(item){
        // The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. 
        // It also provides a global fetch() method
        // The Promise returned from fetch() won’t reject on HTTP error status 
        // fetch() won't receive or send cookies;
        // Here we are fetching a JSON file across the network, The simplest use of fetch() 
      fetch(this.baseUrl + '/' + item, {
        method: 'delete'
      }).then(response =>
        response.json().then(json => {
          return json;
        })
      );
      


    }

  
    createLog(input){
                    // The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. 
        // It also provides a global fetch() method
        // The Promise returned from fetch() won’t reject on HTTP error status 
        // fetch() won't receive or send cookies;
        // Here we are fetching a JSON file across the network, The simplest use of fetch()  
        let response = fetch(this.baseUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},    
            body: JSON.stringify(input)
         });

         let result = response; //.json()
       
    }
    updateLog(value, id){
              // The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. 
        // It also provides a global fetch() method
        // The Promise returned from fetch() won’t reject on HTTP error status 
        // fetch() won't receive or send cookies;
        // Here we are fetching a JSON file across the network, The simplest use of fetch() 
        const log = {
            body: value,
        }
        fetch(this.baseUrl + '/' + id, {
          method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                    },    
                    
          body: JSON.stringify({ log }),
         }).then(res => res.json())
    }

}

