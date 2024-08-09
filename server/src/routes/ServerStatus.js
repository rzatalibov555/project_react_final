const express = require("express");
const router = express.Router();

router.get("/health", (request, response) => {
    response.json({
        "status": "ok",
        "server_version": "v0.0.5",
        "api_version": "v2",
        "health_checks": {
            "api": "up",
            "database": "down"
        }
    });
});

module.exports = router;
