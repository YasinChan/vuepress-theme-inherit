<template>
<main class="page">
  <slot name="top"/>
  <BlogTags class="theme-default-content" v-if="$page.path === '/tags/'"/>
  <BlogPost v-if="$page.path !== '/post/' && $page.path.includes('/post/')"/>
  <BlogPostHome v-else-if="$page.path === '/post/'"/>
  <BlogArchives v-else-if="$page.path === '/archives/'"/>
<!--  <div class="theme-default-content" v-if="$page.path.includes('/post/')">-->
<!--    <h1>{{ $page.title }}</h1>-->
<!--    <span>yasinchan</span>-->
<!--    <CTag v-for="tag in tags" link="aaa">{{ tag }}</CTag>-->
<!--  </div>-->
  <Content v-else class="theme-default-content"/>
  <PageEdit/>

  <PageNav v-bind="{ sidebarItems }"/>

  <slot name="bottom"/>
</main>
</template>
<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import BlogTags from '@theme/components/BlogTags.vue'
import BlogPost from '@theme/components/BlogPost.vue'
import BlogPostHome from '@theme/components/BlogPostHome.vue'
import BlogArchives from '@theme/components/BlogArchives.vue'

export default {
  components: {PageEdit, PageNav, BlogTags, BlogPost, BlogPostHome, BlogArchives},
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
.page
  padding-bottom 2rem
  display block

/*.blog__title-wrap*/
/*  margin-top 0 !important*/
/*.blog__title*/
/*  margin-top 0 !important*/
</style>
