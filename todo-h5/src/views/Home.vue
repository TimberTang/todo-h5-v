<template>
  <div class="home" @click="toLogin">
    login
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },
  methods: {
    toLogin  () {
      this.$router.push('/login')
    }
  }
}
</script>
<style scoped>
  .home {
    width: 100%;
    height: 50px;
    background-color: red;
  }
</style>
