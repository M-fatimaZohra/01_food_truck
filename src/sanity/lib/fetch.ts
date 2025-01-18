import { createClient } from "next-sanity";

const client = createClient({
    projectId: "ue5r65vy",
    dataset: "production",
    useCdn : true,
    apiVersion : "2021-08-31"
})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchProducts({query , params = {}}:{query:string , params?: any}){

    return await  client.fetch(query, params)
}