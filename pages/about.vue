<template>
   <h2>About</h2>
   <p>{{ data }}</p>
</template>

<script setup>

   const {data} = await useFetch('/api/currency/CAD')
</script>

<style scoped>

</style>