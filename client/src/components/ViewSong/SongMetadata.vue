<template>

  <panel title="Dados da música">
        <div id="div" slot="hello">
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

                <v-btn color="primary" @click="navigateTo({name: 'EditSong', params: {songId: song._id}})">Editar</v-btn>

              </v-flex>
              <v-flex xs6>
                <img class="album-image" :src="song.albumImage"/>
              </v-flex>
            </v-layout>
        </div>
      </panel>

</template>

<script>
import Panel from '../Panel'
export default {
  props: [
    'song'
  ],
  components: {
    Panel
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.album-image{
  width: 80%;
  height: 65%;
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
#div{
  border: none;
  height: 305px;
  overflow: auto;
  padding: 20px;
}
</style>
