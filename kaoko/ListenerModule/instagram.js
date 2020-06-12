const { PythonShell } = require('python-shell')
const got = require('got')
const util = require('util')
const crypto = require('crypto')

const InstagramUrlRegex = /https:\/\/www.instagram.com\/p\/[\w-\d]+/
const mp4Regex = /.+\.mp4.+/

function Instagram (replyChannel) {
  this.receive = receive
  this.replyChannel = replyChannel
}

function receive (message) {
  if (InstagramUrlRegex.test(message.content)) {
    message.suppressEmbeds(true)
    let instagramUrl = InstagramUrlRegex.exec(message.content)[0]
    let options = getpythonOptions(instagramUrl)

    let pythonRun = util.promisify(PythonShell.run)
    pythonRun('kaoko/py/getInstagramMedia.py', options)
      .then((mediaUrl) => {
        return got(mediaUrl[0], {responseType: 'buffer'})
      })
      .then((response) => {
        let isVideo = mp4Regex.test(response.url)
        if (isVideo) {
          let fileOptions = {
            attachment: response.body,
            name: crypto.createHash('md5').update(response.url).digest('hex') + '.mp4'
          }
          this.replyChannel(message, '', {files: [fileOptions]})
        } else {
          let fileOptions = {
            attachment: response.body,
            name: crypto.createHash('md5').update(response.url).digest('hex') + '.jpg'
          }
          this.replyChannel(message, '', {files: [fileOptions]})
        }
      })
  }
}

function getpythonOptions (url) {
  return {
    mode: 'text',
    pythonPath: '/home/linuxbrew/.linuxbrew/bin/python3.7',
    pythonOptions: ['-u'],
    args: [Buffer.from(url).toString('base64')]
  }
}

module.exports = Instagram
