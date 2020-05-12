<template>
<button class="blog__c-btn" :class="active ? 'active' : ''" @click="handleClick">
  <slot></slot>
</button>
</template>
<script>
export default {
  props: ['ct', 'active'],
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>
<style lang="stylus">
.blog__c-btn
  line-height 1.499
  position relative
  display inline-block
  font-weight 400
  white-space nowrap
  text-align center
  cursor pointer
  transition all .3s cubic-bezier(.645, .045, .355, 1)
  user-select none
  touch-action manipulation
  height 32px
  padding 0 15px
  font-size 14px
  border-radius 4px
  border 1px solid $accentColor
  margin-right 14px
  margin-bottom 16px
  color #fff
  background-color $accentColor
  text-shadow 0 -1px 0 rgba(0, 0, 0, .12)
  box-shadow 0 2px 0 rgba(0, 0, 0, .045)
  outline 0

</style>
