<template>
    <div class="dialog-custom">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "dialog-custom"
};
</script>
<style scoped>
.dialog-custom {
    margin: 0 auto;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    -ms-box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    -o-box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background: #fff;
    display: inline-block;
    width: auto;
    text-align: left;
}
</style>