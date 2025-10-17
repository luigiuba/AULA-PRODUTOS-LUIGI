# 🐳 PROJETO LOJA — LUIGI PASSO A PASSO SIMPLIFICADO

---

```bash
⚙️ SEGUINTES COMANDOS - CRIAÇÃO IMAGEM DB E RUN

1- CRIAR PASTA CADPROD
2- CRIAR PASTA DB
3- ARQUIVOS - (init.sql & Dockerfile)
4- CMD TERMINAL - (docker build -t imagem-mysql-loja ./bd)
5- CMD TERMINAL - (docker run -d --name mysql-container -p 3333:3333 imagem-mysql-loja)
6- CMD TERMINAL - (docker exec -it mysql-container mysql -uroot -proot) - OPCIONAL EXECUÇÃO DO SQL


⚙️ SEGUINTES COMANDOS - CRIAÇÃO BACKEND E RUN

1- CRIAR PASTA BACKEND
2- ARQUIVOS - (db.js & index.js & Dockerfile)
3- CMD TERMINAL - (cd backend)
4- CMD TERMINAL - (npm init -y)
5- CMD TERMINAL - (npm install express)
6- CMD TERMINAL - (npm install sql2)
7- CMD TERMINAL - (npm install cors)
8- INSERIR NO PACKAGE.JSON ("start": "node index.js") ABAIXO DE TEST
9- EXCLUIR NODE_MODULES DA PASTA BACKEND
10- CMD TERMINAL -  (docker build -t imagem-backend-loja ./backend)
11- CMD TERMINAL - (docker run -d --name backend-container -p 3000:3000 imagem-backend-loja)


⚙️ SEGUINTES COMANDOS - CRIAÇÃO FRONTEND E RUN

1- CMD TERMINAL -  (docker build -t imagem-frontend-loja ./frontend)
2- CMD TERMINAL - (docker run -d --name frontend-container -p 8080:80 imagem-frontend-loja)


🌐 EXECUÇÃO FINAL

EXECUTE EM http://localhost:8080
