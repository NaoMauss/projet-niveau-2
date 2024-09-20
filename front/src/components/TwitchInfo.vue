<template>
  <div class="twitch-info">
    <div class="streamer-id">
      <img class="picture" :src="streamer.profilePicture" >
      <div class="name">{{ streamer.pseudo }}</div>
    </div>
    <div class="streamer-info">
      <div>
        <img :src="`https://soloqchallenge.fr/assets/ranks/${streamer.tier}.png`" alt="elo" class="elo-img">
        <div>{{ streamer.tier }} {{ streamer.rank }} {{ streamer.leaguePoints }}LP</div>
      </div>
      <a :href="`https://x.com/${streamer.twitterLink}`" target="_blank" class="twitter">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpevfm2P0BtgC9LbXH1n2Xp-oR-iLX8xQTBg&s" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  streamer: any;
}>();
</script>

<style scoped>
.twitch-info {
  display: flex;
  flex-direction: column;
  width: 253px;
  height: 206px;
  border: 2px solid #000;
  border-radius: 5px;
  background-color: #E3A018;
  margin-right: 50px;
  margin-top: 10px;
}
.streamer-id{
  display: flex;
  justify-content: center;
  padding: 10px;
}
.picture{
  width: 40px;
  height: 40px;
  border: 1px solid #000;
  border-radius: 15%;
  margin-right: 10px; 
  align-self: center;
}
.name{
  align-self: center;
  font-weight: bold;
  font-size: 20px;
  margin-left: 10px;
}
.streamer-info{
  display: flex;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  padding: 10px;
}
.elo-img{
  width: 80px;
  height: 80px;
  margin-right: 10px;
}
.twitter{
  align-self: flex-end;
}
.twitter img{
  height: 40px;
  width: 40px;
  border: 1px solid #000;
  border-radius: 15%;
  margin-right: 10px; 
}
</style>