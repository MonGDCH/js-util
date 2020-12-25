## 基于高德地图的地址获取组件

### 参数

| 参数名 | 类型 | 是否必须 | 描述 |
| -------- | -------- | -------- | -------- |
| apikey     | String     | 是     | 高德地图JSAPI的key值     |
| value     | Any     | 否     | 用户通过v-model双向绑定获取当前地址     |
| type     | Number     | 否     | 基于v-model绑定获取当前地址时返回的数据类型，1：地址、LngLat(object类型)；0：地址(字符串类型) ，默认1   |
| show     | Boolean     | 否     | 是否直接显示地图，默认false     |
| showMapView     | Boolean     | 否     | 是否渲染地图，默认true     |
