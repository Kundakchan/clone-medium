<template>
  <span class="level">
    <span class="level-left">
      <span class="level-item is-size-7 has-text-grey-light">Добавлено: </span>
      <time
        class="level-item is-size-7 has-text-grey-light"
        :datetime="dateCreated">
        {{ create }}
      </time>
      <span class="level-item is-size-7 has-text-grey-light">дня назад </span>
    </span>
    <span class="level-right">
      <span class="level-item">
        <div class="buttons">
          <b-button
            v-if="checUser && checWriter"
            @click="edit"
            icon-right="pencil"
            type="is-dark">
            Изменить
          </b-button>
          <b-button
            v-if="checUser && checWriter"
            @click="remove"
            icon-right="delete"
            type="is-dark">
            Удалить
          </b-button>
          <b-button
            v-if="checUser && checReader"
            @click="setLike"
            icon-right="thumb-up"
            type="is-dark">
            {{ like }}
          </b-button>
        </div>
      </span>
    </span>
  </span>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: {
    like: Number,
    id: String,
    dateCreated: String,
    dateUpdate: String
  },
  data () {
    return {
      article: null
    }
  },
  computed: {
    ...mapGetters([
      'getArticle',
      'checReader',
      'checWriter',
      'checUser'
    ]),
    create () {
      return this.deyCreated(this.dateCreated)
    }
  },
  methods: {
    ...mapActions([
      'ADD_LIKE',
      'DELETE_ARTICLE'
    ]),
    edit () {
      this.$router.push(`/edit/${this.id}`)
    },
    remove () {
      this.DELETE_ARTICLE(this.id)
    },
    setLike () {
      this.article.claps = this.article.claps + 1
      this.ADD_LIKE(this.article)
    },
    deyCreated (date) {
      const days = (Date.now() - Date.parse(date)) / 86400000
      return Math.round(days)
    }
  },
  created () {
    this.article = JSON.parse(JSON.stringify(this.getArticle(this.id)))
  }
}
</script>
