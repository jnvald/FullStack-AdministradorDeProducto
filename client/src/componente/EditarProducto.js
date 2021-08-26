import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import editarProducto from "../actions/editarProducto";
import fetchProductoPorId from "../actions/fetchProductoPorId";
import EliminarBoton from "./EliminarBoton";
import FormularioDeProducto from "./FormularioDeProducto";

const EditarProducto = () => {
  const [productoProps, setProductoProps] = useState(null);
  const [doesExist, setDoesExist] = useState(true);
  const { productoID } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetchProductoPorId(productoID).then((res) => {
      const { success } = res;
      if (success) setProductoProps(res.data);
      else setDoesExist(false);
    });
  }, [productoID]);

  const handleSubmit = async (obj, form) => {
    const { success, message } = await editarProducto(productoID, obj);

    console.log({ success });
    if (success) {
      form
        .querySelectorAll(`input:not([type="submit"])`)
        .forEach((input) => (input.value = ""));
      window.alert("Se actualizó el producto exitosamente");
      history.push("/");
    } else {
      window.alert(`No se pudo actualizar. ${message}`);
    }
  };

  const onDelete = () => {
    window.alert(`Se eliminó el producto exitosamente`);
    history.push("/");
  };

  if (!productoProps && doesExist) return <h1>Espera...</h1>;
  else if (!doesExist) return <h1>No existe</h1>;

  return (
    <div>
      <FormularioDeProducto
        onSubmit={handleSubmit}
        defaultValues={productoProps}
        textoDeBotón="Guardar Cambios"
      />
      <EliminarBoton _id={productoID} onSuccess={onDelete} esCenter>
        Eliminar Producto
      </EliminarBoton>
    </div>
  );
};

export default EditarProducto;
