class Log {

    constructor(logJSON, info) {
        this.data = logJSON;
        this.id = logJSON.id
        this.myinfo = info
        console.log(info)
    }
    renderLi() {
        console.log(this.data)
        return (`<div>${JSON.stringify(this.myinfo)}</div>`);
    }
}