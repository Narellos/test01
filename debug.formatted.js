!function (t) {
    var e = {};
    function i(n) {
        if (e[n])
            return e[n].exports;
        var o = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, i),
            o.l = !0,
            o.exports
    }
    i.m = t,
        i.c = e,
        i.d = function (t, e, n) {
            i.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            })
        }
        ,
        i.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
        }
        ,
        i.t = function (t, e) {
            if (1 & e && (t = i(t)),
                8 & e)
                return t;
            if (4 & e && "object" == typeof t && t && t.__esModule)
                return t;
            var n = Object.create(null);
            if (i.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }),
                2 & e && "string" != typeof t)
                for (var o in t)
                    i.d(n, o, function (e) {
                        return t[e]
                    }
                        .bind(null, o));
            return n
        }
        ,
        i.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            }
                : function () {
                    return t
                }
                ;
            return i.d(e, "a", e),
                e
        }
        ,
        i.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        i.p = "",
        i(i.s = 0)
}([function (t, e, i) {
    "use strict";

    i.r(e);
    const n = {
        yangzhou: "jh fam 0 start",
        dayuan: "jh fam 0 1",
        banghui: "jh fam 0 2",
        wumiao: "jh fam 0 3",
        qianzhuang: "jh fam 0 4",
        dangpu: "jh fam 0 5",
        yamen: "jh fam 0 6",
        yaopu: "jh fam 0 7",
        shuyuan: "jh fam 0 8",
        zuixianlou: "jh fam 0 9",
        zahuopu: "jh fam 0 10",
        datiepu: "jh fam 0 11",
        wuguan: "jh fam 0 12",
        wudang0: "jh fam 1 start",
        wudang1: "jh fam 1 1",
        shaolin0: "jh fam 2 start",
        shaolin1: "jh fam 2 1",
        huashan0: "jh fam 3 start",
        huashan1: "jh fam 3 1",
        emei0: "jh fam 4 start",
        emei1: "jh fam 4 1",
        xiaoyao0: "jh fam 5 start",
        xiaoyao1: "jh fam 5 1",
        gaibang0: "jh fam 6 start",
        gaibang1: "jh fam 6 1",
        xiangyang0: "jh fam 7 start",
        tiandao0: "jh fam 8 start",
        goeast: "go east",
        gowest: "go west",
        gonorth: "go north",
        gosouth: "go south",
        goeastup: "go eastup",
        gowestup: "go westup",
        gonorthup: "go northup",
        gosouthup: "go southup",
        gosouthwest: "go southwest",
        gosoutheast: "go southeast",
        gonorthwest: "go northwest",
        gonortheast: "go northeast",
        goup: "go up",
        godown: "go down",
        goenter: "go enter",
        stopstate: "stopstate",
        dazuo: "dazuo",
        liaoshang: "liaoshang",
        relive: "relive",
        relivelocal: "relive locale",
        breakbi: "break bi",
        opendoor: "open door",
        jumpdown: "jump down",
        cai: "cai",
        work: "work",
        list: "list",
        kaixi: "kaixi",
        score: "score",
        pack: "pack",
        cha: "cha",
        tasks: "tasks",
        zhuibu: "zhuibu",
        sellall: "sell all",
        baoming: "baoming",
        yjfenjie: "yjfeijie",
        give: "give",
        search: "search",
        dakai: "dakai",
        goautofuben: "go_fuben -auto",
        gumuenter: "go_enter",
        lookguanguo: "look guanguo",
        gumuover: "go_fuben -over_bz",
        buy: {
            "<wht>包子<nor>": "jh fam 0 9",
            "<wht>米饭<nor>": "jh fam 0 9",
            "<wht>面条<nor>": "jh fam 0 9",
            "<wht>鸡腿<nor>": "jh fam 0 9",
            "<wht>米酒<nor>": "jh fam 0 9",
            "<wht>花雕酒<nor>": "jh fam 0 9",
            "<wht>扬州炒饭<nor>": "jh fam 0 9",
            "<wht>女儿红<nor>": "jh fam 0 9",
            "<hig>醉仙酿<nor>": "jh fam 0 9",
            "<hiy>神仙醉<nor>": "jh fam 0 9",
            "<wht>布鞋<nor>": "jh fam 0 10",
            "<wht>钢刀<nor>": "jh fam 0 10",
            "<wht>长鞭<nor>": "jh fam 0 10",
            "<wht>簪子<nor>": "jh fam 0 10",
            "<wht>铁戒指<nor>": "jh fam 0 10",
            "<wht>英雄巾<nor>": "jh fam 0 10",
            "<wht>布衣<nor>": "jh fam 0 10",
            "<wht>木棍<nor>": "jh fam 0 10",
            "<wht>钢刀<nor>": "jh fam 0 11",
            "<wht>铁杖<nor>": "jh fam 0 11",
            "<wht>铁棍<nor>": "jh fam 0 11",
            "<wht>铁剑<nor>": "jh fam 0 11",
            "<wht>钢针<nor>": "jh fam 0 11",
            "<hig>引气丹<nor>": "jh fam 0 7",
            "<hig>金创药<nor>": "jh fam 0 7",
            "<hig>养精丹<nor>": "jh fam 0 7"
        },
        liandan: {
            "<hig>突破丹<nor>": "lianyao /clone/medicine/medicine/lv2_tupodan",
            "<hig>凝神丹<nor>": "lianyao /clone/medicine/medicine/lv2_ningshendan",
            "<hig>生机丸<nor>": "lianyao /clone/medicine/medicine/lv2_shengjiwan",
            "<hig>破军丹<nor>": "lianyao /clone/medicine/medicine/lv2_pojundan",
            "<hig>无常丹<nor>": "lianyao /clone/medicine/medicine/lv2_wuchangdan",
            "<hig>归元散<nor>": "lianyao /clone/medicine/medicine/lv2_guiyuansan",
            "<hig>风神丹<nor>": "lianyao /clone/medicine/medicine/lv2_fengshendan",
            "<hig>造化丹<nor>": "lianyao /clone/medicine/medicine/lv2_zaohuadan",
            "<hig>大还丹<nor>": "lianyao /clone/medicine/medicine/lv2_dahuandan",
            "<hig>蕴象丸<nor>": "lianyao /clone/medicine/medicine/lv2_yunxiangwan",
            "<hig>玄灵丹<nor>": "lianyao /clone/medicine/medicine/lv2_xuanlingdan",
            "<hig>赤火丹<nor>": "lianyao /clone/medicine/medicine/lv2_chihuodan",
            "<hig>风行散<nor>": "lianyao /clone/medicine/medicine/lv2_fengxingsan",
            "<hig>风雷丹<nor>": "lianyao /clone/medicine/medicine/lv2_fengleidan",
            "<hig>冰心丹<nor>": "lianyao /clone/medicine/medicine/lv2_bingxindan",
            "<hig>玄冰丹<nor>": "lianyao /clone/medicine/medicine/lv2_xuanbingdan",
            "<hig>玄武丹<nor>": "lianyao /clone/medicine/medicine/lv2_xuanwudan",
            "<hig>大力丸<nor>": "lianyao /clone/medicine/medicine/lv2_daliwan",
            "<hig>风行丹<nor>": "lianyao /clone/medicine/medicine/lv2_fengxingdan",
            "<hig>归心散<nor>": "lianyao /clone/medicine/medicine/lv2_guixinsan",
            "<hig>石龟丹<nor>": "lianyao /clone/medicine/medicine/lv2_shiguidan",
            "<hig>清心丹<nor>": "lianyao /clone/medicine/medicine/lv2_qingxindan",
            "<hig>赤血丹<nor>": "lianyao /clone/medicine/medicine/lv2_chixuedan",
            "<hig>引气丹<nor>": "lianyao /clone/medicine/yinqidan2",
            "<hig>聚气丹<nor>": "lianyao /clone/medicine/juqidan2",
            "<hig>金创药<nor>": "lianyao /clone/medicine/jinchuangyao2",
            "<hic>突破丹<nor>": "lianyao /clone/medicine/medicine/lv3_tupodan",
            "<hic>凝神丹<nor>": "lianyao /clone/medicine/medicine/lv3_ningshendan",
            "<hic>生机丸<nor>": "lianyao /clone/medicine/medicine/lv3_shengjiwan",
            "<hic>破军丹<nor>": "lianyao /clone/medicine/medicine/lv3_pojundan",
            "<hic>无常丹<nor>": "lianyao /clone/medicine/medicine/lv3_wuchangdan",
            "<hic>归元散<nor>": "lianyao /clone/medicine/medicine/lv3_guiyuansan",
            "<hic>风神丹<nor>": "lianyao /clone/medicine/medicine/lv3_fengshendan",
            "<hic>造化丹<nor>": "lianyao /clone/medicine/medicine/lv3_zaohuadan",
            "<hic>大还丹<nor>": "lianyao /clone/medicine/medicine/lv3_dahuandan",
            "<hic>蕴象丸<nor>": "lianyao /clone/medicine/medicine/lv3_yunxiangwan",
            "<hic>玄灵丹<nor>": "lianyao /clone/medicine/medicine/lv3_xuanlingdan",
            "<hic>赤火丹<nor>": "lianyao /clone/medicine/medicine/lv3_chihuodan",
            "<hic>风行散<nor>": "lianyao /clone/medicine/medicine/lv3_fengxingsan",
            "<hic>风雷丹<nor>": "lianyao /clone/medicine/medicine/lv3_fengleidan",
            "<hic>冰心丹<nor>": "lianyao /clone/medicine/medicine/lv3_bingxindan",
            "<hic>玄冰丹<nor>": "lianyao /clone/medicine/medicine/lv3_xuanbingdan",
            "<hic>玄武丹<nor>": "lianyao /clone/medicine/medicine/lv3_xuanwudan",
            "<hic>大力丸<nor>": "lianyao /clone/medicine/medicine/lv3_daliwan",
            "<hic>风行丹<nor>": "lianyao /clone/medicine/medicine/lv3_fengxingdan",
            "<hic>归心散<nor>": "lianyao /clone/medicine/medicine/lv3_guixinsan",
            "<hic>石龟丹<nor>": "lianyao /clone/medicine/medicine/lv3_shiguidan",
            "<hic>清心丹<nor>": "lianyao /clone/medicine/medicine/lv3_qingxindan",
            "<hic>赤血丹<nor>": "lianyao /clone/medicine/medicine/lv3_chixuedan",
            "<hic>引气丹<nor>": "lianyao /clone/medicine/yinqidan3",
            "<hic>聚气丹<nor>": "lianyao /clone/medicine/juqidan3",
            "<hic>金创药<nor>": "lianyao /clone/medicine/jinchuangyao3",
            "<hiy>突破丹<nor>": "lianyao /clone/medicine/medicine/lv4_tupodan",
            "<hiy>凝神丹<nor>": "lianyao /clone/medicine/medicine/lv4_ningshendan",
            "<hiy>生机丸<nor>": "lianyao /clone/medicine/medicine/lv4_shengjiwan",
            "<hiy>破军丹<nor>": "lianyao /clone/medicine/medicine/lv4_pojundan",
            "<hiy>无常丹<nor>": "lianyao /clone/medicine/medicine/lv4_wuchangdan",
            "<hiy>归元散<nor>": "lianyao /clone/medicine/medicine/lv4_guiyuansan",
            "<hiy>风神丹<nor>": "lianyao /clone/medicine/medicine/lv4_fengshendan",
            "<hiy>造化丹<nor>": "lianyao /clone/medicine/medicine/lv4_zaohuadan",
            "<hiy>大还丹<nor>": "lianyao /clone/medicine/medicine/lv4_dahuandan",
            "<hiy>蕴象丸<nor>": "lianyao /clone/medicine/medicine/lv4_yunxiangwan",
            "<hiy>玄灵丹<nor>": "lianyao /clone/medicine/medicine/lv4_xuanlingdan",
            "<hiy>赤火丹<nor>": "lianyao /clone/medicine/medicine/lv4_chihuodan",
            "<hiy>风行散<nor>": "lianyao /clone/medicine/medicine/lv4_fengxingsan",
            "<hiy>风雷丹<nor>": "lianyao /clone/medicine/medicine/lv4_fengleidan",
            "<hiy>冰心丹<nor>": "lianyao /clone/medicine/medicine/lv4_bingxindan",
            "<hiy>玄冰丹<nor>": "lianyao /clone/medicine/medicine/lv4_xuanbingdan",
            "<hiy>玄武丹<nor>": "lianyao /clone/medicine/medicine/lv4_xuanwudan",
            "<hiy>大力丸<nor>": "lianyao /clone/medicine/medicine/lv4_daliwan",
            "<hiy>风行丹<nor>": "lianyao /clone/medicine/medicine/lv4_fengxingdan",
            "<hiy>归心散<nor>": "lianyao /clone/medicine/medicine/lv4_guixinsan",
            "<hiy>石龟丹<nor>": "lianyao /clone/medicine/medicine/lv4_shiguidan",
            "<hiy>清心丹<nor>": "lianyao /clone/medicine/medicine/lv4_qingxindan",
            "<hiy>赤血丹<nor>": "lianyao /clone/medicine/medicine/lv4_chixuedan",
            "<hiy>引气丹<nor>": "lianyao /clone/medicine/yinqidan4",
            "<hiy>聚气丹<nor>": "lianyao /clone/medicine/juqidan4",
            "<hiy>金创药<nor>": "lianyao /clone/medicine/jinchuangyao4",
            "<hiz>突破丹<nor>": "lianyao /clone/medicine/medicine/lv5_tupodan",
            "<hiz>凝神丹<nor>": "lianyao /clone/medicine/medicine/lv5_ningshendan",
            "<hiz>生机丸<nor>": "lianyao /clone/medicine/medicine/lv5_shengjiwan",
            "<hiz>破军丹<nor>": "lianyao /clone/medicine/medicine/lv5_pojundan",
            "<hiz>无常丹<nor>": "lianyao /clone/medicine/medicine/lv5_wuchangdan",
            "<hiz>归元散<nor>": "lianyao /clone/medicine/medicine/lv5_guiyuansan",
            "<hiz>风神丹<nor>": "lianyao /clone/medicine/medicine/lv5_fengshendan",
            "<hiz>造化丹<nor>": "lianyao /clone/medicine/medicine/lv5_zaohuadan",
            "<hiz>大还丹<nor>": "lianyao /clone/medicine/medicine/lv5_dahuandan",
            "<hiz>蕴象丸<nor>": "lianyao /clone/medicine/medicine/lv5_yunxiangwan",
            "<hiz>玄灵丹<nor>": "lianyao /clone/medicine/medicine/lv5_xuanlingdan",
            "<hiz>赤火丹<nor>": "lianyao /clone/medicine/medicine/lv5_chihuodan",
            "<hiz>风行散<nor>": "lianyao /clone/medicine/medicine/lv5_fengxingsan",
            "<hiz>风雷丹<nor>": "lianyao /clone/medicine/medicine/lv5_fengleidan",
            "<hiz>冰心丹<nor>": "lianyao /clone/medicine/medicine/lv5_bingxindan",
            "<hiz>玄冰丹<nor>": "lianyao /clone/medicine/medicine/lv5_xuanbingdan",
            "<hiz>玄武丹<nor>": "lianyao /clone/medicine/medicine/lv5_xuanwudan",
            "<hiz>大力丸<nor>": "lianyao /clone/medicine/medicine/lv5_daliwan",
            "<hiz>风行丹<nor>": "lianyao /clone/medicine/medicine/lv5_fengxingdan",
            "<hiz>归心散<nor>": "lianyao /clone/medicine/medicine/lv5_guixinsan",
            "<hiz>石龟丹<nor>": "lianyao /clone/medicine/medicine/lv5_shiguidan",
            "<hiz>清心丹<nor>": "lianyao /clone/medicine/medicine/lv5_qingxindan",
            "<hiz>赤血丹<nor>": "lianyao /clone/medicine/medicine/lv5_chixuedan",
            "<hiz>引气丹<nor>": "lianyao /clone/medicine/yinqidan5",
            "<hiz>聚气丹<nor>": "lianyao /clone/medicine/juqidan5",
            "<hiz>金创药<nor>": "lianyao /clone/medicine/jinchuangyao5"
        }
    }
        , o = {
            "武当": {
                "首席": [n.wudang1],
                "武当广场": [n.wudang0],
                "三清殿": [n.wudang0, n.gonorth],
                "石阶": [n.wudang0, n.gowest],
                "练功房": [n.wudang0, n.gowest, n.gowest],
                "太子岩": [n.wudang1],
                "桃园小路": [n.wudang1, n.gonorth],
                "舍身崖": [n.wudang1, n.gonorth, n.goeast],
                "南岩峰": [n.wudang1, n.gonorth, n.gowest],
                "乌鸦岭": [n.wudang1, n.gonorth, n.gowest, n.gonorthup],
                "三老峰": [n.wudang1, n.gonorth, n.gowest, n.gonorthup, n.gonorthup],
                "五老峰": [n.wudang1, n.gonorth, n.gowest, n.gonorthup, n.gonorthup, n.gonorthup],
                "虎头岩": [n.wudang1, n.gonorth, n.gowest, n.gonorthup, n.gonorthup, n.gonorthup, n.gonorthup],
                "朝天宫": [n.wudang1, n.gonorth, n.gowest, n.gonorthup, n.gonorthup, n.gonorthup, n.gonorthup, n.gonorth],
                "三天门": [n.wudang1, n.gonorth, n.gowest, n.gonorthup, n.gonorthup, n.gonorthup, n.gonorthup, n.gonorth, n.gonorth],
                "十二莲台": [n.wudang1, n.gonorth, n.gowest, n.gonorthup, n.gonorthup, n.gonorthup, n.gonorthup, n.gonorth, n.gonorth, n.gonorth],
                "茶室": [n.wudang1, n.gonorth, n.gowest, n.gonorthup, n.gonorthup, n.gonorthup, n.gonorthup, n.gonorth, n.gonorth, n.gonorth, n.goeast],
                "紫金城": [n.wudang1, n.gonorth, n.gowest, n.gonorthup, n.gonorthup, n.gonorthup, n.gonorthup, n.gonorth, n.gonorth, n.gonorth, n.gonorth],
                "林间小径1": [n.wudang1, n.gonorth, n.gowest, n.gonorthup, n.gonorthup, n.gonorthup, n.gonorthup, n.gonorth, n.gonorth, n.gonorth, n.gonorth, n.gonorth],
                "林间小径2": [n.wudang1, n.gonorth, n.gowest, n.gonorthup, n.gonorthup, n.gonorthup, n.gonorthup, n.gonorth, n.gonorth, n.gonorth, n.gonorth, n.gonorth, n.gonorth],
                "金殿": [n.wudang1, n.gonorth, n.gowest, n.gonorthup, n.gonorthup, n.gonorthup, n.gonorthup, n.gonorth, n.gonorth, n.gonorth, n.gonorth, n.gonorth, n.gonorth, n.opendoor, n.gonorth],
                "林间小径": [n.wudang1, n.gonorth, n.gowest, n.gonorthup, n.gonorthup, n.gonorthup, n.gonorthup, n.gonorth, n.gonorth, n.gonorth, n.gonorth, n.gonorth, n.gonorth]
            },
            "少林": {
                "首席": [n.shaolin1],
                "广场1": [n.shaolin0],
                "山门殿": [n.shaolin0, n.gonorth],
                "西侧殿1": [n.shaolin0, n.gonorth, n.gowest],
                "东侧殿1": [n.shaolin0, n.gonorth, n.goeast],
                "台阶": [n.shaolin0, n.gonorth, n.gonorth],
                "西碑林": [n.shaolin0, n.gonorth, n.gonorth, n.gowest],
                "东碑林": [n.shaolin0, n.gonorth, n.gonorth, n.goeast],
                "天王殿": [n.shaolin0, n.gonorth, n.gonorth, n.gonorthup],
                "西侧殿2": [n.shaolin0, n.gonorth, n.gonorth, n.gonorthup, n.gowest],
                "东侧殿2": [n.shaolin0, n.gonorth, n.gonorth, n.gonorthup, n.goeast],
                "广场2": [n.shaolin1, n.gosouth, n.gosouthwest, n.goeast],
                "大雄宝殿": [n.shaolin1, n.gosouth, n.gosouthwest, n.goeast, n.gonorthup],
                "鼓楼小院": [n.shaolin1, n.gosouth, n.gosouthwest],
                "钟楼小院": [n.shaolin1, n.gosouth, n.gosoutheast],
                "后殿": [n.shaolin1, n.gosouth],
                "练武场1": [n.shaolin1],
                "般若堂": [n.shaolin1, n.gowest],
                "罗汉堂": [n.shaolin1, n.goeast],
                "方丈楼": [n.shaolin1, n.gonorth],
                "练武场2": [n.shaolin1, n.gonorth, n.gonorth],
                "达摩院": [n.shaolin1, n.gonorth, n.gonorth, n.gonorthup],
                "广场3": [n.shaolin1, n.gonorth, n.gonorth, n.gonorthup, n.gonorth],
                "地藏殿": [n.shaolin1, n.gonorth, n.gonorth, n.gonorthup, n.gonorth, n.gowest],
                "白衣殿": [n.shaolin1, n.gonorth, n.gonorth, n.gonorthup, n.gonorth, n.goeast],
                "千佛殿": [n.shaolin1, n.gonorth, n.gonorth, n.gonorthup, n.gonorth, n.gonorthup],
                "竹林1": [n.shaolin1, n.gonorth, n.gonorth, n.gonorthup, n.gonorth, n.gonorthup, n.gonorth],
                "竹林2": [n.shaolin1, n.gonorth, n.gonorth, n.gonorthup, n.gonorth, n.gonorthup, n.gonorth, n.gonorth],
                "达摩洞": [n.shaolin1, n.gonorth, n.gonorth, n.gonorthup, n.gonorth, n.gonorthup, n.gonorth, n.gonorth, n.gonorth],
                "广场": [n.shaolin0, n.shaolin1, n.gosouth, n.gosouthwest, n.goeast, n.shaolin1, n.gonorth, n.gonorth, n.gonorthup, n.gonorth],
                "西侧殿": [n.shaolin0, n.gonorth, n.gowest, n.goeast, n.gonorth, n.gonorthup, n.gowest],
                "东侧殿": [n.shaolin0, n.gonorth, n.goeast, n.gowest, n.gonorth, n.gonorthup, n.goeast],
                "练武场": [n.shaolin1, n.gonorth, n.gonorth],
                "竹林": [n.shaolin1, n.gonorth, n.gonorth, n.gonorthup, n.gonorth, n.gonorthup, n.gonorth, n.gonorth]
            },
            "华山": {
                "首席": [n.huashan1],
                "镇岳宫": [n.huashan0],
                "苍龙岭": [n.huashan0, n.goeastup],
                "舍身崖": [n.huashan0, n.goeastup, n.gosouthup],
                "崖底": [n.huashan0, n.goeastup, n.gosouthup, n.jumpdown],
                "练武场": [n.huashan1],
                "客厅": [n.huashan1, n.gonorth],
                "寝室": [n.huashan1, n.gonorth, n.gonorth],
                "山顶小店": [n.huashan1, n.gowest],
                "兵器房": [n.huashan1, n.goeast],
                "练功房": [n.huashan1, n.goeast, n.goeast],
                "玉女峰": [n.huashan1, n.gosouth],
                "玉女祠": [n.huashan1, n.gosouth, n.gowest],
                "玉女蜂山路": [n.huashan1, n.gosouth, n.gosouth],
                "玉女蜂小径": [n.huashan1, n.gosouth, n.gosouth, n.gosouthup],
                "思过崖": [n.huashan1, n.gosouth, n.gosouth, n.gosouthup, n.gosouthup],
                "后山": [n.huashan1, n.gosouth, n.gosouth, n.gosouthup, n.gosouthup, n.breakbi, n.goenter]
            },
            "峨嵋": {
                "首席": [n.emei1],
                "广场": [n.emei0],
                "庙门": [n.emei0, n.gonorth],
                "金顶": [n.emei0, n.gonorth, n.goeast],
                "睹光台": [n.emei0, n.gonorth, n.goeast, n.gonorthup],
                "华藏庵": [n.emei0, n.gonorth, n.goeast, n.gonorthup, n.goeast],
                "大殿": [n.emei0, n.gosouth],
                "走廊1": [n.emei0, n.goeast],
                "走廊2": [n.emei0, n.goeast, n.goeast],
                "厨房": [n.emei0, n.goeast, n.goeast, n.gonorth],
                "走廊3": [n.emei0, n.gowest],
                "练功房": [n.emei0, n.gowest, n.gowest],
                "走廊4": [n.emei0, n.gowest, n.gonorth],
                "茅草屋": [n.emei0, n.gowest, n.gonorth, n.gonorth],
                "走廊5": [n.emei0, n.gowest, n.gosouth],
                "走廊6": [n.emei0, n.gowest, n.gosouth, n.gowest],
                "清修洞": [n.emei0, n.gowest, n.gosouth, n.gowest, n.gosouth],
                "走廊": [n.emei0, n.goeast, n.goeast, n.emei0, n.gowest, n.gonorth, n.emei0, n.gowest, n.gosouth, n.gowest]
            },
            "逍遥": {
                "首席": [n.xiaoyao1],
                "青草坪": [n.xiaoyao0],
                "地下石室1": [n.xiaoyao0, n.godown],
                "地下石室2": [n.xiaoyao0, n.godown, n.godown],
                "林间小道1": [n.xiaoyao1],
                "林间小道2": [n.xiaoyao1, n.gowest],
                "小屋": [n.xiaoyao1, n.gowest, n.gowest],
                "打铁屋": [n.xiaoyao1, n.gowest, n.gonorth],
                "酒家": [n.xiaoyao1, n.gowest, n.gosouth],
                "林间小道3": [n.xiaoyao0, n.gosouth],
                "木屋": [n.xiaoyao0, n.gosouth, n.gosouth],
                "林间小道4": [n.xiaoyao0, n.gonorth],
                "小木屋": [n.xiaoyao0, n.gonorth, n.gonorth],
                "林间小道5": [n.xiaoyao0, n.goeast],
                "石屋": [n.xiaoyao0, n.goeast, n.gonorth],
                "木板路": [n.xiaoyao0, n.goeast, n.gosouth],
                "工匠屋": [n.xiaoyao0, n.goeast, n.gosouth, n.gosouth],
                "地下石室": [n.xiaoyao0, n.godown, n.godown],
                "林间小道": [n.xiaoyao1, n.gowest, n.xiaoyao0, n.gosouth, n.xiaoyao0, n.gonorth, n.xiaoyao0, n.goeast]
            },
            "丐帮": {
                "首席": [n.gaibang1],
                "树洞内部": [n.gaibang0],
                "树洞下": [n.gaibang0, n.godown],
                "暗道1": [n.gaibang1, n.gowest, n.gowest],
                "暗道2": [n.gaibang1, n.gowest],
                "破庙密室": [n.gaibang1],
                "土地庙": [n.gaibang1, n.goup],
                "暗道3": [n.gaibang1, n.goeast],
                "暗道4": [n.gaibang1, n.goeast, n.goeast],
                "林间小屋": [n.gaibang1, n.goeast, n.goeast, n.goup],
                "暗道": [n.gaibang1, n.gowest, n.gowest, n.gaibang1, n.goeast, n.goeast]
            }
        }
        , s = new Vue({
            data: {
                version: "3.2.10",
                dir: "http://47.102.126.255/2020/jhmud/",
                helloWorld: "",
                id: User.role.Id,
                name: User.role.Name,
                title: User.role.Title,
                server: User.server.Name,
                ip: User.server.Ip,
                port: User.server.Port,
                delay: 256,
                state: "*",
                hp: 0,
                hpMax: 0,
                hpPer: 0,
                mp: 0,
                mpMax: 0,
                mpPer: 0,
                mpLimit: 0,
                uid: "",
                family: "",
                debuffTime: 0,
                skillTime: 0,
                setAutoEq: "on",
                cmdAutoEq: "",
                setTeamMode: "follower",
                setDebugMode: "off",
                setAutoRelive: "off",
                ptPathList: [],
                ptTarget: "off",
                setSmMode: "default",
                setZbMode: "on",
                setTdMode: "on",
                setQaMode: "on",
                setXbMode: "off",
                setAutoGuaJi: "on",
                setAutoXiYan: "on",
                setAutoWD: "off",
                setAutoSL: "off",
                setAutoHS: "on",
                setAutoEM: "on",
                setAutoXY: "on",
                setAutoGB: "on",
                setAutoWDJS: "off",
                setAutoSLJS: "off",
                setAutoHSJS: "off",
                setAutoEMJS: "off",
                setAutoXYJS: "off",
                setAutoGBJS: "off",
                setKillPend: "off",
                setFenJieHig: "on",
                setFenJieHic: "on",
                setFenJieHiy: "off",
                setSellDanHig: "on",
                setSellDanHic: "on",
                setSellEqHiy: "on",
                setSellEqHiz: "on",
                setAutoPerform: "on",
                lastCommand: "",
                lastTimeStamp: 0,
                monitorManager: {},
                skillList: [],
                skillLimit: 0,
                packList: [],
                packMax: 0,
                eqList: [],
                roomName: "",
                roomPath: "",
                roomDesc: "",
                roomList: [],
                roomCmds: [],
                cmdGoOut: "",
                isTasking: !1,
                taskFbCount: 0,
                taskSmCount: 0,
                taskSmTotal: 0,
                taskSmItem: "",
                taskZbCount: 0,
                taskZbTotal: 0,
                taskZbMax: 0,
                taskZbItem: "",
                taskZbTime: "",
                taskZbRoomX: "",
                taskZbRoomY: "",
                taskXbCount: 0,
                taskQaBool: !1,
                taskTdBool: !1,
                taskXyBool: !1,
                taskXyCount: 0,
                taskHtCount: 0,
                taskTower: {
                    "天道守护者": "",
                    "命·守护者": "未知",
                    "魔·守护者": "未知",
                    "杀·守护者": "未知",
                    "天·守护者": "未知"
                },
                showMenuList: !0,
                showDialog: "",
                lianXi: {},
                time: 30000000000,
                now: 0,
                customList: [],

                // 私人定制 
                monitorList: [
                    {
                        type: "items",
                        name: "杀长老橙",
                        keys: "6_dizi",
                        commands: "kill $id",
                        sort: "01",
                        open: "on"
                    },
                ],
                monitorItem: {
                    value: {}
                },
                keypress: {
                    A: "",
                    S: "",
                    D: "",
                    W: "",
                    E: "",
                    C: "",
                    Z: "",
                    Q: ""
                },
                eq: [[], [], [], []],
                xyStartTime: 0,
                xyStartLog: "",
                xyOverTime: 0,
                xyOverLog: "",
                mpzList: [],
                performList: []
            },
            computed: {
                npcList() {
                    const t = [];
                    return this.roomList.forEach(e => e.npc && t.push(e)),
                        t
                },
                roomNameX() {
                    const t = this.roomName.match(/^(.+)-(.+)$/);
                    if (t[1])
                        return t[1]
                },
                roomNameY() {
                    const t = this.roomName.match(/^(.+)-(.+)$/);
                    if (t[2])
                        return t[2]
                },
                menuListOne() {
                    const t = [];
                    return t.push({
                        name: "○",
                        cmd: "$menu(toggle)"
                    }),
                        t.push({
                            name: "设置",
                            cmd: "$menu(option)"
                        }),
                        t.push({
                            name: "日常",
                            cmd: "$menu(task)"
                        }),
                        t.push({
                            name: "技能",
                            cmd: "$menu(skill)"
                        }),
                        t.push({
                            name: "监控",
                            cmd: "$menu(monitor)"
                        }),
                        t.push({
                            name: "快捷",
                            cmd: "$menu(custom)"
                        }),
                        t.push({
                            name: "其他",
                            cmd: "$menu(other)"
                        }),
                        t
                },
                menuListTwo() {
                    const t = [{
                        name: "●",
                        cmd: "$menu(toggle)"
                    }];
                    return 0 === this.customList.length && (t.push({
                        name: "一键击杀",
                        cmd: "$killall",
                        sort: "-1"
                    }),
                        t.push({
                            name: "武庙疗伤",
                            cmd: "$cure",
                            sort: "-2"
                        })),
                        "leader" === this.setTeamMode && t.push({
                            name: "领队",
                            cmd: `tm follow ${this.uid}`
                        }),
                        this.customList.sort((t, e) => t.sort - e.sort),
                        this.customList.forEach(e => {
                            "delete" !== e.name && t.push(e)
                        }
                        ),
                        t
                },
                userMonitorList() {
                    const t = [];
                    return this.monitorList.sort((t, e) => t.sort - e.sort),
                        this.monitorList.forEach(e => {
                            "delete" !== e.name && t.push(e)
                        }
                        ),
                        t
                },
                editMonitorItem() {
                    return this.monitorItem.value

                },
                optionList() {
                    const t = [];
                    return t.push({
                        name: "组队跟随",
                        key: "setTeamMode",
                        value: this.setTeamMode,
                        option: {
                            off: "关闭",
                            leader: "队长模式",
                            follower: "队员模式"
                        }
                    }),
                        t.push({
                            name: "死亡复活",
                            key: "setAutoRelive",
                            value: this.setAutoRelive,
                            option: {
                                off: "等待",
                                miao: "武庙复活",
                                fu: "天师符复活[慎用]"
                            }
                        }),
                        t.push({
                            name: "叛徒追踪",
                            key: "ptTarget",
                            value: this.ptTarget,
                            option: {
                                off: "关闭",
                                hio: "橙",
                                hiz: "紫",
                                hiy: "黄",
                                hic: "蓝",
                                hig: "绿"
                            }
                        }),
                        t.push({
                            name: "指令显示",
                            key: "setDebugMode",
                            value: this.setDebugMode,
                            option: {
                                off: "关闭",
                                on: "显示发送出的指令"
                            }
                        }),
                        t.push({
                            name: "自动挂机",
                            key: "setAutoGuaJi",
                            value: this.setAutoGuaJi,
                            option: {
                                off: "关闭",
                                on: "每分钟检测是否闲置"
                            }
                        }),
                        t.push({
                            name: "自动喜宴",
                            key: "setAutoXiYan",
                            value: this.setAutoXiYan,
                            option: {
                                off: "关闭",
                                on: "有喜宴时自动参加"
                            }
                        }),
                        t.push({
                            name: "自动装备",
                            key: "setAutoEq",
                            value: this.setAutoEq,
                            option: {
                                off: "关闭",
                                on: "被卸武器自动装备"
                            }
                        }),
                        t.push({
                            name: "自动出招",
                            key: "setAutoPerform",
                            value: this.setAutoPerform,
                            option: {
                                off: "关闭",
                                on: "开启脚本出招代替系统出招"
                            }
                        }),
                        t.push({
                            name: "叫杀任意的昏迷目标",
                            key: "setKillPend",
                            value: this.setKillPend,
                            option: {
                                off: "关闭",
                                on: "无论何时何地，自动停止并叫杀目标[不推荐使用]"
                            }
                        }),
                        t.push({
                            name: "[日常任务] 师门任务",
                            key: "setSmMode",
                            value: this.setSmMode,
                            option: {
                                off: "关闭",
                                default: "普通模式",
                                card: "选择师门令牌",
                                quit: "选择放弃任务"
                            }
                        }),
                        t.push({
                            name: "[日常任务] 追捕任务",
                            key: "setZbMode",
                            value: this.setZbMode,
                            option: {
                                off: "关闭",
                                on: "自动追捕",
                                quit: "死亡后放弃再继续[慎用]"
                            }
                        }),
                        t.push({
                            name: "[日常任务] 天道任务",
                            key: "setTdMode",
                            value: this.setTdMode,
                            option: {
                                off: "关闭",
                                on: "自动天道塔",
                                new: "100层后支持新天道塔"
                            }
                        }),
                        t.push({
                            name: "[日常任务] 请安任务",
                            key: "setQaMode",
                            value: this.setQaMode,
                            option: {
                                off: "关闭",
                                on: "自动请安、查看药田、吃养精丹"
                            }
                        }),
                        t.push({
                            name: "[日常任务] 寻宝任务",
                            key: "setXbMode",
                            value: this.setXbMode,
                            option: {
                                off: "关闭",
                                on: "每日藏宝图10次"
                            }
                        }),
                        t.push({
                            name: "[门派战] 武当掌门",
                            key: "setAutoWD",
                            value: this.setAutoWD,
                            option: {
                                off: "关闭",
                                on: "自动寻路"
                            }
                        }),
                        t.push({
                            name: "[门派战] 少林掌门",
                            key: "setAutoSL",
                            value: this.setAutoSL,
                            option: {
                                off: "关闭",
                                on: "自动寻路"
                            }
                        }),
                        t.push({
                            name: "[门派战] 华山掌门",
                            key: "setAutoHS",
                            value: this.setAutoHS,
                            option: {
                                off: "关闭",
                                on: "自动寻路"
                            }
                        }),
                        t.push({
                            name: "[门派战] 峨嵋掌门",
                            key: "setAutoEM",
                            value: this.setAutoEM,
                            option: {
                                off: "关闭",
                                on: "自动寻路"
                            }
                        }),
                        t.push({
                            name: "[门派战] 逍遥掌门",
                            key: "setAutoXY",
                            value: this.setAutoXY,
                            option: {
                                off: "关闭",
                                on: "自动寻路"
                            }
                        }),
                        t.push({
                            name: "[门派战] 丐帮掌门",
                            key: "setAutoGB",
                            value: this.setAutoGB,
                            option: {
                                off: "关闭",
                                on: "自动寻路"
                            }
                        }),
                        t.push({
                            name: "[门派战] 武当太上长老",
                            key: "setAutoWDJS",
                            value: this.setAutoWDJS,
                            option: {
                                off: "关闭",
                                on: "自动寻路"
                            }
                        }),
                        t.push({
                            name: "[门派战] 少林太上长老",
                            key: "setAutoSLJS",
                            value: this.setAutoSLJS,
                            option: {
                                off: "关闭",
                                on: "自动寻路"
                            }
                        }),
                        t.push({
                            name: "[门派战] 华山太上长老",
                            key: "setAutoHSJS",
                            value: this.setAutoHSJS,
                            option: {
                                off: "关闭",
                                on: "自动寻路"
                            }
                        }),
                        t.push({
                            name: "[门派战] 峨嵋太上长老",
                            key: "setAutoEMJS",
                            value: this.setAutoEMJS,
                            option: {
                                off: "关闭",
                                on: "自动寻路"
                            }
                        }),
                        t.push({
                            name: "[门派战] 逍遥太上长老",
                            key: "setAutoXYJS",
                            value: this.setAutoXYJS,
                            option: {
                                off: "关闭",
                                on: "自动寻路"
                            }
                        }),
                        t.push({
                            name: "[门派战] 丐帮太上长老",
                            key: "setAutoGBJS",
                            value: this.setAutoGBJS,
                            option: {
                                off: "关闭",
                                on: "自动寻路"
                            }
                        }),
                        t.push({
                            name: "[整理背包] 分解绿装",
                            key: "setFenJieHig",
                            value: this.setFenJieHig,
                            option: {
                                off: "关闭",
                                on: "开启"
                            }
                        }),
                        t.push({
                            name: "[整理背包] 分解蓝装",
                            key: "setFenJieHic",
                            value: this.setFenJieHic,
                            option: {
                                off: "关闭",
                                on: "开启"
                            }
                        }),
                        t.push({
                            name: "[整理背包] 分解黄装",
                            key: "setFenJieHiy",
                            value: this.setFenJieHiy,
                            option: {
                                off: "关闭",
                                on: "开启"
                            }
                        }),
                        t.push({
                            name: "[整理背包] 贩卖绿丹",
                            key: "setSellDanHig",
                            value: this.setSellDanHig,
                            option: {
                                off: "关闭",
                                on: "开启"
                            }
                        }),
                        t.push({
                            name: "[整理背包] 贩卖蓝丹",
                            key: "setSellDanHic",
                            value: this.setSellDanHic,
                            option: {
                                off: "关闭",
                                on: "开启"
                            }
                        }),
                        t.push({
                            name: "[整理背包] 贩卖黄装",
                            key: "setSellEqHiy",
                            value: this.setSellEqHiy,
                            option: {
                                off: "关闭",
                                on: "开启"
                            }
                        }),
                        t.push({
                            name: "[整理背包] 贩卖紫装",
                            key: "setSellEqHiz",
                            value: this.setSellEqHiz,
                            option: {
                                off: "关闭",
                                on: "开启"
                            }
                        }),
                        t
                },
                aboutTaskHtml() {
                    const t = []
                        , e = (t, e) => t < e ? `<hig>未完成　${t}</hig>` : t;
                    return t.push(`副本　${e(this.taskFbCount, 20)}/20`),
                        t.push(`师门　${e(this.taskSmCount, 20)}/20　当前累计${this.taskSmTotal}次`),
                        t.push(`追捕　${e(this.taskZbCount, 20)}/20　当前累计${this.taskZbTotal}次[${this.taskZbMax}]`),
                        t.push(`天道　${this.taskTdBool ? "已完成" : "<hig>未完成</hig>"} ${this.taskTower["天道守护者"]}`),
                        "new" === this.setTdMode && (t.push(`命塔　${this.taskTower["命·守护者"]}`),
                            t.push(`魔塔　${this.taskTower["魔·守护者"]}`),
                            t.push(`杀塔　${this.taskTower["杀·守护者"]}`),
                            t.push(`天塔　${this.taskTower["天·守护者"]}`)),
                        t.push(`请安　${this.taskQaBool ? "已完成" : "<hig>未完成</hig>"}`),
                        t.push(`寻宝　${e(this.taskXbCount, 10)}/10`),
                        t.push(`寒铁　${e(this.taskHtCount, 35)}/35`),
                        t.push(`襄阳　${this.taskXyBool ? "已完成" : "<hig>未完成</hig>"} [${this.taskXyCount < 500 ? `<hig>${this.taskXyCount}</hig>` : this.taskXyCount}/500]`),
                        t.join("<br>")
                },
                userData() {
                    const t = {
                        name: this.name,
                        setAutoEq: this.setAutoEq,
                        setTeamMode: this.setTeamMode,
                        setDebugMode: this.setDebugMode,
                        setAutoRelive: this.setAutoRelive,
                        ptTarget: this.ptTarget,
                        setSmMode: this.setSmMode,
                        setZbMode: this.setZbMode,
                        setTdMode: this.setTdMode,
                        setQaMode: this.setQaMode,
                        setXbMode: this.setXbMode,
                        setAutoGuaJi: this.setAutoGuaJi,
                        setAutoXiYan: this.setAutoXiYan,
                        setAutoWD: this.setAutoWD,
                        setAutoSL: this.setAutoSL,
                        setAutoHS: this.setAutoHS,
                        setAutoEM: this.setAutoEM,
                        setAutoXY: this.setAutoXY,
                        setAutoGB: this.setAutoGB,
                        setAutoWDJS: this.setAutoWDJS,
                        setAutoSLJS: this.setAutoSLJS,
                        setAutoHSJS: this.setAutoHSJS,
                        setAutoEMJS: this.setAutoEMJS,
                        setAutoXYJS: this.setAutoXYJS,
                        setAutoGBJS: this.setAutoGBJS,
                        setKillPend: this.setKillPend,
                        setFenJieHig: this.setFenJieHig,
                        setFenJieHic: this.setFenJieHic,
                        setFenJieHiy: this.setFenJieHiy,
                        setSellDanHig: this.setSellDanHig,
                        setSellDanHic: this.setSellDanHic,
                        setSellEqHiy: this.setSellEqHiy,
                        setSellEqHiz: this.setSellEqHiz,
                        taskXyCount: this.taskXyCount,
                        setAutoPerform: this.setAutoPerform,
                        time: this.time,
                        taskTower: {},
                        lianXi: {},
                        eq: Array.from(this.eq),
                        // 私人定制 添加自定义快捷 监控
                        customList: [],
                        monitorList: []
                    };
                    return this.customList.forEach(e => {
                        "delete" !== e.name && t.customList.push(e)
                    }
                    ),
                        this.monitorList.forEach(e => {
                            "delete" !== e.name && t.monitorList.push(e)
                        }
                        ),
                        $.each(this.taskTower, (e, i) => t.taskTower[e] = i),
                        this.skillList.forEach(e => {
                            e.lianxi > e.level && (t.lianXi[e.id] = e.lianxi)
                        }
                        ),
                        this.isRobot && (t.xyStartTime = this.xyStartTime,
                            t.xyStartLog = this.xyStartLog,
                            t.xyOverTime = this.xyOverTime,
                            t.xyOverLog = this.xyOverLog,
                            t.mpzList = [...this.mpzList]),
                        t
                },
                debuffSecond() {
                    const t = this.getTimeStamp();
                    return t < this.debuffTime ? this.debuffTime - t : 256
                },
                skillSecond() {
                    const t = this.getTimeStamp();
                    return t < this.skillTime ? this.skillTime - t : 256
                },
                isDev() {
                    return ["22fb777c-53a5-11e9-8316-00163e15eef2", "93d5cdf5-8fec-11e9-99ac-506b4b4b3eba", "46e0cc99-53bb-11e9-8316-00163e15eef2", "e9b34ea2-812d-11e9-99ac-506b4b4b3eba", "22e097d1-53a5-11e9-8316-00163e15eef2"].includes(this.id)
                },
                isRobot() {
                    return ["46e0cc99-53bb-11e9-8316-00163e15eef2", "28dc9638-d6c7-4ec6-bbe8-3d608a24455b"].includes(this.id)
                }
            },
            watch: {
                state() {
                    document.title = `${this.name} ${this.state} ${this.server} ${this.title}`
                },
                lianXi() {
                    this.onSend("cha")
                }
            },
            methods: {
                onSend(...t) {
                    const e = t.length;
                    if (1 === e) {
                        const e = t[0];
                        e instanceof Array ? this.onSendArray(e) : "function" == typeof e ? e() : "string" == typeof e && this.onSendString(e)
                    } else
                        e > 1 && this.onSendArray(t)
                },
                onSendArray(t) {
                    const e = t.length;
                    if (e > 1) {
                        let e = t[0]
                            , i = t.remove(0);
                        if (isNaN(Number(e))) {
                            this.onSend(e);
                            let t = i[0]
                                , n = i.remove(0);
                            isNaN(Number(t)) ? setTimeout(() => this.onSend(t, ...n), this.delay) : setTimeout(() => this.onSend(n), Number(t))
                        } else
                            setTimeout(() => this.onSend(i), Number(e))
                    } else
                        1 === e && this.onSend(t[0])
                },
                onSendString(t) {
                    if (/{.+}/.test(t))
                        this.onSendSpecialCommand(t);
                    else if (/,/.test(t)) {
                        const e = t.split(",");
                        this.onSendArray(e)
                    } else
                        /\$/.test(t) ? this.onSendSpecialCommand(t) : /^kill /.test(t) && "on" === this.setAutoEq && this.cmdAutoEq ? this.onSend(`${this.cmdAutoEq},${t}`) : (t = t.replace(/\n/g, ""),
                            GameClient.ws.send(`${t}\n`),
                            "leader" === this.setTeamMode && /^dazuo|^liaoshang|^stopstate|^baoming|^jump|^go_|^kill |^jh |^follow/.test(t) && this.onSendString(`tm ${t}`),
                            "on" === this.setDebugMode && this.onData(`<cyn>${t}`),
                            this.lastCommand = t,
                            this.lastTimeStamp = this.getTimeStamp())
                },
                onSendSpecialCommand(t) {
                    if (/{.+}/.test(t)) {
                        if (/{fb:(\d+)}/.test(t)) {
                            const e = t.match(/{fb:(\d+)}/)[1];
                            this.onAutoFb(e)
                        }
                    } else if (/\$/.test(t))
                        if (/\$menu\((.+)\)/.test(t)) {
                            const e = t.match(/\$menu\((.+)\)/)[1];
                            "task" === e && this.onSend("tasks"),
                                this.onMenu(e)
                        } else if (/\$killall/.test(t)) {
                            const t = [];
                            this.npcList.forEach(e => t.push(`kill ${e.id}`)),
                                this.onSend(t)
                        } else if (/\$npc\((.+?)\)/.test(t)) {
                            const e = t.match(/\$npc\((.+?)\)/)[1]
                                , i = this.roomList.find(t => t.id.includes(e) || t.name.includes(e));
                            i && this.onSend(t.replace(/\$npc\(.+?\)/, i.id))
                        } else if (/\$item\((.+?)\)/.test(t)) {
                            const e = t.match(/\$item\((.+?)\)/)[1]
                                , i = new RegExp(e);
                            console.info(i);
                            const n = this.packList.find(t => i.test(t.name) || i.test(t.id));
                            n && this.onSend(t.replace(/\$item\(.+?\)/, n.id))
                        } else if (/\$count\((.+?)\)/.test(t)) {
                            const e = t.match(/\$count\((.+?)\)/)[1]
                                , i = new RegExp(e);
                            console.info(i);
                            const n = this.packList.find(t => i.test(t.name) || i.test(t.id));
                            n && this.onSend(t.replace(/\$count\((.+?)\)/, n.count))
                        } else if (/\$time/.test(t))
                            this.onSend(t.replace(/\$time/, this.getTimeString()));
                        else if (/\$on\((.+?)\)/.test(t)) {
                            const e = t.match(/\$on\((.+?)\)/)[1];
                            this.monitorList.forEach(t => {
                                t.sort === e && (t.open = "on",
                                    this.onData(`<hic>[开启监控]<hiy>${t.name}`))
                            }
                            )
                        } else if (/\$off\((.+?)\)/.test(t)) {
                            const e = t.match(/\$off\((.+?)\)/)[1];
                            this.monitorList.forEach(t => {
                                t.sort === e && (t.open = "off",
                                    this.onData(`<hic>[关闭监控]<hiy>${t.name}`))
                            }
                            )
                        } else if (/\$run\((.+?)\)/.test(t)) {
                            const e = t.match(/\$run\((.+?)\)/)[1];
                            this.customList.find(t => {
                                t.sort === e && (this.onData(`<hic>[运行指令]<hiy>${t.name}`),
                                    this.onSend(t.cmd))
                            }
                            )
                        } else
                            /\$baoshi/.test(t) ? this.onBaoShi() : /\$follower/.test(t) ? (this.setTeamMode = "follower",
                                this.onData("<hig>组队模式切换为队员跟随模式。")) : /\$leader/.test(t) ? (this.setTeamMode = "leader",
                                    this.onData("<hig>组队模式切换为队长领队模式。")) : /\$lianxi/.test(t) ? this.onLianXi() : /\$task/.test(t) && this.onTask()
                },
                onMenu(t) {
                    "toggle" === t ? this.showMenuList = !this.showMenuList : this.showDialog = t
                },
                addMonitor(t) {
                    const e = t.name || "plugins-monitor"
                        , i = t.type || "plugins"
                        , n = t.on.bind(this)
                        , o = t.isOpen || !0
                        , s = t.isOnce || !1;
                    console.info(`MonitorAdded: ${e}`),
                        this.monitorManager[e] = {
                            name: e,
                            type: i,
                            on: n,
                            isOpen: o,
                            isOnce: s
                        }
                },
                removeMonitor(t) {
                    delete this.monitorManager[t]
                },
                onData(t) {
                    t && ("string" == typeof t && (t = {
                        type: "text",
                        text: t
                    }),
                        Object.keys(this.monitorManager).forEach(e => {
                            const i = t.plugins || t.dialog || t.type
                                , n = this.monitorManager[e];
                            if (n && n.isOpen && i === n.type) {
                                const i = n.on(t);
                                n.isOnce && i && this.removeMonitor(e)
                            }
                        }
                        ),
                        "time" === t.type || console.info(t),
                        this.onDataProcess($.extend(!0, {}, t)))
                },
                onDataProcess(t) {
                    if (!t || t.blocked)
                        return;
                    const e = t.type
                        , i = Process[e];
                    e && i && i(t)
                },
                getRoomPath(t, e) {
                    const i = Object.keys(o).find(e => t.includes(e));
                    if (i) {
                        const t = o[i][e];
                        if (t)
                            return t
                    }
                },
                getTimeStamp: () => (new Date).getTime(),
                getTimeString: () => (new Date).Format("hh:mm:ss"),
                getDateString: () => (new Date).Format("yyyy-MM-dd"),
                onSortSkill(t) {
                    let e = [];
                    return t.forEach(t => {
                        const i = [/wht/, /hig/, /hic/, /hiy/, /hiz/, /hio/].findIndex(e => e.test(t.name));
                        i >= 0 ? t.color = i : this.onData("<hir>未知技能数据。");
                        let n = 0;
                        if (0 === i) {
                            n += 1e4 * {
                                force: 99,
                                unarmed: 98,
                                parry: 97,
                                dodge: 96,
                                sword: 95,
                                blade: 94,
                                club: 93,
                                staff: 92,
                                whip: 91,
                                throwing: 90,
                                bite: 89,
                                literate: 88,
                                "liandan-su": 87,
                                "chuyi-jiqiao": 86
                            }[t.id]
                        }
                        n += 1e4 * t.color + t.level,
                            t.order = n,
                            t.exp = t.exp < 20 ? 20 : 5 * ~~(t.exp / 5),
                            t.lianxi = this.lianXi[t.id] || 0,
                            e.push(t)
                    }
                    ),
                        e.sort((t, e) => e.order - t.order),
                        e
                },
                onSortPack(t) {
                    const e = [];
                    return [/炼精/, /寒铁石/, /千年寒铁/, /礼盒/, /背包扩充石/, /仓库扩充石/, /练习卡/, /千年灵芝/, /月饼/, /桂花酒/, /<ord>.+Lv/, /<hio>.+Lv/, /<hiz>.+Lv/, /<hiy>.+Lv/, /<hic>.+Lv/, /<hig>千悟.+Lv/, /<hig>.+Lv/, /<hio>养精丹/, /<hiz>养精丹/, /<hiy>养精丹/, /<hic>养精丹/, /<hig>养精丹/, /<hio>培元丹/, /<hiz>培元丹/, /<hiy>培元丹/, /<hic>培元丹/, /<hig>培元丹/, /<ord>超级叛师符/, /BOSS召唤卡/, /的卢(召唤卡)/, /<hio>.+秘籍/, /<hiz>.+秘籍/, /<hiy>.+秘籍/, /<hic>.+秘籍/, /<hig>.+秘籍/, /<hio>见闻录/, /<hiz>见闻录/, /<hiy>见闻录/, /<hic>见闻录/, /<hig>见闻录/, /<hio>天道酬勤卷/, /<hiz>天道酬勤卷/, /<hiy>天道酬勤卷/, /<hic>天道酬勤卷/, /<hig>天道酬勤卷/, /<hio>采矿通行证/, /<hiz>采矿通行证/, /<hiy>采矿通行证/, /<hic>采矿通行证/, /<hig>采矿通行证/, /遗忘丹/, /洗髓丹/, /变性丹/, /扫荡符/, /天师符/, /飞行旗/, /叛师符/, /改名符/, /随从改名符/, /红玫瑰/, /密函/, /<hio>突破丹/, /<hiz>突破丹/, /<hiy>突破丹/, /<hic>突破丹/, /<hig>突破丹/, /<hio>聚气丹/, /<hiz>聚气丹/, /<hiy>聚气丹/, /<hic>聚气丹/, /<hig>聚气丹/, /<hio>金创药/, /<hiz>金创药/, /<hiy>金创药/, /<hic>金创药/, /<hig>金创药/, /<hio>引气丹/, /<hiz>引气丹/, /<hiy>引气丹/, /<hic>引气丹/, /<hig>引气丹/, /<hio>喜宴/, /<hiz>喜宴/, /<hiy>喜宴/, /<hic>喜宴/, /<hig>喜宴/, /<hio>师门令牌/, /<hiz>师门令牌/, /<hiy>师门令牌/, /<hic>师门令牌/, /<hig>师门令牌/, /<hio>..残页/, /<hio>...残页/, /<hio>....残页/, /<hio>.....残页/, /<hio>.+残页/, /<hiz>..残页/, /<hiz>...残页/, /<hiz>....残页/, /<hiz>.....残页/, /<hiz>.+残页/, /<hiy>..残页/, /<hiy>...残页/, /<hiy>....残页/, /<hiy>.....残页/, /<hiy>.+残页/, /<hic>..残页/, /<hic>...残页/, /<hic>....残页/, /<hic>.....残页/, /<hic>.+残页/, /<hig>..残页/, /<hig>...残页/, /<hig>....残页/, /<hig>.....残页/, /<hig>.+残页/, /碎裂的红宝石/, /碎裂的绿宝石/, /碎裂的白宝石/, /碎裂的蓝宝石/, /碎裂的黄宝石/, /碎裂的粉宝石/, /碎裂的黑宝石/, /碎裂的青宝石/, /普通的红宝石/, /普通的绿宝石/, /普通的白宝石/, /普通的蓝宝石/, /普通的黄宝石/, /普通的粉宝石/, /普通的黑宝石/, /普通的青宝石/, /精致的红宝石/, /精致的绿宝石/, /精致的白宝石/, /精致的蓝宝石/, /精致的黄宝石/, /精致的粉宝石/, /精致的黑宝石/, /精致的青宝石/, /无暇的红宝石/, /无暇的绿宝石/, /无暇的白宝石/, /无暇的蓝宝石/, /无暇的黄宝石/, /无暇的粉宝石/, /无暇的黑宝石/, /无暇的青宝石/, /完美的红宝石/, /完美的绿宝石/, /完美的白宝石/, /完美的蓝宝石/, /完美的黄宝石/, /完美的粉宝石/, /完美的黑宝石/, /完美的青宝石/, /<hio>人参/, /<hio>灵芝/, /<hio>牛黄/, /<hio>茯苓/, /<hio>冬虫夏草/, /<hiz>木香/, /<hiz>樟脑/, /<hiz>檀香/, /<hiz>扁蓄/, /<hiz>天山雪莲/, /<hiy>鹿茸/, /<hiy>黄柏/, /<hiy>地龙/, /<hiy>羚羊角/, /<hiy>杠板归/, /<hic>麦芽/, /<hic>红参/, /<hic>麝香/, /<hic>四季青/, /<hic>藏红花/, /<hig>白矾/, /<hig>琥珀/, /<hig>车前草/, /<hig>金钱草/, /<hig>海螵蛸/, /<wht>乌药/, /<wht>陈皮/, /<wht>杜仲/, /<wht>朱砂/, /<wht>五倍子/, /<wht>.+秘籍/, /<hio>.+丹|<hio>.+丸|<hio>.+散/, /<hiz>.+丹|<hiz>.+丸|<hiz>.+散/, /<hiy>.+丹|<hiy>.+丸|<hiy>.+散/, /<hic>.+丹|<hic>.+丸|<hic>.+散/, /<hig>.+丹|<hig>.+丸|<hig>.+散/, /<hir>真武/, /<hir>罗汉/, /<hir>君子/, /<hir>曙光/, /<hir>鲲鹏/, /<hir>混天/, /<hio>真武/, /<hio>罗汉/, /<hio>君子/, /<hio>曙光/, /<hio>鲲鹏/, /<hio>混天/, /<hiz>真武/, /<hiz>罗汉/, /<hiz>君子/, /<hiz>曙光/, /<hiz>鲲鹏/, /<hiz>混天/, /<hiy>真武/, /<hiy>罗汉/, /<hiy>君子/, /<hiy>曙光/, /<hiy>鲲鹏/, /<hiy>混天/, /<hic>真武/, /<hic>罗汉/, /<hic>君子/, /<hic>曙光/, /<hic>鲲鹏/, /<hic>混天/, /<hig>真武/, /<hig>罗汉/, /<hig>君子/, /<hig>曙光/, /<hig>鲲鹏/, /<hig>混天/, /藏宝图/, /<hir>..<nor>/, /<hir>...<nor>/, /<hir>....<nor>/, /<hir>.+<nor>/, /<hio>..<nor>/, /<hio>...<nor>/, /<hio>....<nor>/, /<hio>.+<nor>/, /<hiz>..<nor>/, /<hiz>...<nor>/, /<hiz>....<nor>/, /<hiz>.+<nor>/, /<hiy>..<nor>/, /<hiy>...<nor>/, /<hiy>....<nor>/, /<hiy>.+<nor>/, /<hic>..<nor>/, /<hic>...<nor>/, /<hic>....<nor>/, /<hic>.+<nor>/, /<hig>..<nor>/, /<hig>...<nor>/, /<hig>....<nor>/, /<hig>.+<nor>/, /.+/].forEach(i => {
                        t.forEach((n, o) => {
                            n && i.test(n.name) && (e.push(n),
                                t[o] = 0)
                        }
                        )
                    }
                    ),
                        e
                },
                onDownload() {
                    $.ajax({
                        url: `${this.dir}jhmud.php`,
                        type: "POST",
                        data: {
                            id: this.id,
                            user: {
                                name: this.name,
                                time: 30000000000
                            }
                        },
                        dataType: "json",
                        success: t => {
                            if (this.onData(`<hic>【标识】${this.id}`),
                                console.info(t),
                                t.result && t.user) {
                                if (console.info(t.time),
                                    this.time = t.time,
                                    t.user.level && (t.user.custom && $.each(t.user.custom, (t, e) => {
                                        const i = {
                                            name: t,
                                            cmd: e.value,
                                            sort: e.sort
                                        };
                                        this.customList.push(i)
                                    }
                                    ),
                                        t.user.monitor && $.each(t.user.monitor, (t, e) => {
                                            if ("skills" === e.type)
                                                return;
                                            const i = $.extend(!0, {}, e);
                                            i.name = t,
                                                this.monitorList.push(i)
                                        }
                                        ),
                                        t.user.eq && (t.user.eq.forEach((t, e) => {
                                            this.eq[e] = t || []
                                        }
                                        ),
                                            delete t.user.eq),
                                        // delete t.user.id,
                                        // delete t.user.name,
                                        // delete t.user.level,
                                        // delete t.user.pantu,
                                        // delete t.user.server,
                                        this.isRobot && t.user.robot && (this.mpzList = t.user.robot.mpz,
                                            this.xyStartTime = t.user.robot.xyz.starttime,
                                            this.xyStartLog = t.user.robot.xyz.startlog,
                                            this.xyOverTime = t.user.robot.xyz.overtime,
                                            this.xyOverLog = t.user.robot.xyz.overlog)),
                                    // delete t.user.time,
                                    // delete t.user.name,
                                    $.each(t.user, (t, e) => {
                                        "string" == typeof e && (this[t] = e)
                                    }
                                    ),
                                    t.user.taskTower && $.each(t.user.taskTower, (t, e) => {
                                        "string" == typeof e && (this.taskTower[t] = e)
                                    }
                                    ),
                                    t.user.lianXi && $.each(t.user.lianXi, (t, e) => {
                                        "string" == typeof e && (this.lianXi[t] = e)
                                    }
                                    ),
                                    t.user.eq && $.each(t.user.eq, (t, e) => {
                                        e && (this.eq[t] = e)
                                    }
                                    ),
                                    t.user.customList && t.user.customList.forEach(t => this.customList.push(t)),
                                    t.user.monitorList && t.user.monitorList.forEach(t => this.monitorList.push(t)),
                                    t.now && t.time) {
                                    // let e = t.time - t.now;
                                    let e = t.time - 0.9 * t.now;

                                    const i = this.getDescriptionWithTime(e);
                                    this.onData(`<hic>【角色】${this.name}`),
                                        this.onData(`<hic>【期限】${i}`),
                                        e > 2147483647 && (e = 2147483647),
                                        setTimeout(() => {
                                            window.location.href = window.location.href
                                        }
                                            , e)
                                }
                                t.ip && this.onData(`<hic>【地址】${t.ip}`),
                                    t.user.mpzList && (this.mpzList = t.user.mpzList)
                            } else //this.onData("<hir>\u4f0d\u6708\u4e13\u7528\u811a\u672c"),
                                // this.name != "\u4f0d\u6708" ? $(".jhmud").remove() : null,
                                this.onData(`${this.name}`),
                                    $(".room-commands").prepend('<span class="act-item" cmd="$killall">击杀</span>')

                        }
                        ,
                        error: t => {
                            this.onData("<hir>连接脚本服务器失败！请尝试刷新页面。"),
                                console.info(t)
                        }
                    })
                },
                onUpload() {
                    $.post({
                        url: `${this.dir}jhmud.php`,
                        data: {
                            id: this.id,
                            user: this.userData
                        },
                        dataType: "json",
                        success: t => {
                            console.info(t),
                                this.onData("<hig>脚本数据上传成功。")
                        }
                        ,
                        error: t => {
                            console.info(t),
                                this.onData("<hir>脚本数据上传失败。")
                        }
                    })
                },
                getDescriptionWithTime(t) {
                    let e = parseInt(t / 1e3 / 60)
                        , i = parseInt(e / 60)
                        , n = parseInt(i / 24);
                    return e %= 60,
                        i %= 24,
                        `${n}天${i}小时${e}分钟`
                },
                onOption(t) {
                    const e = $(t.target)
                        , i = e.attr("set")
                        , n = e.attr("value");
                    this[i] = n
                },
                onTask() {
                    this.onTaskStart().then(this.onTaskPack).then(this.onTaskSm).then(this.onTaskZb).then(this.onTaskTd).then(this.onTaskQa).then(this.onTaskXb).catch(this.onTaskError).finally(this.onTaskOver)
                },
                onTaskStart() {
                    return this.clearAllTaskMonitor(),
                        this.isTasking = !0,
                        Promise.resolve("<hig>任务队列已开启。")
                },
                onTaskError(t) {
                    this.onData(t),
                        this.onData("<hir>任务队列已停止。")
                },
                onTaskOver() {
                    this.onData("<hic>任务队列已结束。"),
                        this.isTasking = !1,
                        this.onSend("256,jh fam 0 3,go_fuben -auto")
                },
                clearAllTaskMonitor() {
                    this.removeMonitor("on-task-1"),
                        this.removeMonitor("on-task-2"),
                        this.removeMonitor("on-task-3"),
                        this.removeMonitor("on-task-4"),
                        this.removeMonitor("on-task-5")
                },
                onTaskSm() {
                    const t = {
                        "武当派": "谷虚道长",
                        "少林派": "清乐比丘",
                        "华山派": "高根明",
                        "峨嵋派": "苏梦清",
                        "逍遥派": "苏星河",
                        "丐帮": "左全"
                    }[this.family]
                        , e = {
                            "武当派": ["jh fam 1 start", "n"],
                            "少林派": ["jh fam 2 start"],
                            "华山派": ["jh fam 3 start"],
                            "峨嵋派": ["jh fam 4 start", "n"],
                            "逍遥派": ["jh fam 5 start"],
                            "丐帮": ["jh fam 6 start", "d"]
                        }[this.family];
                    let i, o, s = !0;
                    return new Promise((a, h) => {
                        if ("off" === this.setSmMode)
                            return void a("<hic>师门任务未开启。");
                        let d, c, m, r, l, p;
                        d = () => {
                            this.taskSmCount >= 20 ? l("<hic>师门任务已完成。") : (this.onData("<hic>师门任务已开启。"),
                                this.onSend("stopstate", ...e, 1e3, () => {
                                    const e = this.npcList.find(e => e.name.includes(t));
                                    e ? (i = e.id,
                                        c()) : p(`<hic>找不到<hiy>${t}<hic>。`)
                                }
                                ))
                        }
                            ,
                            c = () => {
                                o = `task sm ${i}`,
                                    this.onSend(256, o, "tasks", "pack", o, () => m())
                            }
                            ,
                            m = () => {
                                this.taskSmCount >= 20 ? l("<hic>师门任务已完成。") : this.taskSmItem ? r(this.taskSmItem) : c()
                            }
                            ,
                            r = t => {
                                if (this.packList.find(e => e.name === t))
                                    return this.addMonitor({
                                        name: "on-task-1",
                                        type: "cmds",
                                        isOnce: !0,
                                        on(e) {
                                            if (e.items) {
                                                const i = e.items.find(e => e.name.includes("上交") && e.name.includes(t));
                                                i && this.onSend(i.cmd, () => c())
                                            }
                                            return !0
                                        }
                                    }),
                                        void this.onSend(256, o);
                                let e = n.buy[t];
                                if ("<hiy>神仙醉<nor>" === t && "card" === this.setSmMode && (e = ""),
                                    e)
                                    return this.addMonitor({
                                        name: "on-task-1",
                                        type: "list",
                                        isOnce: !0,
                                        on(e) {
                                            if (e.selllist && e.seller) {
                                                const i = e.selllist.find(e => e.name === t);
                                                if (i)
                                                    return this.onSend(256, `buy 1 ${i.id} from ${e.seller}`, "pack", () => d()),
                                                        !0
                                            }
                                        }
                                    }),
                                        this.addMonitor({
                                            name: "on-task-2",
                                            type: "text",
                                            isOnce: !0,
                                            on: t => /你身上装不下这么多/.test(t.text) ? (l("<hir>背包空间不足。\n师门任务已停止。"),
                                                !0) : /穷光蛋/.test(t.text) ? (l("<hir>购物银两不足。\n师门任务已停止。"),
                                                    !0) : void 0
                                        }),
                                        void this.onSend(256, e, "list");
                                const i = n.liandan[t];
                                if (s) {
                                    if (i)
                                        return this.addMonitor({
                                            name: "on-task-1",
                                            type: "text",
                                            isOnce: !0,
                                            on(e) {
                                                return /你成功炼制出/.test(e.text) && e.text.includes(t) ? (d(),
                                                    !0) : /没办法炼制|无法炼制/.test(e.text) ? (this.onData("<hir>炼药过程异常。"),
                                                        s = !1,
                                                        d(),
                                                        !0) : void 0
                                            }
                                        }),
                                            void this.onSend(`256,jh fam 0 1,w,s,${i}`)
                                } else
                                    s = !0;
                                if ("card" === this.setSmMode)
                                    return console.info("使用师门令牌"),
                                        this.addMonitor({
                                            name: "on-task-2",
                                            type: "cmds",
                                            isOnce: !0,
                                            on(t) {
                                                if (console.info("发现cmds"),
                                                    t.items) {
                                                    const e = t.items.find(t => t.name.includes("师门令牌"));
                                                    e && (console.info("发现object"),
                                                        console.info(e),
                                                        this.onSend(256, e.cmd, () => c()))
                                                }
                                                return !0
                                            }
                                        }),
                                        void this.onSend(256, o);
                                "quit" !== this.setSmMode ? l("<hir>师门任务未完成。") : this.onSend(256, `${o} giveup`, () => c())
                            }
                            ,
                            l = t => {
                                d = () => { }
                                    ,
                                    c = () => { }
                                    ,
                                    this.clearAllTaskMonitor(),
                                    a(t)
                            }
                            ,
                            p = t => {
                                h(t)
                            }
                            ,
                            d()
                    }
                    )
                },
                onTaskZb() {
                    return new Promise(t => {
                        if ("off" === this.setZbMode)
                            return void t("<hic>追捕任务未开启。");
                        let e, i, n, o, s, a;
                        n = () => {
                            this.onTaskCure(() => {
                                this.onSend("stopstate", "jh fam 0 6", "zhuibu", "tasks", 2e3, () => o())
                            }
                            )
                        }
                            ,
                            o = () => {
                                this.taskZbCount >= 20 ? a("<hic>追捕任务已完成。") : this.taskZbItem && (e = this.taskZbItem,
                                    i = this.getRoomPath(this.taskZbRoomX, this.taskZbRoomY),
                                    this.onData(`<hic>${this.taskZbTime}内前往${this.taskZbRoomX}${this.taskZbRoomY}击杀${e}。`),
                                    s())
                            }
                            ,
                            s = () => {
                                const t = []
                                    , n = e;
                                i.forEach(i => {
                                    t.push(() => {
                                        n === e && this.onSend(i)
                                    }
                                        , 500)
                                }
                                ),
                                    this.onSend(t)
                            }
                            ,
                            a = e => {
                                this.clearAllTaskMonitor(),
                                    this.onData(e),
                                    t()
                            }
                            ,
                            this.addMonitor({
                                name: "on-task-1",
                                type: "items",
                                on() {
                                    const t = this.npcList.find(t => t.name.includes(e));
                                    t && (this.onData(`<hic>发现追捕目标${e}。`),
                                        this.onSend(`kill ${t.id}`),
                                        e = "*")
                                }
                            }),
                            this.addMonitor({
                                name: "on-task-2",
                                type: "text",
                                on(t) {
                                    /你的追捕任务完成了/.test(t.text) && n()
                                }
                            }),
                            this.addMonitor({
                                name: "on-task-3",
                                type: "die",
                                on() {
                                    "quit" === this.setZbMode ? this.onSend(1e3, "relive", 1e3, "stopstate", "jh fam 0 6", "fangqi_job -yes", () => n()) : this.onSend(1e3, "relive", () => n())
                                }
                            }),
                            n()
                    }
                    )
                },
                onTaskTd(t = 0) {
                    const e = [{
                        target: "天道守护者",
                        path: ["stopstate", "jh fam 8 start"]
                    }, {
                        target: "命·守护者",
                        path: ["stopstate", "jh fam 8 start", "go_new", "e"]
                    }, {
                        target: "魔·守护者",
                        path: ["stopstate", "jh fam 8 start", "go_new", "s"]
                    }, {
                        target: "杀·守护者",
                        path: ["stopstate", "jh fam 8 start", "go_new", "w"]
                    }, {
                        target: "天·守护者",
                        path: ["stopstate", "jh fam 8 start", "go_new", "n"]
                    }];
                    let i = 0;
                    return new Promise((n, o) => {
                        if ("off" === this.setTdMode)
                            return this.onData("<hic>天道任务未开启。"),
                                void n();
                        const s = () => {
                            this.onTaskCure(() => {
                                this.onSend(this.debuffSecond, ...e[t].path, () => {
                                    t ? i < 3 ? (this.onData("<hig>天道塔失败次数在2次以内，采用快速爬塔模式。"),
                                        this.onSend("u")) : (this.onData("<hig>天道塔失败次数在2次以上，采用等待技能模式。"),
                                            this.onSend(this.skillSecond, "u"),
                                            this.onData(`<hic>等待${parseInt(this.skillSecond / 1e3)}秒技能冷却。`)) : this.onSend("u")
                                }
                                )
                            }
                            )
                        }
                            , a = i => {
                                t++,
                                    e[t] && "new" === this.setTdMode ? s() : (this.clearAllTaskMonitor(),
                                        this.onData(i),
                                        n())
                            }
                            ;
                        this.addMonitor({
                            name: "on-task-1",
                            type: "items",
                            on() {
                                const i = this.npcList.find(i => i.name.includes(e[t].target));
                                i && !i.name.includes("老人") && (this.taskTower[e[t].target] = this.roomNameY,
                                    this.onSend(256, `kill ${i.id}`))
                            }
                        }),
                            this.addMonitor({
                                name: "on-task-2",
                                type: "text",
                                on(n) {
                                    if (/你现在可以进入下一层/.test(n.text))
                                        "第一百层" === this.roomNameY ? (this.onData("<hic>天道任务可重置。"),
                                            this.onSend(256, ...e[t].path, "reset_tiaozhan", "task", () => a("<hic>天道任务已完成。"))) : this.onSend(this.debuffSecond, () => s());
                                    else if (/请调整好状态重新来过/.test(n.text)) {
                                        if (i++,
                                            "new" === this.setTdMode)
                                            return void a(`<hic>${e[t].target}任务已停止。`);
                                        this.onData(`<hic>${e[t].target}任务第${i}次挑战失败。`),
                                            i < 5 ? s() : a(`<hic>${e[t].target}任务已停止。`)
                                    }
                                }
                            }),
                            this.addMonitor({
                                name: "on-task-3",
                                type: "room",
                                on() {
                                    "第一百零一层" === this.roomNameY && (this.onData("<hic>天道任务可重置。"),
                                        this.onSend(256, ...e[t].path, "reset_tiaozhan", "task", () => a("<hic>天道任务已完成。")))
                                }
                            }),
                            s()
                    }
                    )
                },
                onTaskQa(t) {
                    return this.onData(t),
                        new Promise((t, e) => {
                            if ("off" === this.setQaMode)
                                return this.onData("<hic>自动请安未开启。"),
                                    void t();
                            let i, n, o, s, a = 0;
                            i = () => {
                                this.onData("<hic>请安任务已开启。");
                                const t = this.getRoomPath(this.family, "首席");
                                this.onSend("stopstate", ...t)
                            }
                                ,
                                n = () => {
                                    const t = this.packList.find(t => "<hig>养精丹<nor>" === t.name);
                                    if (t && (a = t.count),
                                        this.onData(`<hic>背包中有<hig>养精丹</hig>${a}枚。`),
                                        a >= 10) {
                                        const e = [];
                                        for (let i = 0; i < 10; i++)
                                            e.push(`use ${t.id}`);
                                        this.onSend(...e, () => s("<hic>养精任务已结束。"))
                                    } else
                                        this.onSend("256,jh fam 0 7")
                                }
                                ,
                                o = () => {
                                    this.onSend("stopstate", "jh fam 0 1", "setting brief 0", "w", "n", "e", () => {
                                        if ("药田" === this.roomNameY) {
                                            const t = this.roomDesc.match(/<hig>药田已经成长了(.+)<\/hig>/);
                                            t && t[1] && (this.onData(`<hic>药田已经成长了<hiy>${t[1]}<hic>。`),
                                                /6日|7日/.test(t[1]) ? (this.onData("<hic>药田已经可以收获。"),
                                                    this.onSend("cai", () => n())) : (this.onData("<hic>药田还可以继续成长，超过6天可以获得更多的橙色药材。"),
                                                        n()))
                                        } else
                                            this.onData("<hic>未找到药田。"),
                                                n()
                                    }
                                    )
                                }
                                ,
                                s = e => {
                                    this.clearAllTaskMonitor(),
                                        t(e),
                                        n = () => { }
                                }
                                ,
                                this.addMonitor({
                                    name: "on-task-1",
                                    type: "items",
                                    on() {
                                        const t = this.npcList.find(t => t.name.includes("首席弟子"));
                                        t && this.onSend(256, `ask2 ${t.id}`, "pack", () => this.onData("<hic>请安任务已完成。"), () => o());
                                        const e = this.npcList.find(t => t.name.includes("药铺老板"));
                                        e && this.onSend(256, `buy ${10 - a} /clone/medicine/yangjingdan2 from ${e.id}`, "pack", () => n())
                                    }
                                }),
                                this.addMonitor({
                                    name: "on-task-2",
                                    type: "text",
                                    on(t) {
                                        /你的物品数量已经超出背包容量|你身上装不下这么多/.test(t.text) ? s("<hir>背包空间不足。\n</hir><hic>养精任务已停止。") : /穷光蛋/.test(t.text) && s("<hir>背包银两不足。\n</hir><hic>养精任务已停止。")
                                    }
                                }),
                                i()
                        }
                        )
                },
                onTaskXb(t) {
                    let e, i, o, s, a, h;
                    return this.onData(t),
                        new Promise((t, d) => {
                            s = () => {
                                "on" === this.setXbMode ? this.onSend("tasks", () => {
                                    this.onData(`<hic>今日已寻宝${this.taskXbCount}次。`),
                                        this.taskXbCount >= 10 ? h("<hic>寻宝任务已结束。") : a()
                                }
                                ) : h("<hic>寻宝任务未开启。")
                            }
                                ,
                                a = () => {
                                    this.onSend("pack", 1e3, () => {
                                        const t = this.packList.find(t => t.name.includes("藏宝图"));
                                        t ? (e = t.id,
                                            this.onSend(`checkobj ${e} from item`)) : h("<hic>找不到藏宝图。")
                                    }
                                    )
                                }
                                ,
                                h = e => {
                                    this.clearAllTaskMonitor(),
                                        t(e)
                                }
                                ,
                                this.addMonitor({
                                    name: "on-task-1",
                                    type: "pack",
                                    on(t) {
                                        if ("item" === t.from && t.desc.includes("藏宝图") && /\(<hic>(.+)<wht>-<hig><cmd cmd='.+'>(.+)<\/cmd><nor>\)/.test(t.desc)) {
                                            const s = t.desc.match(/\(<hic>(.+)<wht>-<hig><cmd cmd='.+'>(.+)<\/cmd><nor>\)/);
                                            let a = this.getRoomPath(s[1], s[2])
                                                , h = 0;
                                            for (i = [a]; h >= 0;) {
                                                h++;
                                                let t = this.getRoomPath(s[1], s[2] + h);
                                                t ? i.push(t) : h = -1
                                            }
                                            o = 1 === i.length ? 0 : 1,
                                                this.onSend(n.stopstate, ...i[o], `use ${e}`)
                                        }
                                    }
                                }),
                                this.addMonitor({
                                    name: "on-task-2",
                                    type: "text",
                                    on(t) {
                                        /你对照藏宝图所示地形观察了半天，发现原来根本不是这里。/.test(t.text) ? (o++,
                                            this.onSend(256, "stopstate", ...i[o], `use ${e}`)) : /<nor>你失去了<...>藏宝图<nor>1张。/.test(t.text) && s()
                                    }
                                }),
                                s()
                        }
                        )
                },
                onTaskPt(t = this.ptTarget) {
                    const e = ["hio", "hiz", "hiy", "hic", "hig"].findIndex(e => e === t)
                        , i = this.ptPathList[e];
                    if (!i)
                        return;
                    const n = ["stopstate"];
                    i.forEach(t => {
                        n.push(() => {
                            h && this.onSend(t)
                        }
                        )
                    }
                    );
                    let o, s, a, h = !0;
                    this.addMonitor({
                        name: "task-pt-1",
                        type: "items",
                        on() {
                            const t = ["<hio>", "<hiz>", "<hiy>", "<hic>", "<hig>"][e]
                                , i = this.npcList.find(e => e.name.includes(`${t}武林叛徒`));
                            i && (h = !1,
                                o = i.id,
                                this.onData("<hic>发现目标，即刻击杀。"),
                                this.onSend(`256,kill ${o}`))
                        }
                    }),
                        this.addMonitor({
                            name: "task-pt-2",
                            type: "status",
                            on(t) {
                                "add" === t.action && t.id === o && /乾坤|太玄/.test(t.name) && (this.onData("<hic>撤退。"),
                                    this.onSend(this.cmdGoOut, () => a()))
                            }
                        }),
                        this.addMonitor({
                            name: "task-pt-3",
                            type: "itemremove",
                            on(t) {
                                o === t.id && a()
                            }
                        }),
                        this.addMonitor({
                            name: "task-pt-4",
                            type: "text",
                            on(t) {
                                /你本周已经参与打BOSS次数已满，下周再来吧。/.test(t.text) && (this.ptTarget = 5,
                                    a())
                            }
                        }),
                        s = () => {
                            this.onData("<hic>叛徒任务已开启。"),
                                this.onSend(...n, () => {
                                    o || (this.onData("<hic>叛徒任务目标丢失。"),
                                        a())
                                }
                                )
                        }
                        ,
                        a = () => {
                            this.removeMonitor("task-pt-1"),
                                this.removeMonitor("task-pt-2"),
                                this.removeMonitor("task-pt-3"),
                                this.onData("<hic>叛徒任务已结束。"),
                                this.onSend("jh fam 0 3,go_fuben -auto")
                        }
                        ,
                        s()
                },
                onTaskCure(t) {
                    const e = () => {
                        this.onData(`<hic>你的当前状态为${this.hpPer}%气血值，${this.mpPer}%内力值。`),
                            this.mpPer < 60 ? this.onSend("stopstate,jh fam 0 3,dazuo") : this.hpPer < 90 ? this.onSend("stopstate,jh fam 0 3,liaoshang") : (this.onData("<hic>治疗任务已结束。"),
                                this.removeMonitor("task-cure"),
                                t())
                    }
                        ;
                    this.addMonitor({
                        name: "task-cure",
                        type: "sc",
                        on(t) {
                            this.mpPer < 100 && this.hpPer < 100 || (100 !== this.mpPer || 100 !== this.hpPer) && (t.id !== this.uid || 100 !== t.mp && 100 !== t.hp) || e()
                        }
                    }),
                        this.onData("<hic>治疗任务已开启。"),
                        this.onSend("score", () => $('[command="score"]').click(), () => e())
                },
                onTaskPack() {
                    return new Promise(t => {
                        const e = () => {
                            this.onSend("jh fam 0 11", "pack", () => {
                                const e = [];
                                "on" === this.setFenJieHig && e.push("yjfeijie 2 -yes", "yjfeijie 2 -yes"),
                                    "on" === this.setFenJieHic && e.push("yjfeijie 3 -yes", "yjfeijie 3 -yes"),
                                    "on" === this.setFenJieHiy && e.push("yjfeijie 4 -yes", "yjfeijie 4 -yes"),
                                    this.onSend(...e, "pack", () => {
                                        const e = this.npcList.find(t => t.id.includes("tiejiang"));
                                        if (e) {
                                            const i = [];
                                            this.packList.forEach(t => {
                                                n.liandan[t.name] && !t.name.includes("突破丹") && (t.name.includes("<hig>") && "on" === this.setSellDanHig && i.push(`sell ${t.count} ${t.id} to ${e.id}`),
                                                    t.name.includes("<hic>") && "on" === this.setSellDanHic && i.push(`sell ${t.count} ${t.id} to ${e.id}`)),
                                                    t.can_eq && 0 === t.is_locking && !t.name.includes("Lv") && ("on" === this.setSellEqHiy && t.name.includes("<hiy>") && i.push(`sell 1 ${t.id} to ${e.id}`),
                                                        "on" === this.setSellEqHiz && t.name.includes("<hiz>") && i.push(`sell 1 ${t.id} to ${e.id}`))
                                            }
                                            ),
                                                this.onSend(...i, () => {
                                                    this.removeMonitor("on-task-1"),
                                                        this.onSend("jh fam 0 4", "pack", "store 1", () => t())
                                                }
                                                )
                                        }
                                    }
                                    )
                            }
                            )
                        }
                            ;
                        this.addMonitor({
                            name: "on-task-1",
                            type: "list",
                            on(t) {
                                if (t.stores) {
                                    const i = t.index
                                        , n = [0, "仓库一", "仓库二"][i]
                                        , o = [];
                                    t.stores.forEach(t => {
                                        const e = this.packList.find(e => e.name === t.name);
                                        if (e) {
                                            const { count: t, id: n } = e;
                                            o.push(`store ${i} ${t} ${n}`)
                                        }
                                    }
                                    ),
                                        this.onSend(() => this.onData(`<hic>查找<hiy>${n}<hic>同名物品。`), ...o, () => {
                                            1 === i ? this.onSend("pack", "store 2") : 2 === i && e()
                                        }
                                        )
                                }
                            }
                        }),
                            this.onSend("stopstate", "jh fam 0 4", "sell all", "pack", "store 1")
                    }
                    )
                },
                onLianXiSave() {
                    const t = {};
                    this.skillList.forEach(e => {
                        const { id: i, level: n, lianxi: o } = e;
                        n < o && (t[i] = o)
                    }
                    ),
                        this.lianXi = t,
                        this.onUpload()
                },
                onLianXi() {
                    const t = () => {
                        this.removeMonitor("task-lianxi"),
                            this.onData("<hic>练习技能已结束。"),
                            this.onSend("stopstate,go_fuben -auto")
                    }
                        , e = () => {
                            this.onData("<hic>查找需要练习的技能。");
                            const e = this.skillList.find(t => t.level < t.lianxi && t.level < this.skillLimit);
                            e ? (this.onData(`<hic>技能<hiw>[${e.name}<hiw>]<hic>练习开始。`),
                                this.onSend(`stopstate,lianxi ${e.id}`)) : (this.onData("<hic>没有需要练习的技能。"),
                                    t())
                        }
                        ;
                    this.addMonitor({
                        name: "task-lianxi",
                        type: "skills",
                        on(t) {
                            if (t.id && t.level) {
                                const i = this.skillList.find(e => e.id === t.id);
                                i && (i.level >= i.lianxi || i.level >= this.skillLimit) && (this.onData(`<hic>技能<hiw>[${i.name}<hiw>]<hic>练习结束。`),
                                    e())
                            }
                        }
                    }),
                        e()
                },
                addCustom() {
                    this.customList.push({
                        name: "名称",
                        cmd: "指令",
                        sort: "999"
                    })
                },
                editMonitor(t) {
                    console.info(t),
                        this.showDialog = "editmonitor",
                        this.monitorItem.value = t
                },
                deleteMonitor(t) {
                    this.monitorList.find(e => {
                        e === t && (e.name = "delete",
                            e.open = "off")
                    }
                    )
                },
                createMonitor(t) {
                    const e = {
                        sort: "9999"
                    };
                    e.type = t,
                        e.keys = "",
                        e.commands = "",
                        e.open = "on",
                        "status" === t ? (e.action = "add",
                            e.targets = "") : "msg" === t && (e.channel = "chat",
                                e.speakers = ""),
                        e.name = `新监控${this.getTimeStamp()}`,
                        this.monitorList.push(e),
                        this.editMonitor(e)
                },
                lookEq(t) {
                    const e = ["壹", "贰", "叁", "肆"][t];
                    this.onData(`<hiy>[查看预存的装备套${e}]`);
                    const i = this.eq[t];
                    0 === i.length ? this.onData("<hiw>无") : i.forEach(t => this.onData(t))
                },
                saveEq(t) {
                    this.onSend("pack", () => {
                        this.onData("<hiy>[当前装备]");
                        const e = [];
                        this.eqList.forEach(t => {
                            t && (this.onData(t.name),
                                e.push(t.name))
                        }
                        ),
                            this.eq[t] = e;
                        const i = ["壹", "贰", "叁", "肆"][t];
                        this.onData(`<hiy>[已预存装备套${i}]`)
                    }
                    )
                },
                loadEq(t) {
                    this.onSend("pack", () => {
                        const e = this.eq[t]
                            , i = ["壹", "贰", "叁", "肆"][t]
                            , n = ["stopstate"];
                        e && e.forEach(t => {
                            const e = this.packList.find(e => e.name === t);
                            e && n.push(`eq ${e.id}`)
                        }
                        ),
                            this.onSend(...n, () => this.onData(`<hiy>[已使用装备套${i}]`))
                    }
                    )
                },
                onTaskLiLian() {
                    let t, e, i;
                    e = () => {
                        this.onSend(`dc ${t} stopstate -yes`, `dc ${t} lilian -start`, `pack ${t}`)
                    }
                        ,
                        i = () => {
                            this.clearAllTaskMonitor(),
                                this.onData("<hic>历练任务已结束。")
                        }
                        ,
                        this.addMonitor({
                            name: "on-task-1",
                            type: "cmds",
                            on(t) {
                                const i = t.items.find(t => t.name.includes("撤离"));
                                i && this.onSend(256, i.cmd);
                                const n = t.items.find(t => t.name.includes("确定使用"));
                                n && this.onSend(256, n.cmd, () => e())
                            }
                        }),
                        this.addMonitor({
                            name: "on-task-2",
                            type: "pack2",
                            on(e) {
                                const n = e.items.find(t => t.id.includes("jianwenlu"));
                                n ? this.onSend(256, `dc ${t} use ${n.id}`) : i()
                            }
                        }),
                        this.addMonitor({
                            name: "on-task-3",
                            type: "text",
                            on(t) {
                                /今天已经历练完成，明天再来吧。/.test(t.text) && i()
                            }
                        }),
                        this.onSend("stopstate", "jh fam 0 1", "zhaoji", "wakuang -all", 600, () => {
                            const i = this.roomList.find(t => t.id.includes("suicong"));
                            i && (t = i.id,
                                e())
                        }
                        )
                },
                onTaskKuangDong() {
                    const t = [];
                    this.addMonitor({
                        name: "on-task-1",
                        type: "kuang",
                        on(e) {
                            if (0 === e.is_left && 0 === e.is_seven) {
                                const i = e.list.find(t => "" === t.sc_name);
                                i && (this.onData(`<hic>第${i.floor}层${i.num}号矿洞可抢占！`),
                                    t.unshift(`wakuang -fight ${i.floor} ${i.num} 0`))
                            } else if (1 === e.is_left && 1 === e.is_seven) {
                                const t = [];
                                e.list.forEach(e => t.push(`wakuang -list 7 ${e.id}`)),
                                    this.onSend(t)
                            } else if (0 === e.is_left && 1 === e.is_seven) {
                                const i = e.list.find(t => "" === t.sc_name && 1 !== t.num);
                                i && (this.onData(`<hic>第7层[${e.zhuren}-${i.num}]号高级矿洞可抢占！`),
                                    t.unshift(`wakuang -fight 7 ${i.num} ${e.zhuren}`))
                            }
                        }
                    }),
                        this.addMonitor({
                            name: "on-task-2",
                            type: "text",
                            on(t) {
                                const e = /<div class='item-commands'><span cmd='(wakuang -hit .+)'>.+<\/span><\/div>/;
                                if (e.test(t.text)) {
                                    const i = t.text.match(e)[1];
                                    this.onSend(i, () => this.onData("<hic>矿洞任务已完成。")),
                                        this.clearAllTaskMonitor()
                                }
                            }
                        }),
                        this.onSend("stopstate", "jh fam 0 1", "zhaoji", "wakuang -list 1", "wakuang -list 2", "wakuang -list 3", "wakuang -list 4", "wakuang -list 5", "wakuang -list 6", "wakuang -list 7", 3e3, () => {
                            this.onSend(t[0])
                        }
                        )
                },
                onTaskMail() {
                    this.addMonitor({
                        name: "on-task-1",
                        type: "message",
                        on(t) {
                            if ("system" === t.id) {
                                this.removeMonitor("on-task-1");
                                const e = [256];
                                t.items.forEach(t => {
                                    void 0 === t.rec && e.push(`receive system ${t.index}`)
                                }
                                ),
                                    this.onSend(e)
                            }
                        }
                    }),
                        this.onSend("message system")
                },
                onYJXL20() {
                    const t = ["stopstate"];
                    for (let e = 0; e < 20; e++)
                        t.push("go_fuben /fuben/fuben/mengjing", "look_to", "go_fuben over");
                    t.push("tasks"),
                        this.onSend(t)
                },
                onUseAll() {
                    this.onSend("pack", () => {
                        let t = '<span class="item-commands">';
                        this.packList.forEach(e => {
                            if ("<hig>养精丹<nor>" !== e.name && /培元丹|聚气丹|突破丹|养精丹/.test(e.name)) {
                                const i = ["stopstate"];
                                for (let t = 0; t < e.count; t++)
                                    i.push(`use ${e.id}`);
                                t += `<span cmd="${i.join(",")}">服用${e.count}${e.unit}${e.name}</span>`
                            }
                        }
                        ),
                            this.onData(t)
                    }
                        , () => this.showDialog = "")
                },
                onFuBen: t => [1].includes(t) ? `{fb:${t}}` : "",
                onAutoFb(t) {
                    const e = {
                        1: "一觉醒来"
                    }[t]
                        , i = parseInt(prompt(`你需要执行${e}副本几次？`));
                    if (!i)
                        return;
                    let n, o = 1;
                    1 === t && (n = () => {
                        o > i ? this.onData(`<hic>执行${e}副本${i}次完成。`) : (this.onData(`<hic>第${o++}次执行${e}副本。`),
                            this.onSend(256, "stopstate", "go_fuben /fuben/fuben/mengjing", "look_to", "go_fuben over", () => {
                                n()
                            }
                            ))
                    }
                    ),
                        n()
                },
                onBaoShi() {
                    this.showDialog = "",
                        this.onSend("pack", () => {
                            const t = ['<span class="item-commands"><hiy>[宝石合成]<br></hiy>'];
                            this.packList.forEach(e => {
                                if (e.id.includes("item/baoshi") && e.count >= 10) {
                                    const i = parseInt(e.count / 10)
                                        , n = `stopstate,combine ${e.id} ${i},$baoshi`;
                                    t.push(`<span cmd="${n}">${e.name}合成${i}次</span>`)
                                }
                            }
                            ),
                                this.onData(t.join(""))
                        }
                        )
                },
                refreshPerformList() {
                    const t = [];
                    Combat.skillItems.forEach(e => {
                        const i = e.id
                            , n = Combat.performs[i].order;
                        if (0 === Combat.performs[i].use)
                            return;
                        const o = this.performList.find(t => t.id === e.id);
                        if (o) {
                            const e = o.time;
                            t.push({
                                id: i,
                                order: n,
                                time: e
                            })
                        } else
                            t.push({
                                id: i,
                                order: n,
                                time: 1
                            })
                    }
                    ),
                        this.performList = t
                },
                resetTianDao() {
                    this.onSend("stopstate", "jh fam 8 start", "reset_tiaozhan", "go_new", "n", "reset_tiaozhan", "s", "e", "reset_tiaozhan", "w", "s", "reset_tiaozhan", "n", "w", "reset_tiaozhan", "e", () => {
                        $.each(this.taskTower, (t, e) => {
                            this.taskTower[t] = "<hig>已重置</hig>"
                        }
                        )
                    }
                    )
                }
            },
            created() {
                console.info("Vue.created"),
                    $(".room-commands").before('<div class="jhmud"></div>'),
                    $(".jhmud").append($('<div class="jhmud-menu-list" v-show="showMenuList"></div>').append($('<span v-for="item in menuListOne" :cmd="item.cmd" :data-name="item.name.slice(0, 4)"></span>')), $('<div class="jhmud-menu-list" v-show="!showMenuList"></div>').append($('<span v-for="item in menuListTwo" :cmd="item.cmd" :data-name="item.name.slice(0, 4)"></span>'))),
                    $(".jhmud").append($('<div class="jhmud-dialog" v-show="showDialog === \'option\'"></div>').append($('<span class="jhmud-dialog-title">脚本设置</span>'), $('<div class="jhmud-dialog-close" @click="showDialog = \'\'">×</div>'), $('<div class="jhmud-dialog-content"></div>').append($('<div class="jhmud-option" v-for="item in optionList"></div>').append($('<span class="jhmud-option-name">{{item.name}}</span>'), $('<div style="height:2em" v-for="(text, key) in item.option" :key="key + text"></div>').append($('<input :id="key + text" type="radio" :name="item.text" :value="key" v-model="item.value">'), $('<label :for="key + text" :data-label="text" @click="onOption" :set="item.key" :value="key"></label>')))), $('<div class="jhmud-dialog-footer"></div>').append($('<span class="jhmud-button" @click="onUpload">上传数据</span>')))),
                    $(".jhmud").append($('<div class="jhmud-dialog" v-show="showDialog === \'task\'"></div>').append($('<span class="jhmud-dialog-title">日常任务</span>'), $('<div class="jhmud-dialog-close" @click="showDialog = \'\'">×</div>'), $('<div class="jhmud-dialog-content"></div>').append($('<div v-html="aboutTaskHtml" style="line-height:1.5em"></div>'), $('<div style="display:flex;flex-wrap:wrap;line-height:1.5em;padding-top:0.5em;"></div>').append($('<span class="jhmud-button" @click="onTaskSm">自动师门</span>'), $('<span class="jhmud-button" @click="onTaskZb">自动追捕</span>'), $('<span class="jhmud-button" @click="onTaskTd(0)">自动天道</span>'), $('<span class="jhmud-button" @click="onTaskQa">自动请安</span>'), $('<span class="jhmud-button" @click="onTaskXb">自动寻宝</span>'), $('<span class="jhmud-button" @click="onTaskLiLian">自动历练</span>'), $('<span class="jhmud-button" @click="onTaskKuangDong">自动矿洞</span>'), $('<nor style="margin-top:0.5em;width:100%">天道之外</nor>'), $('<span class="jhmud-button" @click="onTaskTd(1)">自动天道·命</span>'), $('<span class="jhmud-button" @click="onTaskTd(2)">自动天道·魔</span>'), $('<span class="jhmud-button" @click="onTaskTd(3)">自动天道·杀</span>'), $('<span class="jhmud-button" @click="onTaskTd(4)">自动天道·天</span>'), $("<br>"), $('<span class="jhmud-button" @click="resetTianDao">重置所有天道的进度[慎点]</span>'), $('<hiw style="margin-top:0.5em">一键任务会依次执行：整理背包、师门、追捕、天道、请安、查看药园、服用养精丹、寻宝。</hiw>'))), $('<div class="jhmud-dialog-footer"></div>').append($('<span class="jhmud-button" @click="onTask">一键任务</span>'), $('<span class="jhmud-button" @click="clearAllTaskMonitor">强制停止</span>'), $('<span class="jhmud-button" @click="onUpload">上传数据</span>')))),
                    $(".jhmud").append($('<div class="jhmud-dialog" v-show="showDialog === \'skill\'"></div>').append($('<span class="jhmud-dialog-title">技能 [等级上限:{{skillLimit}}级]</span>'), $('<div class="jhmud-dialog-close" @click="showDialog = \'\'">×</div>'), $('<div class="jhmud-dialog-content"></div>').append($('<table style="margin:auto"></table>').append($("<thead></thead>").append($("<tr></tr>").append($('<td style="width:3em;height:2em"><cyn>技能名称</td>'), $('<td style="width:3em;height:2em"><cyn>当前等级</td>'), $('<td style="width:4em;height:2em"><cyn>目标等级</td>'))), $("<tfoot></tfoot>").append($('<tr><td colspan=3 style="padding-top:0.5em;text-align:left;"><hiw>如果目标等级大于等级上限，那么技能等级到达等级上限就会练习下一个技能。</hiw></td></tr>')), $("<tbody></tbody>").append($('<tr v-for="skill in skillList"></tr>').append($('<td v-html="skill.name"></td>'), $('<td v-html="skill.level"></td>'), $("<td></td>").append('<input v-model="skill.lianxi" type="text" style="height:1.2em"/>'))))), $('<div class="jhmud-dialog-footer"></div>').append($('<span class="jhmud-button" @click="onLianXi">开始练习</span>'), $('<span class="jhmud-button" @click="lianXi={}">重置等级</span>'), $('<span class="jhmud-button" @click="onLianXiSave">上传数据</span>')))),
                    $(".jhmud").append($('<div class="jhmud-dialog" v-show="showDialog === \'custom\'"></div>').append($('<span class="jhmud-dialog-title">自定义快捷键</span>'), $('<div class="jhmud-dialog-close" @click="showDialog = \'\'">×</div>'), $('<div class="jhmud-dialog-content"></div>').append($('<table class="jhmud-table"></table>').append($("<thead></thead>").append($("<tr></tr>").append($('<td style="width:2em"><cyn>排序</td>'), $('<td style="width:4em"><cyn>按键名称</td>'), $('<td style="width:10em"><cyn>具体指令</td>'))), $("<tfoot></tfoot>").append($('<tr><td colspan=3 style="padding-top:0.5em;text-align:left;"><hiw>点击脚本栏左边的圆点，即可使用自定义的快捷键。快捷键名称建议不超过四个字，就算超过也只显示前四个字。想要删除的快捷键，把名称改为 delete 保存，下次登录自动删除。</hiw></td></tr>'), $('<tr><td colspan=3 style="padding-top:0.5em;text-align:left;"><hiw>当前支持的特殊代码：</hiw></td></tr>'), $('<tr><td colspan=3 style="padding-top:0.5em;text-align:left;"><hiw><cyn>$killall</cyn> 依次叫杀当前房间的所有npc目标。</hiw></td></tr>'), $('<tr><td colspan=3 style="padding-top:0.5em;text-align:left;"><hiw><cyn>$npc(value)</cyn> 将会根据value的值查找匹配的房间npc，并用匹配的npc的id替换该代码。</hiw></td></tr>'), $('<tr><td colspan=3 style="padding-top:0.5em;text-align:left;"><hiw><cyn>$item(value)</cyn> 将会根据value的值查找匹配的背包物品，并用匹配的物品的id替换该代码。</hiw></td></tr>'), $('<tr><td colspan=3 style="padding-top:0.5em;text-align:left;"><hiw><cyn>$on(value) $off(value)</cyn> 将会根据value的值查找匹配的自定义监控序号，开启或关闭所有能匹配的自定义监控。</hiw></td></tr>'), $('<tr><td colspan=3 style="padding-top:0.5em;text-align:left;"><hiw><cyn>$run(value)</cyn> 将会根据value的值查找自定义快捷键，并执行序号匹配的快捷键。</hiw></td></tr>'), $('<tr><td colspan=3 style="padding-top:0.5em;text-align:left;"><hiw><cyn>$time</cyn> 当前时间。</hiw></td></tr>'), $('<tr><td colspan=3 style="padding-top:0.5em;text-align:left;"><hiw><cyn>$leader</cyn> 组队模式切换为队长。</hiw></td></tr>'), $('<tr><td colspan=3 style="padding-top:0.5em;text-align:left;"><hiw><cyn>$follower</cyn> 组队模式切换为队员。</hiw></td></tr>'), $('<tr><td colspan=3 style="padding-top:0.5em;text-align:left;"><hiw><cyn>$lianxi</cyn> 开始自动练习。</hiw></td></tr>')), $("<tbody></tbody>").append($('<tr class="custom-tr" v-for="item in customList" style="height=3em"></tr>').append($('<td style="height:4.5em"><input v-model="item.sort" type="text"/></td>'), $('<td style="height:4.5em"><input v-model="item.name" type="text"/></td>'), $('<td style="height:4.5em"><textarea v-model="item.cmd" spellcheck="false"></textarea></td>'))))), $('<div class="jhmud-dialog-footer"></div>').append($('<span class="jhmud-button" @click="addCustom">添加快捷</span>'), $('<span class="jhmud-button" @click="onUpload">上传数据</span>')))),
                    $(".jhmud").append($('<div class="jhmud-dialog" v-show="showDialog === \'monitor\'"></div>').append($('<span class="jhmud-dialog-title">自定义监控</span>'), $('<div class="jhmud-dialog-close" @click="showDialog = \'\'">×</div>'), $('<div class="jhmud-dialog-content"></div>').append($('<table class="jhmud-table"></table>').append($("<thead></thead>").append($("<tr></tr>").append($('<td style="width:3em"><cyn>排序</td>'), $('<td style="width:8em"><cyn>名称</td>'), $('<td style="width:8em"><cyn>操作</td>'))), $("<tfoot></tfoot>").append($("<tr></tr>").append($('<td colspan=3 style="height:auto;padding-top:1em"></td>').append($('<span class="jhmud-button" @click="createMonitor(\'msg\')">创建消息监控</span>'), $('<span class="jhmud-button" @click="createMonitor(\'items\')">创建角色监控</span>'))), $("<tr></tr>").append($('<td colspan=3 style="height:auto;padding-top:1em"></td>').append($('<span class="jhmud-button" @click="createMonitor(\'status\')">创建状态监控</span>'), $('<span class="jhmud-button" @click="createMonitor(\'time\')">创建定时监控</span>')))), $("<tbody></tbody>").append($('<tr v-for="item in userMonitorList" style="height:3em"></tr>').append($("<td><cyn>{{item.sort}}</cyn></td>"), $("<td></td>").append($("<hig v-show=\"item.open==='on'\" @click=\"item.open='off'\">{{item.name}}</hig>"), $("<nor v-show=\"item.open==='off'\" @click=\"item.open='on'\">{{item.name}}</nor>")), $("<td></td>").append($('<span class="jhmud-button" @click="editMonitor(item)">修改</span>'), $('<span class="jhmud-button" @click="deleteMonitor(item)">删除</span>')))))), $('<div class="jhmud-dialog-footer"></div>').append($('<span class="jhmud-button" @click="onUpload">上传数据</span>')))),
                    $(".jhmud").append($('<div class="jhmud-dialog" v-show="showDialog === \'editmonitor\'"></div>').append($('<span class="jhmud-dialog-title">编辑自定义监控</span>'), $('<div class="jhmud-dialog-close" @click="showDialog = \'\'">×</div>'), $('<div class="jhmud-dialog-content"></div>').append($('<table class="jhmud-table"></table>').append($("<thead></thead>").append($("<tr></tr>").append($('<td style="width:5em">类型</td>'), $('<td style="width:15em" v-if="editMonitorItem.type === \'msg\'"><cyn>消息监控</cyn></td>'), $('<td style="width:15em" v-else-if="editMonitorItem.type === \'items\'"><cyn>角色监控</cyn></td>'), $('<td style="width:15em" v-else-if="editMonitorItem.type === \'status\'"><cyn>状态监控</cyn></td>'), $('<td style="width:15em" v-else-if="editMonitorItem.type === \'time\'"><cyn>定时监控</cyn></td>'))), $("<tfoot></tfoot>").append($('<tr><td colspan=2 style="padding-top:1em"></td></tr>')), $("<tbody></tbody>").append($("<tr></tr>").append($("<td>名称</td>"), $('<td><input type="text" v-model="editMonitorItem.name"></td>')), $("<tr></tr>").append($("<td>序列号</td>"), $('<td><input type="text" v-model="editMonitorItem.sort"></td>')), $("<tr v-if=\"editMonitorItem.type === 'status'\"></tr>").append($("<td>动作</td>"), $("<td></td>").append($("<hig v-if=\"editMonitorItem.action === 'add'\" @click=\"editMonitorItem.action='remove'\">状态出现<hig>"), $("<hig v-else-if=\"editMonitorItem.action === 'remove'\" @click=\"editMonitorItem.action='refresh'\">状态消失<hig>"), $("<hig v-else-if=\"editMonitorItem.action === 'refresh'\" @click=\"editMonitorItem.action='add'\">状态刷新<hig>"))), $("<tr v-if=\"editMonitorItem.type === 'msg'\"></tr>").append($("<td>频道</td>"), $("<td></td>").append($("<hig v-if=\"editMonitorItem.channel === 'chat'\" @click=\"editMonitorItem.channel='tm'\">世界<hig>"), $("<hig v-else-if=\"editMonitorItem.channel === 'tm'\" @click=\"editMonitorItem.channel='fam'\">组队<hig>"), $("<hig v-else-if=\"editMonitorItem.channel === 'fam'\" @click=\"editMonitorItem.channel='pty'\">门派<hig>"), $("<hig v-else-if=\"editMonitorItem.channel === 'pty'\" @click=\"editMonitorItem.channel='es'\">帮派<hig>"), $("<hig v-else-if=\"editMonitorItem.channel === 'es'\" @click=\"editMonitorItem.channel='sys'\">全区<hig>"), $("<hig v-else-if=\"editMonitorItem.channel === 'sys'\" @click=\"editMonitorItem.channel='room'\">系统<hig>"), $("<hig v-else-if=\"editMonitorItem.channel === 'room'\" @click=\"editMonitorItem.channel='chat'\">当前房间<hig>"))), $("<tr v-if=\"editMonitorItem.type === 'msg' && editMonitorItem.channel !== 'sys' && editMonitorItem.channel !== 'room'\"></tr>").append($("<td>发言人</td>"), $('<td><input v-model="editMonitorItem.speakers" type="text" spellcheck=false></td>')), $("<tr v-if=\"editMonitorItem.hasOwnProperty('targets')\"></tr>").append($("<td>目标</td>"), $('<td><input v-model="editMonitorItem.targets" type="text" spellcheck=false></td>')), $("<tr></tr>").append($("<td>关键字</td>"), $('<td><textarea style="height:3em" v-model="editMonitorItem.keys" spellcheck=false></textarea></td>')), $("<tr></tr>").append($("<td>指令</td>"), $('<td><textarea style="height:3em" v-model="editMonitorItem.commands" spellcheck=false></textarea></td>'))))), $('<div class="jhmud-dialog-footer"></div>').append($('<span class="jhmud-button" @click="showDialog = \'monitor\'">编辑完成</span>')))),
                    $(".jhmud").append($('<div class="jhmud-dialog" v-show="showDialog === \'other\'"></div>').append($('<span class="jhmud-dialog-title">其他脚本功能</span>'), $('<div class="jhmud-dialog-close" @click="showDialog = \'\'">×</div>'), $('<div class="jhmud-dialog-content"></div>').append($("<cyn>预存装备一键切换</cyn>"), $('<div style="display:flex;margin-top:0.3em"></div>').append($('<span class="jhmud-button" @click="saveEq(0)">预存装备套壹</span>'), $('<span class="jhmud-button" @click="lookEq(0)">查看</span>'), $('<span class="jhmud-button" @click="loadEq(0)">使用</span>')), $('<div style="display:flex;margin-top:0.3em"></div>').append($('<span class="jhmud-button" @click="saveEq(1)">预存装备套贰</span>'), $('<span class="jhmud-button" @click="lookEq(1)">查看</span>'), $('<span class="jhmud-button" @click="loadEq(1)">使用</span>')), $('<div style="display:flex;margin-top:0.3em"></div>').append($('<span class="jhmud-button" @click="saveEq(2)">预存装备套叁</span>'), $('<span class="jhmud-button" @click="lookEq(2)">查看</span>'), $('<span class="jhmud-button" @click="loadEq(2)">使用</span>')), $('<div style="display:flex;margin-top:0.3em"></div>').append($('<span class="jhmud-button" @click="saveEq(3)">预存装备套肆</span>'), $('<span class="jhmud-button" @click="lookEq(3)">查看</span>'), $('<span class="jhmud-button" @click="loadEq(3)">使用</span>')), $('<cyn style="margin-top:0.3em">背包物品相关</cyn>'), $('<div style="display:flex;margin-top:0.3em"></div>').append($('<span class="jhmud-button" @click="onTaskPack">整理背包</span>'), $('<span class="jhmud-button" @click="onUseAll">批量使用</span>'), $('<span class="jhmud-button" @click="onBaoShi">宝石合成</span>')), $('<cyn style="margin-top:0.3em">其他</cyn>'), $('<div style="display:flex;margin-top:0.3em"></div>').append($('<span class="jhmud-button" @click="onTaskMail">清理邮件</span>'), $('<span class="jhmud-button" @click="onYJXL20">[慎点]一觉醒来副本20次[小号清任务用]</span>'))), $('<div class="jhmud-dialog-footer"></div>').append($('<span class="jhmud-button" @click="onUpload">上传数据</span>')))),
                    $(".room-title").append('<span class="title-time"></span>')
            },
            el: ".jhmud",
            mounted() {
                console.info("Vue.mounted"),
                    setInterval(() => {
                        const t = parseInt((this.getTimeStamp() - this.lastTimeStamp) / 1e3);
                        t > 60 && ("" !== this.state && "死亡" !== this.state || (this.isTasking ? (this.onData("<hir>任务队列异常。"),
                            this.onTask()) : "on" === this.setAutoGuaJi && ("" === this.state ? (this.onData(`<hic>累计${t}秒无操作，自动进入挂机副本。`),
                                this.onSend("go_fuben -auto")) : "死亡" === this.state && (this.onData(`<hic>累计${t}秒无操作，自动进入挂机副本。`),
                                    this.onSend("relive,go_fuben -auto")))),
                            "连接中断" === this.state && (this.onData("<hiy>[断线状态]尝试重新连接服务器。"),
                                this.onSend(() => $("[command=score]").click(), () => $("[command=score]").click())));
                        const e = new Date;
                        this.onData({
                            type: "time",
                            time: this.getTimeString(),
                            h: e.getHours(),
                            m: e.getMinutes(),
                            s: e.getSeconds()
                        }),
                            $(".title-time").html(`　${this.getDateString()}　${this.getTimeString()}`)
                    }
                        , 1e3)
            }
        });
    class a {
        constructor(t) {
            $.each(t, (t, e) => this[t] = e)
        }
        get visible() {
            const t = this.id.includes("corpse") && !this.name.includes("宝象的尸体")
                , e = this.name.includes("<离线>") || this.name.includes("<断线>");
            if (t || e)
                return !1;
            const i = Setting.off_plist
                , n = !this.id.includes(Process.player) && this.id.includes("user");
            return !i || !n
        }
        get sort() {
            if (this.id === Process.player)
                return 0;
            if (/user/.test(this.id)) {
                return 1e4 + [/^<ord>/, /^<hir>/, /^<hio>/, /^<hiz>/, /^<hiy>/, /^<hic>/, /^<hig>/, /^<grn>/].findIndex(t => t.test(this.name))
            }
            return 1e3 + [/^<ord>Boss <nor>/, /^<hio>Boss <nor>/, /^<hiz>Boss <nor>/, /^<hiy>Boss <nor>/, /^<hic>Boss <nor>/, /^<hig>Boss <nor>/, /^<hic>Npc <nor><hir>/, /^<hic>Npc <nor><hio>/, /^<hic>Npc <nor><hiz>/, /^<hic>Npc <nor><hiy>/, /^<hic>Npc <nor><hic>/, /^<hic>Npc <nor><hig>/, /^<hic>Npc <nor><grn>/, /^<red>已杀<\/red>/].findIndex(t => t.test(this.name))
        }
        get npc() {
            return !/user/.test(this.id)
        }
    }
    async function h(t, e = 0) {
        await function (t = 256) { return new Promise((e, i) => { setTimeout(() => { e(t) }, t) }) }(e);
        const i = $(t)[0].scrollTop
            , n = $(t)[0].scrollHeight
            , o = Math.ceil($(t).height());
        n - i > o && $(t).stop().animate({
            scrollTop: n - o
        }, "normal")
    }
    const d = new Vue({
        data: {
            list: []
        },
        computed: {
            qkList() {
                return [{
                    name: "乾坤",
                    cmd: "use buff_cunchu"
                }, ...this.list]
            }
        },
        methods: {
            refreshData(t) {
                const e = [];
                t.split("</cmd>").forEach(t => {
                    /<cmd cmd='([\s\S]+?)'><hic>([\s\S]+?)<\/hic>/.test(t) && e.push({
                        name: RegExp.$2.slice(0, 2),
                        cmd: RegExp.$1
                    })
                }
                ),
                    this.list = e,
                    console.info(e)
            },
            init() {
                $("#qiankun").show()
            }
        },
        created() {
            $(".tool-bar.right-bar.right-bar-2").prepend($('<div id="qiankun" class="item-commands">\n        <span v-for="item in qkList" :cmd="item.cmd">{{ item.name }}</span>\n      </div>').hide())
        },
        el: "#qiankun"
    });
    !function () {
        if (window.plugins)
            return void console.info("多次加载");
        function t(t = 256) {
            return new Promise(e => setTimeout(() => e(t), t))
        }
        function e(t, e, i) {
            s.addMonitor({
                name: t,
                type: e,
                on: i
            })
        }
        Object.defineProperties(Array.prototype, {
            remove: {
                value: function (t = 0, e = 1) {
                    const i = [...this];
                    return i.splice(t, e),
                        i
                }
            }
        }),
            $.fn.extend({
                animateScroll(t = "normal") {
                    const e = this[0].scrollTop
                        , i = this[0].scrollHeight
                        , n = Math.ceil(this.height());
                    return i - e > n && this.stop(!0, !0).animate({
                        scrollTop: i - n
                    }, t),
                        this
                }
            }),
            e("", "", (function (t) { }
            )),
            e("登陆", "login", (function (t) {
                t.id && (this.uid = t.id),
                    t.setting.trigger_url && (this.onData("<hir>脚本尝试二次加载，强制终止。"),
                        t.setting.trigger_url = "")
            }
            )),
            e("文本修正", "text", (function (t) {
                t.text = t.text.replace(/^\r\n|\r\n$/g, ""),
                    t.text = t.text.replace(/\r\n<nor>$|<nor>$/g, ""),
                    t.text = t.text.replace(/^\n|\n$/g, ""),
                    /^</.test(t.text) || (t.text = `<nor>${t.text}`),
                    $(".content-message pre").children().length > 500 && $(".content-message pre").children(":lt(250)").remove();
                [/^<hig>一道祥和的光环笼罩着你全身，你发现身上的(.+)在渐渐恢复。/, /^<hiw>(.+)的尸体<nor>开始腐烂了，发出一股难闻的恶臭。/, /^<hiw>腐烂的尸体<nor>被风吹乾了，变成一具骸骨。/, /^<nor>一阵风吹过，把<hiw>枯乾的骸骨<nor>化成骨灰吹散了。/, /^<nor>你收获了：/, /^<nor>恭喜你获得：(.+)宝石<nor>x(.+)块/, /^<nor>你合成了(.+)块(.+)宝石<nor>。/].find(e => {
                    if (e.test(t.text))
                        return t.type = "blocked",
                            !0
                }
                )
            }
            )),
            s.addMonitor({
                name: "获得经验潜能",
                type: "text",
                on(t) {
                    const e = /<hig>恭喜你获得：经验\+(\d+)点，潜能\+(\d+)点。/;
                    if (e.test(t.text)) {
                        const i = t.text.match(e)
                            , n = +i[1]
                            , o = +i[2];
                        return t.text = `<nor>你获得了经验${n}点，潜能${o}点。`,
                            this.jy += n,
                            void (this.qn += o)
                    }
                    const i = /<hic>第(\d+)层<nor>\r\n<hig>你获得了(\d+)点经验，(\d+)点潜能/;
                    if (i.test(t.text)) {
                        const e = t.text.match(i)
                            , n = e[1]
                            , o = +e[2]
                            , s = +e[3];
                        return t.text = `<hic>第${n}层\n<nor>你获得了经验${o}点，潜能${s}点。`,
                            this.jy += o,
                            void (this.qn += s)
                    }
                    const n = /^<hiy>恭喜你战胜了[天道塔]*守护者，你现在可以进入下一层。<nor>\r\n<hig>你获得了(.+)点经验，(.+)点潜能/;
                    if (n.test(t.text)) {
                        const e = t.text.match(n)
                            , i = +e[1]
                            , o = +e[2];
                        return t.text = `<nor>你战胜了<hiy>${this.roomNameY}<nor>守护者，你现在可以进入下一层。\n<nor>你获得了经验${i}点，潜能${o}点。`,
                            this.jy += i,
                            void (this.qn += o)
                    }
                    const o = /^恭喜你获得：潜能\*(\d+)点$/;
                    if (o.test(t.text)) {
                        const e = +t.text.match(o)[1];
                        this.qn += e,
                            t.text = `<nor>你获得了潜能${e}点。`
                    }
                }
            }),
            s.addMonitor({
                name: "core-text-打坐时间",
                type: "text",
                on(t) {
                    const e = /^<hig>你的最大内力增加了(.+)点！$/;
                    if (e.test(t.text)) {
                        const i = t.text.match(e)
                            , n = parseInt(i[1]);
                        this.mpMax += n;
                        const o = parseInt((this.mpLimit - this.mpMax) / (6 * n));
                        t.text = `<nor>你的最大内力提高了${n}点。\n</nor><hic class="remove">你的最大内力从${this.mpMax}点提高到${this.mpLimit}点需要打坐${o}分钟。`
                    }
                }
            }),
            s.addMonitor({
                name: "core-text-一键天赋",
                type: "text",
                on(t) {
                    const e = /天赋名称：.+\((.+)\/10\)[\s\S]+<div class="item-commands"><span cmd="(.+)">升级<\/span><\/div>/;
                    if (e.test(t.text)) {
                        const i = t.text.match(e)
                            , n = i[2];
                        let o = n;
                        for (let t = Number(i[1]); t < 9; t++)
                            o += `,${n}`;
                        t.text = t.text.replace(/[\s\S]<div class="item-commands"><span cmd="(.+)">升级<\/span><\/div>/, `<span class="item-commands"><span cmd="${n}">升一级</span><span cmd="${o}">升满级</span></span>`)
                    }
                }
            }),
            s.addMonitor({
                name: "core-text-显示文案",
                type: "text",
                on(t) {
                    t.blocked = !0,
                        /item-commands/.test(t.text) && $(".content-message").find(".item-commands").remove(),
                        /remove/.test(t.text) && $(".content-message").find(".remove").remove(),
                        0 === $(".content-message pre").length && $(".content-message").append("<pre></pre>"),
                        $(".content-message pre").append(`${t.text}\n`),
                        $(".content-message").animateScroll()
                }
            }),
            e("掉线 顶号", "text", (function (t) {
                /你的账号在别处登录，你被迫下线了！/.test(t.text) ? (alert("你的账号在别处登录，你被迫下线了！"),
                    window.location.href = window.location.href) : /你的连接中断了/.test(t.text) && (this.state = "连接中断")
            }
            )),
            e("自定义监控 角色新增", "itemadd", (function (t) {
                -1 === this.roomList.findIndex(e => e.id === t.id) && this.monitorList.forEach(e => {
                    if ("on" === e.open && "items" === e.type) {
                        const i = new RegExp(e.keys);
                        (i.test(t.name) || i.test(t.id)) && (this.onData(`<hic>[触发监控]<hiy>${e.name}`),
                            this.onSend(e.commands.replace(/\$id/g, t.id)))
                    }
                }
                )
            }
            )),
            e("自定义监控 角色列表", "items", (function (t) {
                this.monitorList.forEach(e => {
                    if ("on" === e.open && "items" === e.type) {
                        const i = new RegExp(e.keys);
                        t.items.forEach(t => {
                            t && (i.test(t.name) || i.test(t.id)) && (this.onData(`<hic>[触发监控]<hiy>${e.name}`),
                                this.onSend(e.commands.replace(/\$id/g, t.id)))
                        }
                        )
                    }
                }
                )
            }
            )),
            e("房间角色数据", "items", (function (t) {
                t.items && (this.roomList = [],
                    t.items.forEach(t => {
                        const e = new a(t);
                        if (e.visible && this.roomList.push(e),
                            e.name.includes("宝藏入口")) {
                            const t = `stopstate,go_enter ${e.id},e,e,search,search,search,search,search,e,look guanguo,dakai`
                                , i = `<div class="item-commands remove"><cyn>发现古墓宝藏入口。[${e.id}]</cyn><span cmd="${t}">进入古墓探寻</span>`;
                            this.onData(i)
                        }
                    }
                    ),
                    this.roomList.sort((t, e) => t.sort - e.sort),
                    t.items.splice(0),
                    t.items.push(...this.roomList))
            }
            )),
            e("房间角色增加", "itemadd", (function (t) {
                const e = new a(t)
                    , i = this.roomList.findIndex(e => e.id === t.id);
                if (-1 !== i ? this.roomList[i] = e : this.roomList.push(e),
                    e.name.includes("宝藏入口")) {
                    const t = `stopstate,go_enter ${e.id},e,e,search,search,search,search,search,e,look guanguo,dakai`
                        , i = `<div class="item-commands remove"><cyn>发现古墓宝藏入口。[${e.id}]</cyn><span cmd="${t}">进入古墓探寻</span>`;
                    this.onData(i)
                }
            }
            )),
            e("房间角色减少", "itemremove", (function (t) {
                const e = this.roomList.findIndex(e => e.id === t.id);
                -1 !== e && this.roomList.splice(e, 1)
            }
            )),
            e("江湖快捷寻路", "jh", (function (t) {
                if ("fam" !== t.t)
                    return;
                const e = [];
                e.push('<div class="item-commands">'),
                    0 === t.index ? (e.push('<span cmd="stopstate,jh fam 0 3">武庙</span>'),
                        e.push('<span cmd="stopstate,jh fam 0 5">当铺</span>'),
                        e.push('<span cmd="stopstate,jh fam 0 10">杂货</span>'),
                        e.push('<span cmd="stopstate,jh fam 0 11">铁匠</span>'),
                        e.push('<span cmd="stopstate,jh fam 0 12">武馆</span>'),
                        e.push("<br>"),
                        e.push('<span cmd="stopstate,jh fam 0 4">仓库</span>'),
                        e.push('<span cmd="stopstate,jh fam 0 1,w,w">练功房</span>'),
                        e.push('<span cmd="stopstate,jh fam 0 2,n,n,e,list $npc(bcangku)">帮派仓库</span>'),
                        e.push("<br>"),
                        e.push('<span cmd="stopstate,jh fam 0 start,n,e">张无忌</span>'),
                        e.push('<span cmd="stopstate,jh fam 0 10,u">欧冶子</span>'),
                        e.push("<br>"),
                        e.push('<span cmd="stopstate,jh fam 0 start,liwu"><hiy>周年庆礼物大使</hiy></span>')) : 1 === t.index ? (e.push('<span cmd="stopstate,jh fam 1 start,n">谷虚道长</span>'),
                            e.push('<span cmd="stopstate,jh fam 1 start,n">宋远桥</span>'),
                            e.push('<span cmd="stopstate,jh fam 1 1,n,w,nu,nu,nu,nu,n,n,n,n,n,n,open door,n">张三丰</span>'),
                            e.push("<br>"),
                            e.push('<span cmd="stopstate,jh fam 1 1,sd">后勤管理员</span>')) : 2 === t.index ? (e.push('<span cmd="stopstate,jh fam 2 start">清乐比丘</span>'),
                                e.push('<span cmd="stopstate,jh fam 2 start,n,n,nu">道觉禅师</span>'),
                                e.push('<span cmd="stopstate,jh fam 2 1,w">慧合尊者</span>'),
                                e.push('<span cmd="stopstate,jh fam 2 1,e">澄净</span>'),
                                e.push('<span cmd="stopstate,jh fam 2 1,n">玄难</span>'),
                                e.push("<br>"),
                                e.push('<span cmd="stopstate,jh fam 2 start,n">后勤管理员</span>')) : 3 === t.index ? (e.push('<span cmd="stopstate,jh fam 3 start">高根明</span>'),
                                    e.push('<span cmd="stopstate,jh fam 3 1,n">岳不群</span>'),
                                    e.push('<span cmd="stopstate,jh fam 3 start,eu,su,jump down">封不平</span>'),
                                    e.push('<span cmd="stopstate,jh fam 3 1,s,s,su,su,break bi,go enter">风清扬</span>'),
                                    e.push("<br>"),
                                    e.push('<span cmd="stopstate,jh fam 3 1">后勤管理员</span>')) : 4 === t.index ? (e.push('<span cmd="stopstate,jh fam 4 start,n">苏梦清</span>'),
                                        e.push('<span cmd="stopstate,jh fam 4 start,s">静心</span>'),
                                        e.push('<span cmd="stopstate,jh fam 4 start,w,n,n">周芷若</span>'),
                                        e.push('<span cmd="stopstate,jh fam 4 start,w,s,w,s">灭绝师太</span>'),
                                        e.push("<br>"),
                                        e.push('<span cmd="stopstate,jh fam 4 start,w">后勤管理员</span>')) : 5 === t.index ? (e.push('<span cmd="stopstate,jh fam 5 start,n,n">薛慕华</span>'),
                                            e.push('<span cmd="stopstate,jh fam 5 start">苏星河</span>'),
                                            e.push('<span cmd="stopstate,jh fam 5 start,d,d">逍遥子</span>'),
                                            e.push("<br>"),
                                            e.push('<span cmd="stopstate,jh fam 5 start,e">后勤管理员</span>')) : 6 === t.index ? (e.push('<span cmd="stopstate,jh fam 6 start,d">左全</span>'),
                                                e.push('<span cmd="stopstate,jh fam 6 1,u">简长老</span>'),
                                                e.push('<span cmd="stopstate,jh fam 6 1,e,e">鲁有脚</span>'),
                                                e.push('<span cmd="stopstate,jh fam 6 1,e,e,u">洪七公</span>'),
                                                e.push("<br>"),
                                                e.push('<span cmd="stopstate,jh fam 6 1,w">后勤管理员</span>')) : 7 === t.index && (e.push('<span cmd="stopstate,jh fam 7 start,cha_jungong,baoming">报名</span>'),
                                                    e.push("<br>"),
                                                    e.push('<span cmd="stopstate,jh fam 7 start,n,n,n,n">北门</span>'),
                                                    e.push('<span cmd="stopstate,jh fam 7 start,e,e,e,e">东门</span>'),
                                                    e.push('<span cmd="stopstate,jh fam 7 start,s,s,s,s">南门</span>'),
                                                    e.push('<span cmd="stopstate,jh fam 7 start,w,w,w,w">西门</span>')),
                    e.push("</div>"),
                    t.desc += e.join("")
            }
            )),
            Dialog.show = function (t, e) {
                if (t && !e) {
                    if (this.isShow && t == this.curItem)
                        return this.hide();
                    this.curItem && t != this.curItem && (Dialog[Dialog.curItem].close && Dialog[Dialog.curItem].close(),
                        Dialog[Dialog.curItem].isShow = !1,
                        Dialog.contentElement.empty()),
                        this.init(),
                        this.curItem = t,
                        this[t].show(e)
                } else
                    t && e && this[t].onData(e);
                h(".content-message", 256)
            }
            ,
            e("乾坤天地", "popup", (function (t) {
                "<hig>乾坤天地<nor>" === t.label && (console.info(t),
                    d.init(),
                    d.refreshData(t.text),
                    t.blocked = !0)
            }
            )),
            e("乾坤已存储/已释放", "text", (function (t) {
                /你将[\s\S]+效果存储到了乾坤。|你将[\s\S]+从乾坤中释放了出来。/.test(t.text) ? this.onSend("use buff_shifang") : /<red>你没有存储任何BUFF。/.test(t.text) && d.refreshData("")
            }
            )),
            e("副本序号", "jh", (function (t) {
                if (t.fbs)
                    for (let e = 0; e < t.fbs.length; e++)
                        t.fbs[e] = `${e + 1}.${t.fbs[e]}`
            }
            )),
            s.addMonitor({
                name: "core-score-属性数据",
                type: "score",
                on(t) {
                    t.name && (this.uid = t.id,
                        this.family = t.family,
                        this.hp = t.hp,
                        this.mp = t.mp,
                        this.hpMax = t.max_hp,
                        this.mpMax = t.max_mp,
                        this.hpPer = parseInt(t.hp / t.max_hp * 100),
                        this.mpPer = parseInt(t.mp / t.max_mp * 100),
                        this.mpLimit = t.limit_mp,
                        this.jy = t.exp,
                        this.qn = t.pot)
                }
            }),
            s.addMonitor({
                name: "core-sc-气血内力",
                type: "sc",
                on(t) {
                    t.id === this.uid && ("number" == typeof t.hp && (this.hpPer = t.hp),
                        "number" == typeof t.mp && (this.mpPer = t.mp))
                }
            }),
            s.addMonitor({
                name: "core-pack-背包物品排序",
                type: "pack",
                on(t) {
                    t.items && (t.items = this.onSortPack(t.items),
                        this.packList = t.items,
                        t.max_item_count && t.items.length > t.max_item_count && (this.onData(`<hic>背包空间不足。<hiy>[<hir>${t.items.length}<hiy>/${t.max_item_count}]`),
                            t.max_item_count = t.items.length)),
                        t.max_item_count && (this.packMax = t.max_item_count)
                }
            }),
            s.addMonitor({
                name: "core-pack-获得物品",
                type: "pack",
                on(t) {
                    if (t.remove && t.id) {
                        const e = this.packList.find(e => e.id === t.id)
                            , i = e.count
                            , n = t.remove;
                        if (e)
                            if (console.info($.extend({}, e)),
                                n < 0)
                                e.count = i - n,
                                    this.onData(`<nor>你获得了${e.name}${-t.remove}${e.unit}，共${e.count}${e.unit}。`);
                            else if (n > 0 && i > 0) {
                                e.count = i - n;
                                let o = `<nor>你失去了${e.name}${t.remove}${e.unit}`;
                                o += e.count > 0 ? `，余${e.count}${e.unit}。` : "。",
                                    this.onData(o)
                            }
                    }
                    if (t.name && t.id) {
                        const e = this.packList.find(e => e.id === t.id);
                        e ? e.count = t.count : (this.packList.push(t),
                            this.onData(`<nor>你获得了${t.name}${t.count}${t.unit}。`))
                    }
                }
            }),
            s.addMonitor({
                name: "core-pack-一键精炼装备",
                type: "pack",
                on(t) {
                    if (t.id && t.jldesc) {
                        const e = t.id
                            , i = this.packList.find(t => t.id === e);
                        if (i) {
                            const t = i.can_refine || 0
                                , n = 12 - t
                                , o = `jinglian ${e} ok`;
                            let s = o;
                            for (let t = 1; t < n; t++)
                                s += `,${o}`;
                            this.onData(`<cyn>你是否想要精炼${i.name}<cyn>？<span class="item-commands"><span cmd="${o}">快捷精炼1次到${t + 1}级</span><span cmd="${s}">快捷精炼${n}次到12级</span></span><hir>炼精无法返还，请谨慎操作。`)
                        }
                    }
                }
            }),
            s.addMonitor({
                name: "core-pack2-随从背包排序",
                type: "pack2",
                on(t) {
                    t.items && (t.items = this.onSortPack(t.items),
                        t.items.length > t.max_item_count && (t.max_item_count = t.items.length))
                }
            }),
            s.addMonitor({
                name: "core-list-仓库排序",
                type: "list",
                on(t) {
                    t.max_store_count && (t.stores = this.onSortPack(t.stores))
                }
            }),
            s.addMonitor({
                name: "core-pack-装备",
                type: "pack",
                on(t) {
                    t.eqs && (this.eqList = t.eqs),
                        0 === t.uneq && "战斗" === this.state && "on" === this.setAutoEq && (this.onData("<hic>武器在战斗中被卸。"),
                            this.cmdAutoEq = `eq ${t.id}`,
                            this.onSend(() => {
                                "死亡" !== this.state && this.onSend(this.cmdAutoEq)
                            }
                            )),
                        0 === t.eq && (this.cmdAutoEq = "")
                }
            }),
            s.addMonitor({
                name: "core-text-自动装备武器",
                type: "text",
                on(t) {
                    /你已经装备着了。/.test(t.text) ? this.cmdAutoEq = "" : /你的出招时间还没过。/.test(t.text) && "on" === this.setAutoEq && this.cmdAutoEq && this.onSend(1e3, () => {
                        "死亡" !== this.state && this.onSend(this.cmdAutoEq)
                    }
                    )
                }
            }),
            s.addMonitor({
                name: "core-skills-技能列表排序",
                type: "skills",
                on(t) {
                    t.items && (t.items = this.onSortSkill(t.items),
                        this.skillList = t.items),
                        t.limit && (this.skillLimit = t.limit),
                        t.pot && (this.qn = t.pot)
                }
            }),
            s.addMonitor({
                name: "core-master-师傅的技能列表排序",
                type: "master",
                on(t) {
                    t.items && (t.items = this.onSortSkill(t.items))
                }
            }),
            s.addMonitor({
                name: "core-skills-技能更新等级和熟练度",
                type: "skills",
                on(t) {
                    if ("number" == typeof t.exp && (t.exp = t.exp < 20 ? 20 : 5 * ~~(t.exp / 5)),
                        t.id && t.level) {
                        const { id: e, level: i } = t;
                        this.skillList.find(t => {
                            if (t.id === e)
                                return t.level = i,
                                    !0
                        }
                        )
                    }
                }
            }),
            s.addMonitor({
                name: "core-skills-学会新的技能",
                type: "skills",
                on(t) {
                    t.item && this.onSend("cha")
                }
            }),
            s.addMonitor({
                name: "core-popup-弹出技能说明",
                type: "popup",
                on(t) {
                    const e = /^(.+<nor>)技能说明$/;
                    if (e.test(t.label) && /checkskill /.test(this.lastSendCommand)) {
                        const i = t.label.match(e)[1]
                            , n = this.skillList.find(t => t.name === i);
                        n && (t.text = t.text.replace(/^<...>.+?<nor>：<nor><br>.+?<br>/, `${i}<br><cyn>技能等级：${n.level}级<br>技能代码：${n.id}</cyn><br>`))
                    }
                }
            }),
            s.addMonitor({
                name: "core-state-状态",
                type: "state",
                on(t) {
                    if (t.state) {
                        const e = /^你正副本(.+)$|^你正在进行(.+)副本$/;
                        if (e.test(t.state)) {
                            const i = t.state.match(e)[1] || t.state.match(e)[2];
                            t.state = `副本${i}`
                        }
                        t.state = t.state.replace(/你正在/g, ""),
                            this.state = t.state
                    } else
                        this.state = "";
                    delete t.desc
                }
            }),
            s.addMonitor({
                name: "core-fight-战斗状态",
                type: "fight",
                on(t) {
                    1 === t.is_fight ? this.state = "战斗" : 0 === t.is_fight && (this.state = "")
                }
            }),
            s.addMonitor({
                name: "core-die-死亡状态",
                type: "die",
                on(t) {
                    t.commands ? this.state = "死亡" : t.relive && (this.state = "")
                }
            }),
            s.addMonitor({
                name: "core-die-自动复活",
                type: "die",
                on(t) {
                    t.commands && ("fu" === this.setAutoRelive ? this.onSend("256,relive locale") : "miao" === this.setAutoRelive && this.onSend("256,relive,go_fuben -auto"))
                }
            }),
            s.addMonitor({
                name: "core-text-取消天师符复活",
                type: "text",
                on(t) {
                    /你身上没有可以原地复活的道具。/.test(t.text) && (this.setAutoRelive = "off",
                        this.onData("<hic>缺少天师符，原地复活已关闭。"))
                }
            }),
            s.addMonitor({
                name: "core-room-房间数据",
                type: "room",
                on(t) {
                    this.roomName = t.name || this.roomName,
                        this.roomPath = t.path || this.roomPath,
                        this.roomDesc = t.desc || this.roomDesc,
                        this.roomCmds = t.commands || this.roomCmds
                }
            }),
            s.addMonitor({
                name: "core-exits-出口数据",
                type: "exits",
                on(t) {
                    t.items && (this.cmdGoOut = `go ${Object.keys(t.items)[0]}`)
                }
            }),
            s.addMonitor({
                name: "core-jh-江湖副本",
                type: "jh",
                on(t) {
                    if ("fb" === t.t) {
                        t.no_cache = !0;
                        const e = t.index
                            , i = {}[e];
                        if (i) {
                            const n = `chat 副本攻略第${e}篇之${i}`;
                            t.desc += `<span class="item-commands"><span cmd="${n}">发送攻略到世界频道</span></span>`
                        }
                        const n = this.onFuBen(e);
                        n && (t.desc += `<span class="item-commands"><span cmd="${n}">自动副本</span></span>`)
                    }
                }
            }),
            s.addMonitor({
                name: "core-task-任务数据",
                type: "tasks",
                on(t) {
                    t.items && t.items.forEach(t => {
                        if (2 === t.state && (this.onData(`<hiy>${t.title}<hic>已完成。`),
                            this.onSend(`256,${t.id}`)),
                            /每日/.test(t.title)) {
                            const e = t.desc.match(/副本：<hik>(.+)\/20<\/hik>/);
                            e && e[1] && (this.taskFbCount = Number(e[1]))
                        } else if (/师门/.test(t.title)) {
                            const e = t.desc.match(/今日完成(.+)\/20个，共连续完成(.+)个。/);
                            e && e[1] && (this.taskSmCount = Number(e[1])),
                                e && e[2] && (this.taskSmTotal = Number(e[2]));
                            const i = t.desc.match(/你的师门委托你去寻找(.+)，你可以慢慢寻找/);
                            i && i[1] ? this.taskSmItem = i[1] : this.taskSmItem = ""
                        } else if (/追捕/.test(t.title)) {
                            const e = t.desc.match(/今日完成(.+)\/20个，共连续完成(.+)个，最高连续完成(.+)个。/);
                            e && e[1] && (this.taskZbCount = Number(e[1])),
                                e && e[2] && (this.taskZbTotal = Number(e[2])),
                                e && e[3] && (this.taskZbMax = Number(e[3]));
                            const i = t.desc.match(/扬州知府委托你追杀逃犯：(.+)，据说最近在(.+)-(.+)出现过，你还有(.+)去寻找他，/);
                            i && (i[1] ? this.taskZbItem = i[1] : this.taskZbItem = "",
                                i[2] && (this.taskZbRoomX = i[2]),
                                i[3] && (this.taskZbRoomY = i[3]),
                                i[4] && (this.taskZbTime = i[4]))
                        } else if (/藏宝/.test(t.title)) {
                            const e = t.desc.match(/你今天已经挖了(.+)\/10个藏宝图了/);
                            e && e[1] && (this.taskXbCount = Number(e[1]))
                        } else if (/请安/.test(t.title))
                            this.taskQaBool = !/还没有/.test(t.desc);
                        else if (/天道/.test(t.title))
                            this.taskTdBool = !/还没有/.test(t.desc);
                        else if (/襄阳/.test(t.title))
                            this.taskXyBool = !/还没有/.test(t.desc);
                        else if (/寒铁/.test(t.title)) {
                            const e = t.desc.match(/本周获取寒铁石一共完成(.+)\/35个/);
                            e && e[1] && (this.taskHtCount = Number(e[1]))
                        }
                    }
                    )
                }
            }),
            s.addMonitor({
                name: "core-msg-组队跟随",
                type: "msg",
                on(t) {
                    "tm" === t.ch && t.uid !== this.uid && "follower" === this.setTeamMode && (/^chat |^es |^pty /.test(t.content) || this.onSend(t.content))
                }
            }),
            s.addMonitor({
                name: "core-msg-武林叛徒",
                type: "msg",
                on(t) {
                    if ("rumor" === t.ch && /<hir>武林败类<him>/.test(t.content)) {
                        const e = ["<hio>", "<hiz>", "<hiy>", "<hic>", "<hig>"]
                            , i = t.content.match(/听说(.+?)-<cmd cmd='fly_to -boss \/quest\/boss\/boss6#[\d]+'>(.+?)<\/cmd>、(.+?)-<cmd cmd='fly_to -boss \/quest\/boss\/boss5#[\d]+'>(.+?)<\/cmd>、(.+?)-<cmd cmd='fly_to -boss \/quest\/boss\/boss4#[\d]+'>(.+?)<\/cmd>、(.+?)-<cmd cmd='fly_to -boss \/quest\/boss\/boss3#[\d]+'>(.+?)<\/cmd>、(.+?)-<cmd cmd='fly_to -boss \/quest\/boss\/boss2#[\d]+'>(.+?)<\/cmd>出现了一些<hir>武林败类<him>，请各位侠仕出手相助。/);
                        this.ptPathList = [];
                        for (let t = 1; t < 10; t += 2) {
                            const n = (t - 1) / 2
                                , o = i[t]
                                , s = i[t + 1];
                            if (o && s) {
                                const t = this.getRoomPath(o, s);
                                t ? (this.ptPathList.push(t),
                                    this.onData(`${e[n]}武林叛徒<hiw> [${o},${s}]`)) : (this.ptPathList.push([]),
                                        this.onData(`${e[n]}武林叛徒<hiw> [${o},${s}]<hir>[查无此处]`))
                            }
                        }
                        this.onTaskPt()
                    }
                }
            }),
            s.addMonitor({
                name: "core-msg-年兽",
                type: "msg",
                on(t) {
                    if ("rumor" === t.ch && /<hiy>年兽<him>/.test(t.content)) {
                        const e = t.content.match(/听说(.+?)-<cmd cmd='fly_to -boss \/quest\/activity\/chunjie\/npc\/nianshou_boss6#[\d]+'>(.+?)<\/cmd>、(.+?)-<cmd cmd='fly_to -boss \/quest\/activity\/chunjie\/npc\/nianshou_boss6#[\d]+'>(.+?)<\/cmd>、(.+?)-<cmd cmd='fly_to -boss \/quest\/activity\/chunjie\/npc\/nianshou_boss6#[\d]+'>(.+?)<\/cmd>、(.+?)-<cmd cmd='fly_to -boss \/quest\/activity\/chunjie\/npc\/nianshou_boss6#[\d]+'>(.+?)<\/cmd>、(.+?)-<cmd cmd='fly_to -boss \/quest\/activity\/chunjie\/npc\/nianshou_boss6#[\d]+'>(.+?)<\/cmd>、(.+?)-<cmd cmd='fly_to -boss \/quest\/activity\/chunjie\/npc\/nianshou_boss6#[\d]+'>(.+?)<\/cmd>出现了一些<hiy>年兽<him>扰民，请各位小心。/)
                            , i = ['<span class="item-commands">'];
                        for (let t = 1; t < 12; t += 2) {
                            const n = e[t]
                                , o = e[t + 1];
                            if (n && o) {
                                const t = this.getRoomPath(n, o);
                                t && i.push(`<span cmd="${t.join(",")}"><hio>年兽</hio>[${n},${o}]</span>`)
                            }
                        }
                        this.onData(i.join(""))
                    }
                }
            }),
            s.addMonitor({
                name: "core-msg-领取喜宴",
                type: "msg",
                on(t) {
                    "on" === this.setAutoXiYan && /婚礼将在一分钟后开始。/.test(t.content) && /婚庆主持/.test(t.name) && (this.onData("<hic>喜宴领取已开启。"),
                        this.addMonitor({
                            name: "auto-xiyan",
                            type: "cmds",
                            isOnce: !0,
                            on(t) {
                                const e = t.items.find(t => /送礼：/.test(t.name));
                                if (e)
                                    return this.onSend(`${e.cmd},u,kaixi,d,go_fuben -auto`),
                                        this.onData("<hic>喜宴领取已完成。"),
                                        !0
                            }
                        }),
                        this.onSend("stopstate,jh fam 0 9,u"))
                }
            }),
            // 私人定制 开始

            s.addMonitor({
                name: "私人定制:自动组队",
                type: "cmds",
                on(t) {
                    const e = t.items.find(t => /同意/.test(t.name));
                    if (e)
                        return this.onSend(`${e.cmd}`);
                }
            }),




            // 私人定制 结束
            s.addMonitor({
                name: "core-msg-门派战",
                type: "msg",
                on(t) {
                    if (/，对(.+)格杀勿论/.test(t.content)) {
                        const e = t.content.match(/，对(.+)格杀勿论/)
                            , i = {
                                "张三丰": "武当",
                                "玄难": "少林",
                                "岳不群": "华山",
                                "灭绝师太": "峨嵋",
                                "逍遥子": "逍遥",
                                "洪七公": "丐帮"
                            }[t.name]
                            , n = ["武当", "少林", "华山", "峨嵋", "逍遥", "丐帮"].find(t => e[1].includes(t));
                        i && n && (this.onData(`<hic>门派战开启，${i}宣战${n}。`),
                            "武当" !== i && "武当" !== n || "on" !== this.setAutoWD ? "少林" !== i && "少林" !== n || "on" !== this.setAutoSL ? "华山" !== i && "华山" !== n || "on" !== this.setAutoHS ? "峨嵋" !== i && "峨嵋" !== n || "on" !== this.setAutoEM ? "逍遥" !== i && "逍遥" !== n || "on" !== this.setAutoXY ? "丐帮" !== i && "丐帮" !== n || "on" !== this.setAutoGB || this.onSend("stopstate", ...o.丐帮.林间小屋) : this.onSend("stopstate", ...o.逍遥.地下石室) : this.onSend("stopstate", ...o.峨嵋.清修洞) : this.onSend("stopstate", ...o.华山.客厅) : this.onSend("stopstate", ...o.少林.方丈楼) : this.onSend("stopstate", ...o.武当.金殿))
                    }
                }
            }),
            s.addMonitor({
                name: "core-msg-绝世长老",
                type: "msg",
                on(t) {
                    const e = /何方狂徒，竟敢来(.+)撒野，<cmd cmd='fly_to -boss (.+)'>(.+)<\/cmd>就是你的葬身之地！/;
                    if (e.test(t.content)) {
                        const i = t.content.match(e)
                            , n = i[1]
                            , o = i[2]
                            , s = i[3];
                        if ("on" === this.setAutoWDJS && n.includes("武当") || "on" === this.setAutoSLJS && n.includes("少林") || "on" === this.setAutoHSJS && n.includes("华山") || "on" === this.setAutoEMJS && n.includes("峨嵋") || "on" === this.setAutoXYJS && n.includes("逍遥") || "on" === this.setAutoGBJS && n.includes("丐帮")) {
                            const e = this.getRoomPath(n, s);
                            let i = !0;
                            if (e) {
                                const s = ["stopstate"];
                                e.forEach(e => {
                                    s.push(() => {
                                        if (i) {
                                            this.npcList.find(t => t.id === o) ? (i = !1,
                                                this.onData(`<hic>发现${n}绝世长老${t.name}。`)) : this.onSend(e)
                                        }
                                    }
                                    )
                                }
                                ),
                                    this.onSend(s)
                            }
                        }
                    }
                }
            }),
            s.addMonitor({
                name: "core-msg-襄阳",
                type: "msg",
                on(t) {
                    "system" === t.ch && /蒙古军队将于10分钟后抵达襄阳！/.test(t.content) && this.onData('<span class="item-commands"><span cmd="stopstate,jh fam 7 start,baoming,go_fuben -auto">报名守卫襄阳</span>')
                }
            }),
            s.addMonitor({
                name: "core-msg-自定义消息监控",
                type: "msg",
                on(t) {
                    let e = t.ch;
                    "system" !== t.ch && "rumor" !== t.ch || (e = "sys"),
                        this.monitorList.forEach(i => {
                            if ("on" === i.open && "msg" === i.type && i.channel === e) {
                                const n = new RegExp(i.speakers);
                                new RegExp(i.keys).test(t.content) && ("sys" === e || n.test(t.name)) && (this.onData(`<hic>[触发监控]<hiy>${i.name}`),
                                    this.onSend(i.commands))
                            }
                        }
                        )
                }
            }),
            s.addMonitor({
                name: "core-text-自定义消息监控",
                type: "text",
                on(t) {
                    this.monitorList.forEach(e => {
                        if ("on" === e.open && "msg" === e.type && "room" === e.channel) {
                            new RegExp(e.keys).test(t.text) && (this.onData(`<hic>[触发监控]<hiy>${e.name}`),
                                this.onSend(e.commands))
                        }
                    }
                    )
                }
            }),
            s.addMonitor({
                name: "core-time-自定义时间监控",
                type: "time",
                on(t) {
                    this.monitorList.forEach(e => {
                        const i = new RegExp(`${e.keys}:\\d\\d`);
                        if ("on" === e.open && "time" === e.type && i.test(t.time)) {
                            const t = this.getTimeStamp()
                                , i = e.last;
                            if (i && t - i <= 6e4)
                                return;
                            e.last = t,
                                this.onData(`<hic>[触发监控]<hiy>${e.name}`),
                                this.onSend(e.commands)
                        }
                    }
                    )
                }
            }),
            s.addMonitor({
                name: "core-status-自定义状态监控",
                type: "status",
                on(t) {
                    this.monitorList.forEach(e => {
                        if ("on" === e.open && "status" === e.type) {
                            const i = new RegExp(e.keys)
                                , n = new RegExp(e.targets.replace("self", this.uid));
                            i.test(t.sid) && n.test(t.id) && t.action === e.action && (this.onData(`<hic>[触发监控]<hiy>${e.name}`),
                                this.onSend(e.commands.replace(/\$id/g, t.id)))
                        }
                    }
                    )
                }
            }),
            s.addMonitor({
                name: "core-msg-挖宝时古墓",
                type: "msg",
                on(t) {
                    if ("rumor" === t.ch && /<hiy>听说<hir>(.+)<hiy>在<hic>(.+)<hiy>的<hig>(.+)<hiy>挖宝时，/.test(t.content)) {
                        this.onData("<hic>[发现古墓]");
                        const e = t.content.match(/<hiy>听说<hir>(.+)<hiy>在<hic>(.+)<hiy>的<hig>(.+)<hiy>挖宝时，/)
                            , i = (e[1],
                                e[2])
                            , n = e[3]
                            , o = this.getRoomPath(i, n)
                            , s = [o];
                        let a = 0;
                        for (; a >= 0;) {
                            a++;
                            let t = this.getRoomPath(i, n + a);
                            t ? s.push(t) : a = -1
                        }
                        if (1 === s.length)
                            this.onData(`<span class="item-commands"><span cmd="stopstate,${o.join(",")}">${i}${n}</span>`);
                        else {
                            let t = '<span class="item-commands">';
                            for (let e = 1; e < s.length; e++)
                                t += `<span cmd="stopstate,${s[e].join(",")}">${i}${n}[${e}]</span>`;
                            this.onData(t)
                        }
                    }
                }
            }),
            s.addMonitor({
                name: "core-status-自身减益状态时间记录",
                type: "status",
                on(t) {
                    if ("add" === t.action && t.id === this.uid && "true" === t.downside) {
                        const e = this.getTimeStamp() + t.duration;
                        e > this.debuffTime && (this.debuffTime = e)
                    }
                }
            }),
            s.addMonitor({
                name: "core-exits-出口快捷键",
                type: "exits",
                on(t) {
                    t.items && ($.each(this.keypress, (t, e) => this.keypress[t] = ""),
                        Object.keys(t.items).forEach(e => {
                            const i = {
                                up: "E",
                                enter: "E",
                                northeast: "E",
                                down: "C",
                                southeast: "C",
                                out: "Z",
                                southwest: "Z",
                                northwest: "Q",
                                north: "W",
                                northup: "W",
                                northdown: "W",
                                east: "D",
                                eastup: "D",
                                eastdown: "D",
                                south: "S",
                                southup: "S",
                                southdown: "S",
                                west: "A",
                                westup: "A",
                                westdown: "A"
                            }[e];
                            t.items[e] = `${t.items[e]}[${i}]`,
                                this.keypress[i] = `go ${e}`
                        }
                        ))
                }
            }),
            s.addMonitor({
                name: "core-pending-昏迷",
                type: "pending",
                on(t) {
                    1 === t.is_hm && "on" === this.setKillPend && this.onSend(`stopstate,kill ${t.id}`)
                }
            }),
            s.addMonitor({
                name: "core-text-襄阳分数",
                type: "text",
                on(t) {
                    const e = /你奋勇杀掉.+，获得军功奖励.+([\d]+)\/500/;
                    if (e.test(t.text)) {
                        const i = t.text.match(e);
                        this.taskXyCount = i[1]
                    }
                    const i = /<hig>你本周获得杀敌军功：([\d]+)点，总军功：.+点。/;
                    if (i.test(t.text)) {
                        const e = t.text.match(i);
                        this.taskXyCount = e[1]
                    }
                }
            }),
            s.addMonitor({
                name: "core-dispfm-冷却时间",
                type: "dispfm",
                on(t) {
                    if (t.distime) {
                        const e = this.getTimeStamp()
                            , i = t.distime > 3e4 ? 3e4 : t.distime;
                        e + i > this.skillTime && (this.skillTime = e + i)
                    }
                }
            }),
            s.addMonitor({
                name: "core-cmds-宝石一键拆卸",
                type: "cmds",
                on(t) {
                    if (t.items && t.items[0].cmd.includes("uninset")) {
                        const e = ['<span class="item-commands">']
                            , i = ["stopstate"];
                        t.items.forEach(t => {
                            e.push(`<span cmd="${t.cmd}">${t.name}</span>`),
                                i.push(`${t.cmd} -yes`)
                        }
                        ),
                            this.onSend(256, () => {
                                this.onData(`${e.join("")}<span cmd="${i.join(",")}">全部拆卸[自动消耗黄金]</span>`)
                            }
                            )
                    }
                }
            }),
            s.addMonitor({
                name: "core-perform-自动出招",
                type: "perform",
                on() {
                    this.refreshPerformList()
                }
            }),
            s.addMonitor({
                name: "core-dispfm-自动出招",
                type: "dispfm",
                on(t) {
                    const e = this.getTimeStamp();
                    this.performList.forEach(i => {
                        e + t.rtime > i.time && (i.time = e + t.rtime),
                            i.id === t.id && (i.time = e + t.distime)
                    }
                    )
                }
            }),
            s.addMonitor({
                name: "core-fight-自动出招",
                type: "fight",
                on(t) {
                    if ("on" === this.setAutoPerform)
                        if (1 === t.is_fight) {
                            this.refreshPerformList();
                            let t, e = 100;
                            t = () => {
                                if ("战斗" !== this.state)
                                    return;
                                this.performList.sort((t, e) => t.order - e.order),
                                    console.info(this.performList);
                                const i = this.getTimeStamp()
                                    , n = this.performList.find(t => t.time < i);
                                n ? (n.order = ++e,
                                    this.onSend(`perform ${n.id}`, () => t())) : this.onSend(256, () => t())
                            }
                                ,
                                this.onSend("setting auto_pfm 0"),
                                this.onData("<hig>[脚本自动出招]"),
                                t()
                        } else
                            0 === t.is_fight && this.onSend("setting auto_pfm 1")
                }
            });
        const i = {
            miTanId: "",
            isBusy: !1
        };
        e("机器人定时襄阳巡逻", "time", (async function (e) {
            if (!this.isRobot || 0 !== e.m && 20 !== e.m && 40 !== e.m || 0 !== e.s)
                return;
            if (this.getTimeStamp() < parseInt(this.xyStartTime) + 24e5)
                return;
            i.isBusy = !0;
            const n = ["look", "stopstate", "chat *即将巡察襄阳城！", "jh fam 7 start", "e", "e", "e", "e", "s", "s", "s", "s", "w", "w", "w", "w", "s", "jh fam 7 start", "s", "s", "s", "s", "w", "w", "w", "w", "n", "n", "n", "n", "w", "jh fam 7 start", "w", "w", "w", "w", "n", "n", "n", "n", "e", "e", "e", "e", "n", "jh fam 7 start", "n", "n", "n", "n", "e", "e", "e", "e", "s", "s", "s", "s", "e", "jh fam 0 1", "w", "w", "go_fuben -auto", "chat *襄阳城巡察完毕！"];
            for (let e = 0; e < n.length; e++) {
                const o = n[e];
                if (i.miTanId)
                    break;
                this.onSend(o),
                    await t(1e3);
                const s = this.npcList.find(t => t.name.includes("密探"));
                s && (i.miTanId = s.id,
                    this.onSend("chat *发现了蒙古密探！", "kill " + s.id))
            }
            i.miTanId = "",
                i.isBusy = !1
        }
        )),
            e("机器人获得蒙古密函", "text", (function (t) {
                this.isRobot && /<nor>你获得了<hic>密函/.test(t.text) && this.onSend("chat *击杀了蒙古密探！", "jh fam 0 1", "w", "w", "go_fuben -auto", "chat *襄阳城巡察完毕！")
            }
            )),
            e("机器人保存襄阳记录", "msg", (function (t) {
                !this.isRobot || "system" !== t.ch && "rumor" !== t.ch || (/击退了来犯的蒙古大军|襄阳城失守，大宋军队惨败！/.test(t.content) && (this.xyOverTime = this.getTimeStamp(),
                    this.xyOverLog = `${this.getTimeString()} ${t.content}`,
                    this.onUpload()),
                    /蒙古军队将于10分钟后抵达襄阳！/.test(t.content) && (this.xyStartTime = this.getTimeStamp(),
                        this.xyStartLog = `${this.getTimeString()} ${t.content}`,
                        this.onUpload()))
            }
            )),
            e("机器人保存门派记录", "msg", (function (t) {
                if (this.isRobot && /，对(.+)格杀勿论/.test(t.content)) {
                    const e = t.content.match(/，对(.+)格杀勿论/)
                        , i = {
                            "张三丰": "武当",
                            "玄难": "少林",
                            "岳不群": "华山",
                            "灭绝师太": "峨嵋",
                            "逍遥子": "逍遥",
                            "洪七公": "丐帮"
                        }[t.name]
                        , n = ["武当", "少林", "华山", "峨嵋", "逍遥", "丐帮"].find(t => e[1].includes(t));
                    if (i && n) {
                        this.onSend(`chat ${this.getTimeString()} ${i} VS ${n}`);
                        const t = `${this.getTimeString()} ${i} VS ${n}`;
                        this.mpzList.push(t),
                            this.mpzList = this.mpzList.splice(-3)
                    }
                }
            }
            )),
            e("机器人回复玩家消息", "msg", (async function (e) {
                if (this.isRobot && "chat" === e.ch && !i.isBusy) {
                    if (/门派战/.test(e.content)) {
                        i.isBusy = !0;
                        for (let e = 0; e < this.mpzList.length; e++) {
                            const i = this.mpzList[e];
                            await t(2e3),
                                this.onSend("chat " + i)
                        }
                        await t(3e4),
                            i.isBusy = !1
                    }
                    if (/开襄阳/.test(e.content)) {
                        const t = this.getTimeStamp();
                        t < parseInt(this.xyOverTime) + 72e5 ? this.onSend(`chat ${this.xyOverLog}`) : t < parseInt(this.xyStartTime) + 24e5 ? this.onSend(`chat ${this.xyStartLog}`) : this.onSend("stopstate", "jh fam 7 start", "give -yes", "pack", () => {
                            const t = this.packList.find(t => t.name.includes("密函"));
                            t && this.onSend(`chat *背包中还有${t.count}份蒙古军密函。`)
                        }
                        )
                    }
                }
            }
            )),
            function () {
                GameClient.Send = t => this.onSend(t),
                    GameClient.OnData = t => this.onData(t),
                    GameClient.OnMessage = t => this.onData(t),
                    ReceiveMessage = t => this.onData(t),
                    onerror = () => this.onData("<hir>e"),
                    orderItems = t => t,
                    clearInterval(Process.timer),
                    this.version = "3.4.10a",
                    $("head").append(`<link href="http://47.102.126.255/2020/jhmud.min.css?${this.version}" rel="stylesheet">`);

                const t = [];
                t.push("<hiy>本脚本仅供学习研究交流使用"),

                    this.onData(t.join("\n")),
                    this.onSend("setting keep_msg 1", () => $("[command=showtool]").click(), () => $("[command=score]").click(), () => $("[command=skills]").click(), () => $("[command=tasks]").click(), () => $("[command=jh]").click(), () => $("[command=jh]").click(), "pack", "look", () => $("[command=showcombat]").click());
                const e = $(".state-bar .title").text().replace(/正在学习中.../, "");
                this.onData({
                    type: "state",
                    state: e
                }),
                    this.onDownload(),
                    $(document).keypress(t => {
                        const e = {
                            32: () => $(".dialog-confirm").is(":hidden") || $(".btn-ok").click(),
                            65: () => this.keypress.A && this.onSend(this.keypress.A),
                            83: () => this.keypress.S && this.onSend(this.keypress.S),
                            68: () => this.keypress.D && this.onSend(this.keypress.D),
                            69: () => this.keypress.E && this.onSend(this.keypress.E),
                            87: () => this.keypress.W && this.onSend(this.keypress.W),
                            67: () => this.keypress.C && this.onSend(this.keypress.C),
                            90: () => this.keypress.Z && this.onSend(this.keypress.Z),
                            81: () => this.keypress.Q && this.onSend(this.keypress.Q),
                            75: () => this.onSend("$killall")
                        }[t.which];
                        e && e()
                    }
                    ),
                    this.refreshPerformList(),
                    window.plugins = this
            }
                .bind(s)()
    }()
}
]);
