/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.caa {
    export class CJSpreadUtil {
        static Header: string = "$Header: /CAA/ClientJ/SpreadB/Current/src/com/fujitsu/caa/CJSpreadUtil.java 60    11/05/23 14:09 Kura $";

        static Modtime: string = "$Modtime: 11/05/23 14:05 $";

        static Workfile: string = "$Workfile: CJSpreadUtil.java $";

        static COPYRIGHT: string = "@(#) $Revision: 60 $ Copyright (C) 2000-2011, Fujitsu Advanced Engineering Limited.\n";

        static Revision: string; public static Revision_$LI$(): string { if (CJSpreadUtil.Revision == null) { CJSpreadUtil.Revision = "@(#) $Revision: 60 $ Copyright (C) 2000-2011, Fujitsu Advanced Engineering Limited.\n".substring("@(#) $Revision: 60 $ Copyright (C) 2000-2011, Fujitsu Advanced Engineering Limited.\n".indexOf('$'), "@(#) $Revision: 60 $ Copyright (C) 2000-2011, Fujitsu Advanced Engineering Limited.\n".lastIndexOf('$') + 1); }  return CJSpreadUtil.Revision; }

        static CELL_CANNOTSETCURSOR_NOTSELECTABLE: number = 1;

        static CELL_CANNOTSETCURSOR_NOTEDITABLE: number = 2;

        static CELL_CANNOTSETCURSOR_HIDDEN: number = 4;

        static CELL_CANNOTSETCURSOR_NULLRECT: number = 8;

        static CELL_CANSETCURSOR_ALWAYS: number = 0;

        static CELL_CANNOTSETCURSOR_ALWAYS: number = 16;

        static SPREAD_DISABLEHORZSCROLLWHENEDIT: number = 16;

        static SPREAD_DISABLEVERTSCROLLWHENEDIT: number = 32;
    }
    CJSpreadUtil["__class"] = "lib.com.fujitsu.caa.CJSpreadUtil";

}

