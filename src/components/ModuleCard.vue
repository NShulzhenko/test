<template>
    <div class="card h-100">
        <div class="d-flex justify-content-center">
            <img :src='module.data.imagePath' class="card-img-top" alt="course" style="height: 200px; max-width: fit-content; object-fit: cover;">
        </div>
        <div class="card-body">
            <div class="d-flex gap-2 justify-content-between">
                <h5 class="card-title">{{ module.data.name }}</h5>
                <small class="text-muted text-capitalize">{{ module.data.moduleType }}: {{ getMinutesFromSeconds(module.data.duration) }}</small>
            </div>
            <p class="card-text">{{ module.data.description }}</p>
        </div>
        <div class="card-footer">
            <div class="d-flex gap-2 justify-content-between">
                <small class="text-muted">{{ getLastUpdatedText(module.data.updatedAt) }}</small>
                <small :class="moduleStatusMap[module.context.status]?.color">{{moduleStatusMap[module.context.status]?.title}}</small>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { LearningModuleType } from "@/types/LearningModels.ts";
import { getLastUpdatedText } from "@/helpers/getLastUpdatedText.ts";
import { getMinutesFromSeconds } from "@/helpers/getMinutesFromSeconds.ts";
import { ref } from "vue";
import { ModuleStatus } from "@/types/ModuleData.ts";

defineProps<{
    module: {
      type: LearningModuleType,
      required: true
    }
}>();

const moduleStatusMap = ref<Record<ModuleStatus, { color: string, title: string }>>({
  [ModuleStatus.Completed]: { color: "text-success", title: "Completed" },
  [ModuleStatus.Pending]: { color: "text-warning", title: "Pending" },
  [ModuleStatus.Locked]: { color: "text-danger", title: "Locked" },
  [ModuleStatus.Incomplete]: { color: "text-info", title: "Incomplete" },
});
</script>
