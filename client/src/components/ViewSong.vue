<template>

</template>

<script>
import SongsSevice from '../services/SongsService'
export default {
  data () {
    return {
      song: null
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = await SongsSevice.show(songId)
  }
}
</script>

<style scoped>
</style>
