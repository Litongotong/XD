import { Adapter } from "@/lib/adapter/adapter";
import type { JCFContext } from "@/lib/jcf/ctrl/JCFContext";
import type { JCFComboBoxData } from "@/lib/jcf/gui/JCFComboBoxData";

export class SMSCjfLogicBase extends Adapter {
  protected useCaseID = ''
  
  checkDialogException(context: JCFContext) {

  }

  callErrorAdapter(context: JCFContext, th: unknown) {

  }

  getComboID(comboBoxData: JCFComboBoxData): string {

  }



  
}
