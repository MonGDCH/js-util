<template>
    <div
        :id="idx"
        class="mon-input-select_wrap"
        :class="{ open: isShowPop }"
        onselectstart="return false"
    >
        <div class="mon-input-select">
            <div class="mon-input-select_box" @click="selectHandle">
                <span>{{ selectedText || placeholder }}</span>
                <i class="mon-arrow" :class="{ up: isShowPop }"></i>
            </div>
            <div class="mon-input-select_pop" v-show="isShowPop">
                <div class="mon-input-select_ipt_wrap">
                    <input
                        type="text"
                        v-model="searchTxt"
                        class="mon-input-select_ipt"
                        placeholder="搜索"
                    />
                    <span
                        class="icon-clear"
                        v-if="searchTxt"
                        @click="clearHandle"
                    >
                        <svg
                            t="1575258400555"
                            class="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="2468"
                            width="16"
                            height="16"
                        >
                            <path
                                d="M509.866667 32C245.333333 32 32 247.466667 32 512s213.333333 480 477.866667 480S987.733333 776.533333 987.733333 512 774.4 32 509.866667 32z m0 896C281.6 928 96 742.4 96 512S281.6 96 509.866667 96 923.733333 281.6 923.733333 512s-185.6 416-413.866666 416z"
                                fill="#8a8a8a"
                                p-id="2469"
                            ></path>
                            <path
                                d="M693.333333 330.666667c-12.8-12.8-32-12.8-44.8 0L512 467.2l-136.533333-136.533333c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l136.533333 136.533333-136.533333 136.533333c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466666 8.533334s17.066667-2.133333 23.466667-8.533334l136.533333-136.533333 136.533334 136.533333c6.4 6.4 14.933333 8.533333 23.466666 8.533334s17.066667-2.133333 23.466667-8.533334c12.8-12.8 12.8-32 0-44.8L556.8 512l136.533333-136.533333c12.8-12.8 12.8-32 0-44.8z"
                                fill="#8a8a8a"
                                p-id="2470"
                            ></path>
                        </svg>
                    </span>
                </div>
                <ul class="mon-input-select_options">
                    <!-- <li @click="selected(null)">
                        <span>{{ placeholder }}</span>
                    </li> -->
                    <li
                        v-for="option in optionsList"
                        @click="selected(option)"
                        :class="{ selected: option.selected }"
                    >
                        <span>{{ option[labelName] }}</span>
                    </li>
                </ul>
                <span class="mon-input-select_arrow"></span>
            </div>
        </div>
    </div>
</template>

<script>
/**
 * Jquery parents方法
 *
 * @param el 选择的dom
 * @param selector 搜索的父级元素
 * @param filter 父级元素过滤
 * @return dom列表
 */
function getParents(el, selector, filter) {
    const result = [];
    const matchesSelector =
        el.matches ||
        el.webkitMatchesSelector ||
        el.mozMatchesSelector ||
        el.msMatchesSelector;

    el = el.parentElement;
    while (el && !matchesSelector.call(el, selector)) {
        if (!filter) {
            result.push(el);
        } else if (matchesSelector.call(el, filter)) {
            result.push(el);
        }
        el = el.parentElement;
    }
    return result;
}
export default {
    name: "MonSelect",
    props: {
        // 元素ID
        idx: {
            type: String,
            default: () => {
                return "mon-select-" + parseInt(Math.random() * 100000000, 10);
            },
        },
        // 选项列表
        options: {
            type: Array,
        },
        // 默认提示
        placeholder: {
            type: String,
            default: "请选择",
        },
        // 选项索引名称
        labelName: {
            type: String,
            default: "title",
        },
        // 是否多选
        multiple: {
            type: Boolean,
            default: false,
        },
        // 绑定值
        value: {
            type: Array,
            default: () => {
                return [];
            },
        },
    },
    data() {
        return {
            // 显示选择窗口
            isShowPop: false,
            // 选中值
            selectedData: [],
            // 搜索词
            searchTxt: "",
        };
    },
    computed: {
        // 选中的值显示内容
        selectedText() {
            let list = this.selectedData.map((item) => {
                return item[this.labelName];
            });
            return list.join(",");
        },
        // 选中的值
        selectedItem() {
            return this.selectedData.map((item) => {
                return item[this.labelName];
            });
        },
        // 选项列表
        optionsList() {
            let originList = this.options;
            // 存在搜索
            if (this.searchTxt) {
                originList = originList.filter((item, index) => {
                    // 根据选项类型给名称赋值
                    return item[this.labelName].indexOf(this.searchTxt) > -1;
                });
            }
            // 存在选中项
            if (this.selectedItem.length > 0) {
                originList = originList.map((item) => {
                    if (this.selectedItem.indexOf(item[this.labelName]) > -1) {
                        item.selected = true;
                    } else {
                        item.selected = false;
                    }

                    return item;
                });
            }

            return originList;
        },
    },
    watch: {
        selectedData: {
            deep: true,
            handler(val) {
                this.$emit("input", val);
            },
        },
        value(val) {
            this.selectedData = val;
        },
    },
    mounted() {
        this.selectedData = this.value;
        document.body.addEventListener("click", (e) => {
            if (
                e.target.id == this.idx ||
                getParents(e.target, null, "#" + this.idx).length > 0
            ) {
                return;
            }

            this.hidePop();
        });
    },
    methods: {
        // 点击基本框显示或隐藏选项列表盒子
        selectHandle: function () {
            this.searchTxt = "";
            this.isShowPop = !this.isShowPop;
        },
        hidePop: function () {
            this.searchTxt = "";
            this.isShowPop = false;
        },
        // 清除搜索
        clearHandle(e) {
            e.stopPropagation();
            this.searchTxt = "";
        },
        // 点击选项
        selected: function (val) {
            if (!this.multiple) {
                this.selectedData = [val];
                this.hidePop();
            } else {
                // 判断是否已存在
                let extsis = this.selectedData.some((item) => {
                    return item[this.labelName] == val[this.labelName];
                });
                if (extsis) {
                    // 已存在则移除
                    this.selectedData = this.selectedData.filter((item) => {
                        return item[this.labelName] != val[this.labelName];
                    });
                } else {
                    // 不存在则插入
                    this.selectedData.push(val);
                }
            }

            this.$emit("change", this.selectedData, val);
        },
    },
};
</script>

