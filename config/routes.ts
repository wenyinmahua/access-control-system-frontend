export default [
  {
    path: '/user',
    layout: false,
    routes: [{ name: '登录', path: '/user/login', component: './User/Login' }],
  },
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
  { path: '/management/user', name:'用户管理', component: './UserManagement'},
  { path: '/management/access', name: '出入表管理', component: './AccessManagement'},
  { path: '/management/exceptionRecord', name: '异常记录管理', component: './ExceptionRecordManagement'},
  { path: '/analysis', name: '分析结果', component: './LogAnalysis'}


];
