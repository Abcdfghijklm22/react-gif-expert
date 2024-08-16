import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const [ inputValue, setInputValue ] = useState('');
    const onInputChange = (event) => {
        // console.log( event.target.value );
        setInputValue ( event.target.value );
    }
    // const onInputChange = (target) => { // Segunda manera mas sencilla, ocupando desestructuracion
    //     setInputValue(target.value);
    // }
    const onSubmit = (event) => { //Esta funcion hace la accion en caso de que le enter al texto
        // console.log(event);
        event.preventDefault();
        if(inputValue.trim().length <= 1) return; // Si no tiene mas de un caracter no realiza ningun cambio
        // console.log(inputValue);
        // setcategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

  return (
      <form onSubmit={ onSubmit } >
        <input
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        // onChange={ (event) => onInputChange(event)}
        onChange={ onInputChange }
        />
      </form>
  )
}
