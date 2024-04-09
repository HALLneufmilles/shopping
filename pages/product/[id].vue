<script setup>
const productStore = useProduct();
const route = useRoute();
productStore.fetchProduct(route.params.id);
const product = computed(() => productStore.product);
console.log("productid : ", product.value);
useHead({
  title: computed(() => product.value.title),
  meta: [
    {
      name: "description",
      content: computed(() => product.value.description),
    },
  ],
});

// const cartStore = useCart();
// async function addToCart(product){
//     await cartStore.addToCart({
//         id: product.id,
//         name: product.title,
//         image: product.image,
//         price: product.price,
//     })
// }

// definePageMeta({
//     middleware: 'check-auth',
// })
</script>

<template>
  <div class="page-wrapper">
    <!-- Page body -->
    <div class="page-body">
      <div class="container-xl">
        <div class="row justify-content-center">
          <div class="col-lg-10 col-xl-9">
            <div class="card card-lg">
              <div class="card-body markdown">
                <h1 class="mb-0">{{ product.title }}</h1>
                <p>
                  <img
                    :src="product.image"
                    :alt="product.title"
                    class="card-img-top"
                  />
                </p>

                <p>
                  {{ product.description }}
                </p>
                <div class="rate">
                  <span v-for="i in Math.round(product.rating.rate)" :key="i">
                    &starf;
                  </span>
                  <span
                    v-for="i in Math.round(5 - product.rating.rate)"
                    :key="i"
                  >
                    &star;
                  </span>
                  -
                  <span>{{ product.rating.rate.toFixed(1) }}</span>
                </div>
                <!-- @click.prevent="addToCart(product)" -->
                <div class="col-6 col-sm-4 col-md-2 col-xl-auto py-3">
                  <a href="#" class="btn btn-tabler w-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-shopping-cart-plus"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="6" cy="19" r="2"></circle>
                      <circle cx="17" cy="19" r="2"></circle>
                      <path d="M17 17h-11v-14h-2"></path>
                      <path
                        d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13"
                      ></path>
                      <path d="M15 6h6m-3 -3v6"></path>
                    </svg>
                    Ajouter {{ product.price.toFixed(2) }} €
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <footer class="footer footer-transparent d-print-none">
          <div class="container-xl">
            <div class="row text-center align-items-center flex-row-reverse">

              <div class="col-12 col-lg-auto mt-3 mt-lg-0">
                <ul class="list-inline list-inline-dots mb-0">
                  <li class="list-inline-item">
                    Copyright &copy; 2022
                    <a href="." class="link-secondary">Tabler</a>.
                    All rights reserved.
                  </li>
                  <li class="list-inline-item">
                    <a href="./changelog.html" class="link-secondary" rel="noopener">
                      v1.0.0-beta16
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer> -->
  </div>
</template>
