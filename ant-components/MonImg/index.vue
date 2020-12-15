<template>
    <img
        class="mon-image"
        :src="src"
        :alt="alt"
        :style="{
            width: width,
            height: height,
        }"
    />
</template>

<script>
export default {
    name: "MonImg",
    props: {
        src: {
            type: String
        },
        alt: {
            type: String,
            default: ""
        },
        width: {
            type: String,
            default: ""
        },
        height: {
            type: String,
            default: ""
        }
    }
};
</script>

<style lang="less" scoped>
.mon-image {
    padding: 0;
    margin: 0;
    text-align: center;
    width: 100%;
}
</style>