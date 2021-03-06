/**
 * Class FruitMachine
 * @class
 * @classdesc 水果机游戏逻辑部分
 * @author pfan
 * 
 * @example
 *  new FruitMachine(this,{
 *    len: 9, //宫格个数
 *    ret: 9, //抽奖结果对应值1～9   
 *    speed: 100  // 速度值
 *    callback: (idx, award) => {
 *      //结束回调， 参数对应宫格索引，对应奖项    
 *    }
 *  })
 */
const ysApi = require("../../Api/ysApi.js");
 class FruitMachine {

  /**
   * @constructs FruitMachine构造函数
   * @param  {Object} pageContext page路由指针
   * @param  {Object} opts      组件所需参数
   * @param  {Number} opts.len  宫格个数
   * @param  {Number} opts.ret  抽奖结果对应值1～9
   * @param  {Number} opts.speed  速度值
   * @param  {Function} opts.callback  结束回调
   */  
  constructor (pageContext,app, opts) {
    this.page = pageContext
    this.app = app
    this.len = opts.len || 8
    this.ret = opts.ret || 1
    this.speed = opts.speed
    this.isStart = false
    this.endCallBack = opts.callback
    this.page.start = this.start.bind(this)
  }

  start () {
    ysApi.getLotteryResult().then((res)=>{
      let retRandom = Math.ceil(Math.random() * 8);
      this.ret = res.prizeIndex;
      console.log("ret", this.ret);
      console.log(res)
      this.app.globalData.userInfo.gold = res.gold;
      let { idx, ret, len, speed, isStart } = this;
      if (isStart) return;
      this.isStart = true;
      let range = Math.floor(Math.random() * 2 + 2);
      let count = 0;
      let spd2 = speed * 2;
      let spd3 = speed * 3;
      !(function interval(self) {
        setTimeout(() => {
          count++
          if (count > range * len - 5 && count < range * len) {
            speed = spd2;
          } else if (count > range * len) {
            speed = spd3;
          }
          if (count != (range + 1) * len + ret) {
            interval(self)
          } else {
            self.isStart = false
            self.endCallBack && self.endCallBack(self.ret)
          }

          self.page.setData({
            idx: count % 8 == 0 ? 8 : count % 8
          })

        }, speed)
      })(this);
    }).catch((errMsg)=>{
      wx.showModal({
        title: '提示',
        content: errMsg,
      })
    })
  }

  reset () {
    this.page.setData({
      idx: ''
    })   
  }

}

export default FruitMachine