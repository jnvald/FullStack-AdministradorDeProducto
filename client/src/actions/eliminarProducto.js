const eliminarProducto = async (id) => {
  try {
    const resultado = await fetch(`/api/producto/${id}`, {
      method: "DELETE",
    });

    const obj = await resultado.json();
    if (!resultado.ok) throw new Error(obj.message);

    return { success: true };
  } catch (err) {
    console.log({ error: err });
    return { success: false, message: err };
  }
};

export default eliminarProducto;
