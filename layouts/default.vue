<!-- default est le layout que va chercher Nuxt par defaut et son slot est relier à la page index.html par defaut. -->
<template>
  <div>
    <AppHeader />

    <!-- insert la page index.html automatiquement -->
    <slot />

    <AppFooter />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
