/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.caa {
    export class CJTextEditKey {
        static Header: string = "$Header: /CAA/ClientJ/SpreadB/Current/src/com/fujitsu/caa/CJTextEditKey.java 13    09/10/22 17:16 Kura $";

        static Modtime: string = "$Modtime: 09/10/22 17:15 $";

        static Workfile: string = "$Workfile: CJTextEditKey.java $";

        static COPYRIGHT: string = "@(#) $Revision: 13 $ Copyright (C) 1998-2009, Fujitsu Advanced Engineering Limited. & Fujitsu Limited.\n";

        static Revision: string; public static Revision_$LI$(): string { if (CJTextEditKey.Revision == null) { CJTextEditKey.Revision = "@(#) $Revision: 13 $ Copyright (C) 1998-2009, Fujitsu Advanced Engineering Limited. & Fujitsu Limited.\n".substring("@(#) $Revision: 13 $ Copyright (C) 1998-2009, Fujitsu Advanced Engineering Limited. & Fujitsu Limited.\n".indexOf('$'), "@(#) $Revision: 13 $ Copyright (C) 1998-2009, Fujitsu Advanced Engineering Limited. & Fujitsu Limited.\n".lastIndexOf('$') + 1); }  return CJTextEditKey.Revision; }

        static serialVersionUID: number = 1694842237340186827;

        public static KEY_NODEFINE: number = 0;

        public static KEY_STRING: number = 1;

        public static KEY_PREDEFINED: number = 2;

        public static KEY_USERMETHOD: number = 3;

        public static ACT_ACTION: number = 0;

        public static ACT_COPY: number = 1;

        public static ACT_PASTE: number = 2;

        public static ACT_CUT: number = 3;

        public static ACT_DELETE: number = 5;

        public static ACT_BACKSPACE: number = 6;

        public static ACT_HOME: number = 7;

        public static ACT_END: number = 8;

        public static ACT_SELECTHOME: number = 9;

        public static ACT_SELECTEND: number = 10;

        public static ACT_LEFT: number = 11;

        public static ACT_RIGHT: number = 12;

        public static ACT_SELECTLEFT: number = 13;

        public static ACT_SELECTRIGHT: number = 14;

        public static ACT_PAGEUP: number = 15;

        public static ACT_PAGEDOWN: number = 16;

        public static ACT_SELECTPAGEUP: number = 17;

        public static ACT_SELECTPAGEDOWN: number = 18;

        public static ACT_SELECTALL: number = 19;

        public static ACT_DELETEEND: number = 20;

        public static ACT_TOGGLEOVERTYPE: number = 21;

        public static ACT_RESETMODIFY: number = 22;

        public static ACT_UP: number = 23;

        public static ACT_DOWN: number = 24;

        public static ACT_SELECTCELL: number = 25;

        public static ACT_TOGGLESELECT: number = 26;

        public static ACT_NONE: number = 27;

        public static ACT_PREDEFINEMASK: number = 255;

        public static ACT_PRESSACTIONFLAG: number = 256;

        public static ACT1_PRESSACTION: number = 256;

        /**
         * @deprecated Field ACT_RELEASEACTIONFLAG is deprecated
         */
        public static ACT_RELEASEACTIONFLAG: number = 257;

        public static ACT1_RELEASEACTION: number = 512;

        public static ACT1_CALLDEFAULTACTION: number = 768;

        public static ACT_UP_DEFAULT: number = 791;

        public static ACT_DOWN_DEFAULT: number = 792;

        public static ACT_LEFT_DEFAULT: number = 779;

        public static ACT_RIGHT_DEFAULT: number = 780;

        public static ACT_HOME_DEFAULT: number = 775;

        public static ACT_END_DEFAULT: number = 776;

        public static ACT_PAGEUP_DEFAULT: number = 783;

        public static ACT_PAGEDOWN_DEFAULT: number = 784;

        public static ACT_ACTION_DEFAULT: number = 768;

        public static ACT_DELETE_DEFAULT: number = 773;

        public static ACT_SELECTCELL_DEFAULT: number = 793;

        public static ACT_TOGGLESELECT_DEFAULT: number = 794;

        static bname: string = "lib.com.fujitsu.caa.resources.CJMessageResource";
    }
    CJTextEditKey["__class"] = "lib.com.fujitsu.caa.CJTextEditKey";

}

