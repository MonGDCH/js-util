<template>
    <div class="mon-switch">
        <a-slider
            :range="true"
            :defaultValue="val"
            :step="step"
            :min="min"
            :max="max"
            :default-value="value"
            :disabled="disabled"
            @change="onChange"
        />
    </div>
</template>
<script>
export default {
    name: "MonSlider",
    props: {
        // 值 v-model
        value: {
            type: Array,
            default: () => {
                return [0, 0];
            }
        },
        // 禁用全部操作
        disabled: {
            type: Boolean,
            default: false
        },
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        step: {
            type: Number,
            default: 1
        },
    },
    data() {
        return {
            val: this.value
        };
    },
    watch: {
        value(value) {
            this.val = value;
        }
    },
    methods: {
        onChange(value) {
            this.$emit("input", value);
        }
    }
};
</script>
