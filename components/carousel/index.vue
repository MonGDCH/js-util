<template>
    <div class="carousel" @mouseenter="enter" @mouseleave="leave" :style="heiStyle">
        <transition-group
            tag="ul"
            name="image"
            enter-active-class="image-enter image-enter-active"
            leave-active-class="image-leave image-leave-active"
        >
            <li v-for="(item, index) in imgs" :key="(index + 1)" v-show="index === mark">
                <a href="javascript:void(0);" @click="tap(item)">
                    <img :src="item.img" alt :srcset="item.img" :style="heiStyle" />
                </a>
            </li>
        </transition-group>
        <div class="bullet" v-if="showBullet && (imgs.length > 1)">
            <span
                v-for="(item, index) in imgs.length"
                :class="{'active':index === mark}"
                @click="change(index)"
                :key="index"
            ></span>
        </div>
        <div class="switch" v-if="showSwitch &&(imgs.length > 1)">
            <span class="prev" @click="prev">&lt;</span>
            <span class="next" @click="next">&gt;</span>
        </div>
    </div>
</template>
<script>
export default {
    name: "MonCarousel",
    props: {
        // 图片列表
        imgs: {
            type: Array,
            default: function() {
                return [];
            }
        },
        // 最小高度，默认最小高度300px
        height: {
            type: Number,
            default: 300
        },
        // 开启自动播放
        autoPlay: {
            type: Boolean,
            default: true
        },
        // 自动播放间隔时间，默认3s
        timeGap: {
            type: Number,
            default: 3000
        },
        // 显示上一页，下一页
        showSwitch: {
            type: Boolean,
            default: true
        },
        // 显示分页原点
        showBullet: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            mark: 0,
            timer: null,
            loading: false
        };
    },
    computed: {
        heiStyle: function() {
            return {
                minHeight: this.height + "px"
            };
        }
    },
    mounted() {
        this.play();
    },
    methods: {
        // 切换图片
        change(i) {
            if (this.loading) {
                return;
            }
            this.loading = true;

            this.mark = i;

            setTimeout(() => {
                this.loading = false;
            }, 606);
        },
        // 上一页
        prev() {
            if (this.loading) {
                return;
            }
            this.loading = true;

            this.mark--;
            if (this.mark === -1) {
                this.mark = this.imgs.length - 1;
            }

            setTimeout(() => {
                this.loading = false;
            }, 606);
        },
        // 下一页
        next() {
            if (this.loading) {
                return;
            }
            this.loading = true;

            this.mark++;
            if (this.mark === this.imgs.length) {
                this.mark = 0;
            }

            setTimeout(() => {
                this.loading = false;
            }, 606);
        },
        // 自动播放
        autoCarousel() {
            if (this.loading) {
                return;
            }
            this.loading = true;

            this.mark++;
            if (this.mark === this.imgs.length) {
                this.mark = 0;
            }

            setTimeout(() => {
                this.loading = false;
            }, 606);
        },
        // 启动
        play() {
            if (this.autoPlay) {
                this.timer = setInterval(this.autoCarousel, this.timeGap);
            }
        },
        // 点击图片
        tap(item) {
            this.$emit("tap", item);
        },
        enter() {
            clearInterval(this.timer);
        },
        leave() {
            this.play();
        }
    }
};
</script>
<style lang="less" scoped>
.carousel {
    width: 100%;
    min-height: 300px;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
    user-select: none;
    -moz-user-select: none;

    * {
        padding: 0;
        margin: 0;
    }

    ul {
        position: relative;
        width: 100%;
        height: 100%;
        li {
            width: 100%;
            height: auto;
            position: absolute;
            list-style: none;
            a {
                img {
                    width: 100%;
                }
            }
        }
    }

    .bullet {
        position: absolute;
        font-size: 0;
        bottom: 20px;
        width: 100%;
        display: flex;
        justify-content: center;


        span {
            display: inline-block;
            width: 10px;
            height: 10px;
            background-color: #ffffff;
            margin-left: 15px;
            border-radius: 10px;
            cursor: pointer;

            &:first-child {
                margin-left: 0;
            }
        }
    }
    .switch {
        span {
            position: absolute;
            width: 50px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            background-color: rgba(0, 0, 0, 0.1);
            font-size: 20px;
            color: #ffffff;
            top: 50%;
            margin-top: -25px;
            cursor: pointer;
            font-family: "宋体";
            &:hover {
                background-color: rgba(0, 0, 0, 0.5);
            }
        }
    }
    .prev {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        left: 0;
    }
    .next {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        right: 0;
    }
    .active {
        background-color: red !important;
    }

    .image-enter-active {
        transform: translateX(0);
        transition: all 0.6s ease;
    }
    .image-leave-active {
        transform: translateX(-100%);
        transition: all 0.6s ease;
    }
    .image-enter {
        transform: translateX(100%);
    }
    .image-leave {
        transform: translateX(0);
    }
}
</style>