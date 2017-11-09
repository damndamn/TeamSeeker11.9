var that = this;
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
    array: ['大学生创新创业', 'ACM程序设计大赛', '挑战杯', '互联网+', '金融管理', '生物医学', '计算机科学', '电子竞技'],
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
  inputidentity: function (e) {
    // console.log(e);
    this.setData({
      identity: e.detail.value
    })
    //console.log(this.data.identity);
  },
  inputname: function (e) {

    this.setData({
      name: e.detail.value


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
  formSubmit: function (e) {
    if (e.detail.value.identity == "比赛") {
      this.setData({ comp_name: e.detail.value.name })
    }
    else {
      this.setData({ theme: e.detail.value.theme })
    }
    this.setData({
      identity: e.detail.value.identity,
      introduction: e.detail.value.introduction,
      num: e.detail.value.num
    })
    console.log(this.data);
    wx.request({
      url: 'http://119.29.253.254:8000/api/create',
      data: {
        //token:this.golbalData.token,
        identity: this.data.identity,
        num: this.data.num,
        status: "processing",
        ddl: this.data.ddl,
        requires: this.data.requires,
        theme: this.data.theme,
        introduction: this.data.introduction,
        comp_num: this.data.comp_name
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
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