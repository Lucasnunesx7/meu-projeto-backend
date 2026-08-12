# Configuração do Ambiente e Servidor Express com TypeScript

Guia passo a passo para inicializar o ambiente de desenvolvimento Node.js com TypeScript e configurar um servidor HTTP utilizando o framework Express.

---

## 1. Preparação do Ambiente

Execute os comandos abaixo no terminal para inicializar o projeto Node.js e instalar as dependências de desenvolvimento do TypeScript:

```bash
npm init -y
npm i -D typescript @types/node tsx
npx tsc --init
2. Instalação do Express
Instale o framework Express e suas definições de tipos para o TypeScript:

Bash
npm install express
npm install -D @types/express
3. Estrutura do Projeto
Crie a pasta src e o arquivo app.ts dentro dela:

Plaintext
meu-projeto-backend/
├── node_modules/
├── src/
│   └── app.ts
├── package.json
└── tsconfig.json
4. Criação do Servidor Express
No arquivo src/app.ts, insira o código a seguir:

TypeScript
// Importa o módulo Express e a tipagem Express
import express from "express";
import type { Express } from "express";

// Cria a instância do servidor da aplicação
const app: Express = express();

// Define a porta em que o servidor será executado
const PORT: number = 8081;

// Inicializa o servidor HTTP na porta especificada
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
5. Configuração dos Scripts de Execução
No arquivo package.json, atualize o objeto "scripts" adicionando o comando de desenvolvimento:

JSON
"scripts": {
  "dev": "tsx watch src/app.ts"
}
6. Execução do Servidor
Para iniciar o servidor em modo de desenvolvimento com recarregamento automático, rode o comando:

Bash
npm run dev
Se a configuração for concluída com sucesso, a seguinte mensagem será exibida no terminal:

Plaintext
Servidor rodando em http://localhost:8081