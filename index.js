const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");
const db = require("./db");
const User = require("./models/user");

const app = express();
const PORT = process.env.PORT || 3000;

// Sincroniza o modelo com o banco de dados
db.sync()
  .then(() => {
    console.log("Conectado ao banco de dados");
    app.listen(PORT, () => {
      console.log(`Servidor está rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao sincronizar o modelo com o banco de dados:", err);
  });

app.use(bodyParser.json());

app.use("/api", authRoutes);
app.use("/api", dashboardRoutes);

// Adicione uma rota para lidar com a raiz
app.get("/", (req, res) => {
  res.send("FUNCIONOU!!!!!!!!!!");
});
