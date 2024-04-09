<template>
  <div class="col-sm-6 col-lg-4">
    <div class="card card-sm">
      <!-- https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-decouvrir-le-module-nuxt-image -->
      <!-- https://image.nuxt.com/usage/nuxt-img#fit -->
      <a :href="`product/${product.id}`" class="d-block">
        <nuxt-img
          fit="contain"
          :src="product.image"
          :alt="product.title"
          width="419"
          height="279"
          class="card-img-top"
          loading="lazy"
          preload
        />
        <!-- Pleins d'autres possibilités: https://image.nuxt.com/usage/nuxt-img -->
        <!-- On peut utiliser 'sizes="100vw sm:50vw md:400px" ' pour différentes tailles d'écran -->

        <!-- <img
          :src="product.image"
          width="419"
          height="279"
          class="card-img-top"
      /> -->
      </a>
      <div class="card-body">
        <div class="d-flex align-items-center">
          <div>
            <div>{{ product.title }}</div>
            <div class="text-muted">{{ product.category }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});

// console.log("productCard :", props.product);
</script>

<style lang="scss" scoped></style>
