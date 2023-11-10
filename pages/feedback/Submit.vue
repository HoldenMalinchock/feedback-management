<template>
  <div class="flex justify-center mt-16">
    <UCard>
      <UForm :state="state" @submit="onSubmit">
        <UFormGroup label="Name" name="name">
          <UInput v-model="state.name" />
        </UFormGroup>

        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" type="email" />
        </UFormGroup>

        <UFormGroup label="Feedback Text" name="feedbackText">
          <UTextarea v-model="state.feedbackText" />
        </UFormGroup>

        <UFormGroup label="Sentiment" name="sentiment">
          <USelect v-model="state.sentiment" :options="sentiments" />
        </UFormGroup>

        <UButton type="submit"> Submit </UButton>
      </UForm>
    </UCard>
  </div>
</template>

<script setup lang="ts">
//  TODO use zod here to validate the form before sending if we have time
import { reactive } from "vue"
import moment from "moment"

const sentiments = ["POSITIVE", "NEGATIVE", "NEUTRAL"]

// We may need to change the default values here and types strings is odd, but for simplicity might make sense
const state = reactive<{ name: string; email: string; feedbackText: string; sentiment: string }>({
  name: "",
  email: "",
  feedbackText: "",
  sentiment: ""
})

const onSubmit = () => {
  // Zod to validate please
  // We also need to make sure we are adding timestamps and an id
  const id = crypto.randomUUID()
  const timestamp = moment().toISOString()
  const objToSend = Object.assign({}, state, { id, timestamp })
  console.log(objToSend)
  useFetch("/api/feedback", { method: "POST", body: JSON.stringify(objToSend) })
}
</script>