// Importa a biblioteca Express e também o tipo Express
// O Express será utilizado para criar o servidor web
import express from "express";
import type { Express, Request, Response } from "express";

// Importa a classe Player do arquivo Player.ts
/* Por que Player.ts deve ser importado com a extensão .js? 
Acesse : https://notpag.org/aula1609 */
import { Player } from "./models/Player.js";

// Cria uma aplicação Express
// A função express() devolve um objeto que representa o servidor da aplicação
const app: Express = express();

/* Middleware para permitir que o servidor aceite
requisições com corpo em formato JSON. */
app.use(express.json());

// Define a porta onde o servidor ficará disponível
const PORT: number = 8081;

// Cria um único player com nome "Nunes", 100 de vida e nível 1
const player = new Player("Nunes", 100, 1);

// Rota GET para obter informações sobre o player.
/* Quando um usuário acessar a rota "/player" via GET, o servidor 
irá retornar as informações do player em formato JSON. */
app.get("/player", (req: Request, res: Response) => {
  res.json({
    message: "Informações do player",
    player: player,
  });
});

// Rota POST para atacar o player
/* Quando um usuário acessar a rota "/player/attack" via POST, o servidor
irá chamar o método attack() do player e retornar a mensagem resultante. */
app.post("/player/attack", (req: Request, res: Response) => {
  const attackMessage = player.attack();
  res.json({
    message: attackMessage,
  });
});

// Rota POST para causar dano ao player
app.post("/player/damage", (req: Request, res: Response) => {
  const { damage } = req.body;

  // Validação simples para evitar que a saúde virar NaN
  if (typeof damage !== "number") {
    return res.status(400).json({ error: "O campo 'damage' deve ser um número." });
  }

  const damageMessage = player.takeDamage(damage);
  return res.json({
    action: damageMessage,
    currentHealth: player.health,
    currentLevel: player.level,
  });
});

// Rota POST para curar o player
app.post("/player/heal", (req: Request, res: Response) => {
  const { healAmount } = req.body;

  // Validação simples para evitar que a saúde virar NaN
  if (typeof healAmount !== "number") {
    return res.status(400).json({ error: "O campo 'healAmount' deve ser um número." });
  }

  const healMessage = player.heal(healAmount);
  return res.json({
    action: healMessage,
    currentHealth: player.health,
    currentLevel: player.level,
  });
});

// Inicializa o servidor utilizando a porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log("Rotas Disponíveis:");
  console.log(`GET  http://localhost:${PORT}/player - Obter informações do player`);
  console.log(`POST http://localhost:${PORT}/player/attack - Atacar o player`);
  console.log(`POST http://localhost:${PORT}/player/damage - Causar dano ao player`);
  console.log(`POST http://localhost:${PORT}/player/heal - Curar o player`);
});