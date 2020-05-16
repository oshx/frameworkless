module.exports = ({ action, result }) => /*html*/ `
<div>몇 번째 피보나치 수열 값을 보고 싶은 지 입력하세요!</div>
<form action=${action} method='get'>
  <p>A: <input type='text' name='a' /></p>
  <p><button type='submit'>제출</button></p>
</form>
<div>${result}</div>`
