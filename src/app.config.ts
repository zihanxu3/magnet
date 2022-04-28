export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/join/index',
    'pages/start/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#bebebe',
    selectedColor: '#6f6f6f',
    backgroundColor: '#ffffff',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '主页',
        iconPath: './assets/home.png',
        selectedIconPath: './assets/home_filled.png',
      },
      {
        pagePath: 'pages/join/index',
        text: '偏好',
        iconPath: './assets/join.png',
        selectedIconPath: './assets/join_filled.png',
      },
    ], 
    position: 'bottom',
  }
})
