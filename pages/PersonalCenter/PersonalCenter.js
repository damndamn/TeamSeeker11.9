var app      = getApp();
var token,iden,identity,code;
var pageData = {
  data: {
    "free_vessel1":{
      "type":"free-vessel",
      "style":"width:750rpx;height:1279.6875rpx;opacity:1;margin-left:auto;animation-name:appear_fade_right;-webkit-animation-name:appear_fade_right;animation-duration:1s;-webkit-animation-duration:1s;animation-delay:0.2s;-webkit-animation-delay:0.2s;animation-iteration-count:1;-webkit-animation-iteration-count:1;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;margin-left:auto;",
"content":[
  {"type":"picture",
  "style":"position:absolute;margin:page10000;width:750rpx;height:1277.34375rpx;opacity:1;margin-left:auto;animation-name:appear_fade_right;-webkit-animation-name:appear_fade_right;animation-duration:1s;-webkit-animation-duration:1s;animation-delay:0.2s;-webkit-animation-delay:0.2s;animation-iteration-count:1;-webkit-animation-iteration-count:1;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;margin-left:auto;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5744127ac4ff7.jpg",//背景图
  "customFeature":{"boxShadow":"('#000','0','0','5')","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},
"animations":[{"name":"appear_fade","direction":"_right",
"duration":"1","delay":"0.2","count":"1"}],
"compId":"data.content[0]",
"parentCompid":"free_vessel1"},

{"type":"picture","style":"position:absolute;margin:page10000;left:46.875071525574rpx;top:112.5rpx;width:154.6875rpx;height:154.6875rpx;opacity:1;margin-left:auto;animation-name:appear_fade_right;-webkit-animation-name:appear_fade_right;animation-duration:1s;-webkit-animation-duration:1s;animation-delay:0.2s;-webkit-animation-delay:0.2s;animation-iteration-count:1;-webkit-animation-iteration-count:1;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;margin-left:auto;","content":"../../images/avatar.jpg",//头像图,修改头像为avatarurl,TODO
"customFeature":{"action":"inner-link","page-link":"page10012","inner-page-link":"page10012"},"animations":[{"name":"appear_fade","direction":"_right","duration":"1","delay":"0.2","count":"1"}],"compId":"data.content[1]","parentCompid":"free_vessel1","itemType":"picture","itemParentType":"free-vessel","itemIndex":1,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10012\\\/page10012\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},

{"type":"text","style":"position:absolute;margin:page10000;left:220rpx;top:393.75rpx;color:rgb(68, 68, 68);font-weight:bold;font-size:35.15625rpx;margin-left:auto;animation-name:appear_fade_right;-webkit-animation-name:appear_fade_right;animation-duration:1s;-webkit-animation-duration:1s;animation-delay:0.2s;-webkit-animation-delay:0.2s;animation-iteration-count:1;-webkit-animation-iteration-count:1;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;margin-left:auto;","content":"已申请",
"customFeature":{"action":"inner-link","page-link":"page10013","inner-page-link":"page10005"},"animations":[{"name":"appear_fade","direction":"_right","duration":"1","delay":"0.2","count":"1"}],"compId":"data.content[2]","parentCompid":"free_vessel1","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":2,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10005\\\/page10005\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},

{"type": "text", "style": "position:absolute;margin:page10000;left:220rpx;top:539.0625rpx;color:rgb(68, 68, 68);font-weight:bold;font-size:35.15625rpx;height:51.5625rpx;margin-left:auto;animation-name:appear_fade_right;-webkit-animation-name:appear_fade_right;animation-duration:1s;-webkit-animation-duration:1s;animation-delay:0.2s;-webkit-animation-delay:0.2s;animation-iteration-count:1;-webkit-animation-iteration-count:1;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;margin-left:auto;", "content":"已发布",
"customFeature":{"action":"inner-link","page-link":"page10015","inner-page-link":"page10003"},"animations":[{"name":"appear_fade","direction":"_right","duration":"1","delay":"0.2","count":"1"}],"compId":"data.content[3]","parentCompid":"free_vessel1","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":3,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10003\\\/page10003\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},

{"type":"text","style":"position:absolute;margin:page10000;left:220rpx;top:672.65625rpx;color:rgb(68, 68, 68);font-weight:bold;font-size:35.15625rpx;height:51.5625rpx;margin-left:auto;animation-name:appear_fade_right;-webkit-animation-name:appear_fade_right;animation-duration:1s;-webkit-animation-duration:1s;animation-delay:0.2s;-webkit-animation-delay:0.2s;animation-iteration-count:1;-webkit-animation-iteration-count:1;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;margin-left:auto;","content":"编辑个人信息",
"customFeature":{"action":"inner-link","page-link":"page10017","inner-page-link":"page10002"},"animations":[{"name":"appear_fade","direction":"_right","duration":"1","delay":"0.2","count":"1"}],"compId":"data.content[4]","parentCompid":"free_vessel1","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":4,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10002\\\/page10002\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},

{"type":"text","style":"position:absolute;margin:page10000;left:220rpx;top:799.21875rpx;color:rgb(68, 68, 68);font-weight:bold;font-size:35.15625rpx;height:51.5625rpx;margin-left:auto;animation-name:appear_fade_right;-webkit-animation-name:appear_fade_right;animation-duration:1s;-webkit-animation-duration:1s;animation-delay:0.2s;-webkit-animation-delay:0.2s;animation-iteration-count:1;-webkit-animation-iteration-count:1;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;margin-left:auto;","content":"联系我们",
"customFeature":{"action":"call","page-link":"page10016","inner-page-link":"bindCellphone","phone-num":"13724122016"},"animations":[{"name":"appear_fade","direction":"_right","duration":"1","delay":"0.2","count":"1"}],"compId":"data.content[5]","parentCompid":"free_vessel1","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":5,"eventParams":"{\"phone_num\":\"13724122016\"}","eventHandler":"tapPhoneCallHandler"},

{"type":"text","style":"position:absolute;margin:page10000;left:225rpx;top:217.96875rpx;font-size:28.125rpx;height:44.53125rpx;width:79.6875rpx;margin-left:auto;animation-name:appear_fade_right;-webkit-animation-name:appear_fade_right;animation-duration:1s;-webkit-animation-duration:1s;animation-delay:0.2s;-webkit-animation-delay:0.2s;animation-iteration-count:1;-webkit-animation-iteration-count:1;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;margin-left:auto;","content":"学生",//修改content为iden，TODO
"customFeature":{"action":"none","page-link":"page10011","inner-page-link":"page10011"},"animations":[{"name":"appear_fade","direction":"_right","duration":"1","delay":"0.2","count":"1"}],"compId":"data.content[6]","parentCompid":"free_vessel1","markColor":"","mode":0},//暂时不用

{"type":"picture","style":"position:absolute;margin:page10000;left:96.09375rpx;top:393.75rpx;width:51.5625rpx;height:51.5625rpx;margin-left:auto;animation-name:appear_fade_right;-webkit-animation-name:appear_fade_right;animation-duration:1.1s;-webkit-animation-duration:1.1s;animation-delay:0.2s;-webkit-animation-delay:0.2s;animation-iteration-count:1;-webkit-animation-iteration-count:1;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;margin-left:auto;","content":"/images/shenqing.png",//已申请图标
"customFeature":{"action":"inner-link","page-link":"page10013","inner-page-link":"page10013"},"animations":[{"name":"appear_fade","direction":"_right","duration":"1.1","delay":"0.2","count":"1"}],"compId":"data.content[7]","parentCompid":"free_vessel1","itemType":"picture","itemParentType":"free-vessel","itemIndex":7,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10013\\\/page10013\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},

{"type":"picture","style":"position:absolute;margin:page10000;left:96.09375rpx;top:536.71875rpx;width:51.5625rpx;height:51.5625rpx;margin-left:auto;animation-name:appear_fade_right;-webkit-animation-name:appear_fade_right;animation-duration:1.1s;-webkit-animation-duration:1.1s;animation-delay:0.2s;-webkit-animation-delay:0.2s;animation-iteration-count:1;-webkit-animation-iteration-count:1;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;margin-left:auto;","content":"/images/fabu.png",//已发布图标
"customFeature":{"action":"inner-link","page-link":"page10015","inner-page-link":"page10015"},"animations":[{"name":"appear_fade","direction":"_right","duration":"1.1","delay":"0.2","count":"1"}],"compId":"data.content[8]","parentCompid":"free_vessel1","itemType":"picture","itemParentType":"free-vessel","itemIndex":8,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10015\\\/page10015\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},

{"type":"picture","style":"position:absolute;margin:page10000;left:96.09375rpx;top:670.3125rpx;width:51.5625rpx;height:51.5625rpx;margin-left:auto;animation-name:appear_fade_right;-webkit-animation-name:appear_fade_right;animation-duration:1.1s;-webkit-animation-duration:1.1s;animation-delay:0.2s;-webkit-animation-delay:0.2s;animation-iteration-count:1;-webkit-animation-iteration-count:1;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;margin-left:auto;","content":"/images/tongzhi.png",//系统通知图标
"customFeature":{"action":"inner-link","page-link":"page10017","inner-page-link":"page10017"},"animations":[{"name":"appear_fade","direction":"_right","duration":"1.1","delay":"0.2","count":"1"}],"compId":"data.content[9]","parentCompid":"free_vessel1","itemType":"picture","itemParentType":"free-vessel","itemIndex":9,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10017\\\/page10017\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},

{"type":"picture","style":"position:absolute;margin:page10000;left:95.859360694885rpx;top:801.5625rpx;width:51.5625rpx;height:51.5625rpx;margin-left:auto;animation-name:appear_fade_right;-webkit-animation-name:appear_fade_right;animation-duration:1.1s;-webkit-animation-duration:1.1s;animation-delay:0.2s;-webkit-animation-delay:0.2s;animation-iteration-count:1;-webkit-animation-iteration-count:1;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;margin-left:auto;","content":"/images/lianxi.png",//联系我们图标
"customFeature":{"action":"inner-link","page-link":"page10016","inner-page-link":"page10016"},"animations":[{"name":"appear_fade","direction":"_right","duration":"1.1","delay":"0.2","count":"1"}],"compId":"data.content[10]","parentCompid":"free_vessel1","itemType":"picture","itemParentType":"free-vessel","itemIndex":10,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10016\\\/page10016\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},

  { "type": "text", "style": "position:absolute;margin:page10000;left:225rpx;top:161.71875rpx;font-size:35.15625rpx;height:56.25rpx;margin-left:auto;margin-top:0;margin-right:0;animation-name:appear_fade_right;-webkit-animation-name:appear_fade_right;animation-duration:1s;-webkit-animation-duration:1s;animation-delay:0.2s;-webkit-animation-delay:0.2s;animation-iteration-count:1;-webkit-animation-iteration-count:1;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;margin-left:auto;", "content":"dili 딜리","customFeature":{"action":"none","page-link":"page10011","inner-page-link":"page10011"},"animations":[{"name":"appear_fade","direction":"_right","duration":"1","delay":"0.2","count":"1"}],"compId":"data.content[11]","parentCompid":"free_vessel1","markColor":"","mode":0}],

"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[{"name":"appear_fade","direction":"_right","duration":"1","delay":"0.2","count":"1"}],"page_form":"","compId":"free_vessel1"},"has_tabbar":1,"page_hidden":true,"page_form":""},
    need_login: false,
    page_router: 'page10001',
    page_form: 'none',
      list_compids_params: [],
      goods_compids_params: [],
  prevPage:0,
      carouselGroupidsParams: [],
      relobj_auto: [],
      bbsCompIds: [],
      dynamicVesselComps: [],
      communityComps: [],
      franchiseeComps: [],
      cityLocationComps: [],
      seckillOnLoadCompidParam: [],
      requesting: false,
  requestNum: 1,
  modelChoose: [],
  modelChooseId: '',
  modelChooseName: [],
  onLoad: function (e) {
     app.onPageLoad(e);
    // console.log('aaa', e);
    // wx.login({//登陆并发起向服务器的请求拿到token
    //   success: function (res) {
    //     code=res.code;
    //     // console.log(code);

    //     if (res.code) {
    //       console.log(code);
    //       //发起网络请求
    //       wx.request({
    //         url: 'http://119.29.253.254:8000/api/wxlogin',
    //         data: { js_code: code},
    //         header: {
    //           "content-type": "application/x-www-form-urlencoded"},
    //         method: 'POST',
    //         success: function (res2) {
    //           // token = res2.data;
    //           console.log(res2);
    //         }
    //       })
    //     } else {
    //       console.log('获取用户登录态失败！' + res.errMsg)
    //     }
    //  }
   
    wx.getUserInfo({//获取头像和昵称

      success: function (res) {
        var avatarUrl = res.userInfo.avatarUrl
        
        var nickName = res.userInfo.nickName
      }
    })
    wx.request({//发送token查找用户id是否存在，不存在则提醒用户登陆并完善信息，存在则渲染用户身份
      url: 'http://119.29.253.254:8000/api/auth',
      data: {
        open_id: token
      },
      method: 'POST',
      header:{
        "content-type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        iden = res.data.identity
        //其他数据复制,TODO
      }
    })
    if (iden == 0) {
      identity = "学生"
    }
    else if (iden == 1) {
      identity = "教师"
    }
    else {
      identity = "请完善个人信息"
    }
  },
  onLaunch: function () {
    
  },
  dataInitial: function () {
    app.pageDataInitial();
  },
  onShareAppMessage: function (e) {
    return app.onPageShareAppMessage(e);
  },
  onShow: function () {
    app.onPageShow();
  },
  onReachBottom: function () {
    app.onPageReachBottom();
  },
  onUnload: function () {
    app.onPageUnload();
  },
  tapPrevewPictureHandler: function (e) {
    app.tapPrevewPictureHandler(e);
  },
  suspensionBottom: function () {
    app.suspensionBottom();
  },
  pageScrollFunc: function (e) {
    app.pageScrollFunc(e);
  },
  dynamicVesselScrollFunc: function (e) {
    app.dynamicVesselScrollFunc(e);
  },
  goodsScrollFunc: function (e) {
    app.goodsScrollFunc(e);
  },
  franchiseeScrollFunc: function (e) {
    app.franchiseeScrollFunc(e);
  },
  seckillScrollFunc: function (e) {
    app.seckillScrollFunc(e);
  },
  changeCount: function (e) {
    app.changeCount(e);
  },
  inputChange: function (e) {
    app.inputChange(e);
  },
  bindDateChange: function (e) {
    app.bindDateChange(e);
  },
  bindTimeChange: function (e) {
    app.bindTimeChange(e);
  },
  bindSelectChange: function (e) {
    app.bindSelectChange(e);
  },
  bindScoreChange: function (e) {
    app.bindScoreChange(e);
  },
  submitForm: function (e) {
    app.submitForm(e);
  },
  udpateVideoSrc: function (e) {
    app.udpateVideoSrc(e);
  },
  tapMapDetail: function (e) {
    app.tapMapDetail(e);
  },
  uploadFormImg: function (e) {
    app.uploadFormImg(e);
  },
  deleteUploadImg: function (e) {
    app.deleteUploadImg(e);
  },
  listVesselTurnToPage: function (e) {
    app.listVesselTurnToPage(e);
  },
  dynamicVesselTurnToPage: function (e) {
    app.dynamicVesselTurnToPage(e);
  },
  userCenterTurnToPage: function (e) {
    app.userCenterTurnToPage(e);
  },
  turnToGoodsDetail: function (e) {
    app.turnToGoodsDetail(e);
  },
  turnToFranchiseeDetail: function (e) {
    app.turnToFranchiseeDetail(e);
  },
  turnToSeckillDetail: function (e) {
    app.turnToSeckillDetail(e);
  },
  sortListFunc: function (e) {
    app.sortListFunc(e);
  },
  bbsInputComment: function (e) {
    app.bbsInputComment(e);
  },
  bbsInputReply: function (e) {
    app.bbsInputReply(e);
  },
  uploadBbsCommentImage: function (e) {
    app.uploadBbsCommentImage(e);
  },
  uploadBbsReplyImage: function (e) {
    app.uploadBbsReplyImage(e);
  },
  deleteCommentImage: function (e) {
    app.deleteCommentImage(e);
  },
  deleteReplyImage: function (e) {
    app.deleteReplyImage(e);
  },
  bbsPublishComment: function (e) {
    app.bbsPublishComment(e);
  },
  clickBbsReplyBtn: function (e) {
    app.clickBbsReplyBtn(e);
  },
  bbsPublishReply: function (e) {
    app.bbsPublishReply(e);
  },
  searchList: function (e) {
    app.searchList(e);
  },
  selectLocal: function (e) {
    app.selectLocal(e);
  },
  cancelCity: function (e) {
    app.cancelCity(e);
  },
  bindCityChange: function (e) {
    app.bindCityChange(e);
  },
  submitCity: function (e) {
    app.submitCity(e);
  },
  openTakeoutLocation: function (e) {
    app.openTakeoutLocation(e);
  },
  callTakeout: function (e) {
    app.callTakeout(e);
  },
  getMoreAssess: function (e) {
    app.getMoreAssess(e);
  },
  changeEvaluate: function (e) {
    app.changeEvaluate(e)
  },
  deleteAllCarts: function (e) {
    app.deleteAllCarts(e);
  },
  clickWaimaiCategory: function (e) {
    app.clickWaimaiCategory(e);
  },
  takeoutGoodsListMinus: function (e) {
    app.takeoutGoodsListMinus(e);
  },
  takeoutGoodsListPlus: function (e) {
    app.takeoutGoodsListPlus(e);
  },
  takeoutCartListMinus: function (e) {
    app.takeoutCartListMinus(e);
  },
  takeoutCartListPlus: function (e) {
    app.takeoutCartListPlus(e);
  },
  changeAssessType: function (e) {
    app.changeAssessType(e);
  },
  showShoppingCartPop: function (e) {
    app.showShoppingCartPop(e);
  },
  hideTakeoutShoppingCart: function (e) {
    app.hideTakeoutShoppingCart(e);
  },
  showTakeoutDetail: function (e) {
    app.showTakeoutDetail(e);
  },
  hideTakeoutDetailPop: function (e) {
    app.hideTakeoutDetailPop(e);
  },
  hideTakeoutModelPop: function (e) {
    app.hideTakeoutModelPop(e);
  },
  chooseTakeoutModel: function (e) {
    app.chooseTakeoutModel(e);
  },
  sureChooseModel: function (e) {
    app.sureChooseModel(e);
  },
  clickWaimaiChooseComplete: function (e) {
    app.clickWaimaiChooseComplete(e);
  },
  tapGoodsTradeHandler: function (e) {
    app.tapGoodsTradeHandler(e);
  },
  tapInnerLinkHandler: function (e) {
    app.tapInnerLinkHandler(e);
  },
  tapPhoneCallHandler: function (e) {
    app.tapPhoneCallHandler(e);
  },
  tapRefreshListHandler: function (e) {
    app.tapRefreshListHandler(e);
  },
  tapGetCouponHandler: function (e) {
    app.tapGetCouponHandler(e);
  },
  tapCommunityHandler: function (e) {
    app.tapCommunityHandler(e);
  },
  turnToCommunityPage: function (e) {
    app.turnToCommunityPage(e);
  },
  tapToFranchiseeHandler: function (e) {
    app.tapToFranchiseeHandler(e);
  },
  tapToTransferPageHandler: function () {
    app.tapToTransferPageHandler();
  },
  tapToSeckillHandler: function (e) {
    app.tapToSeckillHandler(e);
  },
  tapToCouponReceiveListHandler: function () {
    app.tapToCouponReceiveListHandler();
  },
  tapToRechargeHandler: function () {
    app.tapToRechargeHandler();
  },
  tapToXcx: function (e) {
    app.tapToXcx(e);
  },
  tapFranchiseeLocation: function (e) {
    app.tapFranchiseeLocation(e);
  },
  showAddShoppingcart: function (e) {
    app.showAddShoppingcart(e);
  },
  hideAddShoppingcart: function () {
    app.hideAddShoppingcart();
  },
  selectGoodsSubModel: function (e) {
    app.selectGoodsSubModel(e);
  },
  resetSelectCountPrice: function () {
    app.resetSelectCountPrice();
  },
  // 电商
  clickGoodsMinusButton: function (e) {
    app.clickGoodsMinusButton();
  },
  clickGoodsPlusButton: function (e) {
    app.clickGoodsPlusButton();
  },
  sureAddToShoppingCart: function () {
    app.sureAddToShoppingCart();
  },
  sureAddToBuyNow: function () {
    app.sureAddToBuyNow();
  },
  clickTostoreMinusButton: function (e) {
    app.clickTostoreMinusButton(e);
  },
  clickTostorePlusButton: function (e) {
    app.clickTostorePlusButton(e);
  },
  readyToPay: function () {
    app.readyToTostorePay();
  },
  getValidateTostore: function () {
    app.getValidateTostore();
  },
  goToShoppingCart: function () {
    app.goToShoppingCart();
  },
  getCartList: function () {
    app.getTostoreCartList();
  },
  stopPropagation: function () {
  },
  turnToSearchPage:function (e) {
    app.turnToSearchPage(e);
  },
  previewImage: function (e) {
    var dataset = e.currentTarget.dataset;
    app.previewImage({
      current : dataset.src,
      urls: dataset.previewImgarr,
    });
  },
  scrollPageTop: function () {
    app.pageScrollTo(0);
  },
  suspensionTurnToPage: function (e) {
    app.suspensionTurnToPage(e);
  },
  tapToLuckyWheel: function (e) {
    app.tapToLuckyWheel(e);
  },
  keywordList:{},
  bindSearchTextChange: function (e) {
    this.keywordList[e.currentTarget.dataset.compid] = e.detail.value;
  },
};
Page(pageData);
