

class Notes {
  constructor() {

    this.baseUrl = 'http://localhost:3000/api/v1/notes'
  }


  createNote(input, id) {
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
     
  }


  getNotes(id) {
    let i = 0;
    let resolt = "";
    fetch(this.baseUrl).then((response) => {
      response.json().then((data) => {
        console.log(data);

        while (i < data.length) {
          if (data[i]["subject_id"] == id) {
            resolt += data[i]["body"].toString() + "\n\n";
          }
          i += 1;
        }
        const copyStringToClipboard = new CopyStringToClipboard(resolt);
        copyStringToClipboard.render();
        window.open('https://www.office.com/launch/word?auth=1', '_blank');
      }).catch((err) => {
        console.log(err);
      })
    });

  }


}
