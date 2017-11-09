//head.js
//获取用户身份信息
const app = getApp()
var iden = {}
Page({
  data: {
    motto: '选择身份进入TeamSeeker',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  bindViewTap_stu: function (e) {
    app.globalData.identity = 0;
    wx.switchTab({
      url: '../index/index',
    })
  },
  bindViewTap_tea: function (e) {
    app.globalData.identity=1;
    //console.log(app.globalData.identity);
    wx.switchTab({
      url: '../index/index',
    })
  },
  onLoad: function () {
    wx.login({
      success:function(res){
       
        //TODO
        wx.request({
          url: 'http://119.29.253.254:8000/api/wxlogin',
          method:'PUT',
          header:{
            "content-type": "application/x-www-form-urlencoded"
          },
          data:{
            js_code: res.code
          },
         
          success:function(res2){
            wx.request({
              url:'http://119.29.253.254:8000/api/auth',
              method:'GET',
              header:{ "content-type": "application/x-www-form-urlencoded"},
              data:{},
              success:function(res){
                if(res.data.identity!=null){
                  app.globalData.identity=res.data.identity;
                  wx.switchTab({
                    url:'../index/index'
                  })
                }
              }
            })
          }
        })
      }
    })
    
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
