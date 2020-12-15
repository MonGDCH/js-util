<template>
    <video
        :controls="controls"
        class="mon-video"
        :style="{
            width: width,
            height: height,
        }"
    >
        <source :src="src" :type="`video/${type}`" />
        {{alt}}
    </video>
</template>

<script>
export default {
    name: "MonVideo",
    props: {
        src: {
            type: String
        },
        alt: {
            type: String,
            default: "抱歉！你的浏览器不支持H5视频播放"
        },
        width: {
            type: String,
            default: ""
        },
        height: {
            type: String,
            default: ""
        },
        controls: {
            type: Boolean,
            default: true
        },
        type: {
            type: String,
            default: "mp4"
        }
    }
};
</script>

<style lang="less" scoped>
.mon-video {
    padding: 0;
    margin: 0;
    width: 100%;
    text-align: center;
}
</style>