<script setup>
import { store } from "@/stores/store";
import { storeToRefs } from "pinia";

const { getPagesCount, getQuery } = storeToRefs(store());

const main = store();
main.loadGists();

</script>
<template>
    <div class="pagination-row">
        <!-- previous -->
        <button @click="main.loadGists({ page: getQuery.page - 1 })">Previous</button>
        <button>{{ getPagesCount }}</button>
        <button @click="main.loadGists({ page: getQuery.page + 1, per_page: 10 })">Next</button>
    </div>
    <slot />
</template>

<style>
.pagination-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top:3%
}
</style>


