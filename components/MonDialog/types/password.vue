<template>
    <div class="dialog-password">
        <div class="dialog-title">{{showTitle}}</div>
        <div class="dialog-container">
            <div class="dialog-form">
                <div class="dialog-form-item" v-if="showOldPwd">
                    <label for="dialog-oldpwd-data">旧密码</label>
                    <input type="password" id="dialog-oldpwd-data" v-model="oldPwd" />
                    <span class="error" v-show="showOldPwdError">{{oldPwdError}}</span>
                </div>
                <div class="dialog-form-item">
                    <label for="dialog-newowd-data">新密码</label>
                    <input type="password" id="dialog-newowd-data" v-model="newPwd" />
                    <span class="error" v-show="showNewPwdError">{{newPwdError}}</span>
                </div>
                <div class="dialog-form-item">
                    <label for="dialog-confirmpwd-data">确认密码</label>
                    <input type="password" id="dialog-confirmpwd-data" v-model="confirmpwd" />
                    <span class="error" v-show="showConfirmpwdError">{{confirmpwdError}}</span>
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
    name: "dialog-password",
    props: {
        title: {
            type: String,
            default: ""
        },
        showOldPwd: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            oldPwd: "",
            oldPwdError: "",
            showOldPwdError: false,
            newPwd: "",
            newPwdError: "",
            showNewPwdError: false,
            confirmpwd: "",
            confirmpwdError: "",
            showConfirmpwdError: false
        };
    },
    computed: {
        showTitle() {
            return this.title == "提示"
                ? this.showOldPwd
                    ? "修改密码"
                    : "重置密码"
                : this.title;
        }
    },
    watch: {
        oldPwd(val) {
            this.oldPwdError = "";
            this.showOldPwdError = false;
        },
        newPwd(val) {
            this.newPwdError = "";
            this.showNewPwdError = false;
        },
        confirmpwd(val) {
            this.confirmpwdError = "";
            this.showConfirmpwdError = false;
        }
    },
    methods: {
        // 确认
        isOk() {
            if (this.showOldPwd && this.oldPwd == "") {
                this.oldPwdError = "旧密码不能为空";
                this.showOldPwdError = true;
                return;
            }
            this.showOldPwdError = false;
            if (this.newPwd == "") {
                this.newPwdError = "新密码不能为空";
                this.showNewPwdError = true;
                return;
            }
            this.showNewPwdError = false;
            if (this.newPwd != this.confirmpwd) {
                this.confirmpwdError = "确认密码与新密码不一致";
                this.showConfirmpwdError = true;
                return;
            }
            this.showConfirmpwdError = false;

            this.$emit("ok", {
                oldPwd: this.oldPwd,
                newPwd: this.newPwd
            });
        },
        // 取消
        cancel() {
            this.reset();
            this.$emit("cancel");
        },
        // 重置
        reset() {
            this.oldPwd = "";
            this.oldPwdError = "";
            this.showOldPwdError = false;
            this.newPwd = "";
            this.newPwdError = "";
            this.showNewPwdError = false;
            this.confirmpwd = "";
            this.confirmpwdError = "";
            this.showConfirmpwdError = false;
        }
    }
};
</script>

<style lang="less" scoped>
.dialog-password {
    width: 320px;
    // height: 240px;
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
    /* padding: 12px; */

    .dialog-title {
        text-align: left;
        font-size: 15px;
        color: #000000;
        // font-weight: 600;
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
                margin-bottom: 8px;

                label {
                    width: 81px;
                    text-align: right;
                    display: inline-block;
                    padding: 0 4px;
                    margin-right: 7px;
                }

                input {
                    display: inline-block;
                    width: 200px;
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
        display: block;
        padding-left: 86px;
    }
}
</style>