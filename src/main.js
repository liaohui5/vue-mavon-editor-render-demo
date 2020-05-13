import Vue from "vue";
import App from "./App.vue";

// 引入组件Docs: https://github.com/hinesboy/mavonEditor
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";

Vue.use(mavonEditor);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
