/* ============================================================
   Statistictune — Shared JS
   Usado por: index.html, blog/index.html, blog/posts/*.html
   ============================================================ */

// ── i18n strings ────────────────────────────────────────────
const i18n = {
  pt: {
    "nav-services": "Serviços", "nav-process": "Processo", "nav-team": "Equipe",
    "nav-publications": "Publicações", "nav-scope": "Escopo", "nav-blog": "Blog",
    "nav-cta": "Falar agora", "nav-cta-plain": "Contato",
    "hero-eyebrow": "Consultoria Estatística para Saúde",
    "hero-title-1": "Do dado bruto", "hero-title-2": "ao <em>artigo</em>", "hero-title-3": "publicado.",
    "hero-sub": "Suporte metodológico ponta a ponta para graduandos, mestrandos e doutorandos da área da saúde. Análises rigorosas, figuras prontas para publicação e acompanhamento até o aceite.",
    "hero-cta": "Solicitar proposta", "hero-ghost": "Ver serviços →",
    "card1-label": "Publicação recente", "card2-label": "Análises realizadas",
    "card2-desc": "Modelos de sobrevivência, riscos competitivos, propensity score",
    "card3-label": "Artigo em periódico indexado", "card3-desc": "Active learning in process mining — citado internacionalmente",
    "target-label": "Para quem é", "target-title-1": "Você se reconhece", "target-title-2": "em algum cenário?",
    "target-intro": "A pesquisa em saúde exige rigor metodológico que vai além do currículo da graduação ou pós. É aqui que entramos.",
    "t1-title": "Graduando com TCC em saúde", "t1-desc": "Tem dados coletados, sabe que precisa de estatística, mas o orientador não domina análise quantitativa. Precisa de alguém que explique e execute junto.", "t1-tag": "TCC / Monografia",
    "t2-title": "Mestrando com prazo apertado", "t2-desc": "A dissertação avança, mas a seção de metodologia e análise trava tudo. Precisa de resultados sólidos e defensáveis, rapidamente.", "t2-tag": "Mestrado",
    "t3-title": "Doutorando visando publicação", "t3-desc": "Tem dados complexos — bases do SUS, dados longitudinais, desfechos compostos — e precisa de análises que sustentem revisão em periódico indexado.", "t3-tag": "Doutorado · Publicação",
    "services-label": "O que fazemos", "services-title-1": "Consultoria", "services-title-2": "completa,", "services-title-3": "da base ao periódico",
    "services-body1": "Cada projeto é único. Trabalhamos desde a concepção do desenho do estudo até a resposta aos revisores — com documentação clara, código reprodutível e figuras prontas para submissão.",
    "services-body2": "Especialidade em dados do SUS (DATASUS / Techtrials), desfechos em saúde, análise de sobrevivência, modelos de riscos competitivos e epidemiologia observacional.",
    "s1-title": "Desenho do Estudo", "s1-desc": "Definição de hipóteses, desfechos, critérios de inclusão/exclusão e checklist STROBE para estudos observacionais.",
    "s2-title": "Construção de Bases", "s2-desc": "Identificação e linkage de pacientes em bases do SUS. Curadoria, limpeza e pipeline reprodutível para auditoria.",
    "s3-title": "Análise de Sobrevivência", "s3-desc": "Modelos de Cox, Kaplan-Meier, Fine-Gray para riscos competitivos, Propensity Score Matching e ajuste por confundidores.",
    "s4-title": "Modelos Preditivos", "s4-desc": "Regressão logística, GLM (Poisson, Binomial Negativo), modelos mistos e validação cruzada para dados clínicos.",
    "s5-title": "Figuras Científicas", "s5-desc": "Curvas de sobrevivência, forest plots, mapas de calor — prontas para submissão conforme normas gráficas da revista-alvo.",
    "s6-title": "Revisão Metodológica", "s6-desc": "Revisão crítica de seções de Métodos e Resultados. Identificação de problemas e sugestão de abordagens mais robustas.",
    "s7-title": "Adaptação para Publicação", "s7-desc": "Adequação ao formato do periódico, suplemento de análises e revisão de tabelas para submissão a revistas indexadas.",
    "s8-title": "Suporte até o Aceite", "s8-desc": "Respostas ponto a ponto às rodadas de revisão e acompanhamento de todo o processo editorial.",
    "process-label": "Como funciona", "process-title-1": "Um processo", "process-title-2": "claro", "process-title-3": "em 4 etapas",
    "process-body": "Começamos sempre pelo diagnóstico — entendendo o que você tem, o que você precisa, e o que é possível fazer com os dados disponíveis.",
    "p1-title": "Diagnóstico inicial", "p1-desc": "Conversa de alinhamento: hipóteses, dados disponíveis, desfechos e objetivo. Definimos o escopo juntos.",
    "p2-title": "Planejamento metodológico", "p2-desc": "Proposta detalhada com métodos, testes, modelos e cronograma de entrega. Você aprova antes de começarmos.",
    "p3-title": "Execução e análises", "p3-desc": "Análises com código documentado (R/Python), figuras publicáveis e relatório técnico dos resultados.",
    "p4-title": "Publicação e revisão", "p4-desc": "Adequação ao periódico, respostas aos revisores e suporte até o aceite final.",
    "team-label": "Quem está por trás", "team-title-1": "Pesquisa rigorosa começa", "team-title-2": "por quem", "team-title-3": "entende", "team-title-4": "os dois lados.",
    "team-body": "A Statistictune reúne formação estatística avançada e expertise clínica na área da saúde. Não é só análise de dados — é compreensão real do que os dados representam dentro do contexto assistencial e acadêmico.",
    "rafael-badge": "Métodos Quantitativos & Inferência",
    "rafael-title": "Mestre em Métodos Numéricos em Engenharia · PPGMNE/UFPR",
    "rafael-bio": "Pesquisador no DataSci Labs (UFPR) com foco em aprendizado ativo Bayesiano e inferência estatística sequencial. Desenvolveu o framework ALFRED — uma abordagem de aquisição de dados baseada em energia livre de Helmholtz — e tem publicações em periódicos internacionais indexados.",
    "rafael-c1": "Mestrado em Métodos Numéricos em Engenharia", "rafael-c2": "Pesquisador — DataSci Labs · UFPR",
    "rafael-c3": "Melhor Pôster · 1st SouthStat Meeting", "rafael-c4": "Especialização em Ciência de Dados", "rafael-c5": "Licenciatura em Matemática",
    "pamela-badge": "Expertise Clínica & Saúde",
    "pamela-title": "Mestranda em Medicina Interna e Ciências da Saúde · UFPR",
    "pamela-bio": "Fisioterapeuta com trajetória construída em contextos de alta complexidade — UTI adulto, UTI neonatal e pediátrica, reabilitação hospitalar. Traduz a pergunta clínica em hipótese testável.",
    "pamela-c1": "Mestrado em Medicina Interna e Ciências da Saúde", "pamela-ongoing": "em andamento, desde",
    "pamela-c2": "Especialização em Terapia Intensiva Adulto", "pamela-c3": "Especialização em Fisioterapia em UTI Neonatal e Pediátrica", "pamela-c4": "Bacharelado em Fisioterapia",
    "ptag1": "Fisioterapia Intensiva", "ptag2": "UTI Neonatal · Adulto", "ptag3": "Dados Clínicos", "ptag4": "Medicina Interna", "ptag5": "Saúde Coletiva", "ptag6": "Pesquisa em Saúde",
    "traj-label": "Trajetória profissional", "traj-sub": "Experiências que conectam teoria e prática na área da saúde.",
    "traj-r1": "Inteligência Clínica", "traj-r2": "Operadora de Saúde", "traj-r3": "Seguradora Digital",
    "traj-p1": "Pediatria", "traj-p2": "UTI Neonatal", "traj-p3": "Reabilitação", "traj-p4": "Atendimento Clínico e Home Care",
    "pub-label": "Produção científica", "pub-title-1": "Pesquisa que", "pub-title-2": "já foi publicada.",
    "pub-body": "Nosso trabalho não é só metodológico — é também autoral. Conhecemos o processo editorial por dentro porque já percorremos esse caminho.",
    "pub-group1": "Artigos em periódicos indexados", "pub-group2": "Capítulos e anais", "pub-group3": "Prêmios e distinções",
    "pub-citation": "citação",
    "award1-title": "Melhor Pôster — 1st SouthStat Meeting", "award1-org": "Sociedade Brasileira de Estatística · 2023",
    "award2-title": "Melhores Pôsteres — Sessão Técnica de Painéis de IC", "award2-org": "XXXVIII Congresso Nacional de Matemática Aplicada e Computacional · 2018",
    "scope-label": "Escopo", "scope-title-1": "Três formas de", "scope-title-2": "trabalharmos juntos",
    "scope-body": "Do atendimento pontual a um acompanhamento completo até a publicação. O escopo é definido caso a caso, conforme o projeto e o momento da sua pesquisa.",
    "sc1-badge": "Pontual", "sc1-name": "Análise Específica", "sc1-desc": "Para quem precisa resolver um problema metodológico bem delimitado — uma análise, um modelo, uma seção.",
    "sc1-a1": "Execução de uma análise definida em conjunto", "sc1-a2": "Código R ou Python documentado", "sc1-a3": "Interpretação dos resultados", "sc1-a4": "Uma rodada de revisão e ajustes",
    "sc-btn1": "Solicitar",
    "sc2-badge": "Completo", "sc2-name": "Ponta a Ponta", "sc2-desc": "Acompanhamento integral do projeto — do desenho metodológico até a submissão ao periódico.",
    "sc2-a1": "Desenho do estudo e mapeamento de variáveis", "sc2-a2": "Construção e curadoria da base de dados", "sc2-a3": "Todas as análises estatísticas e simulações",
    "sc2-a4": "Produção de figuras científicas publicáveis", "sc2-a5": "Revisão das seções de Métodos e Resultados", "sc2-a6": "Suporte às rodadas de revisão dos avaliadores", "sc2-a7": "Coautoria na publicação (critérios ICMJE)",
    "sc-btn2": "Solicitar proposta",
    "sc3-badge": "Sob Medida", "sc3-name": "Projeto Customizado", "sc3-desc": "Para projetos com bases complexas, múltiplos objetivos ou abordagens avançadas de inferência causal.",
    "sc3-a1": "Dados administrativos (SUS, Techtrials)", "sc3-a2": "Múltiplos artigos ou desfechos", "sc3-a3": "Causal inference, matching avançado",
    "sc3-a4": "Machine learning aplicado a dados clínicos", "sc3-a5": "Escopo e cronograma definidos no diagnóstico",
    "sc-btn3": "Agendar diagnóstico",
    "cta-label": "Próximo passo", "cta-title-1": "Pronto para levar", "cta-title-2": "sua pesquisa", "cta-title-3": "adiante?",
    "cta-sub": "Mande uma mensagem com o contexto do seu projeto — dados disponíveis, desfecho de interesse e prazo. Fazemos um diagnóstico inicial gratuito e enviamos uma proposta em até 48 horas.",
    "cta-whatsapp": "WhatsApp — falar agora", "cta-email": "Enviar e-mail →", "cta-connect": "Conecte-se também:",
    "meta-title": "Statistictune — Consultoria Estatística para Pesquisa em Saúde",
    "meta-desc": "Consultoria estatística ponta a ponta para graduandos, mestrandos e doutorandos da área da saúde.",
    "blog-label": "Blog", "blog-title-1": "Bioestatística", "blog-title-2": "na prática.",
    "blog-intro": "Artigos sobre análise de sobrevivência, bioestatística aplicada, dados do SUS e metodologia para pesquisa em saúde.",
    "blog-read-more": "Ler artigo →", "blog-all-tags": "Todos"
  },
  en: {
    "nav-services": "Services", "nav-process": "Process", "nav-team": "Team",
    "nav-publications": "Publications", "nav-scope": "Scope", "nav-blog": "Blog",
    "nav-cta": "Get in touch", "nav-cta-plain": "Contact",
    "hero-eyebrow": "Statistical Consulting for Health Research",
    "hero-title-1": "From raw data", "hero-title-2": "to the <em>published</em>", "hero-title-3": "article.",
    "hero-sub": "End-to-end methodological support for undergraduate, master's, and doctoral researchers in health sciences. Rigorous analyses, publication-ready figures, and guidance through acceptance.",
    "hero-cta": "Request a proposal", "hero-ghost": "See services →",
    "card1-label": "Recent publication", "card2-label": "Analyses performed",
    "card2-desc": "Survival models, competing risks, propensity score",
    "card3-label": "Indexed journal article", "card3-desc": "Active learning in process mining — cited internationally",
    "target-label": "Who it's for", "target-title-1": "Do you recognize yourself", "target-title-2": "in any of these?",
    "target-intro": "Health research demands methodological rigor that goes beyond most graduate curricula. That's where we come in.",
    "t1-title": "Undergraduate with a health thesis", "t1-desc": "You have data collected and know you need statistics, but your advisor isn't quantitatively oriented. You need someone who can explain and execute alongside you.", "t1-tag": "Thesis / Dissertation",
    "t2-title": "Master's student on a deadline", "t2-desc": "Your dissertation is progressing, but the methodology and analysis sections are blocking everything. You need solid, defensible results, fast.", "t2-tag": "Master's degree",
    "t3-title": "PhD candidate targeting publication", "t3-desc": "You have complex data — administrative databases, longitudinal data, composite outcomes — and need analyses that hold up under peer review.", "t3-tag": "PhD · Publication",
    "services-label": "What we do", "services-title-1": "Full", "services-title-2": "consulting,", "services-title-3": "from dataset to journal",
    "services-body1": "Every project is unique. We work from study design conception through reviewer responses — with clear documentation, reproducible code, and submission-ready figures.",
    "services-body2": "Expertise in administrative health databases, survival analysis, competing risks models, and observational epidemiology.",
    "s1-title": "Study Design", "s1-desc": "Hypothesis definition, outcomes, inclusion/exclusion criteria, and STROBE checklist for observational studies.",
    "s2-title": "Database Construction", "s2-desc": "Patient identification and linkage in administrative databases. Curation, cleaning, and reproducible pipeline for auditing.",
    "s3-title": "Survival Analysis", "s3-desc": "Cox models, Kaplan-Meier, Fine-Gray for competing risks, Propensity Score Matching, and confounder adjustment.",
    "s4-title": "Predictive Models", "s4-desc": "Logistic regression, GLM (Poisson, Negative Binomial), mixed models, and cross-validation for clinical data.",
    "s5-title": "Scientific Figures", "s5-desc": "Survival curves, forest plots, heat maps — submission-ready according to the target journal's graphic standards.",
    "s6-title": "Methodological Review", "s6-desc": "Critical review of Methods and Results sections. Problem identification and suggestion of more robust approaches.",
    "s7-title": "Publication Adaptation", "s7-desc": "Formatting to journal requirements, analysis supplements, and table revisions for indexed journal submission.",
    "s8-title": "Support Through Acceptance", "s8-desc": "Point-by-point responses to reviewer rounds and full editorial process accompaniment.",
    "process-label": "How it works", "process-title-1": "A clear", "process-title-2": "process", "process-title-3": "in 4 steps",
    "process-body": "We always start with a diagnostic — understanding what you have, what you need, and what's feasible with your available data.",
    "p1-title": "Initial diagnostic", "p1-desc": "Alignment conversation: hypotheses, available data, outcomes, and objectives. We define scope together.",
    "p2-title": "Methodological planning", "p2-desc": "Detailed proposal with methods, tests, models, and delivery timeline. You approve before we begin.",
    "p3-title": "Execution & analysis", "p3-desc": "Analyses with documented code (R/Python), publication-ready figures, and technical results report.",
    "p4-title": "Publication & revision", "p4-desc": "Journal formatting, reviewer responses, and support through final acceptance.",
    "team-label": "Who's behind it", "team-title-1": "Rigorous research starts", "team-title-2": "with those who", "team-title-3": "understand", "team-title-4": "both sides.",
    "team-body": "Statistictune brings together advanced statistical training and clinical expertise in health. It's not just data analysis — it's real comprehension of what the data represents within clinical and academic contexts.",
    "rafael-badge": "Quantitative Methods & Inference",
    "rafael-title": "MSc in Numerical Methods in Engineering · PPGMNE/UFPR",
    "rafael-bio": "Researcher at DataSci Labs (UFPR) focused on Bayesian active learning and sequential statistical inference. Developed the ALFRED framework with publications in international indexed journals.",
    "rafael-c1": "MSc in Numerical Methods in Engineering", "rafael-c2": "Researcher — DataSci Labs · UFPR",
    "rafael-c3": "Best Poster · 1st SouthStat Meeting", "rafael-c4": "Specialization in Data Science", "rafael-c5": "Bachelor's in Mathematics",
    "pamela-badge": "Clinical Expertise & Health",
    "pamela-title": "MSc candidate in Internal Medicine and Health Sciences · UFPR",
    "pamela-bio": "Physical therapist with a career built in high-complexity settings. Translates clinical questions into testable hypotheses.",
    "pamela-c1": "MSc in Internal Medicine and Health Sciences", "pamela-ongoing": "ongoing, since",
    "pamela-c2": "Specialization in Adult Intensive Care", "pamela-c3": "Specialization in Neonatal and Pediatric ICU Physiotherapy", "pamela-c4": "Bachelor's in Physical Therapy",
    "ptag1": "Intensive Care Physiotherapy", "ptag2": "Neonatal · Adult ICU", "ptag3": "Clinical Data", "ptag4": "Internal Medicine", "ptag5": "Public Health", "ptag6": "Health Research",
    "traj-label": "Professional background", "traj-sub": "Experiences that connect theory and practice in health.",
    "traj-r1": "Clinical Intelligence", "traj-r2": "Health Insurance Operator", "traj-r3": "Digital Insurer",
    "traj-p1": "Pediatrics", "traj-p2": "Neonatal ICU", "traj-p3": "Rehabilitation", "traj-p4": "Clinical & Home Care",
    "pub-label": "Scientific output", "pub-title-1": "Research that", "pub-title-2": "has already been published.",
    "pub-body": "Our work isn't only methodological — it's also authorial. We know the editorial process from the inside because we've already been through it.",
    "pub-group1": "Articles in indexed journals", "pub-group2": "Book chapters & proceedings", "pub-group3": "Awards & distinctions",
    "pub-citation": "citation",
    "award1-title": "Best Poster — 1st SouthStat Meeting", "award1-org": "Brazilian Statistical Society · 2023",
    "award2-title": "Best Posters — IC Technical Panel Session", "award2-org": "XXXVIII Brazilian Congress on Applied & Computational Mathematics · 2018",
    "scope-label": "Scope", "scope-title-1": "Three ways to", "scope-title-2": "work together",
    "scope-body": "From a focused engagement to full end-to-end support through publication. Scope is defined case by case.",
    "sc1-badge": "Focused", "sc1-name": "Specific Analysis", "sc1-desc": "For those who need to solve a well-defined methodological problem — one analysis, one model, one section.",
    "sc1-a1": "Execution of a jointly defined analysis", "sc1-a2": "Documented R or Python code", "sc1-a3": "Results interpretation", "sc1-a4": "One round of revision and adjustments",
    "sc-btn1": "Request",
    "sc2-badge": "Full", "sc2-name": "End-to-End", "sc2-desc": "Full project accompaniment — from methodological design through journal submission.",
    "sc2-a1": "Study design and variable mapping", "sc2-a2": "Database construction and curation", "sc2-a3": "All statistical analyses and simulations",
    "sc2-a4": "Publication-ready scientific figures", "sc2-a5": "Methods and Results section review", "sc2-a6": "Reviewer round support", "sc2-a7": "Co-authorship on publication (ICMJE criteria)",
    "sc-btn2": "Request proposal",
    "sc3-badge": "Custom", "sc3-name": "Custom Project", "sc3-desc": "For projects with complex databases, multiple objectives, or advanced causal inference approaches.",
    "sc3-a1": "Administrative databases (SUS, Techtrials)", "sc3-a2": "Multiple articles or outcomes", "sc3-a3": "Causal inference, advanced matching",
    "sc3-a4": "Machine learning applied to clinical data", "sc3-a5": "Scope and timeline defined at diagnostic",
    "sc-btn3": "Schedule diagnostic",
    "cta-label": "Next step", "cta-title-1": "Ready to move your", "cta-title-2": "research", "cta-title-3": "forward?",
    "cta-sub": "Send a message with your project context — available data, outcome of interest, and timeline. Free initial diagnostic and detailed proposal within 48 hours.",
    "cta-whatsapp": "WhatsApp — talk now", "cta-email": "Send email →", "cta-connect": "Connect also:",
    "meta-title": "Statistictune — Statistical Consulting for Health Research",
    "meta-desc": "End-to-end statistical consulting for health researchers.",
    "blog-label": "Blog", "blog-title-1": "Biostatistics", "blog-title-2": "in practice.",
    "blog-intro": "Articles on survival analysis, applied biostatistics, SUS data, and methodology for health research.",
    "blog-read-more": "Read article →", "blog-all-tags": "All"
  }
};

