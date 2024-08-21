import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';
import { useState } from 'react';
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

const LanguageSwitch = () => {
	const { i18n } = useTranslation();
	const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
		setCurrentLanguage(lng);
	};

	const languages = [
		{ code: 'en', name: 'English', flag: 'US' },
		{ code: 'pt', name: 'Português', flag: 'BR' },
	];

	const currentLang = languages.find((lang) => lang.code === currentLanguage);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className='p-0 bg-none border-none cursor-pointer'>
				<ReactCountryFlag
					countryCode={currentLang?.flag || 'US'}
					svg
					style={{
						width: '2em',
						height: '2em',
						borderRadius: '0.25rem',
					}}
					title={currentLang?.name || 'English'}
				/>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='absolute mt-2 w-40 bg-transparent shadow-lg rounded-lg right-0'>
				{languages.map((lang) => (
					<DropdownMenuItem
						key={lang.code}
						onClick={() => changeLanguage(lang.code)}
						className='flex items-center p-2 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-600 transition-colors'
					>
						<ReactCountryFlag
							countryCode={lang.flag}
							svg
							style={{
								width: '1.5em',
								height: '1.5em',
								marginRight: '0.5em',
								borderRadius: '0.25rem',
							}}
							title={lang.name}
						/>
						{lang.name}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default LanguageSwitch;