<style lang="less" scoped>
.mon-input-select_wrap {
    position: relative;
    width: 198px;
    height: 30px;
    font-size: 14px;
    color: #5a5c5f;
    text-align: left;

    /* 基础样式reset */
    input {
        box-sizing: border-box;
        outline: 0;
    }

    ul {
        margin: 0;
        padding: 0;

        li {
            list-style: none;
        }
    }

    /* 组件内容 */
    .mon-input-select {
        width: 198px;
        position: absolute;

        /* 基本下拉框 */
        .mon-input-select_box {
            height: 30px;
            border: 1px solid #b7b7b7;
            border-radius: 4px;
            background-color: white;
            position: relative;
            cursor: pointer;

            /* 基本下拉框 文字 */
            & > span {
                display: inline-block;
                line-height: 28px;
                padding: 0 30px 0 15px;
                white-space: nowrap;
                text-overflow: ellipsis;
                width: 100%;
                overflow: hidden;
            }
        }

        /* 选项列表盒子 */
        .mon-input-select_pop {
            position: relative;
            background-color: white;
            border: 1px solid #e4e7ed;
            border-radius: 4px;
            max-height: 274px;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            margin-top: 8px;
            padding: 5px;
            box-sizing: border-box;
            z-index: 9;
        }

        /* 选项列表盒子上方的三角形箭头 */
        .mon-input-select_arrow {
            position: absolute;
            display: block;
            width: 0;
            height: 0;
            border: 6px solid transparent;
            filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03));
            top: -6px;
            left: 35px;
            margin-right: 3px;
            border-top-width: 0;
            border-bottom-color: #fff;
            z-index: 99;
        }

        /* 选项列表盒子里面的输入框 */
        .mon-input-select_pop .mon-input-select_ipt {
            position: absolute;
            top: 0px;
            left: 0;
            z-index: 99;
            height: 25px;
            line-height: 25px;
            margin-left: 5px;
            width: 94%;
            border: 1px solid #dcdfe6;
            border-radius: 5px;
            padding: 2px 8px;
            font-size: 12px;
        }

        /* 选项列表内容 */
        .mon-input-select_options {
            display: block;
            margin-top: 30px;
            margin-bottom: 4px;
            max-height: 180px;
            overflow-y: scroll;
            border-top: 1px #dcdfe6 solid;

            li {
                padding: 4px 8px;
                background-color: white;
                cursor: pointer;
                position: relative;

                &:hover {
                    // background-color: #f5f7fa;
                    color: #000;

                    &::after {
                        // content: "✔";
                        content: "✓";
                        display: inline-block;
                        position: absolute;
                        right: 0px;
                    }
                }

                &.selected::after {
                    content: "✓";
                    display: inline-block;
                    position: absolute;
                    right: 0px;
                }
            }

            /*自定义滚动条样式*/
            &::-webkit-scrollbar {
                /*滚动条整体样式*/
                width: 4px;
                /*高宽分别对应横竖滚动条的尺寸*/
                height: 0;
            }

            &::-webkit-scrollbar-thumb {
                /*滚动条里面小方块*/
                border-radius: 4px;
                background-color: rgba(144, 147, 153, 0.3);
                transition: background-color 0.3s;
            }

            &::-webkit-scrollbar-track {
                /*滚动条里面轨道*/
                border-radius: 4px;
                background: transparent;
            }

            &::-webkit-scrollbar-thumb {
                /*滚动条里面小方块*/
                border-radius: 4px;
                background-color: rgba(144, 147, 153, 0);
                /* 重点在这里！！ */
                transition: background-color 0.3s;
            }

            &:hover::-webkit-scrollbar-thumb {
                background-color: rgba(144, 147, 153, 0.3);
            }
        }

        /* 基本下拉框里面右边的线体上下箭头（可旋转） */
        .mon-arrow {
            content: "";
            display: block;
            position: absolute;
            right: 10px;
            top: 8px;
            border-top: 1px solid #c0c4cc;
            border-right: 1px solid #c0c4cc;
            border-radius: 1px;
            width: 8px;
            height: 8px;
            background: transparent;
            transition: transform 0.3s, -webkit-transform 0.3s;
            transform: rotate(135deg);
            z-index: 10;

            /* 箭头向上 */
            &.up {
                transform: rotate(-45deg);
                top: 12px;
            }
        }

        .mon-input-select_ipt_wrap {
            position: relative;
        }

        .icon-clear {
            color: #aaa;
            position: absolute;
            right: 10px;
            top: 5px;
            z-index: 99;
            cursor: pointer;
        }
    }
}
</style>