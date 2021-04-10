<template>
  <q-page>
    <div class="q-pa-md">
      <p class="text-h5 text-bold text-uppercase text-harris">
        Confirm <br />
        Order
      </p>
      <p class="q-mb-md">NO. <span class="text-bold"> #1</span></p>
      <div class="text-uppercase text-sm">Customer Detail</div>
      <div class="row">
        <div class="col-4">
          <div class="text-uppercase text-bold">Name :</div>
          <div class="text-uppercase text-bold">Table :</div>
        </div>
        <div class="col-6">
          <div class="text-uppercase text-bold text-harris">Bala</div>
          <div class="text-uppercase text-bold">10</div>
        </div>
      </div>

      <section style="margin-bottom: 135px">
        <div class="row q-gutter-y-sm">
          <q-card
            v-for="(item, index) in dataPrepare"
            :key="index"
            class="col-xs-12 col-sm-4 col-md-4"
            flat
            bordered
          >
            <q-card-section horizontal>
              <q-card-section class="col-9">
                <p class="text-bold text-uppercase">{{ item["item_name"].substring(0, 24) }}
                  <q-tooltip class="text-xs">
                    {{ item["item_name"] }}
                  </q-tooltip>
                </p>
                <p class="text-sm text-bold text-harris text-uppercase">Order Note</p>
                <p :class="item['note'] == null ? 'hidden' : 'visible text-sm text-grey-8'">{{ item['note'] }}</p>
                <div class="row q-mt-xs items-center">
                  <div class="col-5">
                    <div class="text-harris">
                      <div>
                        <span class="text-xs">Rp </span>
                        <span class="text-bold"> {{ item["price"] }} </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-7 text-right">
                    <q-btn
                      flat
                      dense
                      round
                      color="grey-10"
                      size="md"
                      icon="create"
                      v-model="edit"
                      @click="dialogAddNote = true"
                    />
                    <q-btn
                      flat
                      dense
                      round
                      color="red-10"
                      size="md"
                      icon="remove_circle"
                    />
                    <span>{{ item["qty"] }}</span>
                    <q-btn
                      flat
                      dense
                      round
                      color="primary"
                      size="md"
                      icon="add_circle"
                    />
                  </div>
                </div>
              </q-card-section>
              <q-img
                @click="onClickDetailFood"
                class="col-3 cover"
                :src="item['img']"
              />
            </q-card-section>
          </q-card>
        </div>
      </section>

      <section>
        <div
          @click="dialogConfirmOrder = true"
          class="bg-white container fixed-bottom"
        >
          <div class="q-ma-md">
            <!-- <q-separator class="q-mb-sm" /> -->
            <div class="row">
              <div class="col-8">
                <div class="text-uppercase text-bold">Total</div>
                <div class="text-xs text-red-10">
                  *Please check your item before confirm order
                </div>
              </div>
              <div class="col-4">
                <div class="text-uppercase text-bold text-xl text-right">
                  Rp. 88,000
                </div>
              </div>
            </div>
          </div>

          <div class="row q-pa-md text-center bg-primary items-center">
            <div class="col-6 text-uppercase">
              <div class="text-white text-bold">Confirm Order</div>
            </div>
            <div class="col-6">
              <q-btn flat color="green" class="bg-white" round icon="done" />
            </div>
          </div>
        </div>
      </section>

      <!-- Dialog notes -->
      <q-dialog v-model="dialogAddNote" persistent>
        <q-card style="min-width: 350px">
          <q-card-section>
            <div class="text-h6">Add Note</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input
              dense
              v-model="addNotes"
              autofocus
              @keyup.enter="dialogAddNote = false"
            />
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Cancel" v-close-popup />
            <q-btn unelevated color="primary" label="Save" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <!-- Dialog Confirm Order -->
      <q-dialog v-model="dialogConfirmOrder" persistent>
        <q-card class="q-py-md" style="min-width: 350px">
          <q-card-section class="q-pt-none">
            <div class="text-center">
              <q-avatar
                icon="done"
                class="q-my-md border-primary"
                text-color="primary"
              />
              <div class="text-bold text-md text-uppercase">Confirm order</div>
              <div>Procces to order list?</div>
            </div>
          </q-card-section>

          <q-card-actions align="center" class="text-primary">
            <q-btn flat label="No" v-close-popup />
            <q-btn
              unelevated
              to="/my-order"
              color="primary"
              label="Yes"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
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
  name: "ConfirmOrder",

  setup(props, { root: { $api, $router } }) {
    const state = reactive({
      title: "Egg And Cheese Muffin",
      notes: "Perpaduan scrambled edd dan keju gurih dalam setangkup muffin",
      showMinus: false,
      angka: 0,
      minus: false,
      data: {},
      edit: "",
      dialogAddNote: false,
      dialogConfirmOrder: false,
      addNotes: "",
      dataPrepare: [],
      dataPrepareAPI: [],
    });

    onMounted(() => {
      // console.log(data);

      const dataPrepareAPI = JSON.parse(localStorage.getItem("dataSelected"));
      if (!dataPrepareAPI) {
        console.log("tidak ada");
        $router.push("/food");
      } else {
        state.dataPrepare = dataPrepareAPI;
        console.log("ada12 : ", state.dataPrepare);
        
        if (!dataPrepareAPI) {
          console.log("tidak ada data update : ");
        } else {
          // localStorage.setItem('dataUpdateSelected', JSON.stringify(state.dataSelected));
          // const updateDataSelected = JSON.parse(localStorage.setItem("dataSelected"));
          console.log("ada data update : ", state.dataPrepare);
        }
      }

    });

    const onClickPlus = () => {
      state.angka++;
    };

    const onClickMinus = () => {
      state.angka--;
    };

    const onClickDetailFood = () => {
      //   root.router.push({ path: "" });
      alert("Router to detail food");
    };

    return {
      ...toRefs(state),
      onClickPlus,
      onClickMinus,
      onClickDetailFood,
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