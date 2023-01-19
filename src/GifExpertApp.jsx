/*import React from 'react'  ya no es necesario importar la libreria desde la version 17 ya que se sabe que se esta trabajando con react   */

import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";




export const GifExpertApp = () => {

  const [categories,setCategories] = useState([]);


  const onAddCategory = ( newCategory ) => {   

    if(categories.includes(newCategory)) return;

     setCategories([newCategory,...categories]);
  }

  return (
    <>
        <h1>Gif expert app</h1>

        <AddCategory  
        //event es el argumento que se manda a la funcion (texto de categoria)
          onNewCategory = { (event) => onAddCategory(event) }
        // categories = {categories} setCategories ={ setCategories } 
        />  
        
         {
            categories.map( (category) => (
              <GiftGrid
                 key={category}
                 category = {category}
                 />
            ))
         }   
    </>
  )
}
