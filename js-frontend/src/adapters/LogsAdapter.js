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
      

      // return fetch(this.baseUrl).then((response) => { 
      //      return response.json().then((data) => {

      //      data

               
      //      }).catch((err) => {
      //          console.log(err);
      //      }) 
      //  });
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
        return fetch(`${this.baseUrl}/id`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                    },    
                    
          body: JSON.stringify({ log }),
         }).then(res => res.json())
    }

}




// //talks to api
// class rLogsAdapter {
//     constructor(){
//         // 3rd party api
//         this.baseUrl = 'http://localhost:3000/api/v1/logs'
//     }

//     getLogs() {
//         return fetch(this.baseUrl).then(res => res.json())
        
//     }
//     createLog(value,time){
//         const log = {
//             body: value,
//             created_at: time,
//         }
//         console.log('TEST '+ log.created_at)
//         return fetch(this.baseUrl, {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json',
//                     },    
                    
//           body: JSON.stringify({ log }),
          
//          }).then(res => res.json())
//         //  console.log(log)
//     }
//     updateLog(value, id){
//         const log = {
//             body: value,
//         }
//         return fetch(`${this.baseUrl}/id`, {
//             method: 'PATCH',
//             headers: {
//                 'content-type': 'application/json',
//                     },    
                    
//           body: JSON.stringify({ log }),
//          }).then(res => res.json())
//     }
// }

// // adapter = new LogsAdapter()
// // const logs = adapter.getLogs()