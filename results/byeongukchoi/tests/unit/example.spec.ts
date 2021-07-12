import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Login from "@/views/Login.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Login, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
