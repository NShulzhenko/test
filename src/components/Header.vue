<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">Learningbank</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li v-for="link in links" :key="link.title" class="nav-item">
                        <router-link :class="['nav-link', {active: route.path === link.route}]" aria-current="page" :to="link.route">{{ link.title }}</router-link>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute()
const links = ref<Array<Record<'title' | 'route', string>>>([
 { title: 'Home', route: '/' },
 { title: 'Modules', route: '/modules' },
 { title: 'Events', route: '/events' },
])
</script>
