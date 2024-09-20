<template>
  <div>
    <div class="container">
      <div>Streamers</div>
      <div class="row" v-for="streamer in streamers">
        <img :src="streamer.profilePicture" :alt="streamer.name" />
        <div class="streamer">
          <div>{{ streamer.name }}</div>
          <p>{{ streamer.pseudo }}</p>
        </div>
        <i class="fa-solid fa-plus" @click="handleAdd(streamer)"></i>
      </div>
    </div>
  </div>
  
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

interface Streamer {
  name: string;
  pseudo: string;
  profilePicture: string;
  twitch: string;
  twitter: string;
  youtube: string;
}

defineProps<{
  streamers: Streamer[];
}>();

const separateString = (input: string): { name: string; tag: string } => {
  const [name, tag] = input.split('#');
  return { name, tag };
};

const handleAdd = async (streamer: Streamer) => {
  try {
    const router = useRouter();
    const result = separateString(streamer.pseudo);
    const response = await fetch(`http://localhost:3000/streamers/${result.name}/${result.tag}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: streamer.name,
        twitch: streamer.twitch,
        twitter: streamer.twitter,
        youtube: streamer.youtube,
        profilePicture: streamer.profilePicture,
      }),
      credentials: 'include',
    });

    if (response.ok) {
      console.log('Streamer added');
      router.push('/home');
    } else {
      console.error('Error adding streamer:', response);
    }
  } catch (error) {
    console.error('Error adding streamer:', error);
  }
};
</script>

<style scoped>
.container {
  margin-top: 20px;
  background-color: #f8b5ff;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #000;
}
.row {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  column-gap: 10px;
  border-top: 1px solid #000;
  padding: 10px;
}
.row i {
  display: flex;
  align-items: center;
}

img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.streamer {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.streamer div {
  font-weight: bold;
}
p{
  margin: 0;
  color: grey;
  font-size: 12px;
}
i {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 20px;
  color: #000;
  cursor: pointer;
}
</style>