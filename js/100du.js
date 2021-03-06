/*
 * @Author: Zane Xiong 
 * @Date: 2017-07-10 16:11:03 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2017-08-27 15:03:11
 */


$(function() {

    //header部分城市切换
    (function() {
        var $oclick = $('#header .header-left a');
        $oclick.mouseover(function() {
            $(this).css({
                "background": "#d60d03",
                "color": "#fff"
            });
        });
        $oclick.mouseout(function() {
            $(this).css({
                "background": "#fff",
                "color": "#d60d03"
            });
        });
        $oclick.click(function() {
            $(this).css({
                "background": "#fff",
                "color": "#d60d03"
            }).siblings().css({
                "color": "#999999"
            });
        });
    })();

    //search部分选项卡切换
    (function() {
        var $menu = $("#search .search-bar ul li");
        var $text = $("#search .search-main").find(".search-cont .search-text");
        var arrText = [
            '例如：荷棠鱼坊烧鱼 或 樱花日本料理',
            '例如：昌平区育新站龙旗广场2号楼609室',
            '例如：万达影院双人情侣券',
            '例如：东莞出事了，大老虎是谁？',
            '例如：北京初春降雪，天气变幻莫测'
        ];
        var iNow = 0;
        $text.val(arrText[iNow]);
        $menu.each(function(index) {
            $(this).click(function() {
                $(this).addClass("active").siblings().removeClass("active");

                iNow = index;

                $text.val(arrText[iNow]);
            })
        });

        $text.focus(function() {
            if ($(this).val() == arrText[iNow]) {
                $(this).val("");
            }
        });
        $text.blur(function() {
            if ($(this).val() == "") {
                $(this).val(arrText[iNow]);
            }
        });
    })();


    //search-update部分弹性文字跳动
    (function() {
        var Oupdate = $(".search-update");
        var oUl = Oupdate.find("ul");
        var iHeight = 0;
        var arrData = [
            { 'name': '萱萱', 'time': 4, 'title': '那些灿烂华美的瞬间', 'url': 'http://www.miaov.com/2013/' },
            { 'name': '畅畅', 'time': 5, 'title': '广东3天抓获涉黄疑犯', 'url': 'http://www.miaov.com/2013/#curriculum' },
            { 'name': '萱萱', 'time': 6, 'title': '国台办回应王郁琦', 'url': 'http://www.miaov.com/2013/#about' },
            { 'name': '畅畅', 'time': 7, 'title': '那些灿烂华美的瞬间', 'url': 'http://www.miaov.com/2013/#message' },
            { 'name': '萱萱', 'time': 8, 'title': '那些灿烂华美的瞬间', 'url': 'http://www.miaov.com/2013/' },
            { 'name': '畅畅', 'time': 9, 'title': '广东3天抓获涉黄疑犯', 'url': 'http://www.miaov.com/2013/#curriculum' },
            { 'name': '萱萱', 'time': 10, 'title': '国台办回应王郁琦', 'url': 'http://www.miaov.com/2013/#about' },
            { 'name': '畅畅', 'time': 11, 'title': '那些灿烂华美的瞬间', 'url': 'http://www.miaov.com/2013/#message' }
        ];
        var html = '';
        var oBtnUp = $("#updateUpBtn");
        var oBtnDown = $("#updateDownBtn");
        var iNow = 0;
        var timer = null;

        for (var i = 0; i < arrData.length; i++) {
            html += "<li><a href='" + arrData[i].url + "'><strong>" + arrData[i].name + "</strong>&nbsp;<span>" + arrData[i].time + "分钟前</span>&nbsp;写了一篇新文章：" + arrData[i].title + "…</a></li>";
        }
        oUl.append(html);

        iHeight = oUl.find('li').height();

        oBtnUp.click(function() {
            doMove(-1);
        });
        oBtnDown.click(function() {
            doMove(1);
        });
        Oupdate.hover(function() {
            clearInterval(timer);
        }, autoPlay);

        function autoPlay() {
            timer = setInterval(function() {
                doMove(-1);
            }, 3000);
        }
        autoPlay();

        function doMove(num) {
            iNow += num;
            if (Math.abs(iNow) > arrData.length - 1) {
                iNow = 0;
            }
            if (iNow > 0) {
                iNow = -(arrData.length - 1);
            }
            oUl.stop().animate({ 'top': iHeight * iNow }, 2200, 'elasticOut');
        }
    })();

    // 选项卡切换
    (function() {
        fnTab($('.tabNav1'), $('.tabCon1'), 'click');
        fnTab($('.tabNav2'), $('.tabCon2'), 'click');
        fnTab($('.tabNav3'), $('.tabCon3'), 'mouseover');
        fnTab($('.tabNav4'), $('.tabCon4'), 'mouseover');

        function fnTab(oNav, aCon, sEvent) {
            var aElem = oNav.children();
            aCon.hide().eq(0).show();

            aElem.each(function(index) {

                $(this).on(sEvent, function() {
                    aElem.removeClass('active')
                    $(this).addClass('active');
                    aCon.hide().eq(index).show();
                });

            });
        }
    })();

    //每日活动 日历特效
    (function() {

    })();
})