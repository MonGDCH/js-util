<template>
    <div id="app">
        <!-- <mon-carousel :imgs="[{img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3224110779,1779790953&fm=26&gp=0.jpg'},{img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3224110779,1779790953&fm=26&gp=0.jpg'}]"/> -->
        <!-- <mon-date-picker v-model="v" /> -->
        <!-- <mon-dialog
            v-model="show"
            ref="dialog"
            title="你好"
            type="confirm"
            msg="hello world!"
            @ok="test"
            @cancel="show = false"
            :isPassword="true"
        >
            <div>
                <h4>Custom test</h4>
                <div>
                    <button @click="show = false">确定</button>
                </div>
            </div>
        </mon-dialog> -->
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
        <!-- 开关 -->
        <!-- <mon-switch v-model="switchs" /> -->

        <!-- <mon-slider v-model="slider"/> -->

        <!-- <mon-location v-model="location" :type="0" apikey="ed3f3956c5b3d30b46c1045517c2b23f" ref="location" /> -->

        <!-- 地址 -->
        <!-- <mon-address v-model="address" /> -->

        <!-- select -->
        <mon-select :options="options" v-model="vs" @change="test"></mon-select>

        <div style="margin-top: 20px">
            <button @click="getData()">Get Data</button>

            <button @click="setData()">Set Data</button>
        </div>
    </div>
</template>
<script>
import { MonToast as Toast } from "components";
import { MonToastr as Toastr } from "components";
// import { MonSelect } from "components";
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
                    value: "1",
                },
                {
                    img:
                        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3638032789,1833523001&fm=26&gp=0.jpg",
                    title: "2.png",
                    value: "2",
                },
                {
                    img:
                        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2477792578,2670915805&fm=11&gp=0.jpg",
                    title: "6.png",
                    value: "8",
                },
            ],
            img: {
                path: [],
                path2: "",
            },
            address: "",
            switchs: 1,
            slider: [0, 20],
            location: null,
            v: "",
            options: [
                { v: "1", title: "t1-测试的选项哟" },
                { v: "2", title: "t2-测试的选项哟" },
                { v: "3", title: "t3-测试的选项哟" },
                { v: "4", title: "t4-测试的选项哟" },
                { v: "5", title: "t5-测试的选项哟" },
            ],
            vs: [],
        };
    },
    mounted() {
        // this.$LoadingModal.start(2)
        // console.log(this.$LoadingBar.finish())
        // console.log(this.$LoadingModal.start())
        this.$Toast.send("达健身房这是上岛咖啡", {
            onClose: () => {
                this.show = true;
            },
        });
        // Toastr.send('asdf', {
        //     onClose: () => {
        //         alert(11)
        //     }
        // })
    },
    methods: {
        open() {
            location.href = "http://baidu.com";
        },
        getData() {
            // this.show = true;
            // console.log(this.v.getTime());
            // this.switchs = this.switchs == "1" ? 0 : 1;
            // console.log(this.location);
            // console.log(this.$refs['location'].getAddress())
            // this.$Toast.send("达健身房这是上岛咖啡");
            // Toast.send('达健身房这是上岛咖啡', {type: 'bottom'})
            // console.log(this.img);
            // this.show = !this.show;

            console.log(this.vs)
        },
        setData(){
            this.vs = [
                { v: "1", title: "t1" }
            ]
        },
        test(data, v) {
            // console.log(this.$refs["dialog"].$refs["view"].reset());
            console.log(data, v);
        },
    },
};
</script>

<style lang="less">
#app {
    text-align: center;
    color: #2c3e50;
    font-size: 14px;
    width: 600px;
    height: 600px;
    margin: 48px auto;

    button {
        margin: 0 12px;
    }
}
</style>
