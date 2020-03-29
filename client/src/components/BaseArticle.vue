<template>
  <article class="box article">
    <h1 class="is-size-5 has-text-weight-bold">{{ options.title }}</h1>
    <p class="has-text-grey">{{ options.description }}</p>
    <ArticleFooter
      :like="options.claps"
      :id="options.id"
      :dateCreated="options.createdAt"
      :dateUpdate="options.updateAt"
    />
  </article>
</template>

<script>
import ArticleFooter from '@/components/ArticleFooter'
export default {
  props: {
    options: Object
  },
  components: {
    ArticleFooter
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
