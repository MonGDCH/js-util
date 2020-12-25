<template>
    <div class="mon-switch">
        <a-switch
            v-model="checked"
            :size="size"
            :disabled="disabled"
            :checkedChildren="checkedChildren"
            :unCheckedChildren="unCheckedChildren"
            @change="onChange"
        />
    </div>
</template>
<script>
export default {
    name: "MonSwitch",
    props: {
        // 值 v-model
        value: {
            required: true,
            default: "0",
            validator: function(val) {
                return ["0", "1", 0, 1].indexOf(val) != -1;
            }
        },
        // 禁用全部操作
        disabled: {
            type: Boolean,
            default: false
        },
        // 文本框大小
        size: {
            type: String,
            default: "default"
        },
        // 选中时内容
        checkedChildren: {
            type: String,
            default: "打开"
        },
        // 非选中时内容
        unCheckedChildren: {
            type: String,
            default: "关闭"
        }
    },
    data() {
        return {
            checked: this.value == "1"
        };
    },
    methods: {
        onChange(val) {
            this.$emit("input", Number(val));
        }
    }
};
</script>
