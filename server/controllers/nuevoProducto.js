const { ProductoModel } = require("../models/Producto");

const nuevoProducto = async (req, res) => {
  try {
    const { título, precio, descripción, colores } = req.body;

    const doc = await ProductoModel.create({
      título,
      precio,
      descripción,
      colores: colores.filter(Boolean),
      inventario: 1000,
    });

    res.status(201).json(doc);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = nuevoProducto;
