const { PATH_ORIGIN } = require('@/config')

const CSS = /*css*/ `
* {
  margin: 0;
  padding: 0;
}
`

function navbar() {
  return /*html*/ `
  <div class="navbar">
    ${PATH_ORIGIN.map((map) => {
      const { path, title } = map
      return /*html*/ `
      <p><a href="${path}">${title}</a></p>
      `
    }).join('')}
  </div>
  `
}

function page(title, navbar, content = '') {
  return /*html*/ `
  <!doctype html>
  <html lang="ko-KR">
  <head>
    <meta charset="UTF-8" />
    <title>${title}</title>
    <style>${CSS}</style>
  </head>
  <body>
    <h1>${title}</h1>
    <table>
      <tr>
        <td>${navbar}</td>
        <td>${content || ''}</td>
      </tr>
    </table>
  <body>
  </html>
  `
}

function render(response, path, html) {
  response.writeHead(200, {
    'Content-Type': 'text/html',
  })
  return response.end(page(path.title, navbar(), html || ''))
}

module.exports = {
  navbar,
  page,
  render,
}
