## toastr提示组件

### 方法

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

### config参数

| 参数名 | 类型 | 是否必须 | 描述 |
| -------- | -------- | -------- | -------- |
| title     | String    | 否     | 通知提醒的标题	     |
| desc      | String    | 否     | 通知提醒的内容，为空或不填时，自动应用仅标题模式下的样式     |
| render    | Function  | 否     | 自定义描述内容，使用 Vue 的 Render 函数，如果同时设置了 render 和 desc，则只显示 render 的内容     |
| duration  | Number    | 否     | 自动关闭的延时，单位秒，不关闭可以写 0，默认值 4.5     |
| name      | String    | 否     | 当前通知的唯一标识    |
| onClose   | Function  | 否     | 关闭时的回调	     |


