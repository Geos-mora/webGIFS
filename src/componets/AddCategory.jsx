import { useState } from "react";





const AddCategory=({onNewCategory})=>{
 const[value,setValue]=useState("")
 
 const changeValue=({target})=>{
  
    setValue(target.value)
   }
   
   const onInputSave=(e)=>{
      e.preventDefault()
      if(value.trim().length<=1) return;
      
    onNewCategory(value.trim())
 }



 return(
    <form onSubmit={onInputSave}>
        
        <input type="text" placeholder="buscar gifs" value={value} onChange={changeValue}/>

    </form>
 )

}
export default AddCategory;