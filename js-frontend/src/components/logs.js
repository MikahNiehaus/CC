class Logs{
    constructor(){
        this.logs = []
        this.adapter = new LogsAdapter()
        this.initiBindingsAndEventListeners()
        this.fetchAndLoadLogs()
    }

    initiBindingsAndEventListeners(){
      this.logsContainer = document.getElementById('logs-container')
      this.newLogBody = document.getElementById('new-log-body')
      this.logForm = document.getElementById('new-log-form')
      this.logForm.addEventListener('submit', this.createLog.bind(this))
    }
    createLog(e){
      console.log(this)
      console.log('log is being created')
      e.preventDefault()
      const value = this.newLogBody.value
      this.adapter.createLog(value).then(log => {
        this.logs.push(new Log(log))
        this.render()
      })
    }
    fetchAndLoadLogs(){
        this.adapter
        .getLogs()
        .then(logs => {
        logs.forEach(log => this.logs.push(log))
      //  return console.log(logs)
        })
        .then(() => {
            this.render()
        })
    }
    render(){
      const logsContainer.innerHTML = this.logs.map(log => log.renderLi()).join('')
     
    }
    
}
