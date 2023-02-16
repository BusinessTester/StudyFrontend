
export const userInfo = async(request,response)=>{
// return fetch(`https://jsonplaceholder.typicode.com/users`).then(res=>res.json()).then(data=>console.log(data))
try {
  response = await fetch(`https://jsonplaceholder.typicode.com/users`)
let data = await response.json()
return data

} catch (error) {
  console.log(error)
  
}
}