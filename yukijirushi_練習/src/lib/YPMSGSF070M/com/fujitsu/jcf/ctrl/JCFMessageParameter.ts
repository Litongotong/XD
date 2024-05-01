/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.ctrl {
    export class JCFMessageParameter {
        public constructor(messageID?: any, event?: any, inStrs?: any, inAddStrs?: any, data?: any, x?: any, y?: any) {
            if (((typeof messageID === 'string') || messageID === null) && ((event != null && event instanceof <any>lib.com.fujitsu.jcf.ctrl.JCFEvent) || event === null) && ((inStrs != null && inStrs instanceof <any>Array && (inStrs.length == 0 || inStrs[0] == null ||(typeof inStrs[0] === 'string'))) || inStrs === null) && ((inAddStrs != null && inAddStrs instanceof <any>Array && (inAddStrs.length == 0 || inAddStrs[0] == null ||(typeof inAddStrs[0] === 'string'))) || inAddStrs === null) && ((data != null) || data === null) && ((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null)) {
                let __args = arguments;
                if (this.messageID === undefined) { this.messageID = null; } 
                if (this.inStrs === undefined) { this.inStrs = null; } 
                if (this.inAddStrs === undefined) { this.inAddStrs = null; } 
                if (this.data === undefined) { this.data = null; } 
                if (this.point === undefined) { this.point = null; } 
                if (this.event === undefined) { this.event = null; } 
                if (this.specifiedEvent === undefined) { this.specifiedEvent = false; } 
                this.messageID = null;
                this.inStrs = [];
                this.inAddStrs = [];
                this.data = null;
                this.point = null;
                this.event = null;
                this.specifiedEvent = false;
                this.specifiedEvent = true;
                this.messageID = messageID;
                this.event = event;
                if (inStrs != null)this.inStrs = inStrs;
                if (inAddStrs != null)this.inAddStrs = inAddStrs;
                this.data = data;
                this.point = new com.java.Point(x, y);
            } else if (((typeof messageID === 'string') || messageID === null) && ((typeof event === 'string') || event === null) && ((typeof inStrs === 'string') || inStrs === null) && ((inAddStrs != null) || inAddStrs === null) && ((typeof data === 'number') || data === null) && ((typeof x === 'number') || x === null) && y === undefined) {
                let __args = arguments;
                let inStr: any = __args[1];
                let inAddStr: any = __args[2];
                let data: any = __args[3];
                let x: any = __args[4];
                let y: any = __args[5];
                if (this.messageID === undefined) { this.messageID = null; } 
                if (this.inStrs === undefined) { this.inStrs = null; } 
                if (this.inAddStrs === undefined) { this.inAddStrs = null; } 
                if (this.data === undefined) { this.data = null; } 
                if (this.point === undefined) { this.point = null; } 
                if (this.event === undefined) { this.event = null; } 
                if (this.specifiedEvent === undefined) { this.specifiedEvent = false; } 
                this.messageID = null;
                this.inStrs = [];
                this.inAddStrs = [];
                this.data = null;
                this.point = null;
                this.event = null;
                this.specifiedEvent = false;
                this.messageID = messageID;
                if (inStr != null){
                    this.inStrs = [null];
                    this.inStrs[0] = inStr;
                }
                if (inAddStr != null){
                    this.inAddStrs = [null];
                    this.inAddStrs[0] = inAddStr;
                }
                this.data = data;
                this.point = new com.java.Point(x, y);
            } else if (((typeof messageID === 'string') || messageID === null) && ((event != null && event instanceof <any>Array && (event.length == 0 || event[0] == null ||(typeof event[0] === 'string'))) || event === null) && ((inStrs != null && inStrs instanceof <any>Array && (inStrs.length == 0 || inStrs[0] == null ||(typeof inStrs[0] === 'string'))) || inStrs === null) && ((inAddStrs != null) || inAddStrs === null) && ((typeof data === 'number') || data === null) && ((typeof x === 'number') || x === null) && y === undefined) {
                let __args = arguments;
                let inStrs: any = __args[1];
                let inAddStrs: any = __args[2];
                let data: any = __args[3];
                let x: any = __args[4];
                let y: any = __args[5];
                if (this.messageID === undefined) { this.messageID = null; } 
                if (this.inStrs === undefined) { this.inStrs = null; } 
                if (this.inAddStrs === undefined) { this.inAddStrs = null; } 
                if (this.data === undefined) { this.data = null; } 
                if (this.point === undefined) { this.point = null; } 
                if (this.event === undefined) { this.event = null; } 
                if (this.specifiedEvent === undefined) { this.specifiedEvent = false; } 
                this.messageID = null;
                this.inStrs = [];
                this.inAddStrs = [];
                this.data = null;
                this.point = null;
                this.event = null;
                this.specifiedEvent = false;
                this.messageID = messageID;
                if (inStrs != null)this.inStrs = inStrs;
                if (inAddStrs != null)this.inAddStrs = inAddStrs;
                this.data = data;
                this.point = new com.java.Point(x, y);
            } else if (((typeof messageID === 'string') || messageID === null) && ((event != null && event instanceof <any>lib.com.fujitsu.jcf.ctrl.JCFEvent) || event === null) && ((inStrs != null && inStrs instanceof <any>Array && (inStrs.length == 0 || inStrs[0] == null ||(typeof inStrs[0] === 'string'))) || inStrs === null) && ((inAddStrs != null && inAddStrs instanceof <any>Array && (inAddStrs.length == 0 || inAddStrs[0] == null ||(typeof inAddStrs[0] === 'string'))) || inAddStrs === null) && ((data != null) || data === null) && x === undefined && y === undefined) {
                let __args = arguments;
                if (this.messageID === undefined) { this.messageID = null; } 
                if (this.inStrs === undefined) { this.inStrs = null; } 
                if (this.inAddStrs === undefined) { this.inAddStrs = null; } 
                if (this.data === undefined) { this.data = null; } 
                if (this.point === undefined) { this.point = null; } 
                if (this.event === undefined) { this.event = null; } 
                if (this.specifiedEvent === undefined) { this.specifiedEvent = false; } 
                this.messageID = null;
                this.inStrs = [];
                this.inAddStrs = [];
                this.data = null;
                this.point = null;
                this.event = null;
                this.specifiedEvent = false;
                this.specifiedEvent = true;
                this.messageID = messageID;
                this.event = event;
                if (inStrs != null)this.inStrs = inStrs;
                if (inAddStrs != null)this.inAddStrs = inAddStrs;
                this.data = data;
            } else if (((typeof messageID === 'string') || messageID === null) && ((typeof event === 'string') || event === null) && ((typeof inStrs === 'string') || inStrs === null) && ((inAddStrs != null) || inAddStrs === null) && data === undefined && x === undefined && y === undefined) {
                let __args = arguments;
                let inStr: any = __args[1];
                let inAddStr: any = __args[2];
                let data: any = __args[3];
                if (this.messageID === undefined) { this.messageID = null; } 
                if (this.inStrs === undefined) { this.inStrs = null; } 
                if (this.inAddStrs === undefined) { this.inAddStrs = null; } 
                if (this.data === undefined) { this.data = null; } 
                if (this.point === undefined) { this.point = null; } 
                if (this.event === undefined) { this.event = null; } 
                if (this.specifiedEvent === undefined) { this.specifiedEvent = false; } 
                this.messageID = null;
                this.inStrs = [];
                this.inAddStrs = [];
                this.data = null;
                this.point = null;
                this.event = null;
                this.specifiedEvent = false;
                this.messageID = messageID;
                if (inStr != null){
                    this.inStrs = [null];
                    this.inStrs[0] = inStr;
                }
                if (inAddStr != null){
                    this.inAddStrs = [null];
                    this.inAddStrs[0] = inAddStr;
                }
                this.data = data;
            } else if (((typeof messageID === 'string') || messageID === null) && ((event != null && event instanceof <any>Array && (event.length == 0 || event[0] == null ||(typeof event[0] === 'string'))) || event === null) && ((inStrs != null && inStrs instanceof <any>Array && (inStrs.length == 0 || inStrs[0] == null ||(typeof inStrs[0] === 'string'))) || inStrs === null) && ((inAddStrs != null) || inAddStrs === null) && data === undefined && x === undefined && y === undefined) {
                let __args = arguments;
                let inStrs: any = __args[1];
                let inAddStrs: any = __args[2];
                let data: any = __args[3];
                if (this.messageID === undefined) { this.messageID = null; } 
                if (this.inStrs === undefined) { this.inStrs = null; } 
                if (this.inAddStrs === undefined) { this.inAddStrs = null; } 
                if (this.data === undefined) { this.data = null; } 
                if (this.point === undefined) { this.point = null; } 
                if (this.event === undefined) { this.event = null; } 
                if (this.specifiedEvent === undefined) { this.specifiedEvent = false; } 
                this.messageID = null;
                this.inStrs = [];
                this.inAddStrs = [];
                this.data = null;
                this.point = null;
                this.event = null;
                this.specifiedEvent = false;
                this.messageID = messageID;
                if (inStrs != null)this.inStrs = inStrs;
                if (inAddStrs != null)this.inAddStrs = inAddStrs;
                this.data = data;
            } else throw new Error('invalid overload');
        }

        getData(): any {
            return this.data;
        }

        getEvent(): lib.com.fujitsu.jcf.ctrl.JCFEvent {
            return this.event;
        }

        getInAddStrs(): string[] {
            return this.inAddStrs;
        }

        getInStrs(): string[] {
            return this.inStrs;
        }

        getMessageID(): string {
            return this.messageID;
        }

        getPoint(): com.java.Point {
            return this.point;
        }

        isSpecifiedEvent(): boolean {
            return this.specifiedEvent;
        }

        public static CLASS_VERSION: string = "V2L10";

        public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2009";

        public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

        static CLASS_NAME: string = "JCFMessageParameter";

        /*private*/ messageID: string;

        /*private*/ inStrs: string[];

        /*private*/ inAddStrs: string[];

        /*private*/ data: any;

        /*private*/ point: com.java.Point;

        /*private*/ event: lib.com.fujitsu.jcf.ctrl.JCFEvent;

        /*private*/ specifiedEvent: boolean;
    }
    JCFMessageParameter["__class"] = "lib.com.fujitsu.jcf.ctrl.JCFMessageParameter";

}

