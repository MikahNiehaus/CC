//talks to api
class LogsAdapter {
    constructor(){
        // 3rd party api
        this.baseUrl = 'http://localhost:3000/api/v1/logs'
    }

    getLogs() {
        return fetch(this.baseUrl).then(res => res.json())
    }
    createLog(value){
        const log = {
            body: value,
        }
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                    },    
          body: JSON.stringify({ log }),
         }).then(res => res.json())
    }
}

// adapter = new LogsAdapter()
// const logs = adapter.getLogs()