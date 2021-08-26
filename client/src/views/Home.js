import React, { useState } from "react";
import FormularioDeNuevoProducto from "../componente/FormularioDeNuevoProducto";
import ListaDeProductos from "../componente/ListaDeProductos";

const Home = () => {
  const [ingresóNuevoProducto, setIngresóNuevoProducto] = useState(0);
  const actualizarLista = () => setIngresóNuevoProducto((num) => ++num);
  return (
    <>
      <h1>Administrador de Productos</h1>
      <FormularioDeNuevoProducto onIngresar={actualizarLista} />
      <hr />
      <ListaDeProductos
        ingresarNuevoProducto={ingresóNuevoProducto}
        onActualizar={actualizarLista}
      />
    </>
  );
};

export default Home;
