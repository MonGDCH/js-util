# js-util

> v1.0.0

- 发布第一个版本

> v1.0.1

- 增加图片单选、图片多选组件
- 大幅度优惠打包性能，减小包的体积

> v1.0.2

- 更新文档，补充图片单选、多选禁用功能

> v1.0.3

- 优化代码结构
- 增加移动端Toast组件
- 优化mon-ui样式库

> v1.0.4

- 优化代码结构
- 增加mon-address地址选择组件

> v1.0.5

- 优化代码结构
- 增加mon-location地址定位组件


## 回到顶部组件

### 模板语法

```vue
<mon-back-top :time="360" />
```

### API

| 参数名 | 类型 | 是否必须 | 描述 |
| -------- | -------- | -------- | -------- |
| goto     | Number     | 否     | 滚动位置，默认0     |
| time     | Number     | 否     | 动画时间，默认300毫秒    |


## 走马灯轮播图

### 模板语法

```vue
<mon-carousel :imgs="[{img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3224110779,1779790953&fm=26&gp=0.jpg'},{img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3224110779,1779790953&fm=26&gp=0.jpg'}]"/>

```

### API

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



## 日期选择

### 模板语法

```vue
<mon-date-picker/>
```

### API

| 参数名 | 类型 | 是否必须 | 描述 |
| -------- | -------- | -------- | -------- |
| value     | String     | 是     | 绑定v-model动态获取选中的值     |
| format     | String     | 否     | 日期格式化方式，默认 yyyy-MM-dd   |
| placeholder     | String     | 否     | 描述信息  |
| readonly     | Boolean     | 否     | 是否只读，默认false  |


## 弹窗

### 模板语法

```vue
<mon-dialog v-model="show" :msg="`hello world!`"/>
```

### API

| 参数名 | 类型 | 是否必须 | 描述 |
| -------- | -------- | -------- | -------- |
| value     | Boolean     | 是     | 打开关闭弹窗     |
| type     | String     | 否     | 弹窗类型，暂时只支持alert、links、confirm、password，默认alert     |
| title     | String     | 否     | 弹窗标题     |
| msg     | String     | 否     | 提示信息     |
| showOldPwd     | Boolean     | 否     | 是否显示旧密码输入框，当弹窗类型为password时生效，默认显示     |
| showMask     | Boolean     | 否     | 是否显示背景幕布，默认显示     |


## 顶部加载条

### 调用方法

```vue
this.$LoadingBar.start()
```

### API

#### 配置接口
```
loadingbar.config({
     percentNum: 0.1
})
```

|参数|说明|类型|可选择|默认值|
|:----|:---|:----- |:-----|-----|
|speed| 加载速度 | Number | 0-100 | 5 |
| easing | spinner加载动画 | String | linear, ease, cubic-bezier... | 贝萨尔曲线值|
| percentNum | 每次前进的百分比 |Float|0-1|Math.random()|
|showSpinner|是否显示spinner|Boolean|true, false| false|



#### start, 开始

```
loadingbar.start()

this.$LoadingBar.start()
```

#### end, 结束

```
loadingbar.finish()

this.$LoadingBar.finish()
```

#### error, 错误结束

```
loadingbar.error()

this.$LoadingBar.error()
```

## 全屏加载层

### 调用方法

```vue
this.$LoadingModal.start()
```

### API

#### start, 开始

```
LoadingModal.start()

this.$LoadingModal.start()
```

#### end, 结束

```
LoadingModal.finish()

this.$LoadingModal.finish()
```

## 音乐播放器

### 模板语法

```vue
<mon-music :music="`https://www.runoob.com/try/demo_source/horse.ogg`"/>
```

### API

| 参数名 | 类型 | 是否必须 | 描述 |
| -------- | -------- | -------- | -------- |
| isPlay     | Boolean     | 否     | 是否自动播放     |
| music     | String     | 是     | 音乐路径 |


## 移动端分页列表

### 模板语法

```vue
<mon-page-list :loading="loading" :finished="finished" @load="load">
    <newItem
        v-for="(item, index) in news"
        :title="item.title"
        :item="item"
        :key="index"
        @clickEvent="clickNews"
    />
