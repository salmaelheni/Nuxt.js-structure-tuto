<template>
    <div>
        <Head>
            <Title>Nuxt Dojo | {{ product.title }}</Title>
            <Meta name="description" :content="product.description"></Meta>
        </Head>
<ProductDetails :product="product"/>
    </div>
</template>

<script setup>
//access id from file name
    const {id} = useRoute().params
//fetch products

    const uri = 'https://fakestoreapi.com/products/'+id
    const {data: product }=await useFetch(uri,{key:id})
    
if( !product.value){
    console.log('here');
    throw createError({ statusCode:404,statusMessage:'Product not found', fatal:true})
}
    definePageMeta({
    layout: 'products'
})
</script>

<style  scoped>

</style>