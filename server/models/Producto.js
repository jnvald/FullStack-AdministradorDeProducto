const mongoose = require("mongoose");

const ProductoSchema = new mongoose.Schema({
  título: {
    type: String,
    required: [true, "El producto necesita un título"],
    unique: true,
    maxLength: [
      120,
      "El título de producto sólo puede tener hasta 120 caracateres, se ingresó {VALUE}",
    ],
    minLength: [
      3,
      "El título de producto debe tener por lo menos 3 caracateres, se ingresó {VALUE}",
    ],
  },
  precio: {
    type: Number,
    required: [true, "El producto necesita un precio"],
    min: [0, "El precio no puede ser negativo, se ingresó {VALUE}"],
  },
  descripción: {
    type: String,
    required: [true, "El producto necesita un título"],
    maxLength: [
      5000,
      "La descripción de producto sólo puede tener hasta 5000 caracateres, se ingresó {VALUE}",
    ],
    minLength: [
      25,
      "La descripción de producto debe tener por lo menos 25 caracateres, se ingresó {VALUE}",
    ],
  },
  colores: [
    {
      type: String,
    },
  ],
  inventario: {
    type: Number,
    min: [0, "No puedes tener menos que 0"],
  },
});

const ProductoModel = mongoose.model("producto", ProductoSchema);

module.exports = { ProductoSchema, ProductoModel };
