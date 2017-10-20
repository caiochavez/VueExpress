<template>
  
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
        <div slot="hello">
          <v-text-field name="email" type="email" v-model="email" label="Email"></v-text-field>
          <v-text-field name="password" type="password" v-model="password" label="Senha"></v-text-field>
          <div class="error" v-html="error" />
          <br>
          <v-btn @click="login" color="primary" dark>Entrar</v-btn>
        </div>
      </panel>    
    </v-flex>
  </v-layout>

</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
import Panel from './Panel'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
.error{
  color: red
}
</style>
