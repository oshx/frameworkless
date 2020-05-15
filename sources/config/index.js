const APP_NAME = '수학 마법사'
const title = (serviceName) =>
  serviceName ? `${serviceName} - ${APP_NAME}` : APP_NAME

const MESSAGE = {
  invalid: '숫자로 A, B의 값을 모두 입력해주세요.',
}

const PATH = {
  home: {
    title: title(),
    path: '/',
  },
  multiplication: {
    title: title('곱셈'),
    path: '/multiplication',
  },
  factorial: {
    title: title('제곱'),
    path: '/square',
  },
  factorial: {
    title: title('팩토리얼'),
    path: '/factorial',
  },
  fibonacci: {
    title: title('피보나치'),
    controller: '/fibonacci',
  },
}

module.exports = { PATH, MESSAGE }
