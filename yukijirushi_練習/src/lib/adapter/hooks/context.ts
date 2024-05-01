import { JCFContext } from '../sms/jcf'

let context: JCFContext;

export const createContext = () => {
  if (!context) {
    context = new JCFContext();
  }
}

export const useContext = () => {
  if (!context) {
    createContext();
  }
  return {
    context,
  }
}
