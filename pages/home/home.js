// pages/home/home.js
var app = getApp();
Page({
  data: {
    hotList: []
  },
  onLoad: function (options) {
    var url = app.globalData.doubanBase + app.globalData.hotMovie;
    wx.showToast({
      title: '正在加载',
      icon:'loading',
      duration: 2000
    })
    wx.request({
      url,
      method: 'GET',
      header: { 'content-type': 'json' },
      success: res => {
        this.hotMovie(res.data.subjects)
      },
      fail: err => console.log(err),
      complete:() => {
        console.log('加载完毕')
        wx.hideToast()
      }
    })
  },
  search:()=>{
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  hotMovie:function(data){
    this.setData({
      hotList: data
    })
  }
})