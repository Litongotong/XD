/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.sms.sol.sys {
    export class SMSMessageMgr {
        public static getMessage$java_lang_String$java_lang_String_A(messageCode: string, messageDetail: string[]): string {
            return null;
        }

        public static getMessage(messageCode?: any, messageDetail?: any): string {
            if (((typeof messageCode === 'string') || messageCode === null) && ((messageDetail != null && messageDetail instanceof <any>Array && (messageDetail.length == 0 || messageDetail[0] == null ||(typeof messageDetail[0] === 'string'))) || messageDetail === null)) {
                return <any>lib.com.fujitsu.sms.sol.sys.SMSMessageMgr.getMessage$java_lang_String$java_lang_String_A(messageCode, messageDetail);
            } else if (((typeof messageCode === 'string') || messageCode === null) && messageDetail === undefined) {
                return <any>lib.com.fujitsu.sms.sol.sys.SMSMessageMgr.getMessage$java_lang_String(messageCode);
            } else throw new Error('invalid overload');
        }

        public static getMessage$java_lang_String(messageCode: string): string {
            return null;
        }
    }
    SMSMessageMgr["__class"] = "lib.com.fujitsu.sms.sol.sys.SMSMessageMgr";

}

