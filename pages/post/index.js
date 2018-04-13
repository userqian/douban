var dataList = require('../../data/post_data.js');
// import {post_data} from '../../data/post_data.js'
Page({
  data: {
    list: []
  },

  onLoad: function (options) {
    this.setData({
      list: dataList.list
    })
    // this.data.list = dataList.list;
    // console.log(this.data.list);
   },
   postDetail:function(e){
    console.log(e.currentTarget.dataset.postid);
    wx.navigateTo({
      url: '/pages/post-detail/index',
    })
   }
})