import { useTranslation } from 'react-i18next';

const Home = () => {
	const { t } = useTranslation();

	return (
		<div className='font-montserrat p-4 lg:pl-72 md:pl-16 sm:pl-8'>
			<div className='hover:bg-purple-300 dark:hover:bg-gray-700 transition-colors p-4 rounded'>
				<h1 className='text-4xl font-bold mb-4'>{t('homeTitle')}</h1>
				<p className='text-lg'>{t('homeDescription')}</p>
			</div>
		</div>
	);
};

export default Home;
