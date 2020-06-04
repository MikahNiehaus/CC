class Log {

    constructor(logJSON, info) {
        this.data = logJSON;
        this.id = logJSON.id
        this.myinfo = info
        console.log(info)
    }
    renderLi() {
        
        return (`<li data-logId=${this.id}>${JSON.stringify(this.myinfo)}</li>`);
       
    }
}