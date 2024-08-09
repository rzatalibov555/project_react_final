const path = require("path");
const express = require("express");
const cors = require("cors");
const ApiKeyMiddleware = require("./middleware/ApiKeyMiddleware.js");
const Auth = require("./routes/Auth.js");
const ServerStatus = require("./routes/ServerStatus.js");
const ProfileData = require("./routes/ProfileData.js");
const Statistics = require("./routes/Statistics.js");
const TopSellingProduct = require("./routes/TopSellingProduct.js");
const RecentOrders = require("./routes/RecentOrders.js");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

/*==========MAIN - START==========*/
app.use("/api/v2", Auth);
app.use("/api/v2", ServerStatus);
app.use("/api/v2", ApiKeyMiddleware, ProfileData);
app.use("/api/v2", ApiKeyMiddleware, Statistics);
app.use("/api/v2", ApiKeyMiddleware, TopSellingProduct);
app.use("/api/v2", ApiKeyMiddleware, RecentOrders);
/*==========MAIN - ENDED==========*/

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});