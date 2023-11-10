import { beforeEach, describe, expect, it } from "vitest"
import { shallowMount } from "@vue/test-utils"
import Submit from "../pages/feedback/Submit.vue"

let wrapper: any
describe("Submit", async () => {
  it("should load our schema", async () => {
    const wrapper = shallowMount(Submit)
    expect(wrapper.vm.$data.schema).toBeDefined()
  })
})
