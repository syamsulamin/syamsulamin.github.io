<template>
  <q-page>
    <div class="q-pa-md">
      <p class="text-h5 text-bold text-uppercase text-harris">
        Harris <br />
        Restaurant
      </p>
      <p class="q-mb-md">Good Morning, <span class="text-bold"> BALA</span></p>
      <span class="text-uppercase text-bold text-h6 text-harris">Food </span>
      <span class="text-uppercase text-bold text-h6">Menu</span>

      <section style="margin-bottom: 65px;">
        <div class="row q-gutter-y-sm">
          <q-card
            v-for="index in dataPrepareAPI"
            :key="index.id"
            class="col-xs-12 col-sm-4 col-md-4 "
            flat
            bordered
          >
            <q-card-section horizontal>
              <q-card-section class="col-9">
                <p class="text-bold text-uppercase">{{ index["item_name"].substring(0, 24) }}
                  <q-tooltip class="text-xs">
                    {{ index["item_name"] }}
                  </q-tooltip>
                </p>
                <p>{{ index["description"] }}</p>
                <div class="row q-mt-xs items-center">
                  <div class="col-6">
                    <div class="text-harris">
                      <div>
                        <span class="text-xs">Rp </span>
                        <span class="text-bold"> {{ index["price"] }} </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 text-right">
                    <q-btn
                      flat
                      dense
                      round
                      color="red-10"
                      size="md"
                      icon="remove_circle"
                      @click="onClickMinus(index)"
                      v-model="minus"
                      :class="index['qty'] == 0 ? 'invisible' : 'visible'"
                    />
                    <span :class="index['qty'] == 0 ? 'invisible' : 'visible'">{{
                      index["qty"]
                    }}</span>
                    <q-btn
                      flat
                      dense
                      round
                      color="primary"
                      size="md"
                      icon="add_circle"
                      @click="onClickPlus(index)"
                      v-model="showMinus"
                    />
                  </div>
                </div>
              </q-card-section>
              <q-img
                @click="onClickDetailFood"
                class="col-3 cover"
                :src="index['img']"
              />
            </q-card-section>
          </q-card>
        </div>
      </section>

      <section :class="dataSelected.length == 0 ? 'invisible' : 'visible'" >
        <div class="container bg-primary fixed-bottom payment">
          <div class="row justify-between q-pa-md text-center items-center">
            <div class="col-6 q-pl-md">
              <div class="text-white text-left"> {{dataSelected.length}} item</div>
              <div class="text-white text-left text-bold">Rp. {{balance}}</div>
            </div>
            <div class="col-6">
              <q-btn @click="onClickConfirmOrder" flat color="green" class="bg-white" round icon="keyboard_arrow_right" />
            </div>
          </div>
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
// import data from "../../data/data.json";

export default defineComponent({
  name: "PageFood",

  setup(props, { root: { $api, $router } }) {

    const state = reactive({
      title: "Egg And Cheese Muffin",
      notes: "Perpaduan scrambled edd dan keju gurih dalam setangkup muffin",
      showMinus: false,
      counter: 0,
      minus: false,
      dataPrepare: [],
      dataSelected: [],
      balance: 0,
      dataPrepareAPI: []

    });

    onMounted(async () => {
            
      state.dataPrepare = state.dataPrepareAPI;
      const dataPrepareAPI = JSON.parse(localStorage.getItem('resto'));
      console.log("Resto api : ", dataPrepareAPI);
      state.dataPrepareAPI = dataPrepareAPI;

      const dataPrepareSelected = JSON.parse(localStorage.getItem("dataSelected"));
      if (!dataPrepareSelected) {
        console.log("tidak ada");
        // $router.push("/food");
      } else {
        // state.dataPrepare = dataPrepareAPI;
        console.log("ada dataSelected : ", state.dataPrepareSelected);
      }
    });

    const onClickPlus = (datarow) => {
      const obj = datarow;
      let dataExist = false;
      
      if (state.dataSelected.length == 0) {        
        obj.qty = obj.qty + 1;
        state.dataSelected.push(obj);
      } else {
        for (let i = 0; i<state.dataSelected.length; i++) {
          const datarow = state.dataSelected[i];
          if (datarow['id'] == obj['id']) {
            dataExist = true;
            break;
          }
        }

        if (!dataExist) {
          obj.qty = obj.qty + 1;
          state.dataSelected.push(obj);
        } else {
          obj.qty = obj.qty + 1;
        }
      }

      calculateBalance();
      console.log("dataSelected : ", state.dataSelected);
    };

    const onClickMinus = (datarow) => {
      const obj = datarow;
      
      if(state.dataSelected.length !== 0){
        for (let index = 0; index < state.dataSelected.length; index++) {
          const element = state.dataSelected[index];
          if(element.id == obj.id) {
            if(element.qty == 1){
              state.dataSelected.splice(index, 1);
              obj.qty = 0;
            } else {
              obj.qty = obj.qty - 1;
            }
          }
        }
        
        state.dataSelected = state.dataSelected;
        calculateBalance();
        console.log("state.dataSelected", state.dataSelected);
      }
    };

    const onClickDetailFood = () => {
      $router.push("/detail-food");

    };

    const onClickConfirmOrder = () => {
      $router.push("/confirm-order");
      // const dataPrepareAPI = JSON.parse(localStorage.setItem(state.dataSelected));

      localStorage.setItem('dataSelected', JSON.stringify(state.dataSelected));
    };

    const calculateBalance = () => {
      state.balance = 0;

      for (let i = 0; i<state.dataSelected.length; i++) {
        const element = state.dataSelected[i];
        const price = element['price'];
        const qty = element['qty'];
        const currPrice = price * qty;
        state.balance = (state.balance + currPrice)
      }
    }

    return {
      ...toRefs(state),
      onClickPlus,
      onClickMinus,
      onClickDetailFood,
      calculateBalance,
      onClickConfirmOrder
    };
  },
});
</script>

<style lang="scss" scoped>
.cover {
  object-fit: contain;
}
</style>