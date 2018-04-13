// pages/movie/movie.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
  bindSearch: function(e){
    this.searchValue(e.detail.value);
  },
  searchValue: function(data){
    var _this = this;
    // var url = 'https://www.easy-mock.com/mock/5ab22e9a4c67ac465aa60379/ofo/getmove';
    var url = app.globalData.doubanBase + app.globalData.searchURL + data + '&&start=0&&count=10';
    wx.request({
      url: url,
      method:'GET',
      header: {'content-type': 'json'},
      success: function (res) {
        _this.movieMsg(res.data.subjects);
      },
      fail: function(err){
        console.log(err);
      }
    })
  },
  movieMsg(data){
    let movieList = [];
    data.forEach((item)=>{
      let name = item.directors.map((i) => i.name).join(' / ')
      let movieInfo = item.rating.average + '分 / ' + item.year + ' / ' + name;
      movieList.push(
        {
          id: item.id,
          title: item.title,
          image: item.images.small,
          movieInfo
        }
      )
    })
    this.setData({
      movieList
    })
  }
})