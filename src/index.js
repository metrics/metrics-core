import os from 'os'
import Socket from 'socket.io-client'

class Metrics {
  constructor(apikey) {
    this.socket = new Socket('https://metrics.tobi.sh', {
      query: { apikey }
    })
  }
  writeRequest({ duration, path, status }) {
    this.socket.emit('request', {
      host: os.hostname(),
      duration,
      path,
      status
    })
  }
}

export default Metrics
