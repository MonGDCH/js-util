<template>
    <div class="back-top" v-show="show" @click="backTop(goto, time)">
        <svg t="1591755284016" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2885" width="24" height="24">
            <path d="M230.4 1011.184l563.2 0 0-102.4L230.4 908.784 230.4 1011.184zM231.024 806.368l561.952 0L792.976 422.352 1024 422.352 493.504 12.8 0 422.352l231.024 0L231.024 806.368z" p-id="2886" fill="#ffffff"></path>
        </svg>
    </div>
</template>
<script>
export default {
    name: "MonBackTop",
    props: {
        // 回跳位置
        goto: {
            type: Number,
            default: 0
        },
        // 动画时间
        time: {
            type: Number,
            default: 360
        }
    },
    data() {
        return {
            show: false,
        };
    },
    // 创建
    mounted() {
        window.addEventListener("scroll", this.scrollToTop, true);
    },
    // 销毁
    destroyed() {
        window.removeEventListener("scroll", this.scrollToTop, true);
    },
    methods: {
        // 返回顶部
        backTop(number, time) {
            const that = this;
            const spacingTime = 20; // 设置循环的间隔时间  值越小消耗性能越高
            if (!time) {
                document.body.scrollTop = document.documentElement.scrollTop = number;
                return number;
            }
            // 计算循环的次数
            let spacingInex = time / spacingTime;
            // 获取当前滚动条位置
            let nowTop = document.body.scrollTop + document.documentElement.scrollTop;
            // 计算每次滑动的距离
            let everTop = (number - nowTop) / spacingInex;
            let scrollTimer = setInterval(() => {
                if (spacingInex > 0) {
                    spacingInex--;
                    that.backTop((nowTop += everTop));
                } else {
                    // 清除计时器
                    clearInterval(scrollTimer);
                }
            }, spacingTime);
        },
        // 监听滚动条
        scrollToTop() {
            const that = this;
            let scrollTop = "";
            scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop > 360) {
                that.show = true;
            } else {
                that.show = false;
            }
        }
    }
};
</script>
<style lang="less" scoped>
.back-top {
    z-index: 9999;
    position: fixed;
    bottom: 86px;
    right: 32px;
    transition: all 0.2s ease-in-out;
    line-height: 50px;
    cursor: pointer;
    color: #fff;
    height: 48px;
    width: 48px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.6);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;

    .svg-icon{
        display: block;
    }
}
</style>