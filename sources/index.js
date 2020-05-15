const Module = require('module')

Module.prototype.__require = Module.prototype.require
Module.prototype.__current = /^\@\//
Module.prototype.require = (path) => {
  if (typeof path !== 'string')
    throw new TypeError(`[${path}]:[${typeof path}] path type is an invalid.`)
  return Module.prototype.__current.test(path)
    ? Module.prototype.__require(
        `${__dirname}/${path.replace(Module.prototype.__current, '')}`,
      )
    : Module.prototype.__require(path)
}

require('@/bin/www')
