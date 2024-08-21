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

interface SidebarProps {
	theme: 'light' | 'dark';
}

const Sidebar: React.FC<SidebarProps> = ({ theme }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const { t } = useTranslation();
	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div
			className={`relative min-h-screen flex flex-col items-center ${theme}`}
		>
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
				} z-40 mt-26 ${
					theme === 'dark'
						? 'bg-gray-800 text-white'
						: 'bg-indigo-200 text-gray-900'
				} transition-all duration-300 ease-in-out`}
			>
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
			<div
				className={`fixed top-16 left-4 z-40 transition-transform transform ${
					isOpen ? 'translate-x-64 mt-20' : 'translate-x-16 mt-0'
				} transition-all duration-300 ease-in-out`}
			>
				<Header isOpen={isOpen} />
			</div>
			<div
				className={`content mt-8 w-full max-w-4xl ${
					isOpen ? 'ml-64' : 'ml-16'
				}`}
			>
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
	);
};

export default Sidebar;
