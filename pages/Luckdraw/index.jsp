<%@ page contentType="text/html;charset=UTF-8" language="java" %>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
        <%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="utf-8">
                <meta content="yes" name="apple-mobile-web-app-capable">
                <meta content="yes" name="apple-touch-fullscreen">
                <meta content="telephone=no,email=no" name="format-detection">
                 <meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no">
                <title>抽取限量星云，体验星际穿越</title>
                 <script type="text/javascript" src="http://s.xnimg.cn/a88363/wap/mobile/newyear/js/fastclick.js"></script>
                <script type="text/javascript" src="http://s.xnimg.cn/a90462/wap/mobile/2017activity/beautifulroom/js/flexible.js"></script>
                <link rel="stylesheet" type="text/css" href="http://s.xnimg.cn/a90543/wap/mobile/2017activity/nebula/css/index.css">
            </head>

            <body>
                <header class="header">
                    <div class="explain">
                        活动期间每累计充值1元，将获得1个抽奖点数，消耗点数参与抽奖，最高可获得限量礼物——“星云”，抢先体验星际穿越，成为万人瞩目的焦点。
                    </div>
                    <div class="tip">
                        
                    </div>
                </header>
                <div class="container">
                    <div class="tap-box">
                        <div class="commonBtn-box notactive">
                        </div>
                        <div class="seniorBtn-box active">
                        </div>
                    </div>
                    <div class="luckDraw-box">
                        <div class="luckDraw-box-common">
                            <div class="startBtn-box">
                                <div class="btn-box">
                                    <div class="cost">
                                        消耗<span>60</span>张奖券
                                    </div>
                                </div>
                                <div class="surplus">
                                    剩余<span>${data.restRecharge}</span>张奖券
                                </div>
                            </div>
                            <div class="luckItem first grade2">
                                <div class="giftImg" style="background-image: url(http://fmn.rrimg.com/fmn070/attachment/20170623/1525/a_VInc_26e20000f6481e84.png);">
                                    <div class="giftCount">
                                        x1
                                    </div>
                                </div>
                                <div class="giftName">
                                    星云碎片
                                </div>
                                <div class="border-box" data-id='1'>
                                </div>
                            </div>
                            <div class="luckItem commen1 grade3">
                                <div class="giftImg" style="background-image: url(http://fmn.rrimg.com/fmn079/20160803/1445/original_Fenn_2c2a000645801e84.png);">
                                    <div class="giftCount">
                                        x6
                                    </div>
                                </div>
                                <div class="giftName">
                                    棒棒糖
                                </div>
                                <div class="border-box" data-id='2'>
                                </div>
                            </div>
                            <div class="luckItem commen2  grade3">
                                <div class="giftImg" style="background-image: url(http://fmn.rrimg.com/fmn079/20170212/0935/original_3Jbo_c62e000a0e0a1e84.png)">
                                    <div class="giftCount">
                                        x12
                                    </div>
                                </div>
                                <div class="giftName">
                                    小星星
                                </div>
                                <div class="border-box" data-id='3'>
                                </div>
                            </div>
                            <div class="luckItem commen3  grade3">
                                <div class="giftImg" style="background-image: url(http://fmn.rrimg.com/fmn076/20160803/1445/original_561r_560e000645131e83.png)">
                                    <div class="giftCount">
                                        x6
                                    </div>
                                </div>
                                <div class="giftName">
                                    爱你
                                </div>
                                <div class="border-box" data-id='4'>
                                </div>
                            </div>
                            <div class="luckItem commen4  grade3">
                                <div class="giftImg" style="background-image: url(http://fmn.rrimg.com/fmn072/20161226/1415/original_FCGU_c5fe00036f391e84.png)">
                                    <div class="giftCount">
                                        x3
                                    </div>
                                </div>
                                <div class="giftName">
                                    玫瑰花
                                </div>
                                <div class="border-box" data-id='5'>
                                </div>
                            </div>
                            <div class="luckItem commen5  grade3">
                                <div class="giftImg" style="background-image: url(http://fmn.rrimg.com/fmn071/20170212/0935/original_djOD_9223000de48b1e83.png)">
                                    <div class="giftCount">
                                        x88
                                    </div>
                                </div>
                                <div class="giftName">
                                    星尘
                                </div>
                                <div class="border-box" data-id='6'>
                                </div>
                            </div>
                            <div class="luckItem commen6  grade3">
                                <div class="giftImg" style="background-image: url(http://fmn.rrimg.com/fmn075/attachment/20170426/1540/a_TlsQ_abb9000cb60c1e7f.png);background-size:contain; ">
                                    <div class="giftCount">
                                        x1
                                    </div>
                                </div>
                                <div class="giftName">
                                    奇幻热气球
                                </div>
                                <div class="border-box" data-id='7'>
                                </div>
                            </div>
                            <div class="luckItem commen7  grade3">
                                <div class="giftImg" style="background-image: url(http://fmn.rrimg.com/fmn070/20160803/1445/original_vXbj_1ba30006da851e7f.png)">
                                    <div class="giftCount">
                                        x5
                                    </div>
                                </div>
                                <div class="giftName">
                                    666
                                </div>
                                <div class="border-box" data-id='8'>
                                </div>
                            </div>
                            <div class="luckItem commen8  grade3">
                                <div class="giftImg" style="background-image: url(http://fmn.rrimg.com/fmn076/20160803/1450/original_UMyC_545a000645fb1e80.png)">
                                    <div class="giftCount">
                                        x1
                                    </div>
                                </div>
                                <div class="giftName">
                                    么么哒
                                </div>
                                <div class="border-box" data-id='9'>
                                </div>
                            </div>
                            <div class="luckItem commen9  grade3">
                                <div class="giftImg" style="background-image: url(http://fmn.rrimg.com/fmn079/20170212/0935/original_3Jbo_c62e000a0e0a1e84.png)">
                                    <div class="giftCount">
                                        x8
                                    </div>
                                </div>
                                <div class="giftName">
                                    小星星
                                </div>
                                <div class="border-box" data-id='10'>
                                </div>
                            </div>
                            <div class="luckItem commen10  grade3">
                                <div class="giftImg" style="background-image: url(http://fmn.rrimg.com/fmn070/20161024/0005/original_OuK4_10a8000942c61e84.png)">
                                    <div class="giftCount">
                                        x1
                                    </div>
                                </div>
                                <div class="giftName">
                                    抱抱
                                </div>
                                <div class="border-box" data-id='11'>
                                </div>
                            </div>
                            <div class="luckItem commen11  grade3">
                                <div class="giftImg" style="background-image: url(http://fmn.rrimg.com/fmn077/20160803/1450/original_BnjU_a78e0000aba51e7f.png)">
                                    <div class="giftCount">
                                        x1
                                    </div>
                                </div>
                                <div class="giftName">
                                    小飞碟
                                </div>
                                <div class="border-box" data-id='12'>
                                </div>
                            </div>
                        </div>
                        <div class="luckDraw-box-senior">
                            <div class="startBtn-box">
                                <div class="btn-box">
                                    <div class="cost">
                                        消耗<span>1298</span>张奖券
                                    </div>
                                </div>
                                <div class="surplus">
                                    剩余<span>${data.restRecharge}</span>张奖券
                                </div>
                            </div>
                            <div class="luckItem first grade1">
                                <div class="giftImg" style="background-image: url(http://fmn.rrimg.com/fmn072/attachment/20170623/1525/a_gXOv_0d6f0000f6851e83.png);">
                                    <div class="giftCount">
                                        x1
                                    </div>
                                </div>
                                <div class="giftName">
                                    星云
                                </div>
                                <div class="border-box" data-id='1'>
                                </div>
                            </div>
                            <div class="luckItem commen1 grade3">
                                <div class="giftImg" style="background-image: url(http://fmn.rrimg.com/fmn072/20170315/1135/original_ZsCG_ab8d000b5d451e7f.png);">
                                    <div class="giftCount">
                                        x6
                                    </div>
                                </div>
                                <div class="giftName">
                                    真爱之吻
                                </div>
                                <div class="border-box" data-id='2'>
                                </div>
                            </div>
                            <div class="luckItem commen2  grade3">
                                <div class="giftImg" style="background-image: url(http://fmn.rrimg.com/fmn070/20161024/0005/original_OuK4_10a8000942c61e84.png)">
                                    <div class="giftCount">
                                        x12
                                    </div>
                                </div>
                                <div class="giftName">
                                    抱抱
                                </div>
                                <div class="border-box" data-id='3'>
                                </div>
                            </div>
                            <div class="luckItem commen3  grade2">
                                <div class="giftImg" style="background-image: url(http://fmn.rrimg.com/fmn070/attachment/20170623/1525/a_VInc_26e20000f6481e84.png)">
                                    <div class="giftCount">
                                        x4
                                    </div>
                                </div>
                                <div class="giftName">
                                    星云碎片
                                </div>
                                <div class="border-box" data-id='4'>
                                </div>
                            </div>
                            <div class="luckItem commen4  grade3">
                                <div class="giftImg" style="background-image: url(http://fmn.rrimg.com/fmn072/20161226/1415/original_FCGU_c5fe00036f391e84.png)">
                                    <div class="giftCount">
                                        x120
                                    </div>
                                </div>
                                <div class="giftName">
                                    玫瑰花
                                </div>
                                <div class="border-box" data-id='5'>
                                </div>
                            </div>
                            <div class="luckItem commen5  grade2">
                                <div class="giftImg" style="background-image: url(http://fmn.rrimg.com/fmn070/attachment/20170623/1525/a_VInc_26e20000f6481e84.png)">
                                    <div class="giftCount">
                                        x40
                                    </div>
                                </div>
                                <div class="giftName">
                                    星云碎片
                                </div>
                                <div class="border-box" data-id='6'>
                                </div>
                            </div>
                            <div class="luckItem commen6  grade2">
                                <div class="giftImg" style="background-image: url(http://fmn.rrimg.com/fmn075/attachment/20170518/1210/a_2wg2_0e1000002d2a1e83.png)">
                                    <div class="giftCount">
                                        x15
                                    </div>
                                </div>
                                <div class="giftName">
                                    告白之翼碎片
                                </div>
                                <div class="border-box" data-id='7'>
                                </div>
                            </div>
                            <div class="luckItem commen7  grade3">
                                <div class="giftImg" style="background-image: url(http://fmn.rrimg.com/fmn078/20161226/1415/original_aFmJ_b870000257891e80.png)">
                                    <div class="giftCount">
                                        x3
                                    </div>
                                </div>
                                <div class="giftName">
                                    晚安星球
                                </div>
                                <div class="border-box" data-id='8'>
                                </div>
                            </div>
                            <div class="luckItem commen8  grade2">
                                <div class="giftImg" style="background-image: url(http://fmn.rrimg.com/fmn070/attachment/20170623/1525/a_VInc_26e20000f6481e84.png)">
                                    <div class="giftCount">
                                        x10
                                    </div>
                                </div>
                                <div class="giftName">
                                    星云碎片
                                </div>
                                <div class="border-box" data-id='9'>
                                </div>
                            </div>
                            <div class="luckItem commen9  grade3">
                                <div class="giftImg" style="background-image: url(http://fmn.rrimg.com/fmn074/20160803/1445/original_jlDC_56440006457e1e83.png)">
                                    <div class="giftCount">
                                        x1
                                    </div>
                                </div>
                                <div class="giftName">
                                    玫瑰星球
                                </div>
                                <div class="border-box" data-id='10'>
                                </div>
                            </div>
                            <div class="luckItem commen10  grade2">
                                <div class="giftImg" style="background-image: url(http://fmn.rrimg.com/fmn070/attachment/20170623/1525/a_VInc_26e20000f6481e84.png)">
                                    <div class="giftCount">
                                        x2
                                    </div>
                                </div>
                                <div class="giftName">
                                    星云碎片
                                </div>
                                <div class="border-box" data-id='11'>
                                </div>
                            </div>
                            <div class="luckItem commen11  grade3">
                                <div class="giftImg" style="background-image: url(http://fmn.rrimg.com/fmn070/20160803/1450/original_qiWr_5692000645b91e83.png)">
                                    <div class="giftCount">
                                        x2
                                    </div>
                                </div>
                                <div class="giftName">
                                    我爱你
                                </div>
                                <div class="border-box" data-id='12'>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rule-box">
                        <div class="top">
                            · 活 动 规 则 ·
                        </div>
                        <ol>
                            <li>活动时间：6月26日-7月2日；</li>
                            <li>活动期间每累计充值1元，同时获得1个抽奖点数； </li>
                            <li>普通抽奖消耗60个抽奖点数，高级抽奖消耗1298个抽奖点数；</li>
                            <li>60块星云碎片可兑换一个完整星云，还有几率直接抽到完整星云礼物。</li>
                        </ol>
                    </div>
                    <div class="fixBottom-box">
                        <div class="w1">
                            我的星云碎片数量
                        </div>
                        <div class="fragmentNum">
                            ${data.restNebulaePiece}
                        </div>
                        <div class="w2">
                            *60块碎片可兑换1个完整星云
                        </div>
                        <div class="exchangeBtn">
                        </div>
                        <div class="rechargeBtn">
                        </div>
                    </div>
                    <div class="popupBox">
                        <div class="makeSureBox">
                            <div class="cancel">
                            </div>
                            <div class="ok">
                            </div>
                        </div>
                        <div class="exchangeSuccess">
                            <div class="successImg">
                                <div class="giftImg">
                                    <div class="giftCount">x1</div>
                                </div>
                            </div>
                            <div class="closeBtn">
                            </div>
                        </div>
                        <div class="lotterySuccess">
                            <div class="successImg">
                                <!-- <div class="luckItem  grade3">
                                <div class="giftImg" style="background-image: url(http://fmn.rrimg.com/fmn075/attachment/20170518/1210/a_2wg2_0e1000002d2a1e83.png)">
                                    <div class="giftCount">
                                        x15
                                    </div>
                                </div>
                                <div class="giftName">
                                    告白之翼碎片
                                </div>
                                 <div class="border-box" data-id='12'>
                                </div>                            
                            </div> -->
                            </div>
                            <div class="closeBtn">
                            </div>
                        </div>
                    </div>
                </div>
                <script>
                var userid = ${data.uid};
                var surplusNum=parseInt(${data.restRecharge});
                var restNebulaePiece = ${data.restNebulaePiece};
                restNebulaePiece = parseInt(restNebulaePiece);
                </script>
                <script src='http://s.xnimg.cn/a90527/wap/mobile/2017activity/nebula/js/index.js'>
                </script>
            </body>

            </html>