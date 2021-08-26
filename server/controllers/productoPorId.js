const { ProductoModel } = require("../models/Producto");

const nuevoProducto = async (req, res) => {
  try {
    const { productoID } = req.params;

    const doc = await ProductoModel.findById(productoID);

    if (!doc) return res.status(404).json({ message: "No se pudó encontrar" });

    res.json(doc);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = nuevoProducto;
