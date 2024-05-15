export const DIALOG = {
  confirm(message: string) {
    const result = window.confirm(message)
    return result
  },
  alert(message: string) {
    window.alert(message)
  },
}
