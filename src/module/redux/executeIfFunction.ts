export function executeIfFunction(value: any | Function, ...payload?: any): any {
  return typeof value === 'function' ?
    value(...payload) :
    value;
}
