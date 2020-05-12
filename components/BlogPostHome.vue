<template>
<div class="theme-default-content">
  <h1>博客</h1>
  <blog-post-list v-for="page in postPages" :info="page"></blog-post-list>
</div>
</template>
<script>
import BlogPostList from '@theme/components/BlogPostList.vue'

export default {
  data () {
    return {
      postPages: []
    }
  },
  components: {
    BlogPostList
  },
  mounted () {
    const { pages } = this.$site
    // filter post pages
    this.postPages = pages.filter(item => item.regularPath.includes('/post/') && item.regularPath !== '/post/')
    // sort by timezzz
    this.postPages = this.postPages.sort((a, b) => {
      let time1 = a.frontmatter.updated || a.frontmatter.created || '2000-1-1'
      let time2 = b.frontmatter.updated || b.frontmatter.created || '2000-1-1'
      let date1 = this.$dayjs(time1)
      let date2 = this.$dayjs(time2)
      return date2.diff(date1)
    })
  }
}
</script>
<style lang="stylus">
.blog__post-home
  background: #f5f5f5;
  padding: 16px;
  border-radius: 6px;
  margin-bottom: 16px;
  display block
  color #666
  transition: all 0.3s cubic-bezier(0.55,0,0.1,1);

.blog__post-home:hover
  box-shadow rgba(0,0,0,0.1) 5px 5px 10px 4px
  transform translate3d(0px, -1px, 0px)
  text-decoration none !important


.blog__post-home-title
  color $accentColor
  font-size 22px
  font-weight bold

.blog__post-home-description
  padding-top 10px
  font-size 14px

.blog__post-home-info
  margin-top 10px
  display flex
  align-items center
  justify-content space-between

.blog__post-home-info-left
  display flex
  align-items center

</style>
