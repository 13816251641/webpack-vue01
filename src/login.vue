<template>
    <h3>login组件,使用.vue文件定义出来,{{msg}}</h3>
</template>

<script>

    export default {
        data(){
            /*
                注意:组件中的data必须是function
             */
            return {
                msg:"lala"
            }
        },
        methods:{
            show(){
                console.log("调用了login.vue中的show方法");
            }
        }
    }


</script>