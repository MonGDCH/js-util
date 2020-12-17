<template>
    <a-range-picker
        v-model="val"
        :ranges="ranges"
        :show-time="showTime"
        :format="format"
        :allowClear="allowClear"
        :disabled="disabled"
        :placeholder="placeholder"
        :inputReadOnly="inputReadOnly"
        :size="size"
        @change="change"
        :disabled-date="disabledDate"
        :disabled-time="disabledTime"
    />
</template>

<script>
import moment from "moment";
function getVal(v, format) {
    if (v instanceof Array && v.length == 2) {
        if (v[0] == "" || v[1] == "") {
            return [];
        }
        return [moment(v[0], format), moment(v[1], format)];
    }
    return [];
}

export default {
    name: "MonRangePicker",
    props: {
        /*值*/
        value: {
            type: Array,
            default: function() {
                return [];
            }
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
            type: Array,
            default: function() {
                return [];
            }
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
            let nv = getVal(v, this.format);
            if (nv.length == 2) {
                this.val = nv;
            } else {
                this.val = [];
            }
        }
    },
    data() {
        return {
            val: [],
            ranges: {
                今天: [moment(), moment()],
                本周: [
                    moment().day(0),
                    moment()
                        .day(0)
                        .add(6, "days")
                ],
                本月: [moment(), moment().endOf("month")],
                "1季度": [moment("01-01", "MM-DD"), moment("03-31", "MM-DD")],
                "2季度": [moment("04-01", "MM-DD"), moment("06-30", "MM-DD")],
                "3季度": [moment("07-01", "MM-DD"), moment("09-30", "MM-DD")],
                "4季度": [moment("10-01", "MM-DD"), moment("12-31", "MM-DD")]
            }
        };
    },
    created() {
        this.val = getVal(this.value, this.format);
    },
    methods: {
        change() {
            if (this.val.length == 2) {
                let value = [
                    this.val[0].format(this.format),
                    this.val[1].format(this.format)
                ];
                this.$emit("change", value);
            } else {
                this.$emit("change", []);
            }
        }
    }
};
</script>

<style scoped></style>
