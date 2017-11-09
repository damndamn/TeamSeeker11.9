var app = getApp();
/*
var pageData = {
  data: {
    "form_vessel1":{"type":"form-vessel","style":"background-color:rgba(0, 0, 0, 0);opacity:1;margin-left:auto;","content":[{"type":"input-ele","style":"margin-top:0;margin-left:auto;width:642.1875rpx;height:82.03125rpx;margin-right:auto;opacity:1;border-radius:23.4375rpx;","content":"","customFeature":{"placeholder":"比赛/项目"},"animations":[],"compId":"data.content[0]","formCompid":"form_vessel1","segment_required":0,"parentCompid":"form_vessel1"}],"customFeature":{"form":""},"animations":[],"page_form":"","compId":"form_vessel1","form":"","field_info":[],"formCompid":"form_vessel1"},

    "form_vessel2":{"type":"form-vessel","style":"background-color:rgba(0, 0, 0, 0);opacity:1;margin-left:auto;","content":[{"type":"input-ele","style":"margin-top:0;margin-left:auto;width:642.1875rpx;height:82.03125rpx;margin-right:auto;opacity:1;border-radius:23.4375rpx;","content":"","customFeature":{"placeholder":"比赛/项目名"},"animations":[],"compId":"data.content[0]","formCompid":"form_vessel2","segment_required":0,"parentCompid":"form_vessel2"}],"customFeature":{"form":""},"animations":[],"page_form":"","compId":"form_vessel2","form":"","field_info":[],"formCompid":"form_vessel2"},
    
    "form_vessel3": { "type": "textarea", "style": "background-color:rgba(0, 0, 0, 0);opacity:1;margin-left:auto;", "content": [{ "type": "textarea-ele", "style":"auto-height;margin-top:0;margin-left:auto;width:642.1875rpx;height:200rpx;margin-right:auto;opacity:1;border-radius:23.4375rpx;","content":"","customFeature":{"placeholder":"项目/比赛的详细信息"},"animations":[],"compId":"data.content[0]","formCompid":"form_vessel3","segment_required":0,"parentCompid":"form_vessel3"}],"customFeature":{"form":""},"animations":[],"page_form":"","compId":"form_vessel3","form":"","field_info":[],"formCompid":"form_vessel3"},
    
    "form_vessel4":{"type":"form-vessel","style":"background-color:rgba(0, 0, 0, 0);opacity:1;margin-left:auto;","content":[{"type":"input-ele","style":"margin-top:0;margin-left:auto;width:642.1875rpx;height:82.03125rpx;margin-right:auto;opacity:1;border-radius:23.4375rpx;","content":"","customFeature":{"placeholder":"参与人数"},"animations":[],"compId":"data.content[0]","formCompid":"form_vessel4","segment_required":0,"parentCompid":"form_vessel4"}],"customFeature":{"form":""},"animations":[],"page_form":"","compId":"form_vessel4","form":"","field_info":[],"formCompid":"form_vessel4"},
    
    "form_vessel5": { "type": "form-vessel", "style": "background-color:rgba(0, 0, 0, 0);opacity:1;margin-left:auto;", "content": [{ "type": "text", "style": "background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:32.8125rpx;height:44.53125rpx;line-height:56.25rpx;margin-left:70.3125rpx;margin-top:0;opacity:1;text-align:left;margin-right:auto;", "content": "组队截止日期", "customFeature": { "boxColor": "#00897b", "boxR": "5", "boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[0]","formCompid":"form_vessel5","parentCompid":"form_vessel5","markColor":"","mode":0},{"type":"time-ele","style":"margin-left:auto;margin-top:4.6875rpx;margn-right:auto;height:82.03125rpx;width:642.1875rpx;line-height:82.03125rpx;margin-right:auto;","content":"","customFeature":{"ifAllDay":true},"animations":[],"compId":"data.content[1]","formCompid":"form_vessel5","segment_required":0,"parentCompid":"form_vessel5"}],"customFeature":{"form":""},"animations":[],"page_form":"","compId":"form_vessel5","form":"","field_info":[],"formCompid":"form_vessel5"},
    
    "form_vessel6":{"type":"form-vessel","style":"background-color:rgba(0, 0, 0, 0);opacity:1;margin-left:auto;","content":[{"type":"select-ele","style":"background-color:rgba(0, 0, 0, 0);margin-top:0;line-height:82.03125rpx;opacity:1;margin-left:auto;margin-right:auto;width:642.1875rpx;color:rgb(0,0,0);font-size:32.8125rpx;","content":{"lists":["大学生创新创业","ACM程序设计大赛","挑战杯","互联网+","金融管理","生物医学","计算机科学","电子竞技"],"title":"标签（最多不超过两项）","formCompid":"form_vessel6"},"customFeature":{"lineBackgroundColor":"rgba(0, 0, 0, 0)","lineBackgroundImage":"","secColor":"rgb(0, 0, 0)","secFontSize":"14px","secLineHeight":"40px","selectAmount":"2","secFontWeight":"","secFontStyle":"","secTextDecoration":""},"animations":[],"compId":"data.content[0]","formCompid":"form_vessel6","segment_required":0,"parentCompid":"form_vessel6","titleStyle":"color:rgb(0, 0, 0);font-size:32.8125rpx;background-color:rgba(0, 0, 0, 0);line-height:93.75rpx;margin-left:auto;"}],"customFeature":{"form":""},"animations":[],"page_form":"","compId":"form_vessel6","form":"","field_info":[],"formCompid":"form_vessel6"},
    
    "bbs7":{"type":"bbs","style":"margin-top:0;background-color:#fff;margin-left:auto;","content":"","customFeature":{"mode":0,"ifBindPage":false,"ifLike":false,"themeColor":"#333"},"animations":[],"page_form":"","compId":"bbs7","parentCompid":"bbs7"},
    
    "text8":{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:32.8125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;","content":" ","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"page_form":"","compId":"text8","parentCompid":"text8","markColor":"","mode":0},
    
    "form_vessel9":{"type":"form-vessel","style":"background-color:rgba(0, 0, 0, 0);opacity:1;margin-left:auto;","content":[{"type":"button","style":"background-color:#34b6fd;border-color:rgb(34, 34, 34);border-radius:9.375rpx;border-style:none;border-width:4.6875rpx;color:rgb(255, 255, 255);font-size:32.8125rpx;height:70.3125rpx;line-height:70.3125rpx;margin-left:auto;margin-right:auto;opacity:1;text-align:center;width:281.25rpx;","content":"查看已申请学生","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5px","boxStyle":false,"boxX":"0","boxY":"0","action":"none","inner-page-link":"page10005"},"animations":[],"compId":"data.content[0]","formCompid":"form_vessel9","parentCompid":"form_vessel9"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:32.8125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;","content":" ","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[1]","formCompid":"form_vessel9","parentCompid":"form_vessel9","markColor":"","mode":0},
    {"type":"form-button","style":"background-color:#707070;border-color:rgb(34, 34, 34);border-style:none;color:rgb(255, 255, 255);font-size:32.8125rpx;height:82.03125rpx;line-height:82.03125rpx;margin-left:auto;margin-right:auto;opacity:1;text-align:center;width:750rpx;","content":"确认发布","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5px","boxStyle":false,"boxX":"0","boxY":"0","segment":"submit-btn"},"animations":[],"compId":"data.content[2]","parentCompid":"form_vessel9"}],"customFeature":{"form":""},"animations":[],"page_form":"","compId":"form_vessel9","form":"","field_info":[],"formCompid":"form_vessel9"},

    "has_tabbar":0,"page_hidden":true,"page_form":""},

    need_login: false,
    page_router: 'page10004',
    page_form: 'none',
      list_compids_params: [],
      goods_compids_params: [],
  prevPage:0,
      carouselGroupidsParams: [],
      relobj_auto: [],
      bbsCompIds: ["bbs7"],
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
var that = this;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    focus:false,
    identity :0,
    num:0,
    status:"pending",
    ddl:"",
    requires:"",
    name:"",
    introduction:"",
    lab:"",
    theme:"",
    comp_name:"",
    array: ['大学生创新创业', 'ACM程序设计大赛', '挑战杯', '互联网+','金融管理','生物医学','计算机科学','电子竞技'],
    objectArray: [{
        id: 0,
        name: '大学生创新创业'
      },
      {
        id: 1,
        name: 'ACM程序设计大赛'
      },
      {
        id: 2,
        name: '挑战杯'
      },
      {
        id: 3,
        name: '互联网+'
      },
      {
        id: 4,
        name: '金融管理'
      },
       {
        id: 5,
        name: '生物医学'
      },
       {
         id: 6,
         name: '计算机科学'
       },
        {
         id: 7,
         name: '电子竞技'
       }
    ],
    index: 0,
    
  },
  bindPickerChange: function (e) {
    
    this.setData({
      lab: this.data.array[e.detail.value]
    })
    //console.log('picker发送选择改变，携带值为', this.data.lab)
  },
  inputidentity:function(e){
   // console.log(e);
    this.setData({
      identity :e.detail.value
    })
    //console.log(this.data.identity);
  },
  inputname: function (e) {
    
      this.setData({
        name:e.detail.value
     
     
      })
    },
    //console.log(this.data.comp_name);
    //console.log(this.data.theme);
 
  inputintroduction: function (e) {
    this.setData({
      introduction: e.detail.value
    })
    //console.log(this.data.introduction);
  },
  inputnum: function (e) {
    this.setData({
      num: e.detail.value
    })
    //console.log(this.data.num);
  },
  bindDateChange: function (e) {
   // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      ddl: e.detail.value
    })
  },
  formSubmit:function(e){
    if(e.detail.value.identity=="比赛"){
      this.setData({comp_name:e.detail.value.name})
    }
    else{
      this.setData({theme:e.detail.value.theme})
    }
    this.setData({
      identity:e.detail.value.identity,
      introduction:e.detail.value.introduction,
      num:e.detail.value.num
    })
    console.log(this.data);
   wx.request({
     url: 'http://119.29.253.254:8000/api/create',
     data:{
      //token:this.golbalData.token,
      identity:this.data.identity,
      num:this.data.num,
      status:"processing",
      ddl:this.data.ddl,
      requires:this.data.requires,
      theme:this.data.theme,
      introduction:this.data.introduction,
      comp_num:this.data.comp_name
     },
     method:'POST',
     header: {
       'content-type': 'application/x-www-form-urlencoded'
     },
      success:function(res){
        console.log(res);
        //TODO，加一个”确认提交“对话框
        wx.navigateTo({
          url: '../index/index',
        })
      }
   })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})