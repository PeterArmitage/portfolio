import { FaTools } from 'react-icons/fa';
import { DotLottiePlayer } from '@dotlottie/react-player';
import { useTranslation } from 'react-i18next';
const Skills = () => {
	const { t } = useTranslation();
	return (
		<div className='font-montserrat p-4 lg:pl-72 md:pl-16 sm:pl-8'>
			<div className='hover:bg-purple-300 dark:hover:bg-gray-700 transition-colors p-4 rounded'>
				<h1 className='text-4xl font-bold mb-4 flex items-center'>
					<FaTools className='mr-2' /> {t('mySkills')}
				</h1>
				<p className='text-lg'>
					{t('skillsIntro')}
					<ul className='list-disc list-inside'>
						<li>JavaScript</li>
						<li>React</li>
						<li>Node.js</li>
						<li>SQL</li>
						<li>Power BI</li>
						<li>Prisma</li>
						<li>Nextjs</li>
						<li>{t('variousOtherTools')}</li>
					</ul>
				</p>
				<div className='flex justify-center mt-8'>
					<DotLottiePlayer
						src='https://lottie.host/570f5967-b41e-4a8d-8186-9389e683d58c/qzcXlDpjGE.json'
						autoplay
						loop
						style={{ height: '200px', width: '200px' }}
					/>
				</div>
			</div>
		</div>
	);
};

export default Skills;
