<template>
  <main id="app" class="hero is-fullheight">
    <header class="hero-head">
      <NavBar/>
    </header>
    <section class="section">
      <router-view/>
    </section>
    <footer class="hero-footer"></footer>
  </main>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  components: {
    NavBar
  },
  data () {
    return {}
  }
}
</script>
