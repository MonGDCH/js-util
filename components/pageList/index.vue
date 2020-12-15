<template>
    <div class="page-list">
        <!-- 列表内容 -->
        <slot></slot>

        <!-- 加载提示 -->
        <div class="tips">
            <div class="more" v-if="showTips == 3">
                <a href="javascript:void(0);" @click="load">{{moreTxt}}</a>
            </div>
            <div class="loading" v-if="showTips == 1">
                {{loadingTxt}}
            </div>
            <div class="finished" v-if="showTips == 0">{{finishedTxt}}</div>
            <div class="error" v-if="showTips == 2">{{errorTxt}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MonPageList",
    props: {
        loading: {
            type: Boolean,
            default: false
        },
        finished: {
            type: Boolean,
            default: false
        },
        moreTxt: {
            type: String,
            default: "加载更多"
        },
        loadingTxt: {
            type: String,
            default: "努力加载中..."
        },
        finishedTxt: {
            type: String,
            default: "已经没有更多了"
        },
        errorTxt: {
            type: String,
            default: ""
        }
    },
    computed: {
        showTips: function() {
            if (this.finished) {
                // 加载完成
                return 0;
            } else {
                if (this.loading) {
                    // 加载中
                    return 1;
                } else {
                    if (this.errorTxt) {
                        // 加载失败
                        return 2;
                    } else {
                        // 加载更多
                        return 3;
                    }
                }
            }
        }
    },
    methods: {
        // 点击加载更多事件
        load() {
            this.$emit("load");
        }
    }
};
</script>

<style lang="less" scoped>
.page-list {
    position: relative;
    width: 100%;
    overflow: hidden;

    .tips {
        text-align: center;
        margin-top: 8px;
        padding: 8px;
        color: #888888;
        line-height: 1.5;
        font-size: 14px;

        a {
            text-decoration: none;
            color: #888888;
        }

        .error {
            color: #ff0000;
        }
    }
}
</style>