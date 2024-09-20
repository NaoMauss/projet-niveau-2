<template>
  <div class="form-container">
    <h2>Enregistrer un nouveau streamer</h2>
    <form @submit.prevent="">
      <div class="form-group">
        <label for="name">Nom du streamer</label>
        <input type="text" v-model="nouveauStreamer.name" id="name" required>
      </div>

      <div class="form-group">
        <label for="compte">Compte sur lequel il joue</label>
        <input type="text" v-model="nouveauStreamer.compte" id="compte" required>
      </div>

      <div class="form-group">
        <label for="profilePicture">Profile Picture</label>
        <input type="text" v-model="nouveauStreamer.profilePicture" id="profilePicture" required>
      </div>

      <div class="form-group">
        <label for="twitch">Pseudo Twitch</label>
        <input type="text" v-model="nouveauStreamer.twitch" id="twitch" required>
      </div>

      <div class="form-group">
        <label for="twitter">Pseudo twitter</label>
        <input type="text" v-model="nouveauStreamer.twitter" id="twitter" required>
      </div>

      <div class="form-group">
        <label for="youtube">Chaine youtube</label>
        <input type="text" v-model="nouveauStreamer.youtube" id="youtube">
      </div>

      <button type="submit" @click="handleSubmit">Enregistrer</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const nouveauStreamer = ref({
  name: '',
  compte: '',
  twitch: '',
  twitter: '',
  youtube: '',
  profilePicture: ''
});

const separateString = (input: string): { name: string; tag: string } => {
  const [name, tag] = input.split('#');
  return { name, tag };
};

const handleSubmit = async () => {
  try {
    const router = useRouter();
    const result = separateString(nouveauStreamer.value.compte);
    const response = await fetch(`http://localhost:3000/streamers/${result.name}/${result.tag}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: nouveauStreamer.value.name,
        twitch: nouveauStreamer.value.twitch,
        twitter: nouveauStreamer.value.twitter,
        youtube: nouveauStreamer.value.youtube,
        profilePicture: nouveauStreamer.value.profilePicture,
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
.form-container {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  background-color: #E3A018;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #000;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #A388EE;
  color: black;
  border: 1px solid #000;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #C4A1FF;
}
</style>
