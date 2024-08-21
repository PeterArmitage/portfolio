import { useTranslation } from 'react-i18next';

interface HeaderProps {
	isOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ isOpen }) => {
	const { t } = useTranslation();

	return (
		<header
			className={`w-full py-4 font-montserrat mb-4 ${isOpen ? 'mt-20' : ''}`}
		>
			<div className='container mx-auto flex flex-col items-start'>
				<h1 className='text-2xl font-bold'>{t('title')}</h1>
				<p className='text-lg break-words'>{t('subtitle')}</p>
				<p className='text-sm'>{t('description')}</p>
			</div>
		</header>
	);
};

export default Header;
