export const bindThis = (ins: any) => {
  const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(ins))
  methods.forEach((method) => {
    if (typeof ins[method] === 'function') {
      ins[method] = ins[method].bind(ins)
    }
  })
}
