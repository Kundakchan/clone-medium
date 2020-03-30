<template>
  <div class="tile is-ancestor">
    <div class="tile is-child"></div>
    <div class="tile is-parent is-vertical">
      <div class="tile is-child has-background-dark">
        <h1 class="has-text-centered has-text-white is-size-3">Авторизация</h1>
      </div>
      <div class="tile is-child">
        <b-field
          :type="{
            'is-success': !$v.email.$invalid,
            'is-danger': $v.email.required
          }"
          :message="{
            'Введенное значения не соответствуют формату email': !$v.email.email
          }"
          label="Email">
          <b-input
            :use-html5-validation="false"
            v-model.trim.lazy="email"
            type="email">
          </b-input>
        </b-field>
        <b-field
          :type="{
            'is-success': !$v.password.$invalid,
            'is-danger': $v.password.required
          }"
          :message="{
            'Пароль должен иметь 6 и более символом': !$v.password.minLength
          }"
          label="Пароль">
          <b-input
            :use-html5-validation="false"
            v-model.trim.lazy="password"
            type="password"
            password-reveal>
          </b-input>
        </b-field>
      </div>
      <div class="tile is-child">
        <div class="buttons">
          <b-button
            :disabled="$v.$invalid"
            @click="login"
            expanded
            type="is-dark">
            Войти
          </b-button>
        </div>
      </div>
    </div>
    <div class="tile is-child"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { required, email, minLength } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      email: null,
      password: null
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  computed: {
    ...mapGetters([
      'getUser'
    ])
  },
  methods: {
    ...mapActions([
      'USER_LOGIN'
    ]),
    async login () {
      try {
        await this.USER_LOGIN({ email: this.email, password: this.password })
        if (this.getUser) this.$router.push('/')
      } catch (error) {
        console.log(error.message)
        throw error
      }
    }
  }
}
</script>
