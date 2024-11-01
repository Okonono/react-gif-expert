
import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
    // /    // creamos un hook useState para guardar las imagenes
         const [images, setImages] = useState([]);
         const [isLoading, setIsLoading] = useState( true );
    // //     //función asincrona que llamara el useEffect
         const getImages = async ( ) =>{
             const newImages = await getGifs( category );
             setImages(newImages);
             setIsLoading(false);
         }
    
    // //     //hook para disparar efectos secundarios
         useEffect( () => {
             getImages();
     },[ ])
    return{
        images,
        isLoading: isLoading
  }
}
