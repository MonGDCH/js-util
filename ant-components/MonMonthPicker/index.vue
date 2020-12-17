<template>
    <a-month-picker
        v-model="val"
        :allowClear="allowClear"
        :disabled="disabled"
        :placeholder="placeholder"
        :inputReadOnly="inputReadOnly"
        :format="format"
        :size="size"
        @change="change"
        :disabled-date="disabledDate"
    />
</template>

<script>
import moment from "moment";
function getVal(v, format) {
    if (v) {
        return moment(v, format);
    } else {
        return null;
    }
}

export default {
    name: "MonMonthPicker",
    props: {
        /*值*/
        value: {
            type: String,
            default: null
        },
        /*是否展示清除按钮*/
        allowClear: {
            type: Boolean,
            default: false
        },
        /*禁用全部操作*/
        disabled: {
            type: Boolean,
            default: false
        },

        /*没有值的时候显示的内容*/
        placeholder: {
            type: String,
            default: ""
        },
        /*展示的时间格式*/
        format: {
            type: String,
            default: "YYYY-MM"
        },
        /*文本框大小*/
        size: {
            type: String,
            default: "default"
        },
        /*设置输入框为只读（避免在移动设备上打开虚拟键盘）*/
        inputReadOnly: {
            type: Boolean,
            default: true
        },
        /* 禁用日期 */
        disabledDate: {
            type: [Function, Boolean],
            default: function() {
                return false;
            }
        }
    },
    model: {
        prop: "value",
        event: "change"
    },
    watch: {
        value(v) {
            let nv = getVal(v, this.format);
            this.val = nv;
        }
    },
    data() {
        return {
            val: null,
        };
    },
    created() {
        this.val = getVal(this.value, this.format);
    },
    methods: {
        change() {
            if (this.val) {
                const v = this.val.format(this.format);
                this.$emit("change", v);
            } else {
                this.$emit("change", null);
            }
        }
    }
};
</script>

<style scoped></style>
