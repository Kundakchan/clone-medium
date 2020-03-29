<template>
  <div class="tile is-ancestor">
    <div class="tile"></div>
    <ul class="tile is-8 is-parent is-vertical">
      <li class="tile is-child"
        v-for="(item) in list"
        :key="item.id">
        <BaseArticle :options="item"/>
      </li>
    </ul>
    <div class="tile"></div>
  </div>
</template>

<script>
import BaseArticle from '@/components/BaseArticle'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
    BaseArticle
  },
  computed: {
    ...mapGetters({
      list: 'getList'
    })
  }
}
</script>
