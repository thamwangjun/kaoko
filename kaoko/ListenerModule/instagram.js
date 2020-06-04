const { PythonShell } = require('python-shell')
const util = require('util')

const InstagramUrlRegex = /https:\/\/www.instagram.com\/p\/[\w\d]+.*/

function Instagram (isMentioningBot) {
  this.receive = receive
  this.isMentioningBot = isMentioningBot
}

function receive (message) {
  if (this.isMentioningBot(message) && InstagramUrlRegex.test(message.cleanContent.trim())) {
    let instagramUrl = message.cleanContent.trim()
    let options = getpythonOptions(instagramUrl)

    let pythonRun = util.promisify(PythonShell.run)
    pythonRun('kaoko/py/getInstagramMedia.py', options)
      .then((media) => {
        console.log(media)
      })
  }
}

function getpythonOptions (url) {
  return {
    mode: 'json',
    pythonPath: '/home/linuxbrew/.linuxbrew/bin/python3.7',
    pythonOptions: ['-u'],
    args: [url]
  }
}

module.exports = Instagram
