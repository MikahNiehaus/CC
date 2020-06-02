//talks to api
class LogsAdapter {
    constructor(){
        // 3rd party api
        this.baseUrl = 'http://localhost:300/api/v1/logs'
    }

    getLogs() {
        return fetch(this.baseUrl).then(res => res.json())
    }
}

// adapter = new LogsAdapter()
// const logs = adapter.getLogs()