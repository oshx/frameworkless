const Module = require('module')

/**
 * Monkey Patch
 * 기본 require 문법에 module alias 적용
 * '@/*' = '/sources/*'
 */
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

/**
 * 적용되어야 바로 실행 가능
 */
require('@/bin/www')
