<template>
  <form class="edit__form">
    <div class="edit__body">
      <b-field label="Name">
        <b-input v-model="article.title" type="text"></b-input>
      </b-field>
      <b-field label="Message">
        <b-input v-model="article.description" type="textarea"></b-input>
      </b-field>
    </div>
    <div class="edit__footer">
      <div class="buttons">
        <b-button v-if="id" @click="updateArticle" rounded type="is-dark">Сохронить</b-button>
        <b-button v-if="!id" @click="addArticle" rounded type="is-dark">Публиковать</b-button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: {
    id: String
  },
  data () {
    return {
      article: {
        id: null,
        title: '',
        description: '',
        claps: 0,
        createdAt: null,
        updateAt: null,
        userId: null
      }
    }
  },
  computed: {
    ...mapGetters([
      'getArticle',
      'getUser'
    ])
  },
  methods: {
    ...mapActions([
      'ADD_ARTICLE',
      'UPDATE_ARTICLE'
    ]),
    editInit () {
      if (this.id) {
        this.article = JSON.parse(JSON.stringify(this.getArticle(this.id)))
      } else {
        this.article = {
          id: null,
          title: '',
          description: '',
          claps: 0,
          createdAt: null,
          updateAt: null,
          userId: this.getUser.id
        }
      }
    },
    addArticle () {
      this.article.id = Math.floor(Math.random() * 1e8).toString(16)
      this.article.createdAt = new Date()
      this.ADD_ARTICLE(this.article)
    },
    updateArticle () {
      this.article.updateAt = new Date()
      this.UPDATE_ARTICLE(this.article)
    }
  },
  watch: {
    id (newId, oldId) {
      this.editInit()
    }
  },
  created () {
    this.editInit()
  }
}
</script>

<style lang='scss' scoped>
.edit__form {
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
}
</style>
