const { render } = require('@/utils/view')
const { PATH } = require('@/config')
const template = require('@/views/multiplication')

module.exports = (request, response) =>
  render(response, PATH.multiplication, template(request))
