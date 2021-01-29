## dialog弹窗组件

### 参数

| 参数名 | 类型 | 是否必须 | 描述 |
| -------- | -------- | -------- | -------- |
| value     | Boolean     | 是     | 打开关闭弹窗     |
| type     | String     | 否     | 弹窗类型，支持alert、links、confirm、password、custom、prompt，默认alert     |
| title     | String     | 否     | 弹窗标题     |
| msg     | String     | 否     | 提示信息     |
| showOldPwd     | Boolean     | 否     | 是否显示旧密码输入框，当弹窗类型为password时生效，默认显示     |
| showMask     | Boolean     | 否     | 是否显示背景幕布，默认显示     |
| isPassword     | Boolean     | 否     | 输入框是否为密码类型，type为prompt时有效，默认false     |
