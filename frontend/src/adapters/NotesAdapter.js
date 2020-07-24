class NotesAdapter {
  constructor()
  {
   
   this.baseUrl = 'http://localhost:3000/api/v1/notes'
  }   
  
  // getNotes() {
  
  //     const notes = new Notes;
  // fetch(this.baseUrl).then((response) => { 
  //      response.json().then((data) => {
  //       console.note(data);
  //         let i;
  //         let text = ""; 
  //         let ary = [];
  //        if (data.length > 0){
  //         const output = data[data.length-1].id
  //        //  document.getElementById("note_number").innerHTML = data.length;
  //        document.getElementById("note_id").innerHTML = output;
  //         }
  //         for (i = 0; i < data.length; i++) {
  //           if (data[i]["department_id"] == sessionStorage.getItem("Id")){
  //             text = data[i]["_json"].toString();
  //             console.note(data);
  //             notes.render(text,data[i].id);
  //             ary.push([text,data[i].id]);
  //         }
  //           }
           
  //            console.note("send off " + ary);
  //           // sessionStorage.getItem("Notes").clear();
  //           // sessionStorage.setItem("Notes", ary);
            
  //         return null
  //     }).catch((err) => {
  //         console.note(err);
  //     }) 
  // });
  // }

  // deleteNote(item){

  //   fetch(this.baseUrl + '/' + item, {
  //     method: 'delete'
  //   }).then(response =>
  //     response.json().then(json => {
  //       return json;
  //     })
  //   );
    

  // }



  createNote(input, id){
    // = {"_json": input, "subject_name": id}

    let data = ({

    note: {
      body: input,
       subject_id: id,
     
    }
  })

  let configObj = {
    method: "POST",
    headers: {"Content-Type": "application/json", "Accepts": "application/json"},
    body: JSON.stringify(data)
  }
  fetch(this.baseUrl, configObj)
    .then(res => res.json())
   // .then((resObj) => this.sanitizeAndAddGranola(resObj.data))
 
    }

    getNotes(id){
   
      let i = 0;
      let resolt = "";
      fetch(this.baseUrl).then((response) => { 
           response.json().then((data) => {
            console.log(data);
             
  while (i < data.length){
  
    let test = data[i]["subject_id"];
    if (data[i]["subject_id"] == id){
       resolt +=  data[i]["body"].toString() + "\n"; 
    }
    i += 1;
  }
  copyStringToClipboard(resolt);    
          }).catch((err) => {
              console.log(err);
          }) 
      });
      
    }


}


