const { render } = require('@/utils/view')
const { PATH } = require('@/config')

module.exports = (_, response) => render(response, PATH.home)
