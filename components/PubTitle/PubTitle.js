// components/PubTitle/PubTitle.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    myTitle:{
      type:String,
      value:"暂无内容"
      //value没设置时的默认值
    },
    myUrl:{
      type:String,
      value:""
    }
  },
  options:{
    addGlobalClass:true
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

  }
})
