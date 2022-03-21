<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
<footer>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      theWhiteFox GitHub gists
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>.
    </h3>
  </div>
  </footer>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

footer {
  max-width: 860px;
  margin: 0 auto;
}
</style>
