<template>
    <h1>Events</h1>
    <div class="row row-cols-1 row-cols-md-3 g-4">
        <div v-if="events" v-for="(event, i) in events" :key="i" class="col">
            <event-card :event="event" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { LearningEventType } from "@/types/LearningModels.ts";
import EventCard from "@/components/EventCard.vue";

const route = useRoute()
const events = ref<LearningEventType[] | null>(null)

onMounted(() => {
    events.value = route.meta['events'] as LearningEventType[];
})
</script>

<style scoped>

</style>
