class SubjectsAdapter {
  constructor()
  {
   
   this.baseUrl = 'http://localhost:3000/api/v1/subjects'
  }   
  
        


  

  deleteSubject(item){

    fetch(this.baseUrl + '/' + item, {
      method: 'delete'
    }).then(response =>
      response.json().then(json => {
        return json;
      })
    );
    const x = document.getElementById("container");
    x.remove(x.selectedIndex);
  }


  getSubjects(){
   
    let i = 0;

    fetch(this.baseUrl).then((response) => { 
         response.json().then((data) => {
          console.log(data);
           
while (i<data.length){
  let x = document.getElementById("container");
  let option = document.createElement("option");
 
  option.text =  data[i]["body"].toString();

  x.add(option, x[0]);
 i += 1;
}
             
        }).catch((err) => {
            console.log(err);
        }) 
    });
    
  }
  createSubject(input){
    let myJson = ({
      subject: {
        body: input,
      
      }
    })
    let configObj = {
      method: "POST",
      headers: {"Content-Type": "application/json", "Accepts": "application/json"},
      body: JSON.stringify(myJson)
    }
    fetch(this.baseUrl, configObj)
    .then((response) => { 
      response.json().then((data) => {
       console.log(data["id"]);
     // .then((resObj) => this.sanitizeAndAddGranola(resObj.data))
      let x = document.getElementById("container");
      let option = document.createElement("option");
      option.text =  input;
      option.id = data["id"];
      x.add(option, x[0]);

    }).catch((err) => {
      console.log(err);
  }) 
});
  }

  updateSubject(value, id){
      const subject = {
          body: value,
      }
      fetch(this.baseUrl + '/' + id, {
        method: 'PATCH',
          headers: {
              'content-type': 'application/json',
                  },    
                  
        body: JSON.stringify({ subject }),
       }).then(res => res.json())
       const x = document.getElementById("container");
       let index = x.selectedIndex;
       x.remove(index);
       let option = document.createElement("option");
       option.text =  value;
       x.add(option, x[index]);
       
  }

}





