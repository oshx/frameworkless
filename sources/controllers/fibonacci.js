const { render } = require('@/utils/view')
const { PATH, MESSAGE } = require('@/config')
const { toNaturalNumber, checkNumber, fibonacciAsync } = require('@/utils/numeric')
const template = require('@/views/fibonacci')

module.exports = (request, response) => {
  const a = toNaturalNumber(request.a)
  const sendResult = (result) =>
    render(
      response,
      PATH.fibonacci,
      template({
        action: PATH.fibonacci.path,
        result,
      }),
    )
  if (!checkNumber(request.a)) {
    return sendResult(MESSAGE.invalid)
  }
  fibonacciAsync(a, (v) => sendResult(/*html*/ `피보나치 ${a} = ${v}`))
}
