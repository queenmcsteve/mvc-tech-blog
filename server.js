const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const { addHook } = require("./models/Comment");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "something something",
  cookie: { maxAge: 10 * 60 * 1000 },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

const hbs = exphbs.create({
  helpers: {
    formatDate: (date) => {
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    },
  },
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(session(sess));
app.use(routes);

// app.get("/", (req, res) => res.send("INDEX"));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  sequelize.sync({ force: false });
});
