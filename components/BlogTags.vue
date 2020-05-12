<template>
<div>
  <h1>标签</h1>
  <c-button :active="currentTag === tag.tag" v-for="tag in tags" @click="select(tag.tag)">
    <span>{{ tag.tag }}</span>
    <span>{{ tag.len }}</span>
  </c-button>
  <div>
    <blog-post-list v-for="page in lists" :info="page"></blog-post-list>
  </div>
</div>
</template>
<script>
import CButton from '@theme/components/CButton.vue'
import BlogPostList from '@theme/components/BlogPostList.vue'

export default {
  name: 'Tags',
  data () {
    return {
      tags: [],
      currentTag: '',
      lists: []
    }
  },
  components: {
    CButton,
    BlogPostList
  },
  mounted () {
    let tags = []
    this.$site.pages.forEach((item) => {
      if (item.frontmatter.tags) {
        tags = tags.concat(item.frontmatter.tags)
      }
    })

    let flatTags = Array.from(new Set(tags))
    flatTags.forEach((v) => {
      let obj = {}
      obj.tag = v
      obj.len = tags.filter(val => val === v).length
      this.tags.push(obj)
    })

    this.$nextTick(() => {
      this.select(this.$route.query.tag, false)
    })
  },
  methods: {
    select (val, needPush = true) {
      if (this.currentTag === val) {
        return
      }
      this.currentTag = val
      this.lists = this.$site.pages.filter(v => {
        let tags = v.frontmatter.tags
        if (tags) {
          return tags.some(v => v === val)
        }
      })

      if (needPush) {
        this.$router.push({ path: '/tags/', query: { tag: val } })
      }
    }
  },
  watch: {
    '$route' (to, from) {
      this.select(to.query.tag, false)
    }
  }
}
</script>
<style scoped lang="stylus">
.blog__c-btn
  opacity 0.6

.blog__c-btn:hover, .blog__c-btn.active
  color #fff
  transform scale(1.1)
  opacity 1
</style>
