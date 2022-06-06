// 配置
window.Config = {

  // 站点名
  SiteName: 'PhiCommunityの服务状态',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两种 Api Key
  ApiKeys: [
    'm791467577-3073005bd6873c408735f51c', //GH
    'm791749589-620f6b7b66cfd1405e877fcf', //GHC
    'm791749604-4a000a686e1544f0fcde2583', //CF
    'm791749618-e16051e510f188bfaf7b9c6d', //CFC
    'm791749621-fb083fcf90f76be9a07d3bb0', //VC
    'm791749666-1935f47a7b422f475418ee27', //VCC
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: 'Yuameshiの窝',
      url: 'https://www.yuameshi.top'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/Yuameshi/'
    }
  ]
};
