import { useState ,useEffect} from 'react'
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category) => {
    
    
    const [images,setImages] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }
  
    useEffect( () => {
        getImages();
    } , [] ) //array vacio indica que solo se va a ejecutar una vez
  
 
    return{
        images, //ecma script 6 permite regresas el mismo nombre si es images
        isLoading
    }
}
