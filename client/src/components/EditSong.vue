<template>
  
  <v-layout>
    <v-flex xs4>
      <panel title="Editar Música">
        <div slot="hello">
          <v-text-field label="Título" v-model="song.title" required :rules="[required]"></v-text-field>
          <v-text-field label="Artista" v-model="song.artist" required :rules="[required]"></v-text-field>
          <v-text-field label="Gênero" v-model="song.genre" required :rules="[required]"></v-text-field>
          <v-text-field label="Album" v-model="song.album" required :rules="[required]"></v-text-field>
          <v-text-field label="Url da Imagem do Album" v-model="song.albumImage" required :rules="[required]"></v-text-field>
          <v-text-field label="ID do vídeo no YouTube" v-model="song.youtubeId" required :rules="[required]"></v-text-field>
        </div>
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Estrutura da Música" class="ml-2">
        <div slot="hello">
          <v-text-field label="Letra" v-model="song.lyrics" multi-line></v-text-field>
          <v-text-field label="Aba" v-model="song.tab" multi-line></v-text-field>
        </div>
      </panel>
      <div class="danger-alert" v-if="error">{{error}}</div>
      <v-btn dark @click="save" color="primary">Salvar Música</v-btn>
    </v-flex>
  </v-layout>

</template>

<script>
import Panel from './Panel'
import SongsService from '../services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImage: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      required: (value) => !!value || 'Campo Obrigatório.',
      error: null
    }
  },
  methods: {
    async save () {
      /*
      this.error = null
      const areAllFieldsFilledIn = Object.keys(this.song).every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      */
      const songId = this.$store.state.route.params.songId
      try {
        await SongsService.put(this.song)
        this.$router.push({name: 'Songs', params: {songId: songId}})
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongsService.show(songId)).data
    } catch (err) {
      console.log(err)
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>

