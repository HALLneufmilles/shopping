<script setup>
useHead({
  bodyAttrs: {
    class: "theme-dark",
  },

  script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.2.3/js/bootstrap.bundle.min.js",
    },
  ],

  // On peut aussi rendre le titre du site de façon dynamique, au cas où on utiliserait ce code pour différents shop:
  // https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-implementer-un-titre-et-des-meta-dynamiques
  // Ce qui apparait dans l'onglet
  // title: "Shopping site",

  // Maintenant, Ce qui apparait dans l'onglet de la page d'accueil : "Shopping site". Si on va sur un produite, on aura dans l'onglet: "le titre du produit + Shopping site".
  titleTemplate: (morceauDeTitre) => {
    return morceauDeTitre
      ? `${morceauDeTitre} - Shopping site`
      : "Shoping site";
  },
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
