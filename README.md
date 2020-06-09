# vuepress-theme-inherit

> The `vuepress` blog theme inherited from `@vuepress/theme-default`, supports archiving and tagging functions, and can automatically sort blogs by time.

## NPM
<https://www.npmjs.com/package/vuepress-theme-inherit>

## DEMO
<https://yasinchan.com>  
[Source code](https://github.com/YasinChan/vuepress-blog)

## Install
> Note: The following operations can be found in the official document. Please familiarize yourself with the [documentation](https://vuepress.vuejs.org/) first.  

After install and configure the basic [vuepress](https://vuepress.vuejs.org/guide/getting-started.html#global-installation) framework, do the following operations:
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
4. Add the following keywords in the blog markdown file [Front Matter](https://vuepress.vuejs.org/guide/frontmatter.html)  to let the script sort 
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
    Options
    1. `created` and `updated` is used to record the creation and editing time of the blog, as well as used to sort the blog homepage (sort rule : update -> created -> no configration).
    2. `created` also used to sort the archives.
    3. `tags` is used to filter the tags.
    4. Blog homepage will create the blog list, base on the markdown files you created under the `/post` directory automatically.
    5. These above functions will be automatically configured without additional operations.
    6. The `README.md` under the three folders of `/archives` `/tags` `/post` can be accessed through [Front Matter](https://vuepress.vuejs.org/guide/frontmatter.html) to set the relevant page information include title, keywords and descriptions
