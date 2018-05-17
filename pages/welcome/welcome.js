// pages/welcome/welcome.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    
    onTap:function(){
      // 父级跳子级（最多5级）,hide
      // wx.navigateTo({
      //   url: '../posts/posts',
      // });

      // 平级跳,unload
      wx.redirectTo({
        url: '../posts/posts',
        success(){
          console.log('success');
        }
      })
    },

  onUnload:function(){
    console.log('unload');
  },

  onHide(){
    console.log('hide');
  }

  }
})
