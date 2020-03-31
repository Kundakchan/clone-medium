<template>
  <div class="columns edit-container">
    <div class="column is-3 column_left">
      <transition-group name="list">
        <b-message
          class="mini-article"
          v-for="(item) in miniLlist"
          :key="item.id"
          @click.native="edit(item.id)">
          <h6 class="is-size-6">{{ item.title }}</h6>
        </b-message>
      </transition-group>
    </div>
    <div class="column column_right">
      <div class="edit-control box has-background-light">
        <div class="edit__title">
          <transition name="title" mode="out-in">
            <h1 v-if="id" key="edit" class="is-size-4 is-uppercase">Редактировать статью</h1>
            <h1 v-else key="create" class="is-size-4 is-uppercase">Создать статью</h1>
          </transition>
        </div>
        <div class="edit__button-box">
          <transition name="add__article">
            <b-button
              @click="create"
              v-if="id"
              class="edit-round"
              type="is-dark"
              icon-left="plus">
            </b-button>
          </transition>
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
import { mapGetters } from 'vuex'
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
    ...mapGetters([
      'getArticlesUser',
      'getUser'
    ]),
    miniLlist () {
      return this.getArticlesUser(this.getUser.id)
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
  grid-template-columns: 1fr 50px;
  justify-items: center;
  align-items: center;
}
.edit-round {
  border-radius: 100%;
}
.edit-content {
  height: 90%;
}
// animations
.add__article-leave-active {
  animation: show-element .3s reverse;
}
.add__article-enter-active {
  animation: show-element .3s;
}
.title-leave-active, .title-enter-active {
  transition: opacity .3s ease;
}
.title-enter, .title-leave-to {
  opacity: 0;
}
.list-enter-active {
  animation: bounceInLeft 1s;
}
.list-leave-active {
  animation: bounceInLeft 1s reverse;
}
@keyframes show-element {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
