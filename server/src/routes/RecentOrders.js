const express = require("express");
const router = express.Router();
const RecentOrders = require("../json/RecentOrders.js");

router.get("/recentOrders", (request, response) => {
    response.json(
        RecentOrders()
    );
})

module.exports = router;