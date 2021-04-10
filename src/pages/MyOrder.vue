<template>
  <q-page>
    <div class="q-pa-md">
      <p class="text-h5 q-mb-md text-bold text-uppercase text-harris">
        My <br />
        Order
      </p>

      <!-- v-for="(item, index) in dataPrepare"
      :key="index" -->
      <section style="margin-bottom: 167px">
        <q-card
          class="q-mb-xs"
          flat
          bordered
        >
          <q-card-section @click="expanded">
            <div class="text-h6">No. 1</div>
            <div class="row">
              <div class="col">
                <div class="row">
                  <div class="col-5 text-uppercase">Name:</div>
                  <div class="col-5 text-uppercase text-harris text-bold">
                    Bala
                  </div>
                  <div class="col-5 text-uppercase">Table:</div>
                  <div class="col-5 text-uppercase">10</div>
                </div>
              </div>
              <div class="col">
                <div class="text-harris text-right text-xl text-bold">
                  Rp. 88,000
                </div>
              </div>
            </div>
          </q-card-section>

          <q-card-section class="q-pa-sm"  v-for="(item, index) in dataPrepare" :key="index" >
            <div class="row q-mb-md">
              <div class="col-1">1x</div>
              <div class="col-8 text-bold text-uppercase">
                {{ item['item_name'].substring(0,24) }} <br />
                <div class="text-harris text-sm text-uppercase">
                  Order note <br />
                  <div
                    class="text-weight-regular text-grey-7 text-lowercase text-sm"
                  >
                    {{ item['note'] }}
                  </div>
                </div>
              </div>
              <div class="col-3 text-right">Rp. {{ item['price'] }} </div>
            </div>
          </q-card-section>

          <q-card-section >
            <q-separator class="q-my-sm" />
            <div class="row">
              <div class="col-6 text-uppercase text-bold">Subtotal</div>
              <div class="col-6 text-right text-harris text-bold">
                Rp. 88,000
              </div>
            </div>
          </q-card-section>
          
        </q-card>
      </section>
    </div>

    <section>
      <div class="container bg-white fixed-bottom">
        <div class="q-ma-md">
          <q-separator />
          <div class="row">
            <div class="col">Tax</div>
            <div class="col text-right">8,800</div>
          </div>
          <div class="row">
            <div class="col">Service</div>
            <div class="col text-right">8,800</div>
          </div>
          <q-separator />

          <div class="row q-mt-sm">
            <div class="col">
              <div class="text-uppercase text-bold">Subtotal</div>
            </div>
            <div class="col">
              <div class="text-harris text-bold text-xl text-right">
                Rp. 105,600
              </div>
            </div>
          </div>
        </div>

        <div class="row q-pa-md bg-primary text-center items-center">
          <div class="col-6 text-uppercase">
            <div class="text-white text-bold">Payment</div>
          </div>
          <div class="col-6">
            <q-btn
              flat
              color="green"
              class="bg-white"
              round
              icon="attach_money"
            />
          </div>
        </div>
      </div>
    </section>
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
  name: "MyOrder",

  setup({ root }) {
    const state = reactive({
      title: "Egg And Cheese Muffin",
      notes: "Perpaduan scrambled edd dan keju gurih dalam setangkup muffin",
      showMinus: false,
      angka: 0,
      minus: false,
      data: {},
      edit: "",
      dataPrepare: [],
    });

    onMounted(() => {
      // console.log(data);

      const dataPrepareAPI = JSON.parse(localStorage.getItem("dataSelected"));
      console.log("dataPrepareAPI : ", dataPrepareAPI);

      state.dataPrepare = dataPrepareAPI;
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

    const onClickDetailFood = () => {
      //   root.router.push({ path: "" });
      alert("Router to detail food");
    };

    const expanded = () => {
      alert('Expanded!');
    }

    return {
      ...toRefs(state),
      onClickPlus,
      onClickMinus,
      onClickDetailFood,
      expanded
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