module.exports = ({ action, result }) => /*html*/ `
제곱하고 싶은 숫자를 입력하세요!
<form action=${action} method='get'>
  <p>A: <input type='text' name='a' /></p>
  <p><button type='submit'>제출</button></p>
</form>
<div>${result}</div>`
