<template>

  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Músicas">
        <v-btn slot="action" @click="navigateTo({name: 'CreateSong'})" fab medium absolute right middle>
          <slot name="action"></slot>
          <v-icon>add</v-icon>
          <!--<i class="material-icons">add</i>-->
        </v-btn>          
        <div slot="hello">
          <div class="song" v-for="song in songs" :key="song.id">
            <v-layout>
              <v-flex xs6>
                <div class="song-title">
                  {{song.title}}
                </div>
                <div class="song-artist">
                  {{song.artist}}
                </div>
                <div class="song-album">
                  {{song.album}}
                </div>
                <v-btn color="primary" @click="navigateTo({name: 'Song', params: {songId: song._id}})">Ver</v-btn>

              </v-flex>
              <v-flex xs6>
                <img class="album-image" :src="song.albumImage"/>
              </v-flex>
            </v-layout>
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
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>
.album-image{
  width: 70%;
  margin: 0 auto;
}
.song{
  padding: 20px;
  height: 280px;
  overflow: hidden;
}
.song-title{
  font-size: 30px;
}
.song-artist{
  font-size: 24px;
}
.song-album{
  font-size: 18px;
}
</style>
