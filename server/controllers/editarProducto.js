const { ProductoModel } = require("../models/Producto");

const editarProducto = async (req, res) => {
  try {
    const { productoID } = req.params;
    const { título, precio, descripción, colores } = req.body;

    const doc = await ProductoModel.findByIdAndUpdate(productoID, {
      título,
      precio,
      descripción,
      colores,
    });

    if (!doc) return res.status(404).json({ message: "No se pudó encontrar" });

    res.json(doc);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = editarProducto;
