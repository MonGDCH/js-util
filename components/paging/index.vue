<template>
    <ul class="pagination" v-show="total > 1">
        <li title="上一页" class="pagination-prev">
            <span :class="['pagination-btn', {'disable': !activePrev}]" @click="prve">
                <svg
                    data-icon="left"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                    viewBox="64 64 896 896"
                    focusable="false"
                >
                    <path
                        d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"
                    />
                </svg>
            </span>
        </li>
        <li class="pagination-sign" :title="page + '/' + total">
            <input type="text" class="input" size="5" v-model="page" @keydown.enter="change" />
            <span class="slash">/</span>
            {{total}}
        </li>
        <li title="下一页" class="pagination-next">
            <span :class="['pagination-btn', {'disable': !activeNext}]" @click="next">
                <svg
                    class
                    data-icon="right"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                    viewBox="64 64 896 896"
                    focusable="false"
                >
                    <path
                        d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
                    />
                </svg>
            </span>
        </li>
    </ul>
</template>

<script>
export default {
    name: "MonPaging",
    props: {
        //当前页码
        value: {
            type: Number,
            default: 1
        },
        //每页显示条数
        pageSize: {
            type: Number,
            default: 10
        },
        //总记录数
        count: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            page: Number(this.value) || 1
        };
    },
    computed: {
        // 总分页数
        total() {
            return (
                Math.ceil(
                    parseInt(this.count, 10) / parseInt(this.pageSize, 10)
                ) || 1
            );
        },
        // 允许点击上一页
        activePrev() {
            return this.page > 1;
        },
        // 允许点击下一页
        activeNext() {
            return this.page < this.total;
        }
    },
    watch: {
        value(val) {
            let num = parseInt(val, 10) < 1 ? 1 : parseInt(val, 10);
            this.page = num > this.total ? this.total : num;
        },
        page(val, old) {
            if (!parseInt(val, 10)) {
                this.page = old;
                return;
            }

            let num = parseInt(val, 10) < 1 ? 1 : parseInt(val, 10);
            this.page = num > this.total ? this.total : num;
            this.$emit("input", this.page);
        }
    },
    methods: {
        // 修改分页，更新数据
        change() {
            this.$emit("change", this.page);
        },
        // 上一页
        prve() {
            if (this.activePrev) {
                this.page--;
                this.$emit("change", this.page < 1 ? 1 : this.page);
            }
        },
        // 下一页
        next() {
            if (this.activeNext) {
                this.page++;
                this.$emit(
                    "change",
                    this.page > this.total ? this.total : this.page
                );
            }
        }
    }
};
</script>

<style lang="less" scoped>
.pagination {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    line-height: 1.5;
    // height: 32px;
    margin-top: 6px;

    * {
        margin: 0;
        padding: 0;
    }

    svg {
        display: inline-block;
        line-height: 28px;
        overflow: hidden;
        text-align: center;
    }

    li {
        display: inline-block;
        min-width: 32px;
        height: 28px;
        text-align: center;
    }

    .pagination-btn {
        cursor: pointer;

        &:hover {
            color: #1890ff;
        }

        &.disable {
            cursor: not-allowed;
            color: rgba(0, 0, 0, 0.25);
        }
    }

    .pagination-sign {
        position: relative;
        top: -2px;
        cursor: text;

        .slash {
            display: inline-block;
            margin: 0 5px 0 10px;
        }
    }

    .input {
        display: inline-block;
        box-sizing: border-box;
        width: 54px;
        height: 24px;
        padding: 4px 8px;
        font-size: 12px;
        border: 1px solid #dcdee2;
        border-radius: 4px;
        color: #515a6e;
        background-color: #fff;
        background-image: none;
        position: relative;
        text-align: center;
        outline: none;
    }
}
</style>