<template>
    <h1>Modules</h1>
    <div class="row row-cols-1 row-cols-md-3 g-4">
        <div v-if="modules" v-for="(module, i) in modules" :key="i" class="col">
            <module-card :module="module"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import type { LearningModuleType } from "@/types/LearningModels.ts";
import ModuleCard from "@/components/ModuleCard.vue";

const route = useRoute()
const modules = ref<LearningModuleType[] | null>(null)

onMounted(() => {
    modules.value = route.meta['modules'] as LearningModuleType[];
})
</script>
