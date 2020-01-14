import { shallowMount, createLocalVue } from "@vue/test-utils";
import TaggingList from "@/components/TaggingList.vue";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("TaggingList", () => {
  it("renders correctly", () => {
    const wrapper = shallowMount(TaggingList, {
      localVue,
      propsData: {
        title: "Seasons",
        taggings: [
          { slug: "summer", name: "Summer" },
          { slug: "autumn", name: "Autumn" },
          { slug: "winter", name: "Winter" },
          { slug: "spring", name: "Spring" }
        ]
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
