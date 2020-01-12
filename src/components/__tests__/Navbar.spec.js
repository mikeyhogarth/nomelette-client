import { shallowMount, createLocalVue } from "@vue/test-utils";
import Navbar from "@/components/Navbar.vue";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("Navbar", () => {
  it("renders correctly", () => {
    const wrapper = shallowMount(Navbar, { localVue });
    expect(wrapper.element).toMatchSnapshot();
  });
});
