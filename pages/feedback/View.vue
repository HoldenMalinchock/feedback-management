<template>
  <div class="flex justify-center mt-16">
    <UCard class="">
      <UFormGroup label="Filter Sentiment" class="max-w-xs mb-8">
        <USelect v-model="sentiment" :options="sentiments" />
      </UFormGroup>
      <UTable :rows="feedback.result" :columns="columns" />
    </UCard>
  </div>
</template>

<script setup lang="ts">
import { sentiments } from "@/utils/sentiment"
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

const sentiment = ref("")
// This type here is a little wacky useFetch wraps this in many types
const { data: feedback }: any = await useFetch("/api/feedback", {
  watch: [sentiment],
  params: { sentiment }
})
</script>