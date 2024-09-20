<template>
  <div>
    <div :id="twitchEmbedId"></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue'

const twitchEmbedId = ref('twitch-embed')

const props = defineProps<{
  channel: string
}>()
console.log(props.channel)

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://embed.twitch.tv/embed/v1.js'
  script.async = true
  document.body.appendChild(script)

  script.onload = () => {
    new (window as any).Twitch.Embed(twitchEmbedId.value, {
      width: '100%',
      height: '100%',
      channel: props.channel,
      layout: 'video',
      theme: 'dark'
    })
  }
})
</script>

<style scoped>
#twitch-embed {
  width: 100%;
  min-height: 400px;
  max-height: 500px;
}
</style>
