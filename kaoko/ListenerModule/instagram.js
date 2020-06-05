const { PythonShell } = require('python-shell')
const util = require('util')

const InstagramUrlRegex = /https:\/\/www.instagram.com\/p\/[\w\d]+/

function Instagram (isMentioningBot) {
  this.receive = receive
  this.isMentioningBot = isMentioningBot
}

function receive (message) {
  if (this.isMentioningBot(message) && InstagramUrlRegex.test(message.cleanContent.trim())) {
    let instagramUrl = InstagramUrlRegex.exec(message.cleanContent.trim())[0]
    let options = getpythonOptions(instagramUrl)

    let pythonRun = util.promisify(PythonShell.run)
    pythonRun('kaoko/py/getInstagramMedia.py', options)
      .then((mediaUrl) => {
        message.reply(mediaUrl[0])
      })
  }
}

function getpythonOptions (url) {
  return {
    mode: 'text',
    pythonPath: '/home/linuxbrew/.linuxbrew/bin/python3.7',
    pythonOptions: ['-u'],
    args: [url]
  }
}

module.exports = Instagram
