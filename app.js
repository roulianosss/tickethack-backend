const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
//require (“./models/connections")
require("./models/connection");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const bookingsRouter = require("./routes/bookings");
const cartRouter = require("./routes/cart");
const tripsRouter = require("./routes/trips");
const checkoutRouter = require("./routes/checkout");

const app = express();

const cors = require("cors");
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/trips", tripsRouter);
app.use("/booking", bookingsRouter);
app.use("/cart", cartRouter);
app.use("/checkout", checkoutRouter);


module.exports = app;
