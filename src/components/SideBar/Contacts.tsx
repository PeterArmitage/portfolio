import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Contacts = () => {
	return (
		<div className='flex justify-center space-x-6 p-4'>
			<a
				href='mailto:ficochu84@gmail.com'
				className='text-2xl text-gray-900 dark:text-gray-100 hover:text-red-600 dark:hover:text-red-400 transition-colors'
				title='Email'
			>
				<SiGmail />
			</a>
			<a
				href='https://www.linkedin.com/in/peter-armitage-601105a9/'
				className='text-2xl text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
				title='LinkedIn'
				target='_blank'
				rel='noopener noreferrer'
			>
				<FaLinkedin />
			</a>
			<a
				href='https://github.com/PeterArmitage'
				className='text-2xl text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors'
				title='GitHub'
				target='_blank'
				rel='noopener noreferrer'
			>
				<FaGithub />
			</a>
		</div>
	);
};

export default Contacts;
