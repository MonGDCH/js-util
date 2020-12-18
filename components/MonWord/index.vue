<template>
    <div class="mon-word" :style="getColor()" @click="hander">{{val}}</div>
</template>

<script>
export default {
    name: "MonWord",
    props: {
        value: {
            type: String,
            default: ""
        },
        color: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            val: this.value
        };
    },
    watch: {
        value(v) {
            this.val = v;
        }
    },
    methods: {
        // 点击
        hander() {
            this.$emit("click", this.val);
        },
        // 字体颜色
        getColor() {
            switch (this.color) {
                case "primary":
                    return {
                        color: "#1890ff",
                        cursor: "pointer"
                    };
                case "success":
                    return {
                        color: "#52c41a",
                        cursor: "pointer"
                    };
                case "warning":
                    return {
                        color: "#faad14",
                        cursor: "pointer"
                    };
                case "error":
                    return {
                        color: "#f5222d",
                        cursor: "pointer"
                    };
                default:
                    return {
                        color: "rgba(0, 0, 0, .85)"
                    };
            }
        }
    }
};
</script>

<style scoped>
.mon-word {
    line-height: 1.5;
    background: #ffffff;
    padding: 0px 6px;
}
</style>
