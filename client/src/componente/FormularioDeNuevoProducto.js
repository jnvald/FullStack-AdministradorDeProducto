import React from "react";
import crearNuevoProducto from "../actions/crearNuevoProducto";
import FormularioDeProducto from "./FormularioDeProducto";

const FormularioDeNuevoProducto = (props) => {
  const { onIngresar } = props;
  const crearProducto = async (obj, form) => {
    const { success, message } = await crearNuevoProducto(obj);

    console.log({ success });
    if (success) {
      form
        .querySelectorAll(`input:not([type="submit"])`)
        .forEach((input) => (input.value = ""));
      window.alert("Se ingresó el producto exitosamente");
      onIngresar();
    } else {
      window.alert(`No se ingresó. ${message}`);
    }
  };

  return <FormularioDeProducto onSubmit={crearProducto} />;
};

export default FormularioDeNuevoProducto;
