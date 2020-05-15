const { parse } = require('url')

/**
 * @function param
 * @param {Request} request - 요청, 기본 node Request
 * @param {Response} response - 응답, 기본 node Response
 * @param {() => void} [next] - 다음 처리 함수
 * @return {void}
 */
function param(request, response, next) {
  request.requestURL = parse(request.url, true)
  for (const query in request.requestURL.query) {
    request[query] = request.requestURL.query[query]
  }
  if (next instanceof Function) next()
}

module.exports = param
