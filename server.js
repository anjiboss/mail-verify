require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

// Utils
const dbCon = require("./controller/db");

dbCon();

// MiddleWare
app.use(express.json());

// Routes Import
const userRoute = require("./routes/userRoute");

app.use("/api/user", userRoute);

app.listen(PORT, () => console.log(`Running on ${PORT}`));
