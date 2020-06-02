class Logs{
    constructor(){
        this.logs = []
        this.adapter = new LogsAdapter()
      //  this.bindEventListeners()
        this.fetchAndLoadLogs()
    }

    fetchAndLoadLogs(){
        this.adapter
        .getLogs()
        .then(logs => {
        logs.forEach(note => this.logs.push(log))
      //  return console.log(logs)
        })
        .then(() => {
            this.render()
        })
    }
    render(){
      const logsContainer = document.getElementById('logs-container')
      logsContainer.innerHTML = 'my logs here'
    }
    
}
