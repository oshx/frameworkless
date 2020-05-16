const { render } = require('@/utils/view')
const { PATH, MESSAGE } = require('@/config')
const { toNaturalNumber, checkNumber, factorial } = require('@/utils/numeric')
const template = require('@/views/factorial')

module.exports = (request, response) => {
  const a = toNaturalNumber(request.a)
  const result = checkNumber(request.a)
    ? `${a}! = ${factorial(a)}`
    : MESSAGE.invalid

  return render(
    response,
    PATH.factorial,
    template({
      action: PATH.factorial.path,
      result,
    }),
  )
}
