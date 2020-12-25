<template>
    <div class="mon-location">
        <div class="mon-location-get" @click="loadMap" v-show="!showMap">
            <svg
                t="1608805277648"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2604"
                width="16"
                height="16"
            >
                <path
                    d="M512 64a298.24 298.24 0 0 0-124.586667 26.24c-38.613333 17.493333-72.533333 41.557333-101.674666 72.192A341.376 341.376 0 0 0 192 400c0 34.986667 14.165333 83.84 42.496 146.56a1824.853333 1824.853333 0 0 0 97.493333 185.941333c36.693333 61.269333 72.533333 114.474667 107.52 159.701334 34.986667 45.226667 59.136 67.797333 72.490667 67.797333 13.354667 0 37.376-22.613333 72.106667-67.84 34.688-45.184 70.528-98.56 107.477333-160.085333a1810.645333 1810.645333 0 0 0 97.92-186.368c28.330667-62.72 42.496-111.274667 42.496-145.706667a341.376 341.376 0 0 0-93.738667-237.568 323.541333 323.541333 0 0 0-101.674666-72.192A298.24 298.24 0 0 0 512 64z m0 475.989333c-36.693333 0-68.053333-13.696-94.165333-41.130666-26.112-27.392-39.168-60.373333-39.168-98.858667 0-38.485333 13.056-71.466667 39.168-98.858667 26.112-27.434667 57.514667-41.130667 94.165333-41.130666 36.693333 0 68.053333 13.696 94.165333 41.130666 26.112 27.392 39.168 60.373333 39.168 98.858667 0 38.485333-13.056 71.466667-39.168 98.858667-26.112 27.434667-57.514667 41.130667-94.165333 41.130666z"
                    p-id="2605"
                    fill="#ffffff"
                />
            </svg>
            获取位置
        </div>
        <div class="mon-map" v-show="showMap">
            <div class="mon-map-header">
                <div class="mon-map-header-tips" id="mon-map-header-tips" v-html="tips"></div>
                <button
                    type="button"
                    class="mon-map-btn"
                    :disabled="!initArress"
                    @click="clearMap"
                >移除位置</button>
            </div>
            <div class="mon-map-container" id="mon-map-container" v-show="showMapView"></div>
            <div class="mon-map-footer" v-show="showMapView">
                <button
                    type="button"
                    class="mon-map-btn"
                    :disabled="!initArress"
                    @click="getPosition"
                >{{resetTips}}</button>
                <div class="mon-map-footer-search">
                    <input
                        type="search"
                        class="mon-map-input"
                        id="mon-map-search"
                        placeholder="请输入搜索的地点"
                        @keyup.enter="searchPosition"
                    />
                    <a class="mon-map-input-search" @click="searchPosition">
                        <svg
                            t="1608875575132"
                            class="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="2483"
                            width="16"
                            height="16"
                        >
                            <path
                                d="M902.4 889.6l-156.8-156.8c156.8-147.2 166.4-393.6 22.4-553.6S371.2 12.8 211.2 160C51.2 307.2 44.8 553.6 192 713.6c131.2 140.8 342.4 166.4 502.4 60.8l160 163.2c12.8 12.8 32 12.8 44.8 0 12.8-12.8 16-35.2 3.2-48z m-755.2-448c0-182.4 147.2-329.6 329.6-329.6 182.4 0 329.6 147.2 329.6 329.6 0 182.4-147.2 329.6-329.6 329.6C294.4 774.4 147.2 624 147.2 441.6z"
                                p-id="2484"
                                fill="#1296db"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "MonLocation",
    props: {
        // 支持v-model绑定获取地址信息
        value: {
            default: ""
        },
        // v-model双向绑定返回的数据格式
        type: {
            default: "1",
            validator: function(val) {
                // 1表示返回完整的object信息，0表示只返回地址字符串信息
                return ["0", "1", 0, 1].indexOf(val) != -1;
            }
        },
        // api的key
        apikey: {
            type: String
            // default: "ed3f3956c5b3d30b46c1045517c2b23f"
        },
        // 是否直接显示地图
        show: {
            type: Boolean,
            default: false
        },
        // 是否渲染地图
        showMapView: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            init: false,
            showMap: false,
            map: null,
            geoLocation: null,
            autoSearch: null,
            marker: null,
            callback: "MonLocationApiLoad",
            api: "https://webapi.amap.com/maps?v=1.4.15",
            markIcon: "https://webapi.amap.com/theme/v2.0/markers/n/mark_r.png",
            position: "",
            formattedAddress: "",
            lng: "",
            lat: ""
        };
    },
    computed: {
        tips() {
            if (this.formattedAddress && this.lng && this.lat) {
                return `<div>${this.formattedAddress}</div><div><span style="margin-right: 14px">经度：${this.lng}</span><span>纬度：${this.lat}</span></div>`;
            } else {
                return "<div>获取位置信息中...</div>";
            }
        },
        resetTips() {
            if (this.formattedAddress && this.lng && this.lat) {
                return "重新获取位置";
            } else {
                return "获取位置中...";
            }
        },
        initArress() {
            return this.formattedAddress && this.lng && this.lat;
        },
        address() {
            return {
                address: this.formattedAddress,
                lng: this.lng,
                lat: this.lat
            };
        }
    },
    watch: {
        // 监听同步v-model
        formattedAddress(value) {
            let data = this.type == "1" ? this.address : value;
            this.$emit("input", data);
        }
    },
    mounted() {
        // 异步加载地图JS回调方法
        window.MonLocationApiLoad = () => {
            this.map = new AMap.Map("mon-map-container", {
                resizeEnable: true,
                zoom: 15
            });
            // 加载插件
            this.map.plugin(
                ["AMap.Geolocation", "AMap.ToolBar", "AMap.Autocomplete"],
                () => {
                    // 定位
                    this.geoLocation = new AMap.Geolocation({
                        enableHighAccuracy: true, //是否使用高精度定位，默认:true
                        timeout: 10000, //超过10秒后停止定位，默认：无穷大
                        maximumAge: 0, //定位结果缓存0毫秒，默认：0
                        convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
                        showButton: false, //显示定位按钮，默认：true
                        buttonPosition: "LB", //定位按钮停靠位置，默认：'LB'，左下角
                        buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                        showMarker: false, //定位成功后在定位到的位置显示点标记，默认：true
                        showCircle: true, //定位成功后用圆圈表示定位精度范围，默认：true
                        panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
                        zoomToAccuracy: false //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                    });
                    this.map.addControl(this.geoLocation);
                    // 设置定位标志位
                    this.marker = new AMap.Marker({
                        icon: this.markIcon
                    });
                    // 获取当前定位
                    this.geoLocation.getCurrentPosition((status, data) => {
                        if (status == "complete") {
                            // 操作成功
                            this.formattedAddress = data.formattedAddress;
                            this.position = data.position;
                            this.lng = data.position.lng;
                            this.lat = data.position.lat;

                            // 定位标志
                            this.marker.setPosition(this.position);
                            this.marker.setTitle(this.formattedAddress);
                            this.map.add(this.marker);
                        } else {
                            console.error(data);
                        }
                    });

                    // 简单缩放
                    this.map.addControl(
                        new AMap.ToolBar({
                            liteStyle: true
                        })
                    );
                    //输入提示
                    this.autoSearch = new AMap.Autocomplete({
                        // input: "mon-map-search"
                    });
                }
            );
        };
        // 初始化显示地图
        if (this.show) {
            this.loadMap();
        }
    },
    methods: {
        getAddress() {
            return this.address;
        },
        // 加载地图
        loadMap() {
            this.showMap = true;
            if (!this.init) {
                let url =
                    this.api +
                    "&key=" +
                    this.apikey +
                    "&callback=" +
                    this.callback;
                let jsapi = document.createElement("script");
                jsapi.charset = "utf-8";
                jsapi.src = url;
                document.head.appendChild(jsapi);
                this.init = true;
            } else {
                // 已加载，直接调用
                window.MonLocationApiLoad();
            }
        },
        // 移除地图
        clearMap() {
            this.map && this.map.destroy();
            this.map = null;
            this.geoLocation = null;
            this.clearAddress();
            this.showMap = false;
        },
        // 重新定位
        getPosition() {
            if (this.initArress && this.geoLocation && this.marker) {
                this.clearAddress();
                this.geoLocation.getCurrentPosition((status, data) => {
                    if (status == "complete") {
                        // 操作成功
                        this.formattedAddress = data.formattedAddress;
                        this.lng = data.position.lng;
                        this.lat = data.position.lat;
                        this.position = data.position;
                        // 设置定位标志
                        this.marker.setTitle(this.formattedAddress);
                        this.marker.setPosition(this.position);
                        // 绘制地图坐标
                        this.map.remove(this.marker);
                        this.map.add(this.marker);
                        this.map.setCenter(this.position);
                    } else {
                        console.error(data);
                    }
                });
            }
        },
        // 清除地址信息
        clearAddress() {
            this.formattedAddress = "";
            this.lng = "";
            this.lat = "";
            this.position = "";
            document.getElementById("mon-map-search").value = "";
        },
        // 搜索
        searchPosition() {
            let search = document.getElementById("mon-map-search").value;
            if (search && this.initArress && this.autoSearch && this.marker) {
                this.autoSearch.search(search, (status, result) => {
                    if (status == "complete" && result.tips.length) {
                        // 操作成功
                        let data = result.tips[0];
                        // this.formattedAddress = data.district + data.name;
                        this.formattedAddress = search;
                        this.lng = data.location.lng;
                        this.lat = data.location.lat;
                        this.position = data.location;
                        // 设置定位标志
                        this.marker.setTitle(this.formattedAddress);
                        this.marker.setPosition(this.position);
                        // 绘制地图坐标
                        this.map.remove(this.marker);
                        this.map.add(this.marker);
                        this.map.setCenter(this.position);
                    } else {
                        console.error(result);
                    }
                });
            }
        }
    }
};
</script>
<style lang="less" scoped>
.mon-location {
    padding: 0;
    margin: 0;

    .mon-location-get {
        text-align: center;
        width: 200px;
        background: #007bff;
        color: #ffffff;
        display: inline-block;
        padding: 6px 16px;
        cursor: pointer;
        border-radius: 4px;
        font-size: 14px;

        svg {
            position: relative;
            top: 2px;
        }

        &:hover {
            background: #27a9e3;
        }

        &:active {
            background: #2875e8;
        }
    }

    .mon-map {
        width: 100%;
        margin: 0;
        padding: 0;
        font-size: 14px;
        color: #333333;

        .mon-map-header,
        .mon-map-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #ffffff;
            width: 100%;
            height: 60px;
            text-align: left;
            padding: 4px 8px;
            position: relative;
        }

        .mon-map-container {
            width: 100%;
            height: 360px;
        }

        .mon-map-btn {
            text-align: center;
            padding: 6px 10px;
            background: #ebebeb;
            border-radius: 4px;
            cursor: pointer;
            border: 0;
            outline: 0;

            &:hover {
                background: #cbcbcb;
            }

            &:focus {
                background: #aaaaaa;
            }

            &:active {
                background: #aaaaaa;
            }
        }

        .mon-map-footer-search {
            min-width: 60%;
            position: relative;
        }

        .mon-map-input {
            text-align: left;
            outline: 0;
            height: 33px;
            padding: 4px 8px;
            border: 1px solid #dddddd;
            // min-width: 220px;
            width: 100%;
            font-size: 14px;

            padding-right: 36px;

            &:focus {
                border-color: #2875e8;
            }
        }

        .mon-map-input-search {
            display: inline-block;
            height: 32px;
            line-height: 32px;
            font-size: 14px;
            padding: 4px 8px 0 8px;
            text-align: center;
            border-left: 1px solid #dddddd;
            position: absolute;
            top: 0px;
            right: 0px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;

            &:active {
                background: #eeeeee;
            }
        }
    }
}
</style>