<template>
    <div class="signature">
        <div class="title">请在下方虚线方框内签名</div>
        <canvas ref="canvas" id="canvas">签名区域</canvas>
        <div class="canvas-btn">
            <button class="primary" @click="save('signature')">保存</button>
            <button class="danger" @click="clear">清除</button>
        </div>
    </div>
</template>
 
<script>
let draw;
let canvasWidth;
let canvasHeight;
let preHandler = function(e) {
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
};

var meta = document.createElement("meta");
meta.content = "portrait";
document.getElementsByTagName("head")[0].appendChild(meta);

// 获取当前屏幕的宽高
function getWindowSize() {
    canvasWidth = document.documentElement.clientWidth - 40;
    if (!canvasWidth) {
        return;
    }
    hengshuping();
}

// 判断手机横竖屏状态：
function hengshuping() {
    if (window.orientation == 180 || window.orientation == 0) {
        // alert("竖屏状态！")
        canvasHeight =
            document.documentElement.clientHeight -
            document.documentElement.clientHeight / 1.4;
    }
    if (window.orientation == 90 || window.orientation == -90) {
        // alert("横屏状态！")
        canvasHeight = document.documentElement.clientHeight - 63;
    }
}

getWindowSize();

window.onresize = function() {
    getWindowSize();
    draw = {};
    draw = new Draw("canvas");
    draw.init();
};

/**
 * cavas绘图类
 */
class Draw {
    constructor(el) {
        if (!canvasWidth) {
            return;
        }
        this.el = el;
        this.canvas = document.getElementById(this.el);
        if (!this.canvas) {
            return;
        }
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
        this.cxt = this.canvas.getContext("2d");
        this.stageInfo = canvas.getBoundingClientRect();
        this.path = {
            beginX: 0,
            beginY: 0,
            endX: 0,
            endY: 0
        };
    }
    init(btn) {
        if (!this.canvas) {
            return;
        }
        this.canvas.addEventListener(
            "touchstart",
            event => {
                document.addEventListener("touchstart", preHandler, {
                    passive: false
                });
                this.drawBegin(event);
            },
            { passive: false }
        );
        this.canvas.addEventListener(
            "touchend",
            event => {
                document.addEventListener("touchend", preHandler, {
                    passive: false
                });
                this.drawEnd();
            },
            { passive: false }
        );
        this.clear(btn);
    }
    drawBegin(e) {
        window.getSelection()
            ? window.getSelection().removeAllRanges()
            : document.selection.empty();
        this.cxt.strokeStyle = "#000";
        this.cxt.beginPath();
        this.cxt.moveTo(
            e.changedTouches[0].clientX - this.stageInfo.left,
            e.changedTouches[0].clientY - this.stageInfo.top
        );
        this.path.beginX = e.changedTouches[0].clientX - this.stageInfo.left;
        this.path.beginY = e.changedTouches[0].clientY - this.stageInfo.top;
        canvas.addEventListener(
            "touchmove",
            () => {
                this.drawing(event);
            },
            { passive: false }
        );
    }
    drawing(e) {
        this.cxt.lineTo(
            e.changedTouches[0].clientX - this.stageInfo.left,
            e.changedTouches[0].clientY - this.stageInfo.top
        );
        this.path.endX = e.changedTouches[0].clientX - this.stageInfo.left;
        this.path.endY = e.changedTouches[0].clientY - this.stageInfo.top;
        this.cxt.stroke();
    }
    checkCanvas() {
        var blank = document.createElement("canvas");
        blank.width = canvas.width;
        blank.height = canvas.height;
        return canvas.toDataURL() == blank.toDataURL();
    }
    drawEnd() {
        document.removeEventListener("touchstart", preHandler, false);
        document.removeEventListener("touchend", preHandler, false);
        document.removeEventListener("touchmove", preHandler, false);
    }
    clear() {
        this.cxt.clearRect(0, 0, canvasWidth, canvasHeight);
    }
    save(fileName) {
        let imgURL = canvas.toDataURL("image/png");
        return imgURL;
    }
}
export default {
    name: 'MonSignature',
    mounted() {
        draw = new Draw("canvas");
        draw.init();
    },
    methods: {
        clear: function() {
            draw.clear();
        },
        save: function(fileName) {
            let data = draw.save(fileName);
            if (draw.checkCanvas()) {
                alert("请先签名");
                return;
            }
            this.$emit("signature", data);
            this.clear();
        }
    }
};
</script>
 
<style lang="less" scoped>
.signature {
    position: relative;
    margin: 10px auto;
    padding: 4px;

    .title {
        text-align: left;
    }

    #canvas {
        border: 1px dashed #ccc;
        background: #fff;
        width: 100%;
    }
    .canvas-btn {
        height: 30px;
        padding: 5px;
        text-align: center;
        line-height: 30px;

        button {
            border: 1px solid dodgerblue;
            background: dodgerblue;
            color: #fff;
            border-radius: 4px;
            padding: 2px 30px;
            margin: 0 15px;
            font-size: 14px;
        }
    }

    * {
        touch-action: pan-y;
    }
}
</style>