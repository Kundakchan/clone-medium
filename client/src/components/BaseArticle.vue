<template>
  <article class="box article">
    <h1 class="is-size-5 has-text-weight-bold">{{ options.title }}</h1>
    <p class="has-text-grey">{{ options.description }}</p>
    <ArticleFooter
      :like="options.claps"
      :id="options.id"
      :dateCreated="options.createdAt"
      :dateUpdate="options.updateAt"
      :editArticle="edit"
    />
  </article>
</template>

<script>
import ArticleFooter from '@/components/ArticleFooter'
import { mapGetters } from 'vuex'
export default {
  props: {
    options: Object
  },
  components: {
    ArticleFooter
  },
  computed: {
    ...mapGetters([
      'getUser'
    ]),
    edit () {
      if (this.getUser) return this.options.userId === this.getUser.id
      else return false
    }
  }
}
</script>

<style lang="scss" scoped>
.article {
  display: grid;
  grid-template-rows: auto auto auto;
  row-gap: 20px;
}
</style>
