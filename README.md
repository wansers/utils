### 前端常用函数工具库

## 使用

安装相关依赖

``` bash
yarn install
或者 
npm install
或者
pnpm install // 推荐使用
```

打包

``` bash
pnpm run build
```

使用

安装：

``` bash
yarn add @wansers/utils
或者
npm i @wansers/utils
或者
pnpm add @wansers/utils
``` 

使用
``` javascript
import { isPhoneNum, isDigit } from '@wansers/utils'
```

## API文档

### UA相关

- [isWindows](./src/ua/index.ts)&emsp;&emsp;是否Windows端
- [isMacOs](./src/ua/index.ts)&emsp;&emsp;是否Mac端
- [isMobile](./src/ua/index.ts)&emsp;&emsp;是否移动端
- [isAndroid](./src/ua/index.ts)&emsp;&emsp;是否Android
- [isIOS](./src/ua/index.ts)&emsp;&emsp;是否IOS
- [isIPhone](./src/ua/index.ts)&emsp;&emsp;是否IPhone
- [isIPad](./src/ua/index.ts)&emsp;&emsp;是否IPad
- [isIPhoneX](./src/ua/index.ts)&emsp;&emsp;是否IphoneX以上机型

### 常用正则相关

- [isDigit](./src/regex/index.ts)&emsp;&emsp;是否数字
- [isDecimal](./src/regex/index.ts)&emsp;&emsp;是否小数
- [isPhoneNum](./src/regex/index.ts)&emsp;&emsp;是否手机号

### 后续添加中...
