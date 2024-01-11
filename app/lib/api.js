



export const apiInstance = async(endpoint, off)=>{
    try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products?limit=${endpoint}&offset=${off}`)
        return await response.json()
    } catch (error) {
        console.log(error);
    }
}



export const singlePageApi = async(endpoint)=>{
    try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${endpoint}`)
        return await response.json()
    } catch (error) {
        console.log(error);
    }
}