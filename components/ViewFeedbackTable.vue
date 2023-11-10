<template>
  <UCard class="mx-8">
    <UFormGroup label="Filter Sentiment" class="max-w-xs mb-8">
      <USelect v-model="sentiment" :options="sentiments" />
    </UFormGroup>
    <UTable :rows="feedback.result" :columns="columns" />
  </UCard>
</template>
  
<script setup lang="ts">
// Needed here for testing
import { defineProps, defineEmits, ref, watch } from "vue"
const sentiments = ["POSITIVE", "NEGATIVE", "NEUTRAL", ""]
const columns = [
  {
    key: "id",
    label: "ID"
  },
  {
    key: "name",
    label: "Name"
  },
  {
    key: "email",
    label: "Email"
  },
  {
    key: "feedbackText",
    label: "Feedback"
  },
  {
    key: "sentiment",
    label: "Sentiment"
  },
  {
    key: "timestamp",
    label: "TimeStamp"
  }
]

defineProps<{
  feedback: { result: any }
}>()

const emit = defineEmits(["update:sentiment"])

const sentiment = ref("")

watch(sentiment, () => {
  emit("update:sentiment", sentiment.value)
})
</script>