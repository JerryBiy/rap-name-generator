import express from "express";
import bodyParser from "body-parser";
import RapperName from 'rapper-name-generator';

const app = express();
const port = 3000;
const year = new Date().getFullYear();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render('index.ejs', {year: year});
});

app.post("/submit", (req, res) => {
  res.render('index.ejs', {rapName : RapperName(), year: year});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

