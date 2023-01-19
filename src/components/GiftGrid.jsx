import { GiftItem } from './GiftItem'
import { useFetchGifs } from '../hooks/useFetchGifs'


export const GiftGrid = ( {category} ) => {

    const { images,isLoading } = useFetchGifs ( category );

    return (
    <>
        <h3> { category }</h3>
        {
            isLoading ?? ( <h2>Cargando...</h2> )    
            //si isloading es true hace la siguiente evaluacion 
            //no, no hace nada       
        }
        

        <div className="card-grid">
            { 
               images.map( (image) => (    
                <GiftItem 
                    key={image.id}
                    {...image}        
                />               
                
               ))
            }  
        </div>
    </>
  )
}
