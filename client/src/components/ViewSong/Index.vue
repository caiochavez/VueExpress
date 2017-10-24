<template>
<div>
  <v-layout>
    <v-flex xs6>
      <song-metadata :song="song"/>    
    </v-flex>

    <v-flex xs6 class="ml-2">
      <you-tube :youtubeId="song.youtubeId"/>
    </v-flex>   
  </v-layout>

  <v-layout>
    <v-flex xs6 class="mt-2">
      <tab :song="song"/>
    </v-flex>  

    <v-flex xs6 class="ml-2 mt-2">
      <lyrics :song="song"/>
    </v-flex>   
  </v-layout>  
   
</div>
</template>

<script>
import SongsSevice from '@/services/SongsService'
import Panel from '../Panel'
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import Tab from './Tab'
export default {
  data () {
    return {
      song: null
    }
  },
  components: {
    Panel,
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsSevice.show(songId)).data
  }
}
</script>

<style scoped>

</style>
