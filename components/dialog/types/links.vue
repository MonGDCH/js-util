<template>
    <div class="dialog-box">
        <div class="dialog-title">添加链接</div>
        <div class="dialog-container">
            <div class="dialog-form">
                <div class="dialog-form-item">
                    <label for="dialog-link-data">链接地址</label>
                    <input type="text" id="dialog-link-data" v-model="link" />
                    <span class="error" v-show="showErrorLink">{{errorLink}}</span>
                </div>
                <div class="dialog-form-item">
                    <label for="dialog-title-data">链接标题</label>
                    <input type="text" id="dialog-title-data" v-model="linkTitle" />
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
    name: "dialog-links",
    data() {
        return {
            link: "http://",
            linkTitle: "",
            showErrorLink: false,
            errorLink: "链接地址不能为空"
        };
    },
    methods: {
        isOk() {
            if (this.link == "") {
                this.showErrorLink = true;
                return false;
            }
            this.$emit("ok", {
                link: this.link,
                title: this.linkTitle
            });
            this.showErrorLink = false;
            this.link = "http://";
            this.linkTitle = "";
        },
        cancel() {
            this.$emit("cancel");
            this.showErrorLink = false;
            this.link = "http://";
            this.linkTitle = "";
        }
    }
};
</script>

<style lang="less" scoped>
.dialog-box {
    width: 320px;
    // height: 200px;
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
                    width: 64px;
                    text-align: left;
                    display: inline-block;
                }

                input {
                    display: inline-block;
                    width: 220px;
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
                margin-right: 4px;

                &:hover {
                    border-color: #ddd;
                    background: #eee;
                }
            }
        }
    }

    .error{
        color: #ff0000;
        font-size: 12px;
    }
}
</style>