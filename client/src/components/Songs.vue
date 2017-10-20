<template>

  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <div slot="hello">
          <div v-for="song in songs" :key="song.id">
            <table>
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Artista</th>
                  <th>Album</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{song.title}}</td>
                  <td>{{song.artist}}</td>
                  <td>{{song.album}}</td>
                </tr>  
              </tbody>    
            </table>  
          </div>
        </div>    
      </panel>  
    </v-flex>
  </v-layout>

</template>

<script>
import Panel from './Panel'
import SongsService from '../services/SongsService'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>
</style>
