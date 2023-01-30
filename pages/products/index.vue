<template>
    <h2>Products</h2>

        <!-- loop trought the products -->
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
            <ProductCard :product="p"/>
            </div>
        </div>

</template>

<script setup>
definePageMeta({
    layout: 'products'
})
//fetch products
const {data: products }=await useFetch('https://fakestoreapi.com/products')

useHead({
    title: 'Nuxt Angel | merch',
    meta:[
        {
            name: 'description', content:'Nuxt 3 merch'
        },
    ],
})

</script>

<style scoped>

</style>