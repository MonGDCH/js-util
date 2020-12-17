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

        <!-- <mon-checkbox-img :list="imgs" v-model="img.path" /> -->
        <mon-redio-img :list="imgs" v-model="img.path2" />


        <div>
            <button @click="getData()">Get Data</button>
        </div>
    </div>
</template>
<script>
// import MonCheckboxImg from "ant-components/MonCheckboxImg";
export default {
    // components: { MonCheckboxImg },
    data() {
        return {
            show: true,
            p: 1,
            imgs: [
                {
                    img:
                        "https://www.jq22.com/demo/selectImg201705242355/images/4.png",
                    title: "1.png",
                    value: "1"
                },
                {
                    img:
                        "https://www.jq22.com/demo/selectImg201705242355/images/5.png",
                    title: "2.png",
                    value: "2"
                },
                {
                    img:
                        "https://www.jq22.com/demo/selectImg201705242355/images/6.png",
                    title: "6.png",
                    value: "8"
                }
            ],
            img: {
                path: [],
                path2: ''
            }
        };
    },
    mounted() {
        // console.log(this.$LoadingBar.finish())
        // console.log(this.$LoadingModal.start())
        // this.$toastr.send("12345");
    },
    methods: {
        open() {
            location.href = "http://baidu.com";
        },
        getData(){
            console.log(this.img)
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
