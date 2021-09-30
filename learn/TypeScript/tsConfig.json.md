# compilerOptions
- **help**: 帮助
- **project**: 编译指定目录下的项目。这个目录应该包含一个 tsconfig.json文件来管理编译。查看 tsconfig.json文档了解更多信息。
- **declaration**: 生成相应的 .d.ts文件
- **sourceMap**: 是否输出sourceMap
- **inlineSourceMap**: 生成单个sourcemaps文件，而不是将每sourcemaps生成不同的文件
- **inlineSources**: 将代码与sourcemaps生成到一个文件中，要求同时设置了 -inlineSourceMap或 --sourceMap属性
- **locale**: 显示错误时使用的语言，比如：en-us。
- **module**: 指定生成哪个模块系统代码(target === "ES6" ? "ES6" : "commonjs"
  - 支持列表
    - None
    - CommonJS
    - AMD
    - System
    - UMD
    - "ES6"或 "ES2015"
  - 只有 "AMD"和 "System"能和 --outFile一起使用。
  - "ES6"和 "ES2015"可使用在目标输出为 "ES5"或更低的情况下。
- **baseUrl**: 解析非相对模块名的基准目录 [模块解析文档](https://www.tslang.cn/docs/andbook/module-resolution.html#virtual-directories-with-rootdirs)
- **paths**: 模块名到基于 baseUrl的路径映射的列表
- **outDir**: 指定输出目录
- **rootDir**: 指定输出目录结构
- **rootDirs**: 指定输出目录结构，文件目录
- **target**: 指定ES版本，"ESNext"最新的生成目标列表为 [ES proposed features](https://ithub.com/tc39/proposals)
- **traceResolution**: 生成模块解析日志
- **listEmittedFiles**: 打印出编译后生成文件的名字
- **listFiles**: 编译过程中打印文件名
- **types**: 要包含的类型声明文件名列表
- **typeRoots**: 要包含的类型声明文件路径列表  [types-typeroots-and-types](https://ww.tslang.cn/docs/handbook/tsconfig-json.html#types-typeroots-and-types)
- **version**: 打印编译器版本号
- **watch**: 开启监视者模式 [watchConfig](https://www.tslang.cn/docs/handbook/configuring-watch.html)

# 命令行支持
- --(most compilerOptions)
- **-d**: compilerOptions.declaration
- **-h**: compilerOptions.help
- **-m**: compilerOptions.module
- **-p**: compilerOptions.project
- **-t**: compilerOptions.target
- **-v**: compilerOptions.version
- **-w**: compilerOptions.watch

# Resources
- [compilerOptions(编译选项)资料来源](https://www.tslang.cn/docs/handbook/compiler-options.html)