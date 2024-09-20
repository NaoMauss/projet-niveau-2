<template>
  <div v-if="login" class="container">
    <div class="form-container">
      <button @click="toggleLogin(false)" class="login-register" data-cy="to-register">Créer un compte</button>
      <h2>Connexion</h2>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="user.email" />  
      </div>
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input type="password" id="password" v-model="user.password" />
      </div>
      <button @click="handleLogin" type="submit"  data-cy="login-button">Se connecter</button>
    </div>
  </div>
  <div v-else class="container">
    <div class="form-container">
      <button @click="toggleLogin(true)" class="login-register">Se connecter</button>
      <h2>Inscription</h2>
      <div class="form-group">
        <label for="newName">Nom</label>
        <input type="text" id="newName" v-model="newUser.name" />
      </div>
      <div class="form-group">
        <label for="newEmail">Email</label>
        <input type="email" id="newEmail" v-model="newUser.email" />  
      </div>
      <div class="form-group">
        <label for="newPassword">Mot de passe</label>
        <input type="password" id="newPassword" v-model="newUser.password" />
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirmer le mot de passe</label>
        <input type="password" id="confirmPassword" v-model="newUser.confirmPassword" />
      </div>
      <button @click="handleRegister" type="submit"  data-cy="register-button">Créer un compte</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const login = ref(true);
const user = reactive({
  email: '',
  password: ''
});
const newUser = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
});

const toggleLogin = (value: boolean) => {
  login.value = value;
};

const handleLogin = async () => {
  try {
    console.log("user", JSON.stringify(user));
    const response = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
      credentials: 'include',
    });

    if (response.ok) {
      router.push('/accueil');
    } else {
      console.error('Login failed');
    }
  } catch (error) {
    console.error('Error during login:', error);
  }
};

const handleRegister = async () => {
  if (newUser.password !== newUser.confirmPassword) {
    console.error('Passwords do not match');
    return;
  }

  try {
    const response = await fetch('http://localhost:3000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
      }),
      credentials: 'include',
    });

    if (response.ok) {
      router.push('/accueil');
    } else {
      console.error('Registration failed');
    }
  } catch (error) {
    console.error('Error during registration:', error);
  }
};

</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}

.form-container {
  display: flex;
  flex-direction: column;
  width: 50vw;
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  background-color: #F8B5FF;
}

.login-register {
  align-self: flex-end;
}

.form-container:last-child {
  align-self: center;
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
  background-color: white;
}

button {
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  background-color: #2D4466;
  color: white;
  cursor: pointer;
}

.button-group {
  display: flex;
  justify-content: space-between;
}
</style>