<template>
  <div class="flex justify-center mt-16">
    <ViewFeedbackTable :feedback="feedback" @update:sentiment="sentiment = $event" />
  </div>
</template>

<script setup lang="ts">
// Sentiment is tracked from the child component
const sentiment = ref("")
// This type here is a little wacky useFetch wraps this in many types
const { data: feedback }: any = await useFetch("/api/feedback", {
  watch: [sentiment],
  params: { sentiment }
})
</script>