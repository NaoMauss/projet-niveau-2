<template>
  <div class="container">
    <a :href="twitch" target="_blank">
      <div class="button-live">
        <img src="/public/twitch.svg" alt="twitch" />
        <div>twitch</div>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  twitch: string
}>()
</script>

<style scoped>
.container{
  display: flex;
}
.button-live{
  display: flex;
  border-radius: 10px;
  padding-left: 5px;
  padding-right: 10px;
  color: white;
  background-color: #2D4466;
}
.button-live div{
  font-weight: bold;
  font-size: 15px;
  align-self: center;
}
</style>