class Logs{
    constructor(){
        this.logs = []
        this.adapter = new LogsAdapter()
        this.initiBindingsAndEventListeners()
        this.fetchAndLoadLogs()
    }

    initiBindingsAndEventListeners(){
      this.logsContainer = document.getElementById('logs-container')
      this.body = document.querySelector('body')
      this.newLogBody = document.getElementById('new-log-body')
      this.logForm = document.getElementById('new-log-form')
      this.logForm.addEventListener('submit', this.createLog.bind(this))
      this.logsContainer.addEventListener('dblclick', this.handleLogClick.bind(this))
      this.body.addEventListener('blur', this.updateLog.bind(this), true)
    }
    createLog(e){
      document.getElementById("number").innerHTML = Log.length; 
      console.log(Log.length)
      e.preventDefault()
      const value = this.newLogBody.value

      this.adapter.createLog(value).then(log => {
        this.logs.push(new Log(log, value))
        this.render()
        //this.newLogBody.value = Log.body
        this.newLogBody.value = ''
      })
    }
    handleLogClick(e){
      const li = e.target
      li.contentEditable= true
      li.focus()
      li.classList.add('editable')
    }
    updateLog(e){
      console.log('updating log')
      const li = e.target
      li.contentEditable = false
      li.classList.remove('editable')
      const newValue = li.innerHTML
      this.adapter.updateLog()
    }
    fetchAndLoadLogs(){
        this.adapter
        .getLogs()
        .then(logs => {
        logs.sort((a,b) => a.id -b.id).forEach(log => this.logs.push(new Log(log,value)))
    
        })
        .then(() => {
            this.render()
        })
    }
    render(){
      this.logsContainer.innerHTML = this.logs.map(log => log.renderLi()).join('')
     
    }
    
}
