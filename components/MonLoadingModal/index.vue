<template>
    <div class="loading-modal" :style="{display: visible, backgroundColor: modalColor}">
        <div class="loading">
            <div class="loading-container container1">
                <div :style="{backgroundColor: textColor}" class="circle1"></div>
                <div :style="{backgroundColor: textColor}" class="circle2"></div>
                <div :style="{backgroundColor: textColor}" class="circle3"></div>
                <div :style="{backgroundColor: textColor}" class="circle4"></div>
            </div>
            <div class="loading-container container2">
                <div :style="{backgroundColor: textColor}" class="circle1"></div>
                <div :style="{backgroundColor: textColor}" class="circle2"></div>
                <div :style="{backgroundColor: textColor}" class="circle3"></div>
                <div :style="{backgroundColor: textColor}" class="circle4"></div>
            </div>
            <div class="loading-container container3">
                <div :style="{backgroundColor: textColor}" class="circle1"></div>
                <div :style="{backgroundColor: textColor}" class="circle2"></div>
                <div :style="{backgroundColor: textColor}" class="circle3"></div>
                <div :style="{backgroundColor: textColor}" class="circle4"></div>
            </div>
            <div class="loading-txt" :style="{color: textColor}">{{txt}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: "MonLoadingModal",
    data() {
        return {
            txt: "加载中",
            isShow: false,
            theme: 1
        };
    },
    computed: {
        // 是否显示
        visible() {
            return this.isShow ? "flex" : "none";
        },
        // 幕布颜色
        modalColor() {
            switch (this.theme) {
                case 2:
                    // 透明
                    return "rgba(0, 0, 0, 0)";
                case 1:
                default:
                    // 默认的50%黑
                    return "rgba(0, 0, 0, .5)";
            }
        },
        // 字体颜色
        textColor() {
            switch (this.theme) {
                case 2:
                    // 灰色
                    return "#666666";
                case 1:
                default:
                    // 默认白色
                    return "#FFFFFF";
            }
        }
    }
};
</script>
<style lang="less" scoped>
.loading-modal {
    position: fixed;
    padding: 0px;
    top: 0px;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 100%;
    z-index: 1998;
    // display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;

    .loading {
        width: 56px;
        height: 56px;
        position: relative;
        display: flex;
        align-content: center;
        justify-content: center;
        align-items: center;
        user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;

        .loading-txt {
            font-size: 12px;
            color: #fff;
            display: inline-block;
        }

        .loading-container {
            position: absolute;
            width: 100%;
            height: 100%;
        }

        .container1 > div,
        .container2 > div,
        .container3 > div {
            width: 10px;
            height: 10px;
            background-color: #fff;
            border-radius: 100%;
            position: absolute;
            -webkit-animation: bouncedelay 1.2s infinite ease-in-out;
            animation: bouncedelay 1.2s infinite ease-in-out;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
        }
        .container2 {
            -webkit-transform: rotateZ(45deg);
            transform: rotateZ(45deg);
            .circle1 {
                -webkit-animation-delay: -1.1s;
                animation-delay: -1.1s;
            }
            .circle2 {
                -webkit-animation-delay: -0.8s;
                animation-delay: -0.8s;
            }
            .circle3 {
                -webkit-animation-delay: -0.5s;
                animation-delay: -0.5s;
            }
            .circle4 {
                -webkit-animation-delay: -0.2s;
                animation-delay: -0.2s;
            }
        }
        .container3 {
            -webkit-transform: rotateZ(90deg);
            transform: rotateZ(90deg);
            .circle1 {
                -webkit-animation-delay: -1s;
                animation-delay: -1s;
            }
            .circle2 {
                -webkit-animation-delay: -0.7s;
                animation-delay: -0.7s;
            }
            .circle3 {
                -webkit-animation-delay: -0.4s;
                animation-delay: -0.4s;
            }
            .circle4 {
                -webkit-animation-delay: -0.1s;
                animation-delay: -0.1s;
            }
        }
        .circle1 {
            top: 0;
            left: 0;
        }
        .circle2 {
            top: 0;
            right: 0;
        }
        .circle3 {
            right: 0;
            bottom: 0;
        }
        .circle4 {
            left: 0;
            bottom: 0;
        }
        .container1 {
            .circle2 {
                -webkit-animation-delay: -0.9s;
                animation-delay: -0.9s;
            }
            .circle3 {
                -webkit-animation-delay: -0.6s;
                animation-delay: -0.6s;
            }
            .circle4 {
                -webkit-animation-delay: -0.3s;
                animation-delay: -0.3s;
            }
        }
    }
}

@-webkit-keyframes bouncedelay {
    0%,
    80%,
    100% {
        -webkit-transform: scale(0);
    }
    40% {
        -webkit-transform: scale(1);
    }
}
@keyframes bouncedelay {
    0%,
    80%,
    100% {
        transform: scale(0);
        -webkit-transform: scale(0);
    }
    40% {
        transform: scale(1);
        -webkit-transform: scale(1);
    }
}
</style>