import { shallowMount, createLocalVue } from "@vue/test-utils";
import Navbar from "@/components/NavigationBar.vue";
import VueRouter from "vue-router";
import Buefy from "buefy";

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Buefy);

describe("Navbar", () => {
  it("renders correctly", () => {
    const wrapper = shallowMount(Navbar, { localVue });
    expect(wrapper.element).toMatchSnapshot();
  });
});
