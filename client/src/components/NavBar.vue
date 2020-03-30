<template>
  <b-navbar shadow class="has-background-light">
    <template slot="brand">
      <b-navbar-item tag="router-link" to="/">
        <b-icon icon="message-text" size="is-large"></b-icon>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <b-button
            v-if="user && writer"
            rounded
            tag="router-link"
            to="/edit"
            type="is-dark"
            icon-right="plus">
            Добавит статью
          </b-button>
          <b-button
            v-if="!user"
            tag="router-link"
            rounded
            to="/login"
            type="is-dark"
            icon-right="open-in-app">
            Войти
          </b-button>
          <b-button
            v-if="!user"
            tag="router-link"
            rounded
            to="/registration"
            type="is-dark"
            icon-right="account-plus">
            Регистрацыя
          </b-button>
          <b-button
            v-if="user"
            @click="logOut"
            rounded
            tag="button"
            type="is-dark"
            icon-right="exit-to-app">
            Выйти
          </b-button>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      writer: 'checWriter',
      user: 'getUser'
    })
  },
  methods: {
    ...mapActions([
      'LOGOUT'
    ]),
    async logOut () {
      try {
        await this.LOGOUT()
        this.$router.push('/login')
      } catch (error) {
        console.error(error)
        throw error
      }
    }
  }
}
</script>
