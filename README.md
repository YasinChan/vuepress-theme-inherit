# vuepress-theme-inherit

> Vuepress 继承于`@vuepress/theme-default`的博客主题，支持归档和标签功能。

## DEMO
<https://yasinchan.com>

## 安装
> 注：以下操作均来自在官方文档，可事先熟悉[文档](https://vuepress.vuejs.org/zh/)  

在安装和配置 [vuepress](https://vuepress.vuejs.org/zh/guide/getting-started.html#%E7%8E%B0%E6%9C%89%E9%A1%B9%E7%9B%AE) 基础框架后，执行如下操作
1. 安装此主题
```
yarn add vuepress-theme-inherit
```
2. 在 `/doc`目录下创建`/post` `/tags` `/archives`目录来载入博客首页列表、标签和归档功能
    ```
    .
    ├── docs
    │   ├── tags
    │   │   └── README.md
    │   ├── archives
    │   │   └── README.md
    │   ├── post
    │   │   └── README.md
    |   |
    ```
3. 在`config.js`中加入以下配置来生成导航栏
    ```
    themeConfig: {
      nav: [
        ...
        {text: '博客', link: '/post/'},
        {text: '标签', link: '/tags/'},
        {text: '归档', link: '/archives/'},
        ...
      ]
    },
    ```
4. 在博客 markdown 文档的 [Front Matter](https://vuepress.vuejs.org/zh/guide/frontmatter.html) 中加入几个关键字，来让脚本进行排序
    ```
    ---
    created: 2020-1-1
    updated: 2020-2-1
    tags: 
      - 配置
      - 主题
      - 索引
    ---
    ```
    其中
    1. `created` 和 `updated` 用来记录博客创建和编辑时间，作用是将在博客页面展示时间以及用于博客首页排序（排序规则 updated -> created -> 没有配置）
    2. `created` 还会用来归档排序
    3. `tags` 用来做标签筛选
    4. 博客首页会自动根据 `/post` 目录下创建的 markdown 博客，生成对应的博客列表
    5. 以上都会自动配置，无需做额外操作