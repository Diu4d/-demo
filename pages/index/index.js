Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      //发送网络请求
      url: 'http://ku.qingnian8.com/school/list.php',
      data:{
        num:5,
        page:3
      },
      success:res=>{
        res.data.forEach(item=> {
          var time = item.posttime*1000
          var d = new Date(time); 
          var year = d.getFullYear();
          var month = (d.getMonth()+1) < 10 ? '0'+(d.getMonth()+1):(d.getMonth()+1);
          var day = d.getDate();
          item.posttime = `${year}年${month}月${day}日`
        })
        this.setData({
          dataList:res.data
        })
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