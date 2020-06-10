class LogsAdapter {
    constructor()
    {
     
     this.baseUrl = 'http://localhost:3000/api/v1/logs'
    }   
    
    getLogs() {
    
        const logs = new Logs;
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

      fetch(this.baseUrl + '/' + item, {
        method: 'delete'
      }).then(response =>
        response.json().then(json => {
          return json;
        })
      );
      


    }

  
    createLog(input){
             
        let response = fetch(this.baseUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},    
            body: JSON.stringify(input)
         });

         let result = response; //.json()
       
    }
    updateLog(value, id){
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

