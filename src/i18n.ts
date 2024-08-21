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
				subtitle: 'Data Analyst/Full Stack Developer',
				description: 'I build websites and create strategic dashboards.',
				aboutMeTitle: 'About Me',
				aboutMeDescription:
					"I'm a passionate developer with a strong background in full stack development and data analysis. I enjoy learning new technologies and applying them to solve real-world problems.",
				homeTitle: "Hey, I'm Pete!",
				homeDescription:
					"I'm a Full Stack Developer with knowledge in Data Analysis, and I love to code! Whether it's building websites with React, entering data and making tables with various SQL tools, or creating beautiful dashboards with Power BI, I am always up for a challenge and love to work.",
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
				subtitle: 'Analista de Dados/Desenvolvedor Full Stack',
				description: 'Construo sites e crio dashboards estratégicos.',
				aboutMeTitle: 'Sobre Mim',
				aboutMeDescription:
					'Sou um desenvolvedor apaixonado com uma forte experiência em desenvolvimento full stack e análise de dados. Gosto de aprender novas tecnologias e aplicá-las para resolver problemas do mundo real.',
				homeTitle: 'Olá, eu sou o Pete!',
				homeDescription:
					'Sou um Desenvolvedor Full Stack com conhecimento em Análise de Dados, e adoro programar! Seja construindo sites com React, inserindo dados e criando tabelas com várias ferramentas SQL, ou criando belos dashboards com Power BI, estou sempre pronto para um desafio e adoro trabalhar.',
			},
		},
	},
	lng: 'pt', // Alterar para 'pt' para definir o idioma padrão como português
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
