<template>
  <div class="product__list">
    <h1>Столы</h1>
    <MyInput v-model="searchText" />
    <ul>
      <li v-for="(product, index) in products" :key="index">
        <userCard
          :title="product.title"
          :price="product.price"
          :img-url="product.imgUrl"
          :count="product.count"
          @addToBusket="addToBusket(index)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import userCard from "./userCard";
import MyInput from "./MyInput";

export default {
  name: "ProductList",
  components: { userCard, MyInput },
  data() {
    return {
      searchText: "",
      products: [
        {
          title: "Стол Blah#1",
          price: 1999.99,
          imgUrl:
            "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFibGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          count: 20,
        },
        {
          title: "Стол Blah#2",
          price: 2999.99,
          imgUrl:
            "https://images.unsplash.com/photo-1479064312651-24524fb55c0e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHRhYmxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          count: 20,
        },
        {
          title: "Стол Blah#3",
          price: 3999.99,
          imgUrl:
            "https://images.unsplash.com/photo-1542360915390-e1a7b3ce8865?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fHRhYmxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          count: 20,
        },
        {
          title: "Стол Blah#4",
          price: 4999.99,
          imgUrl:
            "https://images.unsplash.com/photo-1499933374294-4584851497cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
          count: 20,
        },
      ],
    };
  },
  methods: {
    addToBusket(index) {
      console.log(index);
    },
  },
};
</script>>