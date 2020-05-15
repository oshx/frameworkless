const APP_NAME = '수학 마법사'
const title = (serviceName) =>
  serviceName ? `${serviceName} - ${APP_NAME}` : APP_NAME

const MESSAGE = {
  invalid: '숫자로 A, B의 값을 모두 입력해주세요.',
}

const PATH_ORIGIN = [
  {
    title: title(),
    path: '/',
    controller: 'home',
  },
  {
    title: title('곱셈'),
    path: '/multiplication',
    controller: 'multiplication',
  },
  // {
  //   title: title('제곱'),
  //   path: '/square',
  //   controller: 'square',
  // },
  // {
  //   title: title('팩토리얼'),
  //   path: '/factorial',
  //   controller: 'factorial',
  // },
  // {
  //   title: title('피보나치'),
  //   path: '/fibonacci',
  //   controller: 'fibonacci',
  // },
]

const PATH = ((list) => {
  return list.reduce((acc, cur) => {
    acc[cur.controller] = cur
    acc[cur.path] = cur
    return acc
  }, {})
})(PATH_ORIGIN)
console.debug({ PATH })

module.exports = { PATH, PATH_ORIGIN, MESSAGE }
