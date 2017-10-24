<template>
  <panel title="YouTube Video">
    <div slot="hello">
      <youtube :video-id="youtubeId" :player-width="450" :player-height="300"></youtube>
    </div> 
  </panel> 
</template>

<script>
import Panel from '../Panel'
import VueYouTubeEmbed from 'vue-youtube-embed'
export default {
  components: {
    Panel,
    VueYouTubeEmbed
  },
  props: [
    'youtubeId'
  ]
}
</script>

<style scoped>
</style>
