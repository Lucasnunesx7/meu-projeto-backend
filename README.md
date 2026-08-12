# Configuração do Ambiente e Servidor Express com TypeScript

Guia passo a passo para inicializar o ambiente de desenvolvimento Node.js com TypeScript e configurar um servidor HTTP utilizando o framework Express.

---

## 1. Preparação do Ambiente

Rode estes comandos para preparar o ambiente:

```bash
npm init -y
npm i -D typescript @types/node tsx
npx tsc --init
```

Rode estes comandos para preparar o framework Express:

```bash
npm install express
npm install -D @types/express
```

---

## 2. Estrutura do Projeto

Crie uma pasta e o arquivo `.ts`: `src/app.ts`

A estrutura ficará assim:

```text
meu-projeto-backend
│
├── node_modules
├── src
│   └── app.ts
├── package.json
└── tsconfig.json
```

---

## 3. Criar o Servidor com Express

No arquivo `src/app.ts`, adicione o seguinte código:

```typescript
// Importa a biblioteca Express e também o tipo Express
// O Express será utilizado para criar o servidor web
import express from "express";
import type { Express } from "express";

// Cria uma aplicação Express
// A função express() devolve um objeto que representa o servidor da aplicação
const app: Express = express();

// Define a porta onde o servidor ficará disponível
// Neste caso, o servidor poderá ser acessado pela porta 8081
const PORT: number = 8081;

// Inicializa o servidor utilizando a porta definida
// O método listen() faz o servidor começar a "escutar" requisições HTTP
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```

---

## 4. Configurar o Script de Execução

Abra o arquivo `package.json` e altere a seção `"scripts"` para:

```json
"scripts": {
  "dev": "tsx watch src/app.ts"
}
```

---

## 5. Executar o Servidor

No terminal, execute:

```bash
npm run dev
```

Se tudo estiver correto, o terminal exibirá:

```text
Servidor rodando em http://localhost:8081
```

