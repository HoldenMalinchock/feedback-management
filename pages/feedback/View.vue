<template>
  <div class="flex justify-center mt-16">
    <UCard class="">
      <UTable :rows="feedback.result" :columns="columns" />
    </UCard>
  </div>
</template>

<script setup lang="ts">
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
    key: "timestamp",
    label: "TimeStamp"
  }
]

//  TODO use zod here to validate the form before sending if we have time
// This type here is a little wacky useFetch wraps this in many types
const { data: feedback }: any = await useFetch("/api/feedback")
</script>