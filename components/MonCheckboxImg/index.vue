<template>
    <div class="img-select-row">
        <div
            class="img-select-row-col-12 img-select-row-col-sm-6 img-select-row-col-md-4"
            v-for="(item, index) in list"
            :key="index"
        >
            <div
                :class="['img-select', (disabled ? 'allowed' : 'pointer')]"
                @click="checkboxImg(item.value)"
                :title="item.title"
            >
                <div class="img-select-img">
                    <mon-img :src="item.img" :alt="item.title" :width="width" :height="height" />
                </div>
                <div
                    :class="['img-select-title', [(selected.includes(item.value)) ? 'img-select-selected' : '']]"
                >{{item.title}}</div>
                <div :class="[(selected.includes(item.value)) ? 'img-select-active' : 'hidden']">
                    <svg
                        t="1608114556145"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="13154"
                        width="36"
                        height="36"
                    >
                        <path
                            d="M1019.345455 1024c-4.654545-6.981818-9.309091-16.290909-16.29091-20.945455C674.909091 674.909091 346.763636 346.763636 18.618182 20.945455 13.963636 13.963636 6.981818 9.309091 0 4.654545 6.981818 2.327273 13.963636 0 20.945455 0H1024v1003.054545c0 6.981818-2.327273 13.963636-4.654545 20.945455zM702.836364 463.127273c65.163636-65.163636 130.327273-130.327273 195.490909-193.163637-6.981818-9.309091-16.290909-18.618182-27.927273-34.909091-55.854545 58.181818-109.381818 114.036364-165.236364 169.89091-32.581818-32.581818-62.836364-62.836364-90.763636-93.09091l-30.254545 30.254546c39.563636 39.563636 79.127273 81.454545 118.690909 121.018182z"
                            p-id="13155"
                            fill="#1afa29"
                        />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MonImg from "../MonImg";
export default {
    name: "MonCheckboxImg",
    components: { MonImg },
    props: {
        // [{ img: 'images/1.png', 'title': '1.png', value: '1' },{ img: 'images/2.png', 'title': '2.png', value: '2' }]
        list: {
            type: Array,
            default: () => {
                return [];
            }
        },
        disabled: {
            type: Boolean,
            default: false
        },
        width: {
            type: String,
            default: null
        },
        height: {
            type: String,
            default: null
        },
        value: {
            type: Array,
            default: () => {
                return [];
            }
        }
    },
    data() {
        return {
            selected: this.value
        };
    },
    watch: {
        selected: {
            deep: true,
            handler(val) {
                this.$emit("input", val);
            }
        },
        value(val) {
            this.selected = val;
        }
    },
    methods: {
        // 图片单选
        checkboxImg(index) {
            if (!this.disabled) {
                if (this.selected.includes(index)) {
                    this.selected = this.selected.filter(v => v != index);
                } else {
                    this.selected.push(index);
                }
            }
        }
    }
};
</script>

<style lang="less" scoped>
.img-select-row {
    zoom: 1;
    display: block;
    margin-right: 0;
    margin-left: 0;
    position: relative;
    box-sizing: border-box;

    &::before,
    &::after {
        content: "";
        display: block;
        height: 0;
        width: 0;
        visibility: hidden;
        clear: both;
    }

    &-col-12,
    &-col-sm-6,
    &-col-md-4 {
        position: relative;
        width: 100%;
        float: left;
    }

    &-col-12 {
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }
}

@media (min-width: 576px) {
    .img-select-row {
        &-col-sm-6 {
            -ms-flex: 0 0 25%;
            flex: 0 0 25%;
            max-width: 25%;
        }
    }
}

@media (min-width: 768px) {
    .img-select-row {
        &-col-md-4 {
            -ms-flex: 0 0 16.666666%;
            flex: 0 0 16.666666%;
            max-width: 16.666666%;
        }
    }
}
.img-select {
    margin: 6px;
    padding: 0;
    position: relative;
    overflow: hidden;
    text-align: center;
    border-radius: 4px;
    min-width: 48px;
    min-height: 48px;

    &.pointer {
        cursor: pointer;
    }

    &.allowed {
        cursor: not-allowed;
    }

    .hidden {
        display: none;
    }

    .img-select-active {
        display: block;
        width: 100%;
        position: absolute;
        top: 0;
        height: 32px;
        text-align: right;
    }

    .img-select-title {
        position: absolute;
        padding: 6px 4px;
        background: rgba(0, 0, 0, 0.5);
        color: #fff;
        bottom: 0;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        &.img-select-selected {
            color: rgb(26, 250, 41);
        }
    }
}
</style>