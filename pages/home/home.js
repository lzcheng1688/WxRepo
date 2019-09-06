// pages/home/home.js
Page({
  data:{
    name:"张三",
    age:20,
     student:[
       {id:1,name:"张三",age:18},
       { id: 2, name: "李四", age: 28 },
       { id: 3, name: "王五", age: 38 }
     ],
     count:0,

  },
  handerclick(){
    this.setData({
      count:this.data.count+1
    })
  },
  jian(){
    this.setData({
      count:this.data.count-1
    })
  },
  getUserInfo(event){
    console.log(event);
  },
  /***页面的生命周期函数 */
  onReady() {//生命周期回调—监听页面初次渲染完成

  },
  onLoad() {//生命周期回调—监听页面加载

  },
  onShow() {//生命周期回调—监听页面显示

  },
  onHide() {//生命周期回调—监听页面隐藏

  },
  onUnload() {//生命周期回调—监听页面卸载

  },
   onReachBottom(){//页面上拉触底事件的处理函数
      console.log("到了底部");
  },
  onPullDownRefresh(){
    console.log("下拉事件");
    }
  
})
