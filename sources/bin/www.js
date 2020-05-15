const http = require('http')
const param = require('@/utils/param')

const { PATH } = require('@/config')
const PORT = 8696

function application() {
  /**
   * @function Server
   * @param {Request & {requestURL: URL}} request 요청
   * @param {Response} response 응답
   * @return {void}
   */
  const Server = (request, response) => {
    param(request, response, undefined)
    console.info(
      `[${new Date()}] ${request.method} - ${request.requestURL.path} (${
        !!PATH[request.requestURL.pathname]
          ? PATH[request.requestURL.pathname].title
          : '잘못된 요청'
      })`,
    )
    const controller = PATH[request.requestURL.pathname]
      ? PATH[request.requestURL.pathname].controller
      : null
    if (!controller) {
      response.status = 404
      return response.end('404!!')
    }
    return require(`@/controllers/${controller}`)(request, response)
  }

  const server = http.createServer(Server)

  server.listen(PORT)
  console.info(`listen to http://localhost:${PORT}`)
}

/**
 * 영원히 죽지 않는 process
 */
process.on('uncaughtException', (e) => {
  console.error('[ERROR]', e)
  application()
})

application()
