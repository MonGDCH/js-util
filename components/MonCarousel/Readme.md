## 图片轮播图组件

### 参数

| 参数名 | 类型 | 是否必须 | 描述 |
| -------- | -------- | -------- | -------- |
| imgs     | Array     | 否     | 图片列表，数组包含对象参数，具体请看imgs说明     |
| height     | Number     | 否     | 轮播图高度，默认最小高度300px     |
| autoPlay     | Boolean     | 否     | 自动播放，默认true     |
| timeGap     | Number     | 否     | 自动播放间隔时间，默认3000，单位毫秒     |
| showSwitch     | Boolean     | 否     | 显示上一页下一页按钮，默认true    |
| showBullet     | Boolean     | 否     | 显示分页，默认true     |

#### imgs参数说明

| 参数名 | 类型 | 描述 |
| -------- | -------- | -------- |
| img     | String     | 图片URL    |

更多参数可自行添加，item的数据回通过事件回调返回给上层业务组件

### 事件

| 事件名  | 描述 |
| --------  | -------- |
| tap     | 点击轮播图图片事件    |

#### clickEvent事件参数说明

| 参数名 | 类型 | 描述 |
| -------- | -------- | -------- |
| item     | Object     | 组件imgs的节点数据     |

