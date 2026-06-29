# Statistictune — Site Institucional

Site da **Statistictune**, consultoria estatística para pesquisa em saúde. Atende graduandos, mestrandos e doutorandos com suporte metodológico ponta a ponta — do desenho do estudo até o aceite em periódico indexado.

**Site em produção:** [statistictune.com.br](https://statistictune.com.br)

---

## Estrutura do projeto

```
statistictune_page/
├── index.html                        # Landing page principal
├── assets/
│   ├── css/style.css                 # CSS compartilhado (todas as páginas)
│   └── js/main.js                    # JS compartilhado (i18n PT/EN, scroll reveal, nav)
├── blog/
│   ├── index.html                    # Listagem do blog
│   └── posts/
│       ├── template.html             # Template para novos posts
│       ├── pt/                       # Posts em português
│       └── en/                       # Posts em inglês
├── ferramentas/
│   └── index.html                    # Calculadora de tamanho amostral
├── sample_page/
│   └── calculadora_amostral.html     # Versão legada da calculadora
├── og-image.png                      # Imagem Open Graph (1200×630)
└── CNAME                             # Domínio customizado para GitHub Pages
```

## Páginas

| Rota | Descrição |
|---|---|
| `/` | Landing page: hero, serviços, processo, equipe, publicações, escopo e contato |
| `/blog/` | Blog com artigos de bioestatística e metodologia em saúde |
| `/ferramentas/` | Calculadora epidemiológica de tamanho amostral (coorte, caso-controle, transversal, sobrevivência, ECR) |

## Tecnologias

- **HTML/CSS/JS puro** — sem framework ou bundler
- **Google Fonts** — Playfair Display, DM Sans, DM Mono
- **Tabler Icons** — ícones (carregado via CDN na página de ferramentas)
- **Google Analytics** — GA4 (G-VSWKF5XT2K)
- **GitHub Pages** — hospedagem com domínio customizado via CNAME
- **i18n** — alternância PT-BR / EN implementada em `main.js`

## Rodando localmente

**Importante:** abrir os arquivos diretamente (`file://`) quebra o observer de scroll e a listagem do blog. Use sempre um servidor HTTP:

```bash
python3 -m http.server 8080
```

Acesse em: `http://localhost:8080`

## Deploy

O deploy é automático via **GitHub Pages**. Qualquer push na branch `main` publica no domínio `statistictune.com.br`.

## Adicionando um post ao blog

1. Copie `blog/posts/template.html` para o diretório de idioma desejado (`pt/` ou `en/`)
2. Preencha título, descrição, data e conteúdo do artigo
3. Adicione um card correspondente em `blog/index.html`

## Autores

- **Rafael Aguilar Magalhães** — Métodos Quantitativos & Inferência  
  Mestre em Métodos Numéricos em Engenharia (PPGMNE/UFPR)

- **Pâmela Almeida Magalhães** — Expertise Clínica & Saúde  
  Mestranda em Medicina Interna e Ciências da Saúde (UFPR)
