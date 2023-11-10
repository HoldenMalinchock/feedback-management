<template>
  <UCard class="w-80">
    <template #header>
      <p>Submit Feedback Form</p>
    </template>
    <UForm :schema="schema" :state="state" @submit="onSubmit">
      <UFormGroup label="Name" name="name">
        <UInput v-model="state.name" />
      </UFormGroup>

      <UFormGroup label="Email" name="email">
        <UInput v-model="state.email" type="email" />
      </UFormGroup>

      <UFormGroup label="Feedback Text" name="feedbackText">
        <UTextarea v-model="state.feedbackText" resize size="xl" />
      </UFormGroup>

      <UFormGroup label="Sentiment" name="sentiment">
        <USelect v-model="state.sentiment" :options="sentiments" />
      </UFormGroup>

      <UButton class="mt-2 justify-end" type="submit"> Submit </UButton>
    </UForm>
  </UCard>
</template>
  
  <script setup lang="ts">
import { reactive } from "vue"
import moment from "moment"
import { z } from "zod"

const emit = defineEmits(["submit"])

const schema = z.object({
  name: z.string().min(2, "Must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  feedbackText: z.string().min(10, "Must be at least 10 characters").max(245, "Must be less than 245 characters"),
  sentiment: z
    .string()
    .nonempty("Must select a sentiment")
    .refine((val: string) => sentiments.includes(val), {
      message: "Must select a valid sentiment"
    })
})

const sentiments = ["POSITIVE", "NEGATIVE", "NEUTRAL"]

// We may need to change the default values here and types strings is odd, but for simplicity might make sense
const state = reactive<{ name: string; email: string; feedbackText: string; sentiment: string }>({
  name: "",
  email: "",
  feedbackText: "",
  sentiment: ""
})

const onSubmit = () => {
  const id = crypto.randomUUID()
  const timestamp = moment().toISOString()
  const objToSend = Object.assign({}, state, { id, timestamp })
  emit("submit", objToSend)
}
</script>  