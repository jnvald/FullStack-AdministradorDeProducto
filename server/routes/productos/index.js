const { Router } = require("express");

const router = Router();

router.get("/test", (req, res) => res.json({ productos: "está bien" }));
router.get("/", require("../../controllers/todoProducto"));
router.get("/:productoID", require("../../controllers/productoPorId"));
router.put("/:productoID", require("../../controllers/editarProducto"));
router.put("/vender/:productoID", require("../../controllers/venderProducto"));
router.delete("/:productoID", require("../../controllers/deleteProducto"));
router.post("/nuevo", require("../../controllers/nuevoProducto"));

module.exports = router;
