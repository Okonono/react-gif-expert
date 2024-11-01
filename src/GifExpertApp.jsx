
import {   useState  } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Dragon Ball z'])
    
    const onAddCategory = (newCategory ) => {
        if(categories.includes(newCategory)) return; //si la categoria ya existe en el hook retorna
        setCategories( cat => [newCategory, ...cat]) // agrega la categoria al hook CATEGORIES
    }


    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                onNewCategory={(value) => onAddCategory(value)} //cuando se da enter en el hijo llama a esta función con 
            />

            {
                categories.map( ( category ) => ( //por cada category del hook(categories) llama a GifGrid
                    <GifGrid                    //se renderiza GifGrid
                    key={ category }    // es utilizada internamente por React para identificar y gestionar la lista de componentes, pero no se puede
                    category={ category } /> //pasa category como prop al hijo
                ))
            }
            
        </>
    )
    
}


