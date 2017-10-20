<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Adicionar música">
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
      <v-btn dark @click="create" color="primary">Criar Música</v-btn>
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
  components: {
    Panel
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object.keys(this.song).every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }

      try {
        await SongsService.post(this.song)
        this.$router.push({name: 'Songs'})
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
