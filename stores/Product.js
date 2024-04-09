export const useProduct = defineStore("product", {
  state: () => ({
    products: [],
    product: [],
    // l'url vient fakeStoreApi : https://fakestoreapi.com/docs#:~:text=Products-,get%20all%20products,-fetch('https%3A%2F%2Ffakestoreapi
    // baseUrl: "https://fakestoreapi.com/products/",

    // Utilisation de la variable d'environnement mise dans le fichier 'nuxtConfig.ts':
    // https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-utiliser-une-variable-denvironnement-dans-un-store-pinia
    //  // https://nuxt.com/docs/guide/going-further/runtime-config
    baseUrl: useRuntimeConfig().public.apiBase,

    categories: [],
    query: null,
  }),
  getters: {
    getProducts: (state) => state.products,
    getProduct: (state) => state.product,
  },
  actions: {
    // fetchProducts avec un S.
    // https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-trier-les-produits-dans-le-store-pinia
    // https://fakestoreapi.com/docs#:~:text=Show%20output-,sort%20results,-fetch('https%3A%2F%2Ffakestoreapi.com%2Fproducts
    // On ajoute 'sort = null' et '?sort=desc' ou 'asc' et on obtient les produits triés dans l'ordre decroissant ou croissant.
    // Ensuite on remplace 'desc' ou 'asc' par '+sort' qui sera la variable qu'on va faire changer.

    // Filtrer les produit par catégorie:
    //  https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-filtrer-les-produits-par-categorie
    // On ajoute 'category = null', et la condition 'if (category != null) { ... else { le code de base }' .
    async fetchProducts(sort = null, category = null) {
      // On initialise products:
      this.products = [];

      if (category != null) {
        // fakeStoreApi nous donne une adresse pour accéder au produits par catégorie : fakestoreapi.com/products/category/jewelery'
        // https://fakestoreapi.com/docs#:~:text=get%20products%20in%20a%20specific%20category
        const { data: products } = useFetch(
          this.baseUrl + "category/" + category,
          { key: `products/${category}` }
        );
        // console.log(category);
        // console.log(products);

        this.products = products;
      } else {
        const { data: products } = useFetch(this.baseUrl + "?sort=" + sort, {
          key: `products`,
        });
        this.products = products;
      }
    },

    async fetchProduct(id) {
      // lien vers url de récupération d'un seul produit: https://fakestoreapi.com/docs#:~:text=Show%20output-,get%20a%20single%20product,-fetch('https%3A%2F%2Ffakestoreapi
      // L'API fakeStoreApi nous offre une url pour récupérer un seul produit 'https://fakestoreapi.com/products/1' où "1" est un Id. Il faut ajouter un "/" à la fin de baseUrl pour que 'this.baseUrl + id' fonctionne.
      const { data: product } = useFetch(this.baseUrl + id, {
        key: `product/${id}`,
      });

      this.product = product;
    },

    // aller chercher les catégories de fackestoreapi.
    // https://fakestoreapi.com/docs#:~:text=Products-,get%20all%20products,-fetch('https%3A%2F%2Ffakestoreapi
    //https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-recuperer-les-categories-de-produit-via-lapi
    async fetchCategories() {
      const { data: categories } = useFetch(this.baseUrl + "/categories", {
        key: "categories",
      });
      this.categories = categories;
      // console.log("this.categories  : ", this.categories);
    },
    // Ensuite on va intégrer les catégories dans la barre de navigation du fichier 'AppHeader.vue', à partir de ce store.
  },
});
