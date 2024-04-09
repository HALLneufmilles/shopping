<script setup>
const productStore = useProduct();

// En lien avec 'fetchProducts' du store 'Product.js':
const route = useRoute();
const router = useRouter();
// On fait de la propriété 'sort' une propriété réactive avec ref(). Si la query 'sort' existe, on la prend, sinon on la met à null.
const sort = ref(route.query.sort || null);
// Filtrer les produits par catégorie: Après avoir modifié fetchProducts avec la condition dans le fichier store 'product.js', on doit récupérer de la route la query 'category' et en faire une propriété réactive:
const category = ref(route.query.category || null);
// Et on passe 'sort' a la fetchProducts:
productStore.fetchProducts(sort.value, category.value);
// La fonction storeToRefs() est fournie par Pinia, le gestionnaire d'état recommandé pour Vue 3, pour convertir les propriétés réactives d'un store en refs individuels. L'utilisation de storeToRefs() est particulièrement utile dans le contexte de l'API Composition de Vue 3, notamment avec l'option <script setup>, car elle permet de conserver la réactivité des propriétés du store lorsqu'elles sont déstructurées et utilisées directement dans le template ou la logique du composant.
const { products } = storeToRefs(productStore);

// A ce stade on peut changer manuellement l'addresse du navigateur en changeant 'asc' (comportement par défaut) par 'desc' l'ordre des produit change.
// Ensuite on implémente une fonction que sera chargé d'ajouter le paramêtre 'short' à la route.
// Donc on commence par importer 'useRoute()'

// Puis la fonction:
const sortProducts = (sort) => {
  productStore.fetchProducts(sort);
  router.push({ query: { sort } });
};
// Ensuite on ajoute les deux boutons qui activeron le sort : <button class="btn btn-tabler mb-2" @click="sortProducts('desc')">

// console.log(products);
</script>

<template>
  <div class="page">
    <div class="page-wrapper">
      <!-- Page body -->
      <div class="page-body">
        <div class="container-xl">
          <div>
            <button class="btn btn-tabler mb-2" @click="sortProducts('desc')">
              Trie descendant
            </button>
            &nbsp;
            <button class="btn btn-tabler mb-2" @click="sortProducts('asc')">
              Trie ascendant
            </button>
          </div>
          <div class="row row-cards">
            <ProductCard
              v-for="product in products"
              :key="product.id"
              :product="product"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- https://nuxt.com/modules -->
<!-- https://nuxt.com/modules/image -->
