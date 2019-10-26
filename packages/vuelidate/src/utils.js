import { isRef } from '@vue/composition-api'

export function unwrap (val) {
  return isRef(val)
    ? val.value
    : val
}

export function unwrapObj (obj, ignoreKeys = []) {
  return Object.keys(obj).reduce((o, k) => {
    if (ignoreKeys.includes(k)) return o
    o[k] = unwrap(obj[k])
    return o
  }, {})
}

export function isFunction (val) {
  return typeof val === 'function'
}

export function isObject (val) {
  return val !== null && (typeof val === 'object' || isFunction(val))
}

export function isPromise (object) {
  return isObject(object) && isFunction(object.then)
}