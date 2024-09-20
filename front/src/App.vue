<template>
  <nav v-if="isAuthenticated">
    <RouterLink to="/accueil">STREAMER</RouterLink>
    <RouterLink to="/addStreamer">AJOUTER</RouterLink>
    <a href="#" @click="logout">DÉCONNEXION</a>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const router = useRouter();
    const isAuthenticated = ref(false);

    const checkAuth = async () => {
      try {
        const response = await fetch('http://localhost:3000/auth/check', {
          method: 'GET',
          credentials: 'include',
        });
        isAuthenticated.value = response.ok;
      } catch (error) {
        console.error('Error checking authentication:', error);
        isAuthenticated.value = false;
      }
    };

    const logout = async () => {
      try {
        // clear authentication cookie 
        document.cookie = 'token=; Max-Age=-99999999; path=/';
        isAuthenticated.value = false;
        router.push('/login');
      } catch (error) {
        console.error('Error during logout:', error);
      }
    };

    onMounted(checkAuth);

    return {
      isAuthenticated,
      logout
    };
  }
});
</script>