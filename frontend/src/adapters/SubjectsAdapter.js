// A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation completed successfully.
// rejected: meaning that the operation failed.

class SubjectsAdapter {
  constructor() {
    // The constructor method is a special method for creating and initializing an object created with a class. 
    // There can only be one special method with the name "constructor" in a class. 
    // A SyntaxError will be thrown if the class contains more than one occurrence of a constructor method.
    this.baseUrl = 'http://localhost:3000/api/v1/subjects'
  }

  deleteSubject(id) {

    fetch(this.baseUrl + '/' + id.toString(), {
      method: 'delete' // requests *GET, POST, PUT, DELETE, etc.
      //it then goes to routes
    }).then(response =>
      response.json().then(json => {
        return json;
      })
    );
    const x = document.getElementById("container");
    x.remove(x.selectedIndex);
  }


  getSubjects() {

    let i = 0;
// requests *GET, POST, PUT, DELETE, etc. Get is defalt
    fetch(this.baseUrl).then((response) => {
      //it then goes to routes
      response.json().then((data) => {
        console.log(data);
        data.forEach(addSubject);
      }).catch((err) => {
        console.log(err);
      })
    });

  }



  createSubject(input) {
    let myJson = ({
      subject: {
        body: input,

      }
    })
    let configObj = {
      method: "POST", // requests *GET, POST, PUT, DELETE, etc.
      headers: { "Content-Type": "application/json", "Accepts": "application/json" },    // 'Content-Type': 'application/x-www-form-urlencoded', Headers represents a set of request/response HTTP headers. It allows for case-insensitive lookup of header by name, as well as merging multiple values of a single header.
      body: JSON.stringify(myJson)
    }
    fetch(this.baseUrl, configObj)
    //it then goes to routes
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
         // data.forEach(addSubject); instead i will just update
         document.getElementById("container").options.length=0;
         const subjects = new SubjectsAdapter();
         subjects.getSubjects();
        }).catch((err) => {
          console.log(err);
        })
      });
  }

  updateSubject(value, id) {
    const subject = {
      body: value,
    }
    fetch(this.baseUrl + '/' + id, {
      method: 'PATCH',// requests *GET, POST, PUT, DELETE, etc.
      headers: {
        'content-type': 'application/json',
           // 'Content-Type': 'application/x-www-form-urlencoded',Headers represents a set of request/response HTTP headers. It allows for case-insensitive lookup of header by name, as well as merging multiple values of a single header.
      },

      body: JSON.stringify({ subject }),
      //it then goes to routes
    }).then(res => res.json())
    const x = document.getElementById("container");
    let index = x.selectedIndex;
    x.remove(index);
    let option = document.createElement("option");
    option.text = value;
    x.add(option, x[index]);

  }

}



function addSubject(data) {
  const newSubject = new Subject(data);//data = json // do data .ForEach
  const element = newSubject.render()
  let x = document.getElementById("container");
  let option = document.createElement("option");
  option.text = element["subject"]["body"];
  option.id = element["subject"]["id"];
  x.add(option, x[0]);
}

class Subject {
 // A class is a type of function, but instead of using the keyword function to initiate it,
 // we use the keyword class, and the properties are assigned inside a constructor() method.
  constructor(subject){
    // this refers to the global object whether in strict mode or not.
    this.id = subject.id;
    this.body = subject.body;
  //   The constructor method is special, it is where you initialize properties, 
  //   it is called automatically when a class is initiated, and it has to have the exact name "constructor", 
  //   in fact, if you do not have a constructor method, JavaScript will add an invisible and empty constructor method.
  }
  // Adding a method to the constructor
  render(){
    console.log("Object has been created")
    let element = {
      subject: {
        // this. refers to the global object whether in strict mode or not.
        body: this.body,
        id: this.id
      }
    }
    return (element)
  }


}
 
 //work on tentincal langwige go back //sit wit
 //requst
 //nest json
 //Nancy Noyes

// What is JSON?
// JSON stands for JavaScript Object Notation
// JSON is a lightweight data interchange format
// JSON is language independent *
// JSON is "self-describing" and easy to understand