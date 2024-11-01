import { useState } from 'react';


export const AddCategory = ( { onNewCategory } ) => {
  
    const [inputValue, setinputValue] = useState('');

    const onInputChange = ({target}) => { //o (event)=> setInputValue (event.target.value) 
       setinputValue(target.value);
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.length<=1) return;
        onNewCategory(inputValue.trim());  //usa la función padre onNewCategory={(value) => onAddCategory(value)} con el valor del hook
        setinputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange } // o directamente {onInputChange}
            />
        </form>
    )
}
//devuelve un formulario y un input
//el input es te tipo texto y muestra un texto x default(buscar gifs) cuyo valor es el del hook actual 
//cada vez que se da enter llama a la función padre para agregar la categoria