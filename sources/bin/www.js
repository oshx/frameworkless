const http = require('http')
const param = require('@/utils/param')

const { PATH } = require('@/config')
const PORT = 8696

function application() {
  const matchController = (request, response) => (controller) =>
    request.requestURL.pathname === PATH[controller].path
      ? require(`@/controllers/${controller}`)(request, response)
      : null

  const checkController = (request, response) => (controller) => {
    console.info('[checkController]', PATH[controller])
    return PATH[controller].path !== request.requestURL.pathname
  }

  /**
   * @function Server
   * @param {Request & {requestURL: URL}} request 요청
   * @param {Response} response 응답
   * @return {void}
   */
  const Server = (request, response) => {
    param(request, response, undefined)
    Object.keys(PATH).forEach(matchController(request, response))
    if (Object.keys(PATH).every(checkController(request, response))) {
      response.status = 404
      return response.end('404!!')
    }
  }

  console.info(PATH)
  const server = http.createServer(Server)

  server.listen(PORT)
  console.info(`listen to http://localhost:${PORT}`)
}

process.on('uncaughtException', (e) => {
  console.error('[ERROR]', e)
  application()
})

application()
