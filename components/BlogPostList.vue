<template>
<router-link class="blog__post-list" :to="info.path">
  <div class="blog__post-list-title">{{ info.frontmatter.title }}</div>
  <div v-if="info.frontmatter.description" class="blog__post-list-description">{{ info.frontmatter.description }}</div>
  <hr>
  <div v-if="info.frontmatter && info.frontmatter.tags" class="blog__post-list-info">
    <div class="blog__post-list-info-left">
      <template v-if="info.frontmatter.updated">
      <c-icon icon="update" class-name="blog__post-icon"></c-icon>
      <span class="blog__post-span">{{ dayjsFormat(info.frontmatter.updated) }}</span>
      </template>
      <template v-else-if="info.frontmatter.created">
      <c-icon icon="create" class-name="blog__post-icon"></c-icon>
      <span class="blog__post-span">{{ dayjsFormat(info.frontmatter.created) }}</span>
      </template>
    </div>
    <div class="blog__post-tags">
      <c-icon icon="tag" class-name="blog__post-icon"></c-icon>
      <router-link class="blog__post-tag" v-for="tag in info.frontmatter.tags" :to="`/tags/?tag=${tag}`">{{ tag }}</router-link>
    </div>
  </div>
</router-link>
</template>
<script>
import CIcon from '@theme/components/CIcon.vue'

export default {
  props: ['info'],
  components: {
    CIcon
  },
  methods: {
    dayjsFormat(time) {
      return this.$dayjs(time).fromNow()
    }
  }
}
</script>
<style lang="stylus">
.blog__post-list
  background: #f5f5f5;
  padding: 16px;
  border-radius: 6px;
  margin-bottom: 16px;
  display block
  color #666
  transition: all 0.3s cubic-bezier(0.55,0,0.1,1);

.blog__post-list:hover
  box-shadow rgba(0,0,0,0.1) 5px 5px 10px 4px
  transform translate3d(0px, -1px, 0px)
  text-decoration none !important


.blog__post-list-title
  color $accentColor
  font-size 22px
  font-weight bold

.blog__post-list-description
  padding-top 10px
  font-size 14px

.blog__post-list-info
  margin-top 10px
  display flex
  align-items center
  justify-content space-between

.blog__post-list-info-left
  display flex
  align-items center

</style>
