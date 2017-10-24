<template>
  <panel title="Aba">
      <div slot="hello">
          <textarea readonly v-model="song.tab"></textarea>
      </div>    
  </panel>   
</template>

<script>
import Panel from '../Panel'
export default {
  components: {
    Panel
  },
  props: [
    'song'
  ]
}
</script>

<style scoped>
textarea{
  font-family: monospace;
  border: none;
  height: 350px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 20px;
}
</style>


