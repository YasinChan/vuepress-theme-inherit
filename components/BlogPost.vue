<template>
<div class="blog-post">
  <div class="theme-default-content blog-post__theme-title">
    <h1>{{ $page.title || $page.frontmatter.title }}</h1>
    <div class="blog-post__sub-title">
      <template v-if="$page.frontmatter.updated">
        <c-icon icon="update" class-name="blog__post-icon"></c-icon>
        <span class="blog__post-span">{{ $page.frontmatter.updated }}</span>
      </template>
      <template v-if="$page.frontmatter.created">
        <c-icon icon="create" class-name="blog__post-icon"></c-icon>
        <span class="blog__post-span">{{ $page.frontmatter.created }}</span>
      </template>

      <div class="blog__post-tags">
        <c-icon icon="tag" class-name="blog__post-icon"></c-icon>
        <router-link class="blog__post-tag" v-for="tag in $page.frontmatter.tags" :to="`/tags/?tag=${tag}`">{{ tag }}</router-link>
      </div>

    </div>
  </div>
  <Content class="theme-default-content blog-post__theme-content"/>
</div>
</template>
<script>
import CIcon from '@theme/components/CIcon.vue'

export default {
  components: {
    CIcon
  },
  data() {
    return {
      sidebarItems: []
    }
  },
  mounted () {

  }
}
</script>

<style lang="stylus">
.blog-post
  .blog-post__theme-title
    margin-bottom -80px
.blog-post__sub-title
  display flex
  align-items center

.blog-post__theme-content
  margin-top 50px
</style>
