// import React from 'react'
import { useState} from 'react'

export const AddCategory = ( {onNewCategory}  /*{categories,setCategories}*/  ) => {

const [inputValue,setInpuitValue] = useState('');

const onInputChange = ({ target }) => {      
        setInpuitValue(target.value);
}

const onSubmitEvent = (e) =>{
    e.preventDefault();

    if( inputValue.length <= 1 )  return;

    // setCategories([inputValue,...categories]);
    onNewCategory(inputValue.trim());
    setInpuitValue(''); 
}


  return (
    <form onSubmit={  (e) => {
        onSubmitEvent(e);
    }  }>
        <h3>Add Category</h3>
        <input 
           type={'text'}
           placeholder={'escribe una categoria'}
           value={inputValue}
            onChange={  (e) =>{onInputChange(e)} }
            />           
        
    </form>
  )
}
