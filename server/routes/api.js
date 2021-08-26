const { Router } = require("express");

const router = Router();

router.get("/test", (req, res) => res.json({ test: "bien" }));
router.use("/producto", require("./productos"));

module.exports = router;
