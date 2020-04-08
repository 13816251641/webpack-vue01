/*
    module.exports={}是nodejs中向外暴露成员的形式:
    在es6中也通过规范的形式规定了es6中如何导入和导出模块
    es6中导入模块,使用 import 模块名称 from '模块标识符' import '表示路径'
    在es6中使用export default和export向外暴露成员

    在nodejs中使用var 名称 = require("模块标识符)
    module.exports和exports来暴露成员

 */

/*
    注意:export default向外暴露的成员可以使用任意的变量来接收,在一个模块中export default只允许向外暴露一次

 */
export default {
    name:"zs",
    age:20
}

/*
    注意:使用export向外暴露的成员只能使用{}的形式来接收,这种形式叫做按需导出
    export可以向外暴露多个成员,同时如果某些成员我们在import的时候不需要,则可以不在
    {}中定义
    使用export导出的成员,如果就像换个名称来接收可以使用as来起别名
 */
export var title="title";
export var title2="title2";