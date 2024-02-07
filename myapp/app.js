import express from "express";
const app = express();

app.use((req, res, next) => {
  console.log("Наше проміжне ПЗ");
  next();
});

// app.use(express.urlencoded({ extended: false })); // data forms parser
//Content-Type: application/x-www-form-urlencoded
app.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  // Виконуємо необхідні операції
});
// app.use(express.json()); //JSON parser
//Content-Type: application/json
app.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  // Виконуємо необхідні операції
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact page</h1>");
  console.log("req.query", req.query);
});

app.get("/contact/:id", (req, res) => {
  res.send(`<h1>Contact</h1> Параметр: ${req.params.id}`);
});

/*
app.patch("/user/:userid", (req, res) => {
  const id = req.params.userid;
  console.log("id", id);
  // виконуємо необхідні дії
});
*/
<form action="/login" method="POST">
  <label for="email">Email</label>
  <input type="text" name="email" id="email" />
  <label for="password">Пароль</label>
  <input type="password" name="password" id="password" />
  <button type="submit">Увійти</button>
</form>;
app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
