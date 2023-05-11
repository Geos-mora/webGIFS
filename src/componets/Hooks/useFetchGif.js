import { useState,useEffect } from "react";
import GetGif from "../Helpers/GetGif";


const useFetchGif=(category)=>{
    const [images, setImages]=useState([]);

    const getImages=async()=>{
        
        const getingImages=await GetGif(category) 

        setImages(getingImages);

        
   }
    
    
   useEffect(()=>{
    getImages()
},[])


    return{
        images:images,
        isLoading:true

    }
}

export default useFetchGif;