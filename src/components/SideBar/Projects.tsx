import { FaKeyboard, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Food from '../../assets/images/portfolio/Food.png';
import { useTranslation } from 'react-i18next';

const Projects = () => {
	const { t } = useTranslation();
	return (
		<div className='font-montserrat p-4 lg:pl-72 md:pl-16 sm:pl-8'>
			<div className='hover:bg-purple-300 dark:hover:bg-gray-700 transition-colors p-4 rounded'>
				<h1 className='text-4xl font-bold mb-4 flex items-center'>
					<FaKeyboard className='mr-2' /> {t('myProjects')}
				</h1>
				<div className='space-y-8'>
					<div className='purple-300 dark:bg-gray-900 p-6 rounded-lg shadow-md'>
						<h2 className='text-2xl font-bold mb-4'>Fit Forge</h2>
						<div className='mb-4'>
							<img
								src={Food}
								alt='Fitness Dashboard Screenshot'
								className='rounded-lg w-full max-w-[600px] h-auto'
								loading='lazy'
							/>
						</div>
						<p className='text-lg mb-4'>{t('fitForgeDescription')}</p>
						<div className='flex space-x-4'>
							<a
								href='https://github.com/PeterArmitage/FitnessApp'
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center text-blue-500 hover:underline'
							>
								<FaGithub className='mr-2' /> {t('githubRepository')}
							</a>{' '}
							<a
								href='https://master--fit-forge84.netlify.app/'
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center text-green-500 hover:underline'
							>
								<FaExternalLinkAlt className='mr-2' /> Live Site
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
