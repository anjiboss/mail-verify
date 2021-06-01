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
const mailRoute = require("./routes/mailRoute");

app.use("/api/user", userRoute);
app.use("/api/mail-verify", mailRoute);

app.listen(PORT, () => console.log(`Running on ${PORT}`));
