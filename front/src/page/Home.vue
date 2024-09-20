<script setup lang="ts">
import Table from '../components/Table.vue';
import TwitchEmbed from '../components/TwitchEmbed.vue';
import TwitchInfo from '../components/TwitchInfo.vue';
import { onMounted } from 'vue';
import { useStreamerStore } from '../stores/streamerStore';

const streamerStore = useStreamerStore();

onMounted(() => {
  streamerStore.fetchStreamers();
});
</script>

<template>
  <div class="page">
    <div class="twitch">
      <TwitchInfo v-if="streamerStore.streamers.length > 0" :streamer="streamerStore.streamers[0]"/>
      <TwitchEmbed v-if="streamerStore.streamers.length > 0" class="twitch-embed" :channel="streamerStore.streamers[0].twitchLink" />
    </div>
    <Table v-if="streamerStore.streamers.length > 0" :streamers="streamerStore.streamers" />
  </div>
</template>

<style scoped>
.page {
  display: flex;
  width: 100%;
  flex-direction: column;
}
.twitch {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 50px;
}
.twitch-embed {
  width: 60%;
  height: 500px;
  margin-right: 50px;
  display: flex;
  align-self: flex-end;
}
</style>