<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-white">
        <q-btn
          flat
          dense
          round
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        >
          <img alt="menu" src="~assets/icon_menu.svg" />
        </q-btn>

        <q-toolbar-title>
          <!-- Quasar App -->
        </q-toolbar-title>

        <div class="q-pa-md">
          <q-btn flat dense round aria-label="Menu">
            <q-badge color="primary" floating>1</q-badge>
            <img class="" alt="logo cart" src="~assets/icon_cart.svg" />
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-white border-right-primary row items-center"
    >
      <q-list>
        <q-item-label header class="bg-white q-ml-md">
          <div class="text-uppercase text-harris text-bold text-h6">
            Harris <br />
            Restaurant
          </div>
          <q-separator class="q-my-sm" color="primary" />
        </q-item-label>
        <EssentialLink
          class="bg-white text-bold text-xl q-ml-md"
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />

        <div class="row justify-center q-mt-xl">
          <div class="col-12 text-center">
            <q-btn
              round
              flat
              @click="leftDrawerOpen = !leftDrawerOpen"
              text-color="grey-9"
              size="md"
              icon="highlight_off"
            />
          </div>
        </div>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import {
  defineComponent,
  reactive,
} from "@vue/composition-api";

const linksData = [
  {
    title: "Home",
    caption: "Welcome back",
    icon: "home",
    link: "/",
  },
  {
    title: "Food",
    caption: "Your favorite food",
    icon: "dinner_dining",
    link: "/food",
  },
  {
    title: "Beverage",
    caption: "Your favorite beverage",
    icon: "coffee",
    link: "/beverage",
  },
  {
    title: "Dessert",
    caption: "Your favorite dessert",
    icon: "bento",
    link: "/dessert",
  },
];

export default defineComponent({
  name: "MainLayout",
  components: { EssentialLink },

  setup() {
    const state = reactive({
    });

    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
    };
  },
});
</script>

<style lang="scss" scoped>

</style>