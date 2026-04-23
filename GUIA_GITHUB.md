# 🚀 Guia Completo: GitHub + Portfólio + Currículo

## Parte 1: Criar Conta no GitHub

### 1. Cadastro
1. Acesse: https://github.com
2. Clique em **"Sign up"**
3. Use seu email principal
4. Escolha um username profissional (ex: `matheusaraujo`, `matheus-araujo-dev`)
5. Complete a verificação de email

### 2. Configurar Perfil
- Foto de perfil (sua foto profissional ou avatar)
- Bio curta (ex: "Desenvolvedor Full Stack | Estudante de TADS na UERJ")
- Link para LinkedIn
- Localização (Rio de Janeiro, Brasil)

---

## Parte 2: Subir Seu Portfólio

### Opção A: Pelo Terminal (Recomendado)

```bash
# 1. Inicializar git no seu projeto
git init

# 2. Adicionar todos os arquivos
git add .

# 3. Criar primeiro commit
git commit -m "Primeiro commit - portfólio inicial"

# 4. Conectar com repositório remoto (substitua SEU_USER)
git remote add origin https://github.com/SEU_USER/portfolio.git

# 5. Enviar para o GitHub
git push -u origin main
```

### Opção B: Arrastar arquivos (Mais fácil para iniciantes)

1. No GitHub, clique no **+** (canto superior direito) → **"New repository"**
2. Nome: `portfolio` (ou `matheus-portfolio`)
3. Deixe público ✅
4. Marque **"Add a README file"**
5. Clique em **"Create repository"**
6. Na página do repositório, clique em **"Add file"** → **"Upload files"**
7. Arraste os arquivos do seu projeto
8. Faça commit

---

## Parte 3: Publicar no GitHub Pages (Grátis!)

### Configurar Deploy Automático

1. No seu repositório, vá em **Settings** (aba superior)
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione **"GitHub Actions"**
4. Clique em **"Create your own workflow"**

Crie um arquivo `.github/workflows/deploy.yml` com este conteúdo:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Configurar vite.config.js

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/NOME_DO_SEU_REPO/',  // IMPORTANTE! ex: /portfolio/
})
```

5. Commit e push dessas mudanças
6. Seu site estará em: `https://SEU_USER.github.io/NOME_DO_REPO/`

---

## Parte 4: README Profissional

Substitua o README do seu repo por este modelo:

```markdown
# 👨‍💻 Matheus Araújo - Portfólio

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-green)](https://SEU_USER.github.io/portfolio/)
[![React](https://img.shields.io/badge/React-18-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF)](https://vitejs.dev/)

Portfólio pessoal desenvolvido com React, Framer Motion e Vite.

## 🚀 Demo

🔗 **[Ver site ao vivo](https://SEU_USER.github.io/portfolio/)**

## 🛠️ Tecnologias

- React 18
- Framer Motion (animações)
- Lucide React (ícones)
- Vite (build tool)

## 📸 Preview

![Preview do site](./public/preview.png)

## 🎯 Funcionalidades

- ✨ Animações fluidas com Framer Motion
- 📱 Design responsivo
- ⚡ Carregamento rápido
- 🎨 Tema escuro moderno

## 🚀 Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/SEU_USER/portfolio.git

# Entre na pasta
cd portfolio

# Instale dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

## 📫 Contato

- LinkedIn: [seu-linkedin](https://linkedin.com/in/seu-perfil)
- Email: seu.email@exemplo.com
- GitHub: [@SEU_USER](https://github.com/SEU_USER)

---

**⭐ Deixe uma estrela se gostou do projeto!**
```

---

## Parte 5: Melhorar Seu Currículo

### Estrutura Recomendada (1 página)

```
MATHEUS ARAÚJO
Estudante de TADS | Estagiário em TI
Rio de Janeiro, RJ | (21) 99999-9999 | email@gmail.com
LinkedIn: linkedin.com/in/seu-perfil | GitHub: github.com/seu-user

RESUMO PROFISSIONAL
Estagiário em TI com foco em suporte técnico, cursando TADS na UERJ.
Desenvolvedor web em transição, com projetos em React e JavaScript.
Buscando oportunidades em desenvolvimento frontend.

EXPERIÊNCIA
Estagiário em TI - [Nome da Empresa] | 2024 - Presente
• Suporte técnico aos usuários
• Manutenção de hardware e software
• Documentação de processos técnicos

FORMAÇÃO
Tecnólogo em Análise e Desenvolvimento de Sistemas
Universidade do Estado do Rio de Janeiro (UERJ) | 2023 - 2026

PROJETOS
💻 Portfólio Pessoal (React + Vite)
   Site pessoal com animações e design responsivo
   → github.com/seu-user/portfolio

🛠️ Sistema de Chamados (se tiver outro projeto)
   Descrição breve e tech stack
   → github.com/seu-user/outro-repo

HABILIDADES TÉCNICAS
• Frontend: HTML, CSS, JavaScript, React
• Ferramentas: Git, GitHub, VS Code
• Suporte TI: Windows, Office, Redes básicas
• Idiomas: Português (nativo), Inglês (técnico)

CERTIFICAÇÕES (se tiver)
• [Nome do curso] - [Plataforma] - [Ano]
```

### Dicas Importantes:

1. **Use uma ferramenta:** Canva (modelos de CV), Google Docs, ou LaTeX
2. **PDF sempre:** Nunca mande .doc, apenas PDF
3. **Cores só no topo:** Use cor apenas no cabeçalho, o resto preto/branco
4. **Quantifique:** "Suporte a 50+ usuários" é melhor que "Suporte técnico"
5. **GitHub é obrigatório:** Coloque o link e mantenha ativo

---

## Parte 6: Dicas de Destaque no GitHub

### Deixar seu perfil "bonito":

1. **Pin repositórios importantes**
   - No seu perfil, clique em "Customize pins"
   - Escolha seus melhores projetos

2. **Criar repositório de perfil**
   - Crie um repo com o mesmo nome do seu username
   - O README dele aparece no topo do seu perfil
   - Exemplo de conteúdo: apresentação, skills, contato

3. **Manter atividade**
   - Commits frequentes (mesmo que pequenos)
   - Issues e Pull Requests bem escritas
   - Contribuições em projetos open source

4. **README em todos os projetos**
   - O que faz
   - Como instalar/rodar
   - Screenshots/GIFs
   - Link para demo

---

## Checklist Final

- [ ] Conta GitHub criada com username profissional
- [ ] Foto de perfil adicionada
- [ ] Bio escrita
- [ ] Portfólio subido no repositório `portfolio`
- [ ] GitHub Pages configurado e funcionando
- [ ] README profissional no portfólio
- [ ] Currículo em PDF atualizado com link do GitHub
- [ ] LinkedIn atualizado com link do portfólio

---

**Dúvidas?** Pode me perguntar qualquer coisa! 🚀
