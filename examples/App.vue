<template>
    <div id="app">
        <!-- <mon-carousel :imgs="[{img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3224110779,1779790953&fm=26&gp=0.jpg'},{img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3224110779,1779790953&fm=26&gp=0.jpg'}]"/> -->
        <!-- <mon-date-picker/> -->
        <!-- <mon-dialog v-model="show" :msg="`hello world!`"/> -->
        <!-- <mon-music :music="`https://www.runoob.com/try/demo_source/horse.ogg`"/> -->
        <!-- <mon-page-list/> -->
        <!-- <mon-paging v-model="p" :count="12" :pageSize="4" /> -->
        <!-- <mon-signature /> -->
        <!-- <mon-back-top/> -->
        <!-- <mon-word :value="`test`" :color="`success`" @click="open"></mon-word> -->
        <!-- <mon-img :src="`http://kab.test/public/static/images/logo.png`" :width="`400px`"/> -->
        <!-- <mon-video :src="`https://www.runoob.com/try/demo_source/mov_bbb.mp4`" :width="`800px`" /> -->

        <MonDatePicker/>
    </div>
</template>
<script>
import MonDatePicker from 'ant-components/MonDatePicker'
export default {
    components: {MonDatePicker},
    data() {
        return {
            show: true,
            p: 1
        };
    },
    mounted() {
        // console.log(this.$LoadingBar.finish())
        // console.log(this.$LoadingModal.start())
        // this.$toastr.send("12345");
    },
    methods: {
        open() {
            location.href = 'http://baidu.com'
        }
    }
};
</script>

<style lang="less">
#app {
    height: 3000px;
    text-align: center;
    color: #2c3e50;
}
</style>
