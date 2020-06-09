class LogsAdapter {
    constructor(input)
    {
     this.input = input
     this.baseUrl = 'http://localhost:3000/api/v1/logs'
    }
    render() {
        
        return (`<li >${this.input}</li>`);
    //    data-logId=${this.input}
    }
    
    
    getLogs() {
      const logs = new Logs;
     // logs.removeOptions(document.getElementById('mySelect'));
       return fetch(this.baseUrl).then((response) => { 
            return response.json().then((data) => {
              //   console.log(data);
              let length = 0
             //  data.forEach(element => console.log(element["body"])//"_json" );
                var i;
                var text = "";
                for (i = 0; i < data.length; i++) {
                   
                  //  logs.render(data[i]["body"])
                    text = data[i]["body"].toString();
                    logs.render(text,i);
                    length += 1;
                    
                  }
                  //document.getElementById("demo").innerHTML = text;
                  document.getElementById("log_number").innerHTML = length
               
                return length
            }).catch((err) => {
                console.log(err);
            }) 
        });

    }
    // render(x) {
    //     return `<li data-noteid='${x.id}' data-props='${JSON.stringify(x
    //     )}' class='note-element'><a class="show-link" href='#'>${
    //       x.body
    //     }</a> <button data-action='edit-note'>Edit</button> <i data-action='delete-note' class="em em-scream_cat"></i></li>`
    //   }
// getNotes() {
//         return fetch(this.baseUrl).then(res => res.json())
//       }

      notesHTML() {
        return this.logs.map(log => log.render()).join('')
      }
      getNotes() {
        return fetch(this.baseUrl).then(res => res.json())
      }
    
    //   render() {
    //     this.notesNode = document.getElementById('logs-container')
    //     this.notesNode.addEventListener('click', this.handleNoteClick.bind(this))
    //     this.logsNode.innerHTML = `<ul>${this.notesHTML()}</ul>`
    //   }
  
    createLog(input){
             
        let response = fetch(this.baseUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},    
            body: JSON.stringify(input)
          

         });

         let result = response; //.json()
         console.log('hi '+ response);
       
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