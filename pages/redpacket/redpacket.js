// pages/redpacket/redpacket.js
import redpacketUI from '../../template/redpacketUI/redpacketUI.js';
const ysApi = require("../../Api/ysApi.js");
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    redArr:[

    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    new redpacketUI(this,app);
    app.setPageData(this);
  },
  getGoldTap: function () {
    wx.navigateTo({
      url: '/pages/mission/mission',
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
    return app.wxApi.onShareAppMessage(0, "/pages/index/index", 0, function (res) {
      console.log(res)
    });
  }
})