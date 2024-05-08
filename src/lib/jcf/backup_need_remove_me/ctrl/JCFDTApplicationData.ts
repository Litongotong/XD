/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
export class JCFDTApplicationData {
    constructor() {
        if (this.enable === undefined) { this.enable = false; }
        if (this.map === undefined) { this.map = null; }
        this.enable = false;
        this.enable = true;
        this.map = <any>({});
    }

    static getInstance(): JCFDTApplicationData {
        if (JCFDTApplicationData.applicationData == null)JCFDTApplicationData.applicationData = new JCFDTApplicationData();
        return JCFDTApplicationData.applicationData;
    }

    setPutable(status: boolean) {
        this.enable = status;
    }

    isPutable(): boolean {
        return this.enable;
    }

    put(key: any, value: any): any {
        return /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>this.map, key, value);
    }

    putAll(map: any) {
        this.map.putAll(map);
    }

    clear() {
        /* clear */(<any>this.map).entries=[];
    }

    containsKey(key: any): boolean {
        return /* containsKey */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return true; } return false; })(<any>this.map, key);
    }

    get(key: any): any {
        return /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.map, key);
    }

    isEmpty(): boolean {
        return /* isEmpty */((m) => { if(m.entries==null) m.entries=[]; return m.entries.length == 0; })(<any>this.map);
    }

    keySet(): Array<any> {
        const tmpmap: any = <any>({});
        return /* keySet */((m) => { let r=[]; if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) r.push(m.entries[i].key); return r; })(<any>tmpmap);
    }

    remove(key: any): any {
        return /* remove */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries.splice(i,1)[0]; } })(<any>this.map, key);
    }

    size(): number {
        return /* size */((m) => { if(m.entries==null) m.entries=[]; return m.entries.length; })(<any>this.map);
    }

    static applicationData: JCFDTApplicationData = null;

    /*private*/ enable: boolean;

    /*private*/ map: any;
}



