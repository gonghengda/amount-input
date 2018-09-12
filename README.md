# ane-react-native-ui

_注_ : 此分支适用于 [`haul`](https://github.com/callstack/haul) 开发的RN项目。更多信息参考 [haul-react-native-example](https://g.showgold.cn/anneng/haul-react-native-example)

- 克隆项目

```shell
git clone git@g.showgold.cn:anneng/ane-react-native-ui.git
```

- 安装依赖

```shell
npm install
```

- 链接项目

```shell
npm link
```

- 目录结构

```shell
.
├── example                    # 示例目录
├── README.md                  # README文档
├── lib                        # UI编译目录
├── package-lock.json
├── package.json               # npm依赖配置
└── src                        # 组件源码目录
    ├── components             # 组件目录
    └── index.js               # 导出入口文件
```

## 组件开发要求

1 . `每一个` 组件 `方法` 需要添加注释，如下

```jsx
/**
 * 渲染头像
 * @param {*} src 路径
 * @param {*} size 尺寸
 */
const renderAvatar = (src, size) => {
  return src ? <Avatar src={src} size={size} /> : <Avatar icon="user" size={size} />;
};
```

2 . 组件命名为 `大驼峰` ，如下

```jsx
export default class AvatarList extends Component {
  render() {
    // ...
  }
}
```

3 . 组件文档名为 `README.md` 与组件在同一目录，如下

文档至少由以下四部分组成，具体格式参照文档 _[`doc-cli`](https://g.showgold.cn/anneng/docs-cli)_ :  

- 文档标题
- 文档顺序
- 组件示例
- 组件参数

```shell
.
└── button
    ├── README.md
    └── index.js
```
