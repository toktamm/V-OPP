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


// encrypted cookies
app.use(cookieSession({
  name: 'session',
  keys: ["key1", "key2"],
}));


// app.use(function(req, res, next) {
//   res.header('Content-Type', 'application/json;charset=UTF-8')
//   res.header('Access-Control-Allow-Credentials', true)
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   )
//   next()
// })




app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
// app.use('/users', usersRouter);
app.use("/api/users", usersRouter(dbHelpers));
app.use("/api/posts", postsRouter(dbHelpers));



module.exports = app;
