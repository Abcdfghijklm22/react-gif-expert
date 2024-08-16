import { useState } from "react";
import { AddCategory,GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['Sonic']);
    const onAddCategory = (newCategory) => {
        // Valorant
        // const item = 'Valorant';
        // console.log(newCategory);
        if( categories.includes(newCategory)) return; //Si ya existe esa categoria no la añade
        // if(categories.some(cat => cat.toLocaleLowerCase() === newCategory.toLocaleLowerCase())) return; // Si la categoria tiene el mismo significado pero con mayusculas o minusculas lo omite
        setcategories([newCategory, ...categories]); //Spread operator
        // setcategories( cat => [...cat, item]);
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                // setcategories= { setcategories }
                onNewCategory = {event => onAddCategory(event) }
            />
            {
                categories.map( (category) => (
                    <GifGrid key={ category } category={ category} /> 
                ))
            }
        </>
    )
}