import { FaUser } from 'react-icons/fa';
import { DotLottiePlayer } from '@dotlottie/react-player';
import { useTranslation } from 'react-i18next';

const About = () => {
	const { t } = useTranslation();

	return (
		<div className='font-montserrat p-4 lg:pl-72 md:pl-16 sm:pl-8'>
			<div className='hover:bg-purple-300 dark:hover:bg-gray-700 transition-colors p-4 rounded'>
				<h1 className='text-4xl font-bold mb-4 flex items-center'>
					<FaUser className='mr-2' /> {t('aboutMeTitle')}
				</h1>
				<p className='text-lg'>{t('aboutMeDescription')}</p>
			</div>
			<div className='flex justify-center mt-8'>
				<DotLottiePlayer
					src='https://lottie.host/b91a3cae-031b-43cf-82bf-b71cec44359d/H5A0UAmrwX.json'
					autoplay
					loop
					style={{ height: '200px', width: '200px' }}
				/>
			</div>
		</div>
	);
};

export default About;
