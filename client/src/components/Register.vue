<template>
  <div>
  <h1>Register</h1>
  <input type="email" name="email" v-model="email" placeholder="Email">
  <br><br>
  <input type="password" name="password" v-model="password" placeholder="Senha">
  <br><br>
  <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  watch: {
    email (value) {
      console.log('Valor: ' + value)
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  },
  mounted () {
    setTimeout(() => {
      this.email = 'Hello World'
    }, 2000)
  }
}
</script>

<style scoped>

</style>
