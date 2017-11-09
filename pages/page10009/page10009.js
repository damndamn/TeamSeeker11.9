var app=getApp();
var that = this;
var id;
Page({

  /**
   * 页面的初始数据
   */
  data: {

    focus: false,
    identity: 0,
    num: 0,
    status: "pending",
    ddl: "",
    requires: "",
    name: "",
    introduction: "",
    lab: "",
    theme: "",
    comp_name: "",
  },
  bindPickerChange: function (e) {

    wx.navigateTo({
      url: '../page10007/page10007?id='+id,
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    id=options.id;
    wx.request({
      url: 'http://119.29.253.254:8000//api/create?id='+id,
      method:'GET',
      data:{},
      header: { 'content-type': 'application/text'},
      success:function(res){

        that.setData({
          identity:res.data.identity,
          num:res.data.num,
          comp_name:res.data.comp_name,
          theme:res.data.theme,
          ddl:res.data.ddl,
          requires:res.data.requires
          //lab:res.data.lab
        })
        if(this.data.identity==0){
          this.data.identity="比赛";
          this.data.name=this.data.comp_name       
         }

        else{
          this.data.identity="项目"
          this.data.name=this.data.theme
        }
      }
    })
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