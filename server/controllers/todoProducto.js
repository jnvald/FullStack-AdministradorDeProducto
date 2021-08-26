const { ProductoModel } = require("../models/Producto");

const nuevoProducto = async (req, res) => {
  try {
    const productos = await ProductoModel.find();

    res.json(productos);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = nuevoProducto;
