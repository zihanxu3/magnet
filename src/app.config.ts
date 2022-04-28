export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/join/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#000000',
    selectedColor: '#ffcdd1',
    backgroundColor: '#ebecf0',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '发起',
        iconPath: './assets/start.png',
        selectedIconPath: './assets/start.png',
      },
      {
        pagePath: 'pages/join/index',
        text: '加入',
        iconPath: './assets/start.png',
        selectedIconPath: './assets/start.png',
      },
    ], 
    position: 'bottom',
  }
})
