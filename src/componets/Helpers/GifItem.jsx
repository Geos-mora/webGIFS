

const GifItem=({gif})=>{

    

    return(
        <div className="card">
            <img className="img" src={gif.images} alt={gif.title}/>
            <p className="p" >{gif.title}</p>
       
        </div>
    )
}

export default GifItem;