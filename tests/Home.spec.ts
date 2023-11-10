import { describe, test, expect } from "vitest"
import Home from "../pages/index.vue"
import { shallowMount } from "@vue/test-utils"

describe("Test Home Page", () => {
  test("Test the text is Rendered on the page", () => {
    const wrapper = shallowMount(Home)
    expect(wrapper.text()).toContain("Welcome to the Feedback Management System!")
  })
})
