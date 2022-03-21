import { describe, it, expect, fn } from "vitest";

import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import PaginationComponent from "../PaginationComponent.vue";

describe("PaginationComponent", () => {
  it("renders properly", () => {
    const wrapper = mount(PaginationComponent, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: fn,
          }),
        ],
      },
    });
    expect(wrapper.text()).toContain("Previous1Next");
  });
});
