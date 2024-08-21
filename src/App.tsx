import React, { useEffect, useState, useRef } from 'react';
import LanguageSwitch from './components/LanguageSwitch';
import ThemeSwitch from './components/ThemeSwitch';
import Sidebar from './components/SideBar';

const App: React.FC = () => {
	const [theme, setTheme] = useState<'light' | 'dark'>('light');
	const animationContainerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const storedTheme = localStorage.getItem('theme');
		if (storedTheme) {
			setTheme(storedTheme as 'light' | 'dark');
		}
	}, []);

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
			document.documentElement.classList.remove('light');
		} else {
			document.documentElement.classList.add('light');
			document.documentElement.classList.remove('dark');
		}
		localStorage.setItem('theme', theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	useEffect(() => {
		const handleScroll = () => {
			if (animationContainerRef.current) {
				const scrollY = window.scrollY;
				animationContainerRef.current.style.transform = `translateY(${scrollY}px)`;
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className='min-h-screen transition-colors duration-300 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 dark:from-gray-700 dark:via-gray-900 dark:to-black text-gray-900 dark:text-gray-100'>
			<Sidebar theme={theme} />
			<div className='fixed top-4 right-4 flex space-x-4 z-50 hidden lg:flex'>
				<LanguageSwitch />
				<ThemeSwitch toggleTheme={toggleTheme} theme={theme} />
			</div>
			<div className='container mx-auto p-4 flex'>
				<main className='mt-10 flex flex-col items-center ml-64 md:ml-16 sm:ml-8'></main>
			</div>
		</div>
	);
};

export default App;
