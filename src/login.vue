<template>
    <h3 @click="show">login组件,使用.vue文件定义出来,{{msg}}--i18n:{{$t('nav.home')}}</h3>
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
                console.log(this.$i18n);
                console.log(this);
                console.log("调用了login.vue中的show方法");
            }
        }
    }


</script>