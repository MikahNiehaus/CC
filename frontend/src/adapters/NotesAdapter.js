class NotesAdapter {
  constructor() {

    this.baseUrl = 'http://localhost:3000/api/v1/notes'
  }


  createNote(input, id) {
    // = {"_json": input, "subject_name": id}

    let data = ({

      note: {
        body: input,
        subject_id: id,

      }
    })

    let configObj = {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accepts": "application/json" },
      body: JSON.stringify(data)
    }
    fetch(this.baseUrl, configObj)
      .then(res => res.json())
      .then((resObj) => this.sanitizeAndAddGranola(resObj.data))

  }

  getNotes(id) {

    let i = 0;
    let resolt = "";
    fetch(this.baseUrl).then((response) => {
      response.json().then((data) => {
        console.log(data);

        while (i < data.length) {

          let test = data[i]["subject_id"];
          if (data[i]["subject_id"] == id) {
            resolt += data[i]["body"].toString() + "\n\n";
          }
          i += 1;
        }
        copyStringToClipboard(resolt);
        window.open('https://www.office.com/launch/word?auth=1', '_blank');

      }).catch((err) => {
        console.log(err);
      })
    });

  }


}
