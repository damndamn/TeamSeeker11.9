var app      = getApp();
/*
var pageData = {
  data: {
    
    "list1": { "type": "list", "style": "background-color:rgb(220, 220, 220);color:rgb(34, 34, 34);font-size:37.5rpx;opacity:1;text-align:left;margin-left:auto;", "content": [{ "customFeature": { "action": "inner-link", "page-link": "prePage" }, "title": "TeamSeeker", "secTitle": "TeamSeeker校园信息交互平台", "pic":"https://okdkbnczs.qnssl.com/image/wx/comp2.jpeg","content":"","listStyle":"margin-bottom:2.34375rpx;background-color:rgb(255, 255,255);height:140.625rpx;margin-left:auto;","imgStyle":"width:140.625rpx;height:140.625rpx;margin-left:auto;","secTitleStyle":"color:rgb(102, 102, 102);font-size:28.125rpx;text-align:left;margin-left:auto;","titleWidth":"width:585.9375rpx;margin-left:auto;","eventParams":"{\"inner_page_link\":\"\\\/pages\\\/prePage\\\/prePage\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler","parentCompid":"list1","style":"","itemType":null,"itemParentType":"list","itemIndex":0}],"customFeature":{"imgHeight":30,"imgWidth":"30","lineBackgroundColor":"rgb(232, 232, 232)","lineBackgroundImage":"","lineHeight":60,"margin":1,"mode":0,"secColor":"rgb(102, 102, 102)","secFontSize":"12px","secFontStyle":"","secFontWeight":"","secTextAlign":"left","secTextDecoration":""},"animations":[],"page_form":"","compId":"list1","itemType":"list","itemParentType":null,"itemIndex":"list1"},"has_tabbar":0,"page_hidden":true,"page_form":"",
    "list2": { "type": "list", "style": "background-color:rgb(220, 220, 220);color:rgb(34, 34, 34);font-size:37.5rpx;opacity:1;text-align:left;margin-left:auto;", "content": [{ "customFeature": { "action": "inner-link", "page-link": "prePage" }, "title": "TeamSeeker2.0", "secTitle": "TeamSeeker校园信息交互平台2.0", "pic": "https://okdkbnczs.qnssl.com/image/wx/proj1.jpeg", "content": "", "listStyle": "margin-bottom:2.34375rpx;background-color:rgb(255,255, 255);height:140.625rpx;margin-left:auto;", "imgStyle": "width:140.625rpx;height:140.625rpx;margin-left:auto;", "secTitleStyle": "color:rgb(102, 102, 102);font-size:28.125rpx;text-align:left;margin-left:15rpx;", "titleWidth": "width:585.9375rpx;margin-left:auto;", "eventParams": "{\"inner_page_link\":\"\\\/pages\\\/prePage\\\/prePage\",\"is_redirect\":0}", "eventHandler": "tapInnerLinkHandler", "parentCompid": "list1", "style": "", "itemType": null, "itemParentType": "list", "itemIndex": 0 }], "customFeature": { "imgHeight": 40, "imgWidth": "40", "lineBackgroundColor": "rgb(232, 232, 232)", "lineBackgroundImage": "", "lineHeight": 60, "margin": 1, "mode": 0, "secColor": "rgb(102, 102, 102)", "secFontSize": "12px", "secFontStyle": "", "secFontWeight": "", "secTextAlign": "left", "secTextDecoration": "" }, "animations": [], "page_form": "", "compId": "list1", "itemType": "list", "itemParentType": null, "itemIndex": "list1" }, "has_tabbar": 0, "page_hidden": true, "page_form": ""
   
    lit:list
    },
    need_login: false,
    page_router: 'page10003',
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
*/

var list = [], listadd, dat, that, id, url1, url,publisher_id;
Page({
  tapTheview: function (event) {
    console.log(event.currentTarget.dataset.hi);
    wx.navigateTo({
      url: '',//项目详情页+event.currentTarget.dataset.hi
    })
  },
  onLoad: function (options) {
    that = this;
    id = options.id;
    //publisher_id= that.globaldata.xxx       给publisher_id赋值    
    url = 'http://119.29.253.254:8000/api/published?publisher_id='+ publisher_id;
    queryRequest(url);
    //list可能在onLoad后才返回值。
    function queryRequest(url) {
      wx.request({
        url: url,
        data: {},
        method: 'GET',
        header: {
          'content-type': 'application/text'
        },
        success: function (res) {
          
          dat = res.data;
          list = res.data;
          for (var i = 0; i < dat.length; ++i) {
            list[i].id = res.data[i].id;
            list[i].type = res.data[i].type;
            list[i].ddl = res.data[i].ddl;
            list[i].num = res.data[i].num;
            list[i].requires=res.data[i].requires;
            list[i].cred_at = res.data[i].cred_at;
            list[i].status = res.data[i].status;
            list[i].last_modified = res.data[i].last_modified;
            list[i].theme = res.data[i].theme;
            list[i].tea_id=res.data[i].tea_id;
            list[i].introduction=res.data[i].introduction;
            list[i].imgsrc = ((res.data[i].type == 0) ? "https://okdkbnczs.qnssl.com/image/wx/comp2.jpeg" : "https://okdkbnczs.qnssl.com/image/wx/proj1.jpeg");
          }
          that.setData({ lit: list })

        }
      })
    }
  },

  data: {
    lit: [],
  }
})