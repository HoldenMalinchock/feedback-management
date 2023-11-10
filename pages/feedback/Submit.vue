<template>
  <div class="flex justify-center mt-16">
    <SubmitForm @submit="onSubmit" />
  </div>
</template>

<script setup lang="ts">
const onSubmit = (objectToSend: { name: string; email: string; feedbackText: string; sentiment: string }) => {
  useFetch("/api/feedback", {
    method: "POST",
    body: JSON.stringify(objectToSend),
    onResponse() {
      navigateTo("/feedback/view")
    }
  })
}
</script>  