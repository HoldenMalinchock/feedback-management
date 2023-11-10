<template>
  <div class="flex justify-center mt-16">
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
  </div>
</template>

<script setup lang="ts">
import { sentiments } from "@/utils/sentiment"
import { reactive } from "vue"
import moment from "moment"
// Import our schema for validation
import { schema } from "@/types/SubmitSchema"

const toast = useToast()

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
  useFetch("/api/feedback", {
    method: "POST",
    body: JSON.stringify(objToSend),
    onResponse() {
      navigateTo("/feedback/view")
    }
  })
}
</script>  