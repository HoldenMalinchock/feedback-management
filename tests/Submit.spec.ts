import { beforeEach, describe, expect, it, vi } from "vitest"
import { shallowMount } from "@vue/test-utils"
import SubmitForm from "../components/SubmitForm.vue"
import moment from "moment"

let wrapper: any
describe("Submit", async () => {
  beforeEach(async () => {
    wrapper = shallowMount(SubmitForm)
  })
  it("should load our schema", async () => {
    expect(wrapper.vm.schema).toBeDefined()
  })

  it("should submit our form and emit it to our page to send it to server", async () => {
    wrapper.vm.state = {
      name: "Donald Duck",
      email: "testing123@gmail.com",
      feedbackText: "This is a test comment",
      sentiment: "positive"
    }
    const submitButton = vi.spyOn(wrapper.vm, "onSubmit")
    expect(wrapper.vm.state.name).toBe("Donald Duck")
    expect(submitButton).not.toHaveBeenCalled()
    wrapper.vm.onSubmit()
    await wrapper.vm.$nextTick()
    expect(submitButton).toHaveBeenCalled()
    expect(wrapper.emitted("submit")).toBeTruthy()
  })

  it("should construct our id and timestamp on submit", async () => {
    wrapper.vm.state = {
      name: "Donald Duck",
      email: "testing123@gmail.com",
      feedbackText: "This is a test comment",
      sentiment: "positive"
    }
    wrapper.vm.onSubmit()
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted("submit")[0][0].id).toHaveLength(36)
    expect(wrapper.emitted("submit")[0][0].timestamp).toBeDefined()
    expect(wrapper.emitted("submit")[0][0].timestamp).toHaveLength(24)
  })
})
