export default defineEventHandler(async (event)=>{
    const {code}= event.context.params

    const {currencyKey} = useRuntimeConfig()
    console.log(currencyKey,'********',code);
    const uri=`http://api.currencyapi.com/v3/latest?apikey=${currencyKey}&currencies=${code}`
    console.log(uri);
    const {data} = await $fetch(uri)
    return data
})