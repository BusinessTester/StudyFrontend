// this is for the api establishment of the subjects 

export const addSubject = (subject_code,subject,price,field,university,college,level,uploader,review,preview,contact)=>{
    return fetch(`https://maerials-application.onrender.com/api/addingsubject`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
      body:JSON.stringify({subject_code,subject,price,field,university,college,level,uploader,review,preview,contact})  
    },
    
    
 )
 .then(res=>res.json())
 .catch(err=>console.log(err))

}

export const deleteSubject=(id)=>{
    return fetch(`https://maerials-application.onrender.com/api/deletingsubject/${id}`,{
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
    return fetch(`https://maerials-application.onrender.com/api/listingsubject`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            Header:("Access-Control-Allow-Origin", "https://maerials-application.onrender.com")

        }
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



export const editingSubject = (params,subject_code,subject,price,field,university,college,level,uploader,review,preview,contact)=>{
    return fetch(`https://maerials-application.onrender.com/api/updatingsubject/${params}`,{
        method:"PUT",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
      body:JSON.stringify({subject_code,subject,price,field,university,college,level,uploader,review,preview,contact})  
    },
    
    
 )
 .then(res=>res.json())
 .catch(err=>console.log(err))

}


// this is for extracting the detials out of the subjects
export const extractDetail = (id)=>{
    return fetch(`https://maerials-application.onrender.com/api/detailingsubject/${id}`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}