// pages/find/find.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    version:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var mySetInterval_B = setInterval(function () {
      if (app.loginIsSuccess) {
        clearInterval(mySetInterval_B);
        this.setData({
          findGameData: app.globalData.findGameData
        })
      }
    }.bind(this), 200);
    this.setData({
      version: app.globalData.version
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
    return app.wxApi.onShareAppMessage(1, "/pages/index/index", 0, function (res) {
      console.log(res)
    });
  }
})