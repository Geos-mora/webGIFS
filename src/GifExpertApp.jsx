import { useState } from "react";
import AddCategory from "./componets/AddCategory";
import GifGrid from "./componets/GifGrid";





const GifExpertApp=()=>{
    
    const[categories,setCategories]=useState([`attack on titan`,"one push man"])
   

    const onAddCategory=(newCategory)=>{
        if (categories.includes(newCategory)) {
            return;
        }
       setCategories([newCategory,...categories])
    }
    
   

    return(
        <>
            
        <h1>GifExpertApp</h1>
        

            <AddCategory onNewCategory={onAddCategory}/>

    

            {categories.map(category=> <GifGrid key={category} category={category}/> )}
        
           
               
           
           
      

     
     

       
        
        </>
    )
}
export default GifExpertApp;