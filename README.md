# HTML编码格式规范
<br />

> 代码规范

### 1. 元素及标签闭合

HTML元素共有以下5种：
- 空元素：area、base、br、col、command、embed、hr、img、input、keygen、link、meta、param、source、track、wbr
- 原始文本元素：script、style
- RCDATA元素：textarea、title
- 外来元素：来自MathML命名空间和SVG命名空间的元素。
- 常规元素：其他HTML允许的元素都称为常规元素。

元素标签的闭合应遵循以下原则：
> 原始文本元素、RCDATA元素以及常规元素都有一个开始标签来表示开始，一个结束标签来表示结束。
> 某些元素的开始和结束标签是可以省略的，如果规定标签不能被省略，那么就绝对不能省略它。
> 空元素只有一个开始标签，且不能为空元素设置结束标签。
> 外来元素可以有一个开始标签和配对的结束标签，或者只有一个自闭合的开始标签，且后者情况下该元素不能有结束标签。

# CSS样式编码格式规范
<br />

> 代码风格

### 1. 代码格式化

样式书写一般有两种格式：一种是紧凑格式（Compact）
```css
.className { display: block;width: 50%; }
```
一种是紧凑格式（Expanded）
```javascript
.className {
    display: block;
    width: 50%;
}
```
**团队约定：统一使用展开格式书写样式**

### 2. 代码大小写

样式选择器，属性名，属性值关键字全部使用小写字母书写，属性字符串允许使用大小写。
```css
/* 推荐 */
.className{
	display:block;
}
	
/* 不推荐 */
.CLASSNAME{
	DISPLAY:BLOCK;
}
```

### 3. 选择器

- 尽量少用通用选择器 *
- 不使用 ID 选择器
- 不使用无具体语义定义的标签选择器
```css
/* 推荐 */
.className {}
.className li {}
.className li p{}

/* 不推荐 */
*{}
#className {}
.className div{}
```

### 4. 代码缩进

统一使用四个空格进行代码缩进，使得各编辑器表现一致（各编辑器有相关配置）
```css
.className {
    width: 100%;
    height: 100%;
}
```

### 5. 分号

每个属性声明末尾都要加分号；
```css
.className {
    width: 100%;
    height: 100%;
}
```

### 6. 代码易读性

左括号与类名之间一个空格，冒号与属性值之间一个空格
```css
/* 推荐 */
.className {
    width: 100%;
}

/* 不推荐 */
.className{
    width:100%;
}
```

逗号分隔的取值，逗号之后一个空格
```css
/* 推荐 */
.className {
    box-shadow: 1px 1px 1px #333, 2px 2px 2px #ccc;
}

/* 不推荐 */
.className{
    width:100%;
}
```

为单个css选择器或新申明开启新行
```css
/* 推荐 */
.className, 
.className_logo, 
.className_hd {
    color: #ff0;
}
.nav{
    color: #fff;
}

/* 不推荐 */
.className,className_logo,.className_hd {
    color: #ff0;
}.nav{
    color: #fff;
}
```

颜色值 rgb() rgba() hsl() hsla() rect() 中不需有空格，且取值不要带有不必要的 0
```css
/* 推荐 */
.className {
    color: rgba(255,255,255,.5);
}

/* 不推荐 */
.className {
    color: rgba( 255, 255, 255, 0.5 );
}
```

属性值十六进制数值能用简写的尽量用简写
```css
/* 推荐 */
.className {
    color: #fff;
}

/* 不推荐 */
.className {
    color: #ffffff;
}
```

不要为 0 指明单位
```css
/* 推荐 */
.className {
    margin: 0 10px;
}

/* 不推荐 */
.className {
    margin: 0px 10px;
}
```

### 7. 属性值引号

css属性值需要用到引号时，统一使用单引号
```css
/* 推荐 */
.className {
    font-family: 'Hiragino Sans GB';
}

/* 不推荐 */
.className {
    font-family: "Hiragino Sans GB";
}
```

### 8. 属性书写顺序

建议遵循以下顺序：
1. 布局定位属性：display / position / float / clear / visibility / overflow
2. 自身属性：width / height / margin / padding / border / background
3. 文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word
4. 其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient …
```css
/* 例如 */
.className {
    display: block;
    position: relative;
    float: left;
    width: 100px;
    height: 100px;
    margin: 0 10px;
    padding: 20px 0;
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    color: #333;
    background: rgba(0,0,0,.5);
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
```

### 9. CSS3浏览器私有前缀写法

CSS3 浏览器私有前缀在前，标准前缀在后
```css
/* 例如 */
.className {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
```
更多关于浏览器私有前辍写法：<a href="https://www.zhihu.com/question/21387264" target="_blank">#Vendor-specific extensions</a>

