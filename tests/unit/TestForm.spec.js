import TestForm from "@/components/TestForm";
import Vue from "vue";
import Vuetify from "vuetify";
import Vuex from "vuex";
import merge from "lodash.merge";
import { mount, createLocalVue } from "@vue/test-utils";

Vue.use(Vuetify);
const localVue = createLocalVue();
localVue.use(Vuex);

describe("TestForm", () => {
  function createWrapper(component, { overrides, store } = {}) {
    const defaultMountingOptions = {
      mocks: {},
      propsData: {},
      localVue,
      store: store || new Vuex.Store({})
    };

    return mount(component, merge(defaultMountingOptions, overrides));
  }

  test("test 1", () => {
    const wrapper = createWrapper(TestForm);
    const form = wrapper.find({ ref: "form" });
    form.trigger("submit");
  });

  test("test 2", () => {
    const wrapper = createWrapper(TestForm);
    expect(wrapper.text()).toContain("Test Form");
  });
});
