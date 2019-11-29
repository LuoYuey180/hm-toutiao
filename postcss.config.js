//  后处理配置文件
module.exports = {
  plugins: {
    //    自动加私有前缀，配置如下：browsers
    'autoprefixer': {

    },
    //  自动px单位换算rem单位
    'postcss-pxtorem': {
      //  rem换算的基准值：37.5
      //  主流标准设备 iphone6
      //  iphone4、4s、5、5s：320px
      //  iphone6、7、8、X、11：375px
      //  iPhone6 Plus：414px
      rootValue: 37.5,
      //    所有属性px单位都需要换rem
      propList: ['*']
    }
  }
}
