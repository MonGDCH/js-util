<template>
    <div class="dialog-layer" v-show="visable">
        <div class="dialog-cover" :style="mask">
            <div class="dialog-cont-wrap animated zoomIn faster">
                <component
                    ref="view"
                    :is="type"
                    :title="title"
                    :msg="msg"
                    @ok="ok"
                    @cancel="cancel"
                    :showOldPwd="showOldPwd"
                ></component>
            </div>
        </div>
    </div>
</template>
<script>
import Alert from "./types/alert";
import Links from "./types/links";
import Confirm from "./types/confirm";
import Password from "./types/password";
export default {
    name: "MonDialog",
    components: {
        Alert,
        Links,
        Confirm,
        Password
    },
    props: {
        value: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: "alert"
        },
        title: {
            type: String,
            default: "提示"
        },
        msg: {
            type: String,
            default: ""
        },
        // 显示旧密码，即修改密码，当弹窗类型为password时有效
        showOldPwd: {
            type: Boolean,
            default: true
        },
        showMask: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            visable: this.value
        };
    },
    computed: {
        mask() {
            return this.showMask ? { backgroundColor: "rgba(0, 0, 0, 0.6)" } : {};
        }
    },
    watch: {
        value(val) {
            this.visable = Boolean(val);
        },
        visable(val) {
            this.$emit("input", val);
        }
    },
    methods: {
        ok(data) {
            this.$emit("ok", data);
        },
        cancel() {
            this.$emit("cancel");
        }
    }
};
</script>
<style lang="less" scoped>
.dialog-layer {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    min-height: 100%;
    min-width: 100%;
    margin: 0 auto;
    text-align: center;
    z-index: 2004;

    .dialog-cover {
        position: absolute;
        padding: 0px;
        top: 0px;
        left: 0px;
        bottom: 0px;
        right: 0px;
        width: 100%;
        height: 100%;
        // opacity: 0.7;
        // -moz-opacity: 0.7;
        // filter: alpha(opacity=40);
        // background-color: rgba(0, 0, 0, 0.6);
        display: block;
        z-index: 1998;

        .dialog-cont-wrap {
            position: absolute;
            display: block;
            width: 100%;
            top: 50%;
            margin: 0 auto;
            margin-top: -200px;
            // margin-top: -25%;
            color: #333;
            text-align: center;
        }
    }
}

@-webkit-keyframes zoomIn {
    from {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
    }

    50% {
        opacity: 1;
    }
}

@keyframes zoomIn {
    from {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
    }

    50% {
        opacity: 1;
    }
}

.zoomIn {
    -webkit-animation-name: zoomIn;
    animation-name: zoomIn;
}

.animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}
@media (prefers-reduced-motion) {
    .animated {
        -webkit-animation: unset !important;
        animation: unset !important;
        -webkit-transition: none !important;
        transition: none !important;
    }
}
.animated.faster {
    -webkit-animation-duration: 300ms;
    animation-duration: 300ms;
}
</style>