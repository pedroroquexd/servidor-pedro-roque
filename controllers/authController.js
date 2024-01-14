const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../db");
const { promisify } = require("util");

const router = express.Router();
const signJwt = promisify(jwt.sign);

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await db.query("SELECT * FROM users WHERE username = ?", [
      username,
    ]);

    if (!user || user.length === 0) {
      return res.status(401).json({ error: "Usuário não encontrado" });
    }

    const isPasswordValid = await bcrypt.compare(password, user[0].password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Senha inválida" });
    }

    const token = await signJwt(
      { userId: user[0].id, username: user[0].username },
      "seu-segredo-secreto",
      { expiresIn: "1h" },
    );

    res.json({ token });
  } catch (error) {
    console.error("Erro durante a autenticação:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

module.exports = router;
