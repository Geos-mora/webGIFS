
import { useState } from "react";
import useFetchGif from "./Hooks/useFetchGif";
import GifItem from "./Helpers/GifItem";

const GifGrid=({category})=>{

    const {images,isLoading}= useFetchGif(category)

     
        
    return(
        
        <>
        <h1>{category}</h1>

     
        <ol className="cardBack">

            {images.map( gif=>(
                
                 <GifItem  key={gif.id} gif={gif} />
            )


         )}
            
        </ol>

       
        </>
    )
}

export default GifGrid;