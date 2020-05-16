const { render } = require('@/utils/view')
const { PATH, MESSAGE } = require('@/config')
const { toNaturalNumber, checkNumber } = require('@/utils/numeric')
const template = require('@/views/square')

module.exports = (request, response) => {
  const a = toNaturalNumber(request.a)
  const result = checkNumber(request.a)
    ? `${a}<sup>2</sup> = ${a * a}`
    : MESSAGE.invalid

  return render(
    response,
    PATH.square,
    template({
      action: PATH.square.path,
      result,
    }),
  )
}
