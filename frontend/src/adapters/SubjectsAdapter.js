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
      method: 'delete'
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

    fetch(this.baseUrl).then((response) => {
      response.json().then((data) => {
        console.log(data);

        while (i < data.length) {
          let x = document.getElementById("container");
          let option = document.createElement("option");

          option.text = data[i]["body"].toString();
          option.id = data[i]["id"].toString();
          x.add(option, x[0]);
          i += 1;
        }

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
      method: "POST",
      headers: { "Content-Type": "application/json", "Accepts": "application/json" },
      body: JSON.stringify(myJson)
    }
    fetch(this.baseUrl, configObj)
      .then((response) => {
        response.json().then((data) => {
          console.log(data["id"]);
          let x = document.getElementById("container");
          let option = document.createElement("option");
          option.text = input;
          option.id = data["id"];
          x.add(option, x[0]);

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
    option.text = value;
    x.add(option, x[index]);

  }

}





// What is JSON?
// JSON stands for JavaScript Object Notation
// JSON is a lightweight data interchange format
// JSON is language independent *
// JSON is "self-describing" and easy to understand