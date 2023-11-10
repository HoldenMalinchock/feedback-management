import { beforeEach, describe, expect, it, vi } from "vitest"
import { shallowMount } from "@vue/test-utils"
import ViewFeedbackTable from "../components/ViewFeedbackTable.vue"

const testFeedback = {
  result: [
    {
      sentiment: "NEUTRAL",
      name: "Nick Wright",
      timestamp: "2023-11-10T14:37:17.017Z",
      email: "nwrite@gmail.com",
      feedbackText: "I am not sure what to say here I think that it was pretty good",
      id: "9QuKdgR7IiPLz98YfsQl"
    },
    {
      id: "FEH8nmFkYAHLyH8rbkUb",
      timestamp: "2023-11-10T15:05:10.362Z",
      name: "Eric Bienemy",
      email: "jjones@gmail.com",
      sentiment: "POSITIVE",
      feedbackText: "It was great!"
    },
    {
      feedbackText: "It was ok for me",
      id: "QQqW5SUj8apQjFqdNYJ2",
      email: "mtom@gmail.com",
      timestamp: "2023-11-10T15:16:54.864Z",
      sentiment: "NEGATIVE",
      name: "Mike Tomlin"
    },
    {
      email: "ryd@gmail.com",
      name: "Ryan Dahl",
      sentiment: "NEUTRAL",
      id: "TvUbcFiw1gI1hUKVlkns",
      timestamp: "2023-11-10T17:21:42.617Z",
      feedbackText: "It was alright"
    }
  ]
}

let wrapper: any
describe("Submit", async () => {
  beforeEach(async () => {
    wrapper = shallowMount(ViewFeedbackTable, {
      props: {
        feedback: testFeedback
      },
      global: {
        stubs: {
          UCard: { template: "<div></div>" },
          UTable: { template: "<div></div>" },
          UFormGroup: { template: "<div></div>" },
          USelect: { template: "<div></div>" }
        }
      }
    })
  })

  it("Component to be defined", async () => {
    expect(wrapper).toBeDefined()
  })
  it("Props for Table correctly Input", async () => {
    expect(wrapper.vm.feedback).toBeDefined()
    expect(wrapper.vm.feedback.result[0].name).toBe("Nick Wright")
  })
  it("Expect Sentiment to emit our event to parent", async () => {
    expect(wrapper.vm.sentiment).toBeDefined()
    expect(wrapper.vm.sentiment).toBe("")
    wrapper.vm.sentiment = "POSITIVE"
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted("update:sentiment")).toBeTruthy()
  })
})
