const getUUID = () => {
  return window.crypto.randomUUID()
}

const getRandomValueUseCrypto = () => {
  return window.crypto.getRandomValues(new Uint32Array(1))[0]
}

const getRandomHashLegacy = () => {
  return (Math.random() + 1).toString(36).substring(7)
}

export const uuid = () => {
  const canUseUUID = !!window?.crypto?.randomUUID
  if (canUseUUID) {
    return `${getUUID()}`
  }
  const canUseCrypto = !!window?.crypto?.getRandomValues
  if (canUseCrypto) {
    return `${getRandomValueUseCrypto()}`
  }
  return `${getRandomHashLegacy()}`
}
