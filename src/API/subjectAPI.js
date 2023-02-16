// this is for the api establishment of the subjects 

export const addSubject = (id,subject,price,field,university,college,level,uploader,review,preview,contact)=>{
    return fetch(`http://localhost:5000/api/addingsubject`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
      body:JSON.stringify({id,subject,price,field,university,college,level,uploader,review,preview,contact})  
    },
    
    
 )
 .then(res=>res.json())
 .catch(err=>console.log(err))

}

export const deleteSubject=(id)=>{
    return fetch(`http://localhost:5000/api/deletingsubject/${id}`,{
        method:"DELETE",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        }
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))

}

export const listSubject = ()=>{
    return fetch(`http://localhost:5000/api/listingsubject`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}


// this is for storing the data in the local storage and then load all the stuffs 
export const callStorage = (value)=>{
    return localStorage.setItem("list",JSON.stringify(value) )
}


// this is for getting the items out of the localstorage
export const releaseStorage  = ()=>{
    if(localStorage.getItem("list")){
        return JSON.parse(localStorage.getItem("list"))
    }
    else{
        return false
    }
}