<template>
<div class="blog-archives theme-default-content">
  <div v-for="(value, key) in archives">
    <h4>{{ key }}</h4>
    <ul>
      <li v-for="v in value">
        <span>{{ v.frontmatter && v.frontmatter.created }}</span>
        <router-link :to="v.path">
          <span>{{ v.title }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</div>
</template>
<script>

export default {
  data () {
    return {
      postPages: [],
      archives: {}
    }
  },
  mounted () {
    const { pages } = this.$site
    // filter post pages
    this.postPages = pages.filter(item => item.regularPath.includes('/post/') && item.regularPath !== '/post/')
    // sort by timezzz
    this.postPages = this.postPages.sort((a, b) => {
      let time1 = a.frontmatter.created || '2000-1-1'
      let time2 = b.frontmatter.created || '2000-1-1'
      let date1 = this.$dayjs(time1)
      let date2 = this.$dayjs(time2)
      return date2.diff(date1)
    })
    this.postPages.forEach(item => {
      let created = item.frontmatter.created || '2000-1-1'
      let year = this.$dayjs(created).year()
      let archivesList = JSON.parse(JSON.stringify(this.archives))
      archivesList[year] =  archivesList[year] || []
      archivesList[year].push(item)
      this.$set(this.archives, [year], archivesList[year])
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
