const express = require("express");
const session = require("express-session");
const { router } = require("./router/router");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(
  session({
    secret: "john doe",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(require('nocache')())

app.use("/", router);

app.listen("3000", () => {
  console.log("server started");
});
