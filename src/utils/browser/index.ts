import { DIALOG } from "../dialog"

export const closeBrowser = (timeout = 300) => {
  if (import.meta.env.DEV) {
    DIALOG.alert(
      `Browser window closed. (But currently it's not actually closed in development mode)`,
    )
  } else {
    setTimeout(() => {
      window.close()
    }, timeout)
  }
}
