const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Verificar credenciais (exemplo: usando uma função do authController)
    const user = await authController.authenticateUser(username, password);

    if (!user) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    // Geração de token JWT (exemplo: usando uma função do authController)
    const token = await authController.generateToken(user);

    res.json({ token });
  } catch (error) {
    console.error("Erro durante a autenticação:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

module.exports = router;
