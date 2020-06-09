# vuepress-theme-inherit

> The `vuepress` blog theme inherited from `@vuepress/theme-default`, supports archiving and tagging functions, and can automatically sort blogs by time.

## NPM
<https://www.npmjs.com/package/vuepress-theme-inherit>

## DEMO
<https://yasinchan.com>  
[Demo source code](https://github.com/YasinChan/vuepress-blog)

## 安装
> Note: The following operations can be found in the official document. Please familiarize yourself with the [documentation](https://vuepress.vuejs.org/zh/) first.  

After install and configure the basic [vuepress](https://vuepress.vuejs.org/zh/guide/getting-started.html#%E7%8E%B0%E6%9C%89%E9%A1%B9%E7%9B%AE) framework, do the following operations:
1. Install
```
yarn add vuepress-theme-inherit
```
2. Create a `/post` `/tags` `/archives` directory under the `/doc` directory to load the blog homepage list, tags and archive functions.
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
3. Add the following configration in the `config.js` to import the theme and generate the navigation bar.
    ```
    theme: 'vuepress-theme-inherit',
    themeConfig: {
      nav: [
        ...
        {text: 'blog', link: '/post/'},
        {text: 'tags', link: '/tags/'},
        {text: 'archives', link: '/archives/'},
        ...
      ]
    },
    ```
4. Add the following keywords in the blog markdown file [Front Matter](https://vuepress.vuejs.org/zh/guide/frontmatter.html)  to let the script sort 
    ```
    ---
    created: 2020-1-1
    updated: 2020-2-1
    tags: 
      - Configration
      - Technology
      - Life
    ---
    ```
    其中
    1. `created` 和 `updated` 用来记录博客创建和编辑时间，作用是将在博客页面展示时间以及用于博客首页排序（排序规则 updated -> created -> 没有配置）
    2. `created` 还会用来归档排序
    3. `tags` 用来做标签筛选
    4. 博客首页会自动根据 `/post` 目录下创建的 markdown 博客，生成对应的博客列表
    5. 以上都会自动配置，无需做额外操作
    6. `/archives` `/tags` `/post` 三个文件夹下的 `README.md` 可以在其中通过 [Front Matter](https://vuepress.vuejs.org/zh/guide/frontmatter.html) 来设置相关页面信息
