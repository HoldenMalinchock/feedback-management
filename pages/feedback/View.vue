<template>
  <div class="flex justify-center mt-16">
    <UCard class="">
      <UTable :rows="exampleReturnFields" />
    </UCard>
    {{ feedback }}
  </div>
</template>

<script setup lang="ts">
//  TODO use zod here to validate the form before sending if we have time
const { data: feedback } = await useFetch("/api/feedback")

// We will need to filter this too based on sentiment input
const exampleReturnFields = [
  {
    id: "1234",
    name: "John Doe",
    email: "john.doe@gmail.com",
    feedbackText: "I think we should have more meetings",
    sentiment: "negative",
    timestamp: "2021-10-10T12:00:00Z"
  },
  {
    id: "5678",
    name: "Ryan Dahl",
    email: "ry.dahl@gmail.com",
    feedbackText: "I think we are great at mainting code",
    sentiment: "positive",
    timestamp: "2021-10-12T12:00:00Z"
  }
  // We have an issue here if the text is too large, ideally we handle this while also supporting this on the request
  //   {
  //     id: "91011",
  //     name: "Ben Johns",
  //     email: "ben.johns@gmail.com",
  //     feedbackText:
  //       "I think we should have more meetings, however I THINK WE DO A GREAT JOB AND I WOULD JUST LOVE TO TELL YOU MORE ABOUT HOW AMAZING WE ARE BUT I REALLY WANT TO TALK ABOUT IT",
  //     sentiment: "negative",
  //     timestamp: "2021-10-15T12:00:00Z"
  //   }
]
</script>