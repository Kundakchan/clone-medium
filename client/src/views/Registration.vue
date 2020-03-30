<template>
  <div class="tile is-ancestor">
    <div class="tile is-child"></div>
      <div class="tile is-parent is-vertical">
        <div class="tile is-child has-background-dark">
          <h1 class="has-text-centered has-text-white is-size-3">Регистрацыя</h1>
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
              password-reveal
              type="password">
            </b-input>
          </b-field>
          <b-field
            :type="{
              'is-success': !$v.confirm.$invalid,
              'is-danger': $v.confirm.required
            }"
            :message="{
              'Пароль должен совподать': !$v.confirm.sameAsPassword
            }"
            label="Повторите пароль">
            <b-input
              :use-html5-validation="false"
              v-model.trim.lazy="confirm"
              password-reveal
              type="password">
            </b-input>
          </b-field>
          <div class="block">
            <b-radio
              v-model="role"
              native-value="reader">
              Читатель
            </b-radio>
            <b-radio
              v-model="role"
              native-value="writer">
              Писатель
            </b-radio>
          </div>
        </div>
        <div class="tile is-child">
          <div class="buttons">
            <b-button
              @click="registration"
              :disabled="$v.$invalid"
              expanded
              type="is-dark">
              Зарегистрироваться
            </b-button>
          </div>
        </div>
      </div>
    <div class="tile is-child"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { required, email, sameAs, minLength } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      email: null,
      password: null,
      confirm: null,
      role: 'reader'
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
    },
    confirm: {
      required,
      minLength: minLength(6),
      sameAsPassword: sameAs('password')
    }
  },
  computed: {
    ...mapGetters([
      'getUser'
    ])
  },
  methods: {
    ...mapActions([
      'USER_REGISTRATION'
    ]),
    async registration () {
      try {
        const user = {
          id: `_${Math.floor(Math.random() * 1e16).toString(16)}`,
          login: this.email,
          password: this.password,
          role: this.role
        }
        await this.USER_REGISTRATION(user)
        if (this.getUser) this.$router.push('/')
      } catch (error) {
        console.error(error.message)
        throw error
      }
    }
  }
}
</script>
