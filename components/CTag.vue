<template>
<router-link :to="link" class="blog__c-tag">
  <slot></slot>
</router-link>
</template>
<script>
export default {
  props: ['link']
}
</script>
<style lang="stylus">
.blog__c-tag
  box-sizing border-box
  font-variant tabular-nums
  list-style none
  font-feature-settings "tnum"
  display inline-block
  height auto
  margin 0 8px 0 0
  padding 0 7px
  font-size 12px
  line-height 20px
  white-space nowrap
  border-radius 4px
  cursor default
  opacity 1
  transition all .3s cubic-bezier(.78, .14, .15, .86)
  border-color transparent
  color #fff
  background-color $accentColor

.blog__c-tag:hover, .blog__c-tag.active
  opacity .85

</style>
