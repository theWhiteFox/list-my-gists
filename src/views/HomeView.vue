<script setup>
import { store } from "@/stores/store";
import { onMounted } from "@vue/runtime-core";
import PaginationComponent from "../components/PaginationComponent.vue";

const main = store();

onMounted(() => {
  main.loadGists();
});
</script>

<template>
  <main>
    <section>
      <h1>
        <a href="https://www.github.com/thewhitefox">theWhiteFox</a>
      </h1>

      <div v-for="gist in main.gists" :key="gist">
        <ul>
          <li v-for="file in gist.files" :key="file">
            <a :href="gist.html_url">{{ file.filename }}</a>
          </li>
        </ul>
      </div>
      <PaginationComponent />
    </section>
  </main>
</template>

<style scoped>
main {
  margin: 0 auto;
  text-align: center;
}
.profile {
  text-align: center;
  margin-bottom: 0.5rem;
}
img {
  top: 2rem;
  max-width: 12rem;
}
li {
  display: inline-block;
}
div {
  margin: 0 auto;
  text-align: left;
  max-width: 453px;
  padding: 0.2rem;
}
ul {
  /* text-align: center; */
}

li {
  display: inline-block;
}
</style>
