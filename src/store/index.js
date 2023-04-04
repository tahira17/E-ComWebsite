import { createStore } from 'vuex'

import rootMutations from './mutation.js'
import rootActions from "./actions.js";
import rootGetters from "./getters.js";
const store= createStore({
  state() {
    return {
cart:[],
total:0,
qty:0,
products:[
  {
    id: 1,
    type: "Smartphone",
    brand: "Apple",
    model: "iPhone 12 Pro",
    color: "Graphite",
    capacity: "128 GB",
    imgSrc: require("@/assets/Iphone12Pro/iPhone12Pro.jpg"),
    price: 999,
  },
  {
    id: 2,
    type: "Smartphone",
    brand: "Apple",
    model: "iPhone 12 Pro",
    color: "Silver",
    capacity: "128 GB",
    imgSrc: require("@/assets/Iphone12Pro/iPhone12Pro2.jpg"),

    price: 999,
  },
  {
    id: 3,
    type: "Tablets",
    brand: "Apple",
    model: "Ipad Pro",
    color: "Gold",
    capacity: "128 GB",
   
    imgSrc: require("@/assets/iPadPro/ipad.jpg"),

    price: 999,
  },
  {
    id: 4,
    type: "Tablets",
    brand: "Apple",
    model: "iPhone 12 Pro",
    color: "Pacific Blue",
    capacity: "128 GB",
    imgSrc: require("@/assets/iPadPro/ipad2.jpg"),

    price: 999,
  },
  {
    id: 5,
    type: "Tablets",
    brand: "Samgsung",
    model: "Galaxy Tablet",
    color: "Graphite",
    capacity: "256 GB",
    imgSrc: require("@/assets/S21/samsungtab.jpg"),

    price: 1199.0,
  },
  {
    id: 6,
    type: "Smartphone",
    brand: "Apple",
    model: "iPhone ",
    color: "Silver",
    capacity: "256 GB",
    imgSrc: require("@/assets/IphoneSE/iPhoneSE.jpg"),

    price: 1199,
  },
  {
    id: 7,
    type: "Smartphone",
    brand: "Apple",
    model: "iPhone ",
    color: "Gold",
    capacity: "256 GB",
    imgSrc: require("@/assets/IphoneSE/iPhoneSE2.jpg"),

    price: 1199,
  },

]
    }
  },
  getters: rootGetters,
  mutations:rootMutations,
  actions: rootActions,
});

export default store;
