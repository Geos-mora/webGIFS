
const GetGif=async(category)=>{

    const url=`https://api.giphy.com/v1/gifs/search?api_key=MdBt1TiBGQpW4lhiXEBd1FENRB1Xwny0&q=${category}&limit=9`

    const resp=await fetch(url);
    const {data}=await resp.json();
    const imagenes=data.map(gif=>{
        return{
            id:gif.id,
            title:gif.title,
            images:gif.images.downsized_medium.url

        }
    })



    console.log(imagenes);
    return imagenes;
    
}



export default GetGif;