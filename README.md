# Bandas de 1 Álbum

Eternizando bandas e artistas que lançaram apenas um álbum.

## Sumário

## Rodando localmente

Use o NVM para instalar a versão do Node indicada em `package.json` (`engines`, hoje **24.x**), instale as dependências com `yarn` e rode `yarn dev`. O app fica em http://localhost:3000/

Copie `.env.example` para `.env.local` e ajuste se necessário. A variável **`NEXT_PUBLIC_API_URL`** deve ser a origem da API JSON do WordPress em modo headless (ex.: `https://api.bandas1album.com.br/json`), **sem barra no final** — o código monta as URLs como `{NEXT_PUBLIC_API_URL}/api/albums`, `{NEXT_PUBLIC_API_URL}/jwt-auth/v1/token`, etc.

Para limpar o cache ISR ao salvar um álbum no WordPress, configure o mesmo valor em **`REVALIDATE_SECRET`** (front) e em **Álbuns → Revalidação do front** (API), com a URL `https://seu-dominio/api/revalidate`. Isso só funciona no deploy de produção (`next start` / Vercel), não no `yarn dev`.

## Tarefas

## Contribua
