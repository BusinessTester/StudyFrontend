import React from 'react'
import { subjectList } from '../pages/SubjectList'

// export let subjectList = [
//     {
//         id:1,
//     subject:'Lord Ganesh',
//     field:'Electronics and Communication',
//     year:'',
//     university:'TU',
//     college:'NA',
//     level:'Bachelors',
//     uploader:'StudyMaterials',
    
//     price:100,
    
//     preview:"https://drive.google.com/file/d/10ZF681DNd2Ql7D1j1dn2KHMdNDaJt-pw/preview",
//     contact:'9849632777 | studyMaterials@gmail.com'

// },
// // second subject

// {
//     id:2,
//     subject:'Lord Laxmi',
//     field:'Diploma of Nursing',
//     year:'',
//     university:'TU',
//     college:'NA',
//     level:'Diploma',
//     uploader:'StudyMaterials',
//     price:100,

//     preview:"https://drive.google.com/drive/folders/1Jm9uwOirHOzJ_yh4s06MbiyZ1TYUKV8B",
//     contact:'9849632777 | studyMaterials@gmail.com'



// },


// {
//     id:3,
//     subject:'Lord Laxmi',
//     field:'Diploma of Community Service',
//     year:'',
//     university:'TU',
//     college:'NA',
//     level:'Diploma',
//     uploader:'StudyMaterials',
//     price:100,

//     preview:"link to be added soon",
//     contact:'9849632777 | studyMaterials@gmail.com'



// },

// // 4th subject
// {
//     id:4,
// subject:'Mangalam',
// field:'Computer Engineering',
// year:'',
// university:'TU',
// college:'NA',
// level:'Bachelors',
// uploader:'StudyMaterials',
// price:100,


// preview:"https://www.youtube.com",
// contact:'9849632777 | studyMaterials@gmail.com'


// }

// ]

const SubjectReducer = (state=[],action) => {
  switch (action.type) {
    
    
    case "ADD_SUBJECT":
        // console.log(action.payload)
        return [...state,action.payload]
        // return state
        // subjectList.push(action.payload)
        //  return [{...state,state:action.payload}]
        // return state
        // return [action.payload]
        case "DISPLAY_SUBJECTS":
        return state


    default:
        return state
  }


}



export default SubjectReducer