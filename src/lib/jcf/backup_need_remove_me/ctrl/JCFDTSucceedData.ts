/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
export class JCFDTSucceedData {
    public constructor(count?: any) {
        if (((typeof count === 'number') || count === null)) {
            let __args = arguments;
            if (this.enable === undefined) { this.enable = false; } 
            if (this.map === undefined) { this.map = null; } 
            this.enable = false;
            this.map = <any>({});
            this.enable = true;
        } else if (count === undefined) {
            let __args = arguments;
            if (this.enable === undefined) { this.enable = false; } 
            if (this.map === undefined) { this.map = null; } 
            this.enable = false;
            this.map = <any>({});
            this.enable = true;
        } else throw new Error('invalid overload');
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
        return /* keySet */((m) => { let r=[]; if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) r.push(m.entries[i].key); return r; })(<any>this.map);
    }

    remove(key: any): any {
        return /* remove */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries.splice(i,1)[0]; } })(<any>this.map, key);
    }

    size(): number {
        return /* size */((m) => { if(m.entries==null) m.entries=[]; return m.entries.length; })(<any>this.map);
    }

    public static CLASS_VERSION: string = "V01L01";

    public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2003-2009";

    public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

    /*private*/ enable: boolean;

    /*private*/ map: any;
}



