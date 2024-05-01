/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.sms.sol.sys {
    export class SMSPropsInfos {
        constructor() {
        }

        public static getInfo(searchID: string): lib.com.fujitsu.sms.sol.sys.SMSPropsInfo {
            if (!/* containsKey */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return true; } return false; })(<any>SMSPropsInfos.props_$LI$(), searchID))/* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>SMSPropsInfos.props_$LI$(), searchID, new lib.com.fujitsu.sms.sol.sys.SMSPropsInfo(searchID));
            return <lib.com.fujitsu.sms.sol.sys.SMSPropsInfo>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>SMSPropsInfos.props_$LI$(), searchID);
        }

        public static getInfoNonCache(searchID: string): lib.com.fujitsu.sms.sol.sys.SMSPropsInfo {
            const info: lib.com.fujitsu.sms.sol.sys.SMSPropsInfo = new lib.com.fujitsu.sms.sol.sys.SMSPropsInfo(searchID);
            return info;
        }

        public static getProperty(searchID: string, nmProperty: string): string {
            let value: string = "";
            try {
                value = SMSPropsInfos.getInfo(searchID).getProperty().getString(nmProperty);
            } catch(__e) {
                if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.NullPointerException") >= 0)) {
                    const e: Error = <Error>__e;
                    value = "";

                }
                if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.Exception") >= 0) || __e != null && __e instanceof <any>Error) {
                    const e: Error = <Error>__e;
                    console.error(e.message, e);

                }
            }
            return value;
        }

        public static getPropertyNonCache(searchID: string, nmProperty: string): string {
            let value: string = "";
            try {
                value = SMSPropsInfos.getInfoNonCache(searchID).getProperty().getString(nmProperty);
            } catch(__e) {
                if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.NullPointerException") >= 0)) {
                    const e: Error = <Error>__e;
                    value = "";

                }
                if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.Exception") >= 0) || __e != null && __e instanceof <any>Error) {
                    const e: Error = <Error>__e;
                    console.error(e.message, e);

                }
            }
            return value;
        }

        static ins: SMSPropsInfos; public static ins_$LI$(): SMSPropsInfos { if (SMSPropsInfos.ins == null) { SMSPropsInfos.ins = new SMSPropsInfos(); }  return SMSPropsInfos.ins; }

        static props: any; public static props_$LI$(): any { if (SMSPropsInfos.props == null) { SMSPropsInfos.props = <any>({}); }  return SMSPropsInfos.props; }
    }
    SMSPropsInfos["__class"] = "lib.com.fujitsu.sms.sol.sys.SMSPropsInfos";

}

