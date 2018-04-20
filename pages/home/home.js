// pages/home/home.js
var app = getApp();
Page({
  data: {
    hotList: [],
    comingList:[]
  },
  onLoad: function (options) {
    var hotUrl = app.globalData.doubanBase + app.globalData.hotMovie + '?start=0&&count=10';
    var comingUrl = app.globalData.doubanBase + app.globalData.comingMovie + '?start=0&&count=10';
    this.getMovieDataList(hotUrl, 'hotList');
    this.getMovieDataList(comingUrl, 'comingList');
  },
  search:()=>{
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  getMovieDataList: function(url, type) {
    wx.showToast({
      title: '正在加载',
      icon: 'loading',
      duration: 20000
    })
    wx.request({
      url,
      method: 'GET',
      header: { 'content-type': 'json' },
      success: res => {
        this.setData({[type]: res.data.subjects})
      },
      fail: err => console.log(err),
      complete() {
        wx.hideToast()
      }
    })
  },
  more:function(e){
    var id = e.target.id;
    wx.navigateTo({
      url: '/pages/more-movie/index?dataID=' + id,
    })
  }
})