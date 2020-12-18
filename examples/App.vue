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
        <!-- <mon-word :value="`你好你好`" :color="`success`" @click="open"></mon-word> -->
        <!-- <mon-img :src="`http://kab.test/public/static/images/logo.png`" :width="`400px`"/> -->
        <!-- <mon-video :src="`https://www.runoob.com/try/demo_source/mov_bbb.mp4`" :width="`800px`" /> -->

        <!-- <mon-checkbox-img :list="imgs" v-model="img.path" /> -->
        <!-- <mon-radio-img :list="imgs" v-model="img.path2" /> -->

        <div>
            <button @click="getData()">Get Data</button>
            <button @click="img.path = ['1','8']">Set Data</button>
        </div>
    </div>
</template>
<script>
import {MonToast as Toast} from 'components';
export default {
    data() {
        return {
            show: false,
            p: 1,
            imgs: [
                {
                    img:
                        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2350660822,4130966655&fm=26&gp=0.jpg",
                    title: "爱德华法兰克福很拉风流口水东方红",
                    value: "1"
                },
                {
                    img:
                        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3638032789,1833523001&fm=26&gp=0.jpg",
                    title: "2.png",
                    value: "2"
                },
                {
                    img:
                        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2477792578,2670915805&fm=11&gp=0.jpg",
                    title: "6.png",
                    value: "8"
                }
            ],
            img: {
                path: [],
                path2: ""
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
        getData() {
            this.$Toast.send('达健身房这是上岛咖啡')
            // Toast.send('达健身房这是上岛咖啡', {type: 'bottom'})
            // console.log(this.img);
            // this.show = !this.show;
        }
    }
};
</script>

<style lang="less">
#app {
    height: 3000px;
    text-align: center;
    color: #2c3e50;
    font-size: 14px;
}

</style>
