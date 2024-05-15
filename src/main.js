import Vue from 'vue';
import App from './App.vue';
import { Icon, Button, Dialog, Form, FormItem, Input, Upload, Empty, Message, MessageBox, Tooltip } from 'element-ui'
// import swiper from 'fs-extra'
//引入路由相关文件
import router from "./router"
//引入仓库进行注册
import store from "./store";
// 引入全局组件
import Header from '@/components/Header';
import Footer from '@/components/Footer';
//全局组件：第一个参数 组件名字  第二个参数：那个组件
Vue.component(Header.name, Header);
Vue.component(Footer.name, Footer);
Vue.component(Icon.name, Icon); // 引入element-ui的图标
Vue.component(Button.name, Button); // 引入element-ui的按钮
Vue.component(Dialog.name, Dialog); // 引入element-ui的弹窗
Vue.component(Form.name, Form); // 引入element-ui的表单
Vue.component(FormItem.name, FormItem); // 引入element-ui的表单
Vue.component(Input.name, Input); // 引入element-ui的输入框
Vue.component(Upload.name, Upload); // 引入element-ui的上传
Vue.component(Empty.name, Empty); // 引入element-ui的空白
Vue.component(Tooltip.name, Tooltip); // 引入element-ui的提示
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('.main')
