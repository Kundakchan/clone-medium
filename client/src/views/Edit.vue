<template>
  <div class="columns edit-container">
    <div class="column is-3 column_left">
      <b-message
        class="mini-article"
        v-for="(item) in miniLlist"
        :key="item.id"
        @click.native="edit(item.id)">
        <h6 class="is-size-6">{{ item.title }}</h6>
      </b-message>
    </div>
    <div class="column column_right">
      <div class="edit-control box has-background-light">
        <div class="edit__title">
          <h1 v-if="!id" class="is-size-4 is-uppercase">Создать статью</h1>
          <h1 v-if="id" class="is-size-4 is-uppercase">Редактировать статью</h1>
        </div>
        <div class="edit__button-box">
          <b-button
            v-if="!id"
            class="edit-round"
            type="is-dark"
            icon-left="pencil">
          </b-button>
          <b-button
            @click="create"
            v-if="id"
            class="edit-round"
            type="is-dark"
            icon-left="plus">
          </b-button>
        </div>
      </div>
      <div class="edit-content box has-background-light">
        <BaseEditForm :id="id"/>
      </div>
    </div>
  </div>
</template>

<script>
import BaseEditForm from '@/components/BaseEditForm'
export default {
  props: {
    id: String
  },
  components: {
    BaseEditForm
  },
  data () {
    return {}
  },
  computed: {
    miniLlist () {
      return this.$store.getters.getList
    }
  },
  methods: {
    create () {
      this.$router.push('/edit')
    },
    edit (id) {
      if (this.id !== id) this.$router.push(`/edit/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-container {
  height: 85vh;
}
.column_left {
  overflow-y: scroll;
}
.mini-article {
  cursor: pointer;
}
.edit-control {
  padding-top: 10px;
  padding-bottom: 10px;
  display: grid;
  grid-template-columns: 1fr auto;
  justify-items: center;
  align-items: center;
}
.edit-round {
  border-radius: 100%;
}
.edit-content {
  height: 90%;
}
</style>
