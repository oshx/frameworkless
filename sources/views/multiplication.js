module.exports = ({ action, result }) => /*html*/ `
<div>곱하고 싶은 2개의 숫자를 입력하세요!</div>
<form action=${action} method='get'>
  <p>A: <input type='text' name='a' /></p>
  <p>B: <input type='text' name='b' /></p>
  <p><button type='submit'>제출</button></p>
</form>
<div>${result}</div>`
