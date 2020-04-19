import Vue from "vue";//es6语法
import VueI18n from 'vue-i18n';
import ZH from './common/lang/zh.js';
import EN from './common/lang/en.js';
import obj,{title2,title} from "./test.js";
import login from "./login.vue";//导入login组件 .vue后缀不能少


/*
    默认webpack无法打包.vue文件,需要安装相关的loader;
    npm i vue-loader vue-template-compiler -D
    在配置文件中,新增loader配置项 {test:/\.vue$/,use:"vue-loader"}
 */


/*
    在webpack中尝试使用Vue:
    注意:在webpack中,使用import Vue from "vue"导入的Vue构造函数,功能不完整,只提供了
    runtime-only的方式,并没有提供像网页中那样的使用方式;

    回顾包的查找规则:
    1.找项目根目录中有没有node_modules的文件夹
    2.在node_modules中根据包名找对应的vue文件夹
    3.在vue文件夹中,找一个叫做package.json的包配置文件
    4.在package.json文件中,查找一个main属性[main属性指定了这个包在被加载的时候的入口文件]
 */

console.log(obj);
console.log(title+"---"+title2);
Vue.use(VueI18n); // 通过插件的形式挂载

const i18n = new VueI18n({
    locale: 'zh',    // 语言标识
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
        'zh': ZH,   // 中文语言包
        'en': EN    // 英文语言包
    }
});

new Vue({
    el:"#app",
    i18n:i18n,
    /*
        如果想通过vue,把一个组件放到页面中去展示,vm实例中的render函数可以实现
        render:function (c) {
            return c(login);
        }
    */
    render:c=>c(login)
    /* components: {login},
     template:'<login></login>'*/
});

/*
    总结梳理:webpack中如何使用vue
    1.安装vue的包: npm i vue -S
    2.由于在webpack中推荐使用.vue这个组件模板文件定义组件,所以需要安装能解析这种文件的loader:npm i vue-loader vue-template-compiler -D
    3.在main.js中,导入vue模块 import Vue from "vue"
    4.定义一个.vue结尾的组件,其中组件有三部分组成:template script style
    5.使用import login from "./login.vue"导入组件
    6.创建vm的实例 var vm = new Vue({el:"#app",render:c=>c(login)});
    7.在页面中创建一个id为app的div元素,作为我们vm实例要控制的区域
 */