// ── Language engine ──────────────────────────────────────────
let currentLang = 'pt';

function setLang(lang) {
  currentLang = lang;
  const strings = i18n[lang];

  const htmlRoot = document.getElementById('html-root');
  if (htmlRoot) htmlRoot.lang = lang === 'pt' ? 'pt-BR' : 'en';

  const btnPt = document.getElementById('btn-pt');
  const btnEn = document.getElementById('btn-en');
  if (btnPt) btnPt.classList.toggle('active', lang === 'pt');
  if (btnEn) btnEn.classList.toggle('active', lang === 'en');

  // meta tags
  const metaTitle = document.getElementById('meta-title');
  const metaDesc  = document.getElementById('meta-desc');
  const ogTitle   = document.getElementById('og-title');
  const ogDesc    = document.getElementById('og-desc');
  const twTitle   = document.getElementById('tw-title');
  const twDesc    = document.getElementById('tw-desc');
  if (strings['meta-title']) {
    document.title = strings['meta-title'];
    if (metaTitle) metaTitle.content = strings['meta-title'];
    if (ogTitle)   ogTitle.content   = strings['meta-title'];
    if (twTitle)   twTitle.content   = strings['meta-title'];
  }
  if (strings['meta-desc']) {
    if (metaDesc) metaDesc.content = strings['meta-desc'];
    if (ogDesc)   ogDesc.content   = strings['meta-desc'];
    if (twDesc)   twDesc.content   = strings['meta-desc'];
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (strings[key] !== undefined) el.innerHTML = strings[key];
  });

  localStorage.setItem('lang', lang);
}

// Auto-detect on load
(function () {
  const saved    = localStorage.getItem('lang');
  const browser  = (navigator.language || navigator.userLanguage || '');
  const detected = saved || (browser.startsWith('en') ? 'en' : 'pt');
  if (detected === 'en') setLang('en');
})();

// ── Scroll reveal ────────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const siblings = [...entry.target.parentElement.querySelectorAll('.reveal:not(.visible)')];
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => entry.target.classList.add('visible'), idx * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Nav compact on scroll ────────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (!nav) return;
  const isMobile = window.innerWidth <= 1100;
  const base = isMobile ? '40px' : '60px';
  const compact = isMobile ? '28px' : '40px';
  nav.style.padding = window.scrollY > 60
    ? `14px ${compact}`
    : `20px ${base}`;
});