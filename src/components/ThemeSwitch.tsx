import { FaSun, FaMoon } from 'react-icons/fa';

interface ThemeSwitchProps {
	toggleTheme: () => void;
	theme: 'light' | 'dark';
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ toggleTheme, theme }) => {
	return (
		<button
			onClick={toggleTheme}
			className='p-0 bg-none border-none cursor-pointer'
		>
			{theme === 'light' ? (
				<FaMoon size={24} />
			) : (
				<FaSun size={24} className='text-yellow-500' />
			)}
		</button>
	);
};

export default ThemeSwitch;
