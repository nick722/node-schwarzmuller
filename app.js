const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRouter = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRouter);

app.use((req, res, next) => {
  res
    .status(404)
    //   send("<h1>404. Page not found</h1>");
    .sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3030);
