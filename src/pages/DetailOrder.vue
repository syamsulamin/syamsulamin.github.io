<template>
  <q-page>
    <div class="q-pa-md">
      <p class="text-h5 text-bold text-uppercase">
        <span>Harris</span> <br />
        <span class="text-harris">Restaurant</span>
      </p>
      <p class="q-mb-md">Good Morning, <span class="text-bold"> BALA</span></p>

      <section>
        <div class="q-pa-md">
          <q-carousel
            arrows
            control-color="primary"
            animated
            v-model="slide"
            height="186px"
          >
            <q-carousel-slide
              name="first"
              class="rounded-xl"
              img-src="~assets/detail_food_1.png"
            >
              <div class="absolute-center"></div>
            </q-carousel-slide>
            <q-carousel-slide
              name="second"
              class="rounded-xl"
              img-src="~assets/detail_food_2.png"
            >
              <div class="absolute-center"></div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </section>

      <section>
        <div class="row items-center">
          <div class="col ">
            <div class="text-bold text-xxl text-uppercase">Egg and cheese muffin</div>
          </div>
          <div class="col">
            <div class="text-harris text-right">
              <span class="text-sm">Rp </span>
              <span class="text-bold text-xxl">43,000</span>
            </div>
          </div>
        </div>
        <q-separator class="q-my-md" />
        <div class="text-center">
            <p>{{ notes }}</p>
            <div class="text-center q-my-md">
                <q-btn
                    flat
                    dense
                    round
                    color="red-10"
                    size="md"
                    icon="remove_circle"
                    @click="onClickMinus"
                    v-model="minus"
                />
                <span class="text-xl">{{ angka }}</span>
                <q-btn
                    flat
                    dense
                    round
                    color="primary"
                    size="md"
                    icon="add_circle"
                    @click="onClickPlus"
                    v-model="showMinus"
                />
            </div>

            <q-btn
                class="text-uppercase"
                color="primary"
                text-color="white"
                unelevated
                to="/confirm-order"
                label="Add to order"
                no-caps
            />
        </div>
      </section>

      
    </div>
  </q-page>
</template>

<script>
import {
  defineComponent,
  reactive,
  toRefs,
  onMounted,
} from "@vue/composition-api";
import data from "../../data/data.json";

export default defineComponent({
  name: "PageDetailFood",

  setup() {
    const state = reactive({
      title: "Egg And Cheese Muffin",
      notes: "Perpaduan scrambled edd dan keju gurih dalam setangkup muffin",
      showMinus: false,
      angka: 0,
      minus: false,
      data: {},
      slide: "first",
    });

    onMounted(() => {
      console.log(data);
    });

    const onClickPlus = () => {
      state.angka++;
      if (state.angka == 0) {
        console.log("Nol ilang: ");
        // state.minus = ``
      }
    };

    const onClickMinus = () => {
      state.angka--;
    };

    return {
      ...toRefs(state),
      onClickPlus,
      onClickMinus,
    };
  },
});
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  //   max-width: 350px;
}

.cover {
  object-fit: contain;
}
</style>