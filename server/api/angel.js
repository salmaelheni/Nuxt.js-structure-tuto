export default defineEventHandler(async (event)=>{
//for query params
    // const {name}= getQuery(event)
    //for post requests
    // const {age}= await readBody(event)
    //api call with private key
    const {data}= await $fetch('https://api.currencyapi.com/v3/latest?apikey=478fQIaS3Unqu3AVhlHsfLWHmSbxcBuSzHEt5pJx&currencies=EUR%2CUSD%2CCAD')
    return data
})