import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: {
				welcome: 'Welcome to my portfolio',
				about: 'About Me',
				skills: 'Skills',
				projects: 'Projects',
				contacts: 'Contacts',
				home: 'Home',
				title: 'Peter Armitage',
				subtitle: 'Full Stack Developer',
				description: 'I build websites and create strategic dashboards.',
				aboutMeTitle: 'About Me',
				aboutMeDescription:
					"I'm a passionate developer with a strong background in full stack development and data analysis. I enjoy learning new technologies and applying them to solve real-world problems.",
				homeTitle: "Hey, I'm Pete!",
				homeDescription:
					"I'm a Full Stack Developer with knowledge in Data Analysis, and I love to code! Whether it's building websites with React, entering data and making tables with various SQL tools, or creating beautiful dashboards with Power BI, I am always up for a challenge and love to work.",
				myProjects: 'My Projects',
				fitnessDashboardScreenshot: 'Fitness Dashboard Screenshot',
				fitForgeDescription:
					'A comprehensive fitness tracking dashboard built with React. Features include calorie intake monitoring, sleep duration tracking, recent workouts display, and quick links to various fitness-related pages.',
				githubRepository: 'GitHub Repository',
				mySkills: 'My Skills',
				skillsIntro: 'Here are some of the skills I have acquired:',
				variousOtherTools: 'Various other tools.',
				financeTrackerTitle: 'Personal Finance Tracker',
				financeTrackerScreenshot: 'Finance Tracker Screenshot',
				financeTrackerDescription:
					'A comprehensive personal finance tracking app that helps you manage your income, expenses, and savings. Features include budget planning, expense categorization, and visual reports to help you achieve your financial goals.',
				liveSite: 'Live Site',
			},
		},
		pt: {
			translation: {
				welcome: 'Bem-vindo ao meu portfólio',
				about: 'Sobre Mim',
				skills: 'Habilidades',
				projects: 'Projetos',
				contacts: 'Contatos',
				home: 'Início',
				title: 'Peter Armitage',
				subtitle: 'Desenvolvedor Full Stack',
				description: 'Construo sites e crio dashboards estratégicos.',
				aboutMeTitle: 'Sobre Mim',
				aboutMeDescription:
					'Sou um desenvolvedor apaixonado com uma forte experiência em desenvolvimento full stack e análise de dados. Gosto de aprender novas tecnologias e aplicá-las para resolver problemas do mundo real.',
				homeTitle: 'Olá, eu sou o Pete!',
				homeDescription:
					'Sou um Desenvolvedor Full Stack com conhecimento em Análise de Dados, e adoro programar! Seja construindo sites com React, inserindo dados e criando tabelas com várias ferramentas SQL, ou criando belos dashboards com Power BI, estou sempre pronto para um desafio e adoro trabalhar.',
				myProjects: 'Meus Projetos',
				fitnessDashboardScreenshot: 'Captura de Tela do Painel de Fitness',
				fitForgeDescription:
					'Um painel abrangente de acompanhamento de fitness construído com React. Os recursos incluem monitoramento de ingestão de calorias, rastreamento da duração do sono, exibição de treinos recentes e links rápidos para várias páginas relacionadas ao fitness.',
				githubRepository: 'Repositório GitHub',
				mySkills: 'Minhas Habilidades',
				skillsIntro: 'Aqui estão algumas das habilidades que adquiri:',
				variousOtherTools: 'Várias outras ferramentas.',
				financeTrackerTitle: 'Rastreador de Finanças Pessoais',
				financeTrackerScreenshot: 'Captura de Tela do Rastreador de Finanças',
				financeTrackerDescription:
					'Um aplicativo abrangente de rastreamento de finanças pessoais que ajuda você a gerenciar sua renda, despesas e economias. Os recursos incluem planejamento de orçamento, categorização de despesas e relatórios visuais para ajudá-lo a alcançar seus objetivos financeiros.',
				liveSite: 'Site ao Vivo',
			},
		},
	},
	lng: 'en', // Alterar para 'pt' para definir o idioma padrão como português
	fallbackLng: 'pt',
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
