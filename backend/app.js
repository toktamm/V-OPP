var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var postsRouter = require("./routes/posts");
var cors = require("cors");

const db = require("./db");
const dbHelpers = require("./helpers/dbHelpers")(db);
const cookieSession = require("cookie-session");


var app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
// app.use('/users', usersRouter);
app.use("/api/users", usersRouter(dbHelpers));
app.use("/api/posts", postsRouter(dbHelpers));

//encrypted cookies
app.use(cookieSession({
  name: 'session',
  keys: ["key1", "key2"],
}));


module.exports = app;
