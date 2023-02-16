// this is where all the connections to the backend is formed 
import { API } from "../config"

export const registeration =(name,username,age,phone,email,password,purchases)=>{
    return fetch(`https://maerials-application.onrender.com/api/register`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Header:("Access-Control-Allow-Origin", "https://maerials-application.onrender.com")
        },

        
        body:JSON.stringify({name,username,age,phone,email,password,purchases})

    })
.then(res=>res.json())
.catch(err=>console.log(err))

}

export const confirmationUser = (token)=>{
    return fetch(`https://maerials-application.onrender.com/api/confirmuser/${token}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))

}


// this is for signing in of the user
export const signInUser = (email,password)=>{
    return fetch(`https://maerials-application.onrender.com/api/signin`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify({email,password})

    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

// in order to keep the user signed in, localstorage is used
export const authenticate = (data)=>{
localStorage.setItem("jwt",JSON.stringify(data))
}


// to check if the user information is saved or not?

export const isAuthenticated = ()=>{
    if(localStorage.getItem("jwt")){
        return JSON.parse(localStorage.getItem("jwt"))
    }
    else{
        return false
    }
}

// time to utilize the signout option 
export const logOut = ()=>{
    localStorage.removeItem('jwt')
    return fetch(`https://maerials-application.onrender.com/api/signout`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"   
        }
    })
       .then(res=>res.json())
       .catch(error=>console.log(error))  


}
// this is for the forgotten password 
export const forgotPassword = (email)=>{
    return fetch(`https://maerials-application.onrender.com/api/forgotpassword`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Header:("Access-Control-Allow-Origin", "https://maerials-application.onrender.com")
        },
        body:JSON.stringify({email})
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

// this is for checking if the token received after the email has been received properly
export const reseterpassword = (token,password)=>{
    return fetch(`https://maerials-application.onrender.com/api/resetpassword/${token}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Header:("Access-Control-Allow-Origin", "https://maerials-application.onrender.com")
        },
        body:JSON.stringify({password})
     
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}



// this is for the importing of the function that can be used for the display of the purchases made by the user
export const myPurchases = (id)=>{
    return fetch(`https://maerials-application.onrender.com/api/showpurchases/${id}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"   

        }
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

export const confirmStorage=(data1,data2)=>{
    localStorage.setItem("procure1",JSON.stringify(data1))
    localStorage.setItem("procure2",JSON.stringify(data2))


}

export const extractStorageSubject = ()=>{
    if(localStorage.getItem("procure1")){
       return JSON.parse(localStorage.getItem('procure1'))
    }

  
    else{
        return false
    }
}

export const extractStoragePrice = ()=>{
    if(localStorage.getItem("procure2")){
        return JSON.parse(localStorage.getItem("procure2"))
    }
    else{
        return false
    }
}

// this is for the deletion of the local storage files that are not needed 
export const removeStorage=()=>{
    localStorage.removeItem("procure2")
    localStorage.removeItem("procure1")


}




// this is to test the sending strength of the mail

// export const  = (,meta)=>{
//     return fetch(`http://localhost:5000/api/sendingemail/${id}`,
//     {
//         method:"POST",
//         headers:{
//             Accept:"text/html,application/json",
//             // "Content-Type":"application/json; charset=utf-8",
//             // "Content-Type":"multipart/mixed",
//             "Content-Type":"text/html; charset=utf-8",
//             // "accept":"html/text ",
//             // "X-Content-Type-Options": "nosniff",

//             Header:("Access-Control-Allow-Origin", "http://localhost:5000")
//         },
//         body:JSON.stringify({meta})
        
//     })
//     .then(res=>res.json())
//     .catch(error=>console.log(error))
// }


export const sendDetails =(id,value)=>{
    return fetch(`https://maerials-application.onrender.com/api/sendingemail/${id}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            // Header:("Access-Control-Allow-Origin", "http://localhost:5000")
        },

        
        body:JSON.stringify({value})

    })
.then(res=>res.json())
.catch(err=>console.log(err))

}