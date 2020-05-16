module.exports = ({ action, result }) => /*html*/ `
<div>어떤 팩토리얼 값을 보고 싶은 지 입력하세요!</div>
<form action=${action} method='get'>
  <p>A: <input type='text' name='a' /></p>
  <p><button type='submit'>제출</button></p>
</form>
<div>${result}</div>`
