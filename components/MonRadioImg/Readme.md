## 图片单选

### 模板语法

```vue
<mon-radio-img :list="arr" v-model="str"></mon-radio-img>
```

### API

| 参数名 | 类型 | 是否必须 | 描述 |
| -------- | -------- | -------- | -------- |
| value    | String    | 是     | 选中的选项数据值，可使用v-model绑定	     |
| disabled | Boolean   | 否     | 是否禁用     |
| list     | Array     | 否     | 图片数据列表，例子：[{ img: 'images/1.png', 'title': '1.png', value: '1' },{ img: 'images/2.png', 'title': '2.png', value: '2' }]     |
| width    | String    | 否     | 图片宽度，默认100%     |
| height   | String    | 否     | 图片宽度，默认100%     |