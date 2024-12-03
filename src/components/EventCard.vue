<template>
    <div class="card h-100">
        <div class="d-flex justify-content-center">
            <img :src='event.data.imagePath' class="card-img-top" alt="event" style="height: 200px; max-width: fit-content; object-fit: cover;">
        </div>
        <div class="card-body">
            <div class="d-flex gap-2 justify-content-between">
                <h5 class="card-title">{{ event.data.name }}</h5>
                <small class="text-muted text-capitalize">{{ event.data.location }}: {{ getDateFromIsoString(event.data.startDate) }} - {{ getDateFromIsoString(event.data.endDate) }}</small>
            </div>
            <p class="card-text">{{ event.data.description }}</p>
        </div>
        <div class="card-footer">
            <div class="d-flex gap-2 justify-content-between">
                <small class="text-muted">{{ getLastUpdatedText(event.data.updatedAt) }}</small>
                <small :class="eventStatusMap[event.context.status]?.color">{{eventStatusMap[event.context.status]?.title}}</small>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { LearningEventType } from "@/types/LearningModels.ts";
import { getLastUpdatedText } from "@/helpers/getLastUpdatedText.ts";
import { getDateFromIsoString } from "@/helpers/getDateFromIsoString.ts";
import { EventStatus } from "@/types/EventData.ts";
import { ref } from "vue";


defineProps<{
    event: {
      type: LearningEventType,
      required: true
    }
}>()

const eventStatusMap = ref<Record<EventStatus, { color: string, title: string }>>({
  [EventStatus.Attended]: { color: "text-success", title: "Attended" },
  [EventStatus.Attending]: { color: "text-warning", title: "Attending" },
  [EventStatus.Declined]: { color: "text-danger", title: "Declined" },
  [EventStatus.Invited]: { color: "text-info", title: "Invited" },
});
</script>
