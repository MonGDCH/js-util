<template>
    <div class="mon-address">
        <a-cascader
            :allowClear="allowClear"
            :placeholder="placeholder"
            :disabled="disabled"
            :size="size"
            :options="options"
            :load-data="loadData"
            @change="onChange"
        />
    </div>
</template>
<script>
// window.addressApi = "http://demo.test/getLocation";
export default {
    name: "MonAddress",
    props: {
        /*值*/
        value: {
            type: Array,
            default: () => {
                return [];
            }
        },
        /*是否展示清除按钮*/
        allowClear: {
            type: Boolean,
            default: true
        },
        /*禁用全部操作*/
        disabled: {
            type: Boolean,
            default: false
        },
        /*没有值的时候显示的内容*/
        placeholder: {
            type: String,
            default: "请选择省份城市地址"
        },
        /*文本框大小*/
        size: {
            type: String,
            default: "default"
        }
    },
    data() {
        return {
            options: []
        };
    },
    mounted() {
        fetch(window.addressApi + "/0")
            .then(res => {
                return res.json();
            })
            .then(data => {
                if (data.code == "1") {
                    this.options = data.data;
                }
            })
            .catch(e => {
                console.error(e);
            });
    },
    methods: {
        onChange(value) {
            this.$emit("input", value);
        },
        loadData(selectedOptions) {
            const targetOption = selectedOptions[selectedOptions.length - 1];
            const queryType =
                targetOption.type < 2
                    ? targetOption.type + 1
                    : targetOption.type;
            const queryCode = targetOption.code;

            targetOption.loading = true;
            fetch(window.addressApi + "/" + queryType + "/" + queryCode)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    if (data.code == "1") {
                        targetOption.loading = false;
                        targetOption.children = data.data;
                        this.options = [...this.options];
                    }
                })
                .catch(e => {
                    console.error(e);
                });
        }
    }
};
</script>
<style lang="less" scoped>
.ant-cascader-picker {
    min-width: 240px;
    text-align: left;
}
</style>