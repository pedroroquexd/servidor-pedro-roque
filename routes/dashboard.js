const express = require("express");
const dashboardController = require("../controllers/dashboardController");

const router = express.Router();

router.get("/users", async (req, res) => {
  try {
    // Obter a lista de usuários (exemplo: usando uma função do dashboardController)
    const users = await dashboardController.getAllUsers();

    res.json(users);
  } catch (error) {
    console.error("Erro ao obter lista de usuários:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

router.post("/users", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Criar um novo usuário (exemplo: usando uma função do dashboardController)
    const newUser = await dashboardController.createUser(username, password);

    res.json({ message: "Usuário criado com sucesso", userId: newUser.id });
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

router.put("/users/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const { username, password } = req.body;

    // Atualizar usuário (exemplo: usando uma função do dashboardController)
    await dashboardController.updateUser(userId, username, password);

    res.json({ message: "Usuário atualizado com sucesso" });
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

router.delete("/users/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    // Excluir usuário (exemplo: usando uma função do dashboardController)
    await dashboardController.deleteUser(userId);

    res.json({ message: "Usuário excluído com sucesso" });
  } catch (error) {
    console.error("Erro ao excluir usuário:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

module.exports = router;
