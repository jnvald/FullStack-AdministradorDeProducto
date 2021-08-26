import React from "react";
import eliminarProducto from "../actions/eliminarProducto";

const EliminarBoton = (props) => {
  const {
    onSuccess = () => {},
    onError = () => {
      window.alert("Hubo un error eliminando este producto");
    },
    _id,
    esCenter = false,
    children = "Eliminar",
  } = props;

  const onClick = async () => {
    try {
      await eliminarProducto(_id);
      onSuccess();
    } catch (e) {
      console.error(e);
      onError();
    }
  };

  return (
    <button
      onClick={onClick}
      className={(esCenter ? "btn-center " : "") + "eliminar"}
    >
      {children}
    </button>
  );
};

export default EliminarBoton;