</mon-page-list>
```

### API

#### 参数

| 参数名 | 类型 | 是否必须 | 描述 |
| -------- | -------- | -------- | -------- |
| loading     | Boolean     | 否     | 是否加载中     |
| finished  | Boolean     | 否     | 是否加载完成   |
| moreTxt  | String     | 否     | 加载更多文本   |
| loadingTxt  | String     | 否     | 加载中文本   |
| finishedTxt  | String     | 否     | 加载完成文本   |
| errorTxt  | String     | 否     | 加载失败文本   |


#### 事件

| 事件名  | 描述 |
| --------  | -------- |
| load     | 点击加载更多回调事件   |


## 分页

### 模板语法

```vue
<mon-paging v-model="p" :count="12" :pageSize="4" />
```

### API

#### 参数

| 参数名 | 类型 | 是否必须 | 描述 |
| -------- | -------- | -------- | -------- |
| value     | Number     | 否     | 当前分页     |
| pageSize  | Number     | 否     | 每页显示记录数，默认 10     |
| count     | Number     | 否     | 总记录数     |


#### 事件

| 参数名  | 描述 | 回调参数 |
| -------- | -------- | -------- |
| change   | 页码改变的回调，参数是改变后的页码及每页条数  | Function(page)  |


## 移动端签名

### 模板语法

```vue
<Signature @signature="prev" />
```

### API

#### 事件

| 事件名  | 描述 |
| -------- | -------- |
| signature | 签名完成，点击保存回调，返回签名的base64图片数据   |

## 轻提示


### 调用方法

```vue
this.$toastr.send("Hello mon-util");
```

### API

#### 方法

打开提示框
- open(config)

快捷提示
- send(title, config)

定义全局默认配置
- config(config)

关闭提示框
- close(name)

销毁提示框
- destroy()

#### config参数

| 参数名 | 类型 | 是否必须 | 描述 |
| -------- | -------- | -------- | -------- |
| title     | String    | 否     | 通知提醒的标题	     |
| desc      | String    | 否     | 通知提醒的内容，为空或不填时，自动应用仅标题模式下的样式     |
| render    | Function  | 否     | 自定义描述内容，使用 Vue 的 Render 函数，如果同时设置了 render 和 desc，则只显示 render 的内容     |
| duration  | Number    | 否     | 自动关闭的延时，单位秒，不关闭可以写 0，默认值 4.5     |
| name      | String    | 否     | 当前通知的唯一标识    |
| onClose   | Function  | 否     | 关闭时的回调	     |


## 视频

### 模板语法

```vue
<mon-video :src="`https://www.runoob.com/try/demo_source/mov_bbb.mp4`" :width="`800px`" />
```

### API

| 参数名 | 类型 | 是否必须 | 描述 |
| -------- | -------- | -------- | -------- |
| src     | String    | 是     | 视频路径	     |
| alt     | String    | 否     | 不支持播放时的提示文案     |
| width   | String  | 否     | 播放器宽度，默认100%     |
| height  | String    | 否     | 播放器宽度，默认100%     |
| controls  | Boolean    | 否     | 是否显示播放器控制器，默认true    |
| type  | String  | 否     | 视频类型，默认mp4	     |


## 图片

### 模板语法

```vue
<mon-img :src="`http://kab.test/public/static/images/logo.png`" :width="`400px`"/>
```

### API

| 参数名 | 类型 | 是否必须 | 描述 |
| -------- | -------- | -------- | -------- |
| src     | String    | 是     | 图片路径	     |
| alt     | String    | 否     | 图片加载失败提示文案     |
| width   | String    | 否     | 图片宽度，默认100%     |
| height  | String    | 否     | 图片宽度，默认100%     |


## 文字

### 模板语法

```vue
<mon-word :value="`test`" :color="`success`" @click="open" />
```

### API

| 参数名 | 类型 | 是否必须 | 描述 |
| -------- | -------- | -------- | -------- |
| value     | String    | 是     | 文字内容	     |
| color     | String    | 否     | 文字颜色，支持：primary、success、warning、error及默认的black类型     |

#### 事件

| 事件名  | 描述 |
| -------- | -------- |
| click | 点击文字，回调接口方法   |


## 图片单选

### 模板语法

```vue
<mon-radio-img :list="arr" v-model="str"></mon-radio-img>
```

### API

| 参数名 | 类型 | 是否必须 | 描述 |
| -------- | -------- | -------- | -------- |
| value     | String    | 是     | 选中的选项数据值，可使用v-model绑定	     |
| disabled | Boolean    | 否     | 是否禁用     |
| list     | Array    | 否     | 图片数据列表，例子：[{ img: 'images/1.png', 'title': '1.png', value: '1' },{ img: 'images/2.png', 'title': '2.png', value: '2' }]     |



## 图片多选

### 模板语法

```vue
<mon-checkbox-img :list="arr" v-model="str"></mon-checkbox-img>
```

### API

| 参数名 | 类型 | 是否必须 | 描述 |
| -------- | -------- | -------- | -------- |
| value     | Array    | 是     | 选中的选项数据值，可使用v-model绑定	     |
| disabled | Boolean    | 否     | 是否禁用	     |
| list     | Array    | 否     | 图片数据列表，例子：[{ img: 'images/1.png', 'title': '1.png', value: '1' },{ img: 'images/2.png', 'title': '2.png', value: '2' }]     |


## 基于高德地图的地址获取组件

### API

| 参数名 | 类型 | 是否必须 | 描述 |
| -------- | -------- | -------- | -------- |
| apikey     | String     | 是     | 高德地图JSAPI的key值     |
| value     | Any     | 否     | 用户通过v-model双向绑定获取当前地址     |
| type     | Number     | 否     | 基于v-model绑定获取当前地址时返回的数据类型，1：地址、LngLat(object类型)；0：地址(字符串类型) ，默认1   |
| show     | Boolean     | 否     | 是否直接显示地图，默认false     |
| showMapView     | Boolean     | 否     | 是否渲染地图，默认true     |

