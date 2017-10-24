<template>
  <v-toolbar fixed class="blue darken-1">
    <router-link to="/">
      <v-btn id="btn-main" flat dark>Início</v-btn>
    </router-link>  
      <v-toolbar-items>
              <v-btn @click="navigateTo({name: 'Songs'})" id="btn" v-if="$store.state.isUserLoggedIn" flat dark>Navegar</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
              <v-btn @click="navigateTo({name: 'Login'})" id="btn" v-if="!$store.state.isUserLoggedIn" flat dark>Login</v-btn> 
              <v-btn @click="navigateTo({name: 'Register'})" id="btn" v-if="!$store.state.isUserLoggedIn" flat dark>Inscrever-se</v-btn>
          <v-btn id="btn" @click="logout" v-if="$store.state.isUserLoggedIn" flat dark>Sair</v-btn>
      </v-toolbar-items>
  </v-toolbar>    
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({name: 'Login'})
    },
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
#btn{
    color: white;
    font-size: 15px;
}
#btn-main{
    color: white;
    font-size: 18px;
}
#btn-main:hover{
    color: black;
}
</style>
