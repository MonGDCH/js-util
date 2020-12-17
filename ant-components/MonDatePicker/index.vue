<template>
    <a-date-picker
        v-model="val"
        :inputReadOnly="inputReadOnly"
        :allowClear="allowClear"
        :disabled="disabled"
        :format="format"
        :placeholder="placeholder"
        :size="size"
        :showToday="showToday"
        :showTime="showTime"
        :disabled-date="disabledDate"
        :disabled-time="disabledTime"
        @change="change"
    />
</template>

<script>
import moment from "moment";
export default {
    name: "MonDatePicker",
    props: {
        /*值*/
        value: {
            type: String,
            default: ""
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
        /*展示的时间格式*/
        format: {
            type: String,
            default: "YYYY-MM-DD"
        },
        /*没有值的时候显示的内容*/
        placeholder: {
            type: String,
            default: ""
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
        /*是否展示“今天”按钮*/
        showToday: {
            type: Boolean,
            default: true
        },
        /*显示时间选择器*/
        showTime: {
            type: [Object, Boolean],
            default: false
        },
        /* 禁用日期 */
        disabledDate: {
            type: [Function, Boolean],
            default: function() {
                return false;
            }
        },
        /* 禁用时间 */
        disabledTime: {
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
            if (v != "") {
                this.val = moment(v, this.format);
            } else {
                this.val = null;
            }
        }
    },
    data() {
        return {
            val:
                this.value === "" || this.value == null
                    ? null
                    : moment(this.value, this.format)
        };
    },
    methods: {
        change() {
            this.$emit("change", this.val.format(this.format));
        }
    }
};
</script>

<style scoped></style>
