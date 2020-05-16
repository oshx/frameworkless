const APP_NAME = '수학 마법사'

const MESSAGE = {
  invalid: '숫자로 값을 입력해주세요.',
}

const toPath = (result, { title, path = '/', controller }) => {
  const pathItem = {
    title: title ? `${title} - ${APP_NAME}` : APP_NAME,
    menuName: title ? title : null,
    controller,
    path,
  }
  result.push(pathItem)
  result[controller] = pathItem
  result[path] = pathItem
  return result
}

const PATH = [
  {
    title: '시작',
    path: '/',
    controller: 'home',
  },
  {
    title: '곱셈',
    path: '/multiplication',
    controller: 'multiplication',
  },
  {
    title: '제곱',
    path: '/square',
    controller: 'square',
  },
  {
    title: '팩토리얼',
    path: '/factorial',
    controller: 'factorial',
  },
  {
    title: '피보나치',
    path: '/fibonacci',
    controller: 'fibonacci',
  },
].reduce(toPath, [])

module.exports = { PATH, MESSAGE }
