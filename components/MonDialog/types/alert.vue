<template>
    <div class="dialog-alert">
        <div class="dialog-cont-title" :style="textAlign">{{title}}</div>
        <div class="dialog-cont-body">
            <slot></slot>
            <p class="dialog-cont-msg" v-if="msg" v-html="msg"></p>
        </div>
        <div class="dialog-cont-footer">
            <div class="dialog-btn dialog-ok" @click="isOk">确定</div>
        </div>
    </div>
</template>
<script>
export default {
    name: "dialog-alert",
    props: {
        title: {
            type: String,
            default: ""
        },
        msg: {
            type: String,
            default: ""
        }
    },
    computed: {
        textAlign() {
            return this.msg ? { textAlign: "left" } : "";
        }
    },
    methods: {
        isOk() {
            this.$emit("ok");
        }
    }
};
</script>
<style lang="less" scoped>
.dialog-alert {
    position: relative;
    text-align: left;
    max-width: 320px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 4px;
    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    -ms-box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    -o-box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    // overflow: hidden;

    .dialog-cont-title {
        font-size: 15px;
        line-height: 18px;
        padding: 10px 16px;
        color: #000;
        background: #f6f6f6;
        border-bottom: 1px solid #eee;
    }
    .dialog-cont-body {
        padding: 12px;
        text-align: center;

        .dialog-cont-msg {
            margin-top: 8px;
        }
    }

    .dialog-cont-footer {
        text-align: right;
        padding: 12px;

        .dialog-btn {
            display: inline-block;
            border-radius: 2px;
            padding: 6px 18px;
            border: 1px solid #eee;
            cursor: pointer;
            font-size: 12px;
            margin-right: 12px;

            &:hover {
                border-color: #ddd;
                background: #eee;
            }

            &:last-child {
                margin-right: 0;
            }
        }
    }
}
</style>