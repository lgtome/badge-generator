<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="wrapper">
        <RouterLink to="/" />
    </div>
    <RouterView />
</template>

<style>
* {
    padding: 0;
    margin: 0;
}
.wrapper {
    widows: 100%;
    height: 100%;
}
</style>
