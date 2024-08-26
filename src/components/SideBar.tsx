import { useState } from 'react';
import {
	FaBars,
	FaTimes,
	FaHome,
	FaUser,
	FaCode,
	FaProjectDiagram,
	FaEnvelope,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import About from './SideBar/About';
import Contacts from './SideBar/Contacts';
import Home from './SideBar/Home';
import Projects from './SideBar/Projects';
import Skills from './SideBar/Skills';
import Header from './SideBar/Header';
import LanguageSwitch from './LanguageSwitch';
import ThemeSwitch from './ThemeSwitch';

interface SidebarProps {
	theme: 'light' | 'dark';
	toggleTheme: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ theme, toggleTheme }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const { t } = useTranslation();
	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={`relative min-h-screen flex ${theme}`}>
			<button
				onClick={toggleSidebar}
				className={`text-2xl p-2 bg-none border-none cursor-pointer fixed top-4 left-4 z-50 transition-opacity ${
					isOpen ? 'opacity-0' : 'opacity-100'
				}`}
			>
				<FaBars />
			</button>
			<div
				className={`fixed top-0 left-0 h-full transition-transform transform ${
					isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-16'
				} z-40 ${
					theme === 'dark'
						? 'bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white'
						: 'bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-gray-900'
				} transition-all duration-300 ease-in-out flex flex-col justify-between`}
			>
				<div>
					<div className='flex justify-end p-4'>
						<button
							onClick={toggleSidebar}
							className='text-2xl p-2 bg-none border-none cursor-pointer'
						>
							<FaTimes />
						</button>
					</div>
					<nav className='flex flex-col p-4 space-y-4'>
						<Link
							to='home'
							smooth={true}
							duration={500}
							className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${
								theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
							}`}
							onClick={toggleSidebar}
						>
							<FaHome />
							<span className={`${isOpen ? 'block' : 'hidden'}`}>
								{t('home')}
							</span>
						</Link>
						<Link
							to='about'
							smooth={true}
							duration={500}
							className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${
								theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
							}`}
							onClick={toggleSidebar}
						>
							<FaUser />
							<span className={`${isOpen ? 'block' : 'hidden'}`}>
								{t('about')}
							</span>
						</Link>
						<Link
							to='skills'
							smooth={true}
							duration={500}
							className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${
								theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
							}`}
							onClick={toggleSidebar}
						>
							<FaCode />
							<span className={`${isOpen ? 'block' : 'hidden'}`}>
								{t('skills')}
							</span>
						</Link>
						<Link
							to='projects'
							smooth={true}
							duration={500}
							className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${
								theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
							}`}
							onClick={toggleSidebar}
						>
							<FaProjectDiagram />
							<span className={`${isOpen ? 'block' : 'hidden'}`}>
								{t('projects')}
							</span>
						</Link>
						<Link
							to='contacts'
							smooth={true}
							duration={500}
							className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${
								theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
							}`}
							onClick={toggleSidebar}
						>
							<FaEnvelope />
							<span className={`${isOpen ? 'block' : 'hidden'}`}>
								{t('contacts')}
							</span>
						</Link>
					</nav>
				</div>
				<div className='p-4'>
					<div className='flex justify-between items-center'>
						<LanguageSwitch />
						<ThemeSwitch toggleTheme={toggleTheme} theme={theme} />
					</div>
				</div>
			</div>
			<div className='flex-grow'>
				<div
					className={`transition-all duration-300 ease-in-out ${
						isOpen ? 'ml-64' : 'ml-16'
					}`}
				>
					<Header isOpen={isOpen} />
					<div className='content mt-8 w-full max-w-4xl mx-auto px-4'>
						<section id='home' className='mb-8'>
							<Home />
						</section>
						<section id='about' className='mb-8'>
							<About />
						</section>
						<section id='skills' className='mb-8'>
							<Skills />
						</section>
						<section id='projects' className='mb-8'>
							<Projects />
						</section>
						<section id='contacts' className='mb-8'>
							<Contacts />
						</section>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
