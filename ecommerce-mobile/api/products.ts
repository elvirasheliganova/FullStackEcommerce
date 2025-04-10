
// https://ae936943-f6f2-450c-9bf2-ce715e96a21f.us-east-1.cloud.genez.io

const API_URL = process.env.EXPO_PUBLIC_API_URL

export async function listProducts () {
  
  
  const res = await fetch(`${API_URL}/products`)
  const data = await res.json() 
  if (!res.ok) {
    throw new Error('Error')
  }
  
  return data

}

export async function fetchProductById(id:number){
const res = await fetch(`${API_URL}/products/${id}`)
const data = await res.json()
if(!res.ok) {
  throw new Error('Error')
}
return data
}