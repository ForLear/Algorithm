# Front-End Coding Guidelines

<br />

### HTML编码格式规范
<br />

___

### CSS样式编码格式规范
<br />

**代码风格**

##### 1. 代码格式化

样式书写一般有两种格式：一种是紧凑格式（Compact）
```shell
.className { display: block;width: 50%; }
```
一种是紧凑格式（Expanded）
```shell
.className {
    display: block;
    width: 50%;
}
```
**团队约定：统一使用展开格式书写样式**

##### 2. 代码大小写

样式选择器，属性名，属性值关键字全部使用小写字母书写，属性字符串允许使用大小写。
```shell
/* 推荐 */
.jdc{
	display:block;
}
	
/* 不推荐 */
.JDC{
	DISPLAY:BLOCK;
}
```