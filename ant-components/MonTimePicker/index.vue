<template>
    <div>
        <a-time-picker
            v-model="val"
            :allowClear="allowClear"
            :disabled="disabled"
            :format="format"
            :hourStep="hourStep"
            :minuteStep="minuteStep"
            :secondStep="secondStep"
            :placeholder="placeholder"
            :size="size"
            :inputReadOnly="inputReadOnly"
            @change="change"
        />
    </div>
</template>

<script>
import moment from "moment";
export default {
    name: "MonTimePicker",
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
            default: "HH:mm:ss"
        },
        /*小时选项间隔*/
        hourStep: {
            type: Number,
            default: 1
        },
        /*分钟选项间隔*/
        minuteStep: {
            type: Number,
            default: 1
        },
        /*秒选项间隔*/
        secondStep: {
            type: Number,
            default: 1
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
    created() {},
    methods: {
        change() {
            this.$emit("change", this.val.format(this.format));
        }
    }
};
</script>
