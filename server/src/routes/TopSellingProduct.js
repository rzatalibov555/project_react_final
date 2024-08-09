const express = require("express");
const router = express.Router();
const TopSellingProduct = require("../json/TopSellingProduct.js");

router.get("/topSellingProduct", (request, response) => {
    response.json(
        TopSellingProduct()
    );
})

module.exports = router;