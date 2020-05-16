const { render } = require('@/utils/view')
const { PATH, MESSAGE } = require('@/config')
const { checkNumber } = require('@/utils/numeric')
const template = require('@/views/multiplication')

module.exports = (request, response) => {
  const a = Number(request.a)
  const b = Number(request.b)
  const result =
    checkNumber(a) && checkNumber(b)
      ? `${a} × ${b} = ${a * b}`
      : MESSAGE.invalid

  return render(
    response,
    PATH.multiplication,
    template({
      action: PATH.multiplication.path,
      result,
    }),
  )
}
