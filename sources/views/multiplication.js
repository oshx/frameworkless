const { PATH, MESSAGE } = require('@/config')

const checkNumber = (v) => v && !isNaN(Number(v))

module.exports = (request) => {
  const a = Number(request.a)
  const b = Number(request.b)
  const result =
    checkNumber(a) && checkNumber(b)
      ? `${a} × ${b} = ${a * b}`
      : MESSAGE.invalid
  return /*html*/ `
  <form action=${PATH.multiplication.path} method='get'>
    <p>A: <input type='text' name='a' /></p>
    <p>B: <input type='text' name='b' /></p>
    <p><button type='submit'>제출</button></p>
  </form>
  <div>${result}</div>`
}
