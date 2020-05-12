<template lang="html">
<svg :class="['icon-' + icon, className]">
  <use :xlink:href="'#icon-' + icon"></use>
</svg>
</template>

<script>
export default {
  name: 'Icon',
  props: ['icon', 'className']
}
</script>
