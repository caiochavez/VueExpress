<template>
  
  <panel title="Buscar Músicas">
      <div slot="hello">
        <v-text-field name="search" type="text" v-model="search"
         label="Buscar música por Nome, Artista, Album ou Gênero"></v-text-field>
      </div>    
  </panel>    

</template>

<script>
import Panel from '../Panel'
import _ from 'lodash'
export default {
  data () {
    return {
      search: ''
    }
  },
  components: {
    Panel
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {name: 'Songs'}
      if (this.search !== '') {
        route.query = {search: this.search}
      }
      this.$router.push(route)
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style>

</style>
