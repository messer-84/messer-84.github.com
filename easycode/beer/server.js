"user strict";
  const fs = require("fs"); // работа с файловой системой, загружаем файл
  const path = require("path"); // для работы с путями
  const express = require("express"); //
  const bodyParser = require("body-parser"); // модуль необходим для работы с телом запроса
  const app = express();

  app.set("port", (process.env.PORT || 3000));

  //считаем корнем нашего локального сайта папку src
  app.use(express.static(path.join(__dirname, "src")));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(function log(req, res, next) {
    res.setHeader("Cache-Control", "no-cache");
    console.log([req.method, req.url].join(" "));
    next();
  });

  app.get('*', (req, res) => {
    fs.readFile(`${__dirname}/src/public/index.html`, (error, html) => {
      if (error) throw error;
      res.setHeader("Cache-Control", "text/html");
    });
    if (index === -1) return res.sendStatus(404);
    res.send(html);
  });

  app.listen(app.get('port'), () => {
    console.log(`Server is listening: http://localhost:${app.get('port')}`);
  });


