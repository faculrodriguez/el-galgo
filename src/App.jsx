import React from 'react';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Bienvenido a El Galgo, la empresa lider de herramientas profesionales de la pintura"}/>
    </>
  )
}

export default App