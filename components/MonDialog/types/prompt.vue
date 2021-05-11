<template>
    <div class="dialog-prompt">
        <div class="dialog-title">{{title}}</div>
        <div class="dialog-container">
            <div class="dialog-form">
                <slot></slot>
                <div class="dialog-form-item">
                    <input :type="inputType" :placeholder="msg" v-model="result" />
                    <span class="error" v-show="showError">{{error}}</span>
                </div>
            </div>
            <div class="dialog-footer">
                <div class="dialog-btn dialog-ok" @click="isOk">确定</div>
                <div class="dialog-btn dialog-cancel" @click="cancel">取消</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "dialog-prompt",
    props: {
        title: {
            type: String,
            default: ""
        },
        msg: {
            type: String,
            default: ""
        },
        isPassword: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        inputType() {
            return this.isPassword ? 'password' : 'text'
        }
    },
    data() {
        return {
            result: "",
            showError: false,
            error: "请输入信息"
        };
    },
    methods: {
        isOk() {
            if (this.result == "") {
                this.showError = true;
                return false;
            }
            this.$emit("ok", this.result);
        },
        cancel() {
            this.reset();
            this.$emit("cancel");
        },
        reset() {
            this.showError = false;
            this.result = "";
        }
    }
};
</script>
<style lang="less" scoped>
.dialog-prompt {
    width: 320px;
    margin: 0 auto;
    color: #666;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    -ms-box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    -o-box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background: #fff;
    font-size: 14px;

    .dialog-title {
        text-align: left;
        font-size: 15px;
        color: #000000;
        padding: 10px 16px;
        background: #f6f6f6;
        border-bottom: 1px solid #eee;
    }

    .dialog-container {
        padding: 16px;
        position: relative;
        line-height: 1.4;

        .dialog-form {
            .dialog-form-item {
                text-align: left;
                // margin-bottom: 8px;

                input {
                    display: inline-block;
                    width: 100%;
                    color: #999;
                    padding: 4px;
                    border: 1px solid #ddd;
                    outline: none;
                }
            }
        }
        .dialog-footer {
            text-align: right;
            padding: 10px 0 0;

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

    .error {
        color: #ff0000;
        font-size: 12px;
    }
}
</style>