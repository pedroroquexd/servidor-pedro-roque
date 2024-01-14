const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/users", async (req, res) => {
  try {
    const users = await db.query("SELECT id, username FROM users");
    res.json(users);
  } catch (error) {
    console.error("Erro ao obter lista de usuários:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

router.post("/users", async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await db.query(
      "INSERT INTO users (username, password) VALUES (?, ?)",
      [username, password],
    );

    res.json({
      message: "Usuário criado com sucesso",
      userId: result.insertId,
    });
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

router.put("/users/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const { username, password } = req.body;

    await db.query("UPDATE users SET username = ?, password = ? WHERE id = ?", [
      username,
      password,
      userId,
    ]);

    res.json({ message: "Usuário atualizado com sucesso" });
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

router.delete("/users/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    await db.query("DELETE FROM users WHERE id = ?", [userId]);

    res.json({ message: "Usuário excluído com sucesso" });
  } catch (error) {
    console.error("Erro ao excluir usuário:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

module.exports = router;
