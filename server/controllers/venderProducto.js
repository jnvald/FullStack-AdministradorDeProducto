const { ProductoModel } = require("../models/Producto");

const venderProducto = async (req, res) => {
  try {
    const { productoID } = req.params;

    const doc = await ProductoModel.findById(productoID);
    if (!doc) return res.status(404).json({ message: "No se pudó encontrar" });

    doc.inventario = doc.inventario - 1;
    await doc.save();

    res.json(doc);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = venderProducto;
