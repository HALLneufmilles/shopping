import { defineStore } from "pinia";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "~/assets/dist/css/tabler.min.css",
    "~/assets/dist/css/tabler-vendors.min.css",
  ],

  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate", "storeToRefs"],
      },
    ],
    "@nuxt/image",
  ],

  imports: {
    dirs: ["stores"],
  },
  // Il faut améliorer l'affichage des images. Une fois le module @nuxt/image installé, on le configure en lui indiquant le nom du domaine d'où proviennent les images. Ensuite on va dans les template des fichiers remplacer les balises <img> par <nuxt-img>. Exemple 'ProductCard'.
  // https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-decouvrir-le-module-nuxt-image
  // https://image.nuxt.com/get-started/configuration
  image: {
    domains: ["fakestoreapi.com"],
  },

  // Les variables d'environnement avec Runtime Config. (équivalent au fichier '.env')
  // https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-decouvrir-les-variables-denvironnement-avec-runtime-config
  // https://nuxt.com/docs/guide/going-further/runtime-config

  runtimeConfig: {
    // "Public", pour accès dans toute l'application:
    public: {
      // Lors de l'ajout apiBase au runtimeConfig.public, Nuxt l'ajoute à chaque page.
      apiBase: "https://fakestoreapi.com/products/",
    },
  },
});
