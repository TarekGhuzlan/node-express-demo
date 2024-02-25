const startupDebugger = require("debug")("app:startup");
const dbDebugger = require("debug")("app:db");
const config = require("config");
const Joi = require("joi");
const logger = require("./logger");
const helmet = require("helmet");
const morgan = require("morgan");
const courses = require("./courses");
const homePage = require("./routes/home-page");
const express = require("express");
const app = express();
// console.log(`NODE_ENV:${process.env.NODE_ENV}`);
// console.log(`app: ${app.get("env")}`);

// app.set("view engine", "pug");
// app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("./api/courses", courses);
app.use("./", homePage);

// app.use(helmet());

// //* configuration
// console.log("Application Name: " + config.get("name"));
// console.log("Mail Server: " + config.get("mail.host"));
// // console.log("Mail Password: " + config.get("mail.password"));

// if (app.get("env") === "development") {
//   app.use(morgan("tiny"));
//   startupDebugger("Morgan enabled.");
// }

// //* db work...
// dbDebugger("Connected to the database...");

// app.use(function (req, res, next) {
//   console.log("Authenticating...");
//   next();
// });

// app.use(logger);

// app.get();
// app.post();
// app.put();
// app.delete();

// app.get('/', (req,res) =>{
//     res.send('Hello World!!!');
// });

// app.get('/api/posts/:year/:month', (req,res)=>{ //*route parameter
//     res.send(req.params);
// });

// app.get('/api/posts/:year/:month', (req,res)=>{ //* query parameter(use ? in URL)
//     res.send(req.query);
// });
