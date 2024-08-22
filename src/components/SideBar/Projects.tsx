import { FaKeyboard, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
	return (
		<div className='font-montserrat p-4 lg:pl-72 md:pl-16 sm:pl-8'>
			<div className='hover:bg-purple-300 dark:hover:bg-gray-700 transition-colors p-4 rounded'>
				<h1 className='text-4xl font-bold mb-4 flex items-center'>
					<FaKeyboard className='mr-2' /> My Projects
				</h1>
				<div className='space-y-8'>
					<div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'>
						<h2 className='text-2xl font-bold mb-4'>Fit Forge</h2>
						<div className='mb-4'>
							<img
								src='/path-to-your-screenshot.png'
								alt='Fitness Dashboard Screenshot'
								className='rounded-lg w-full max-w-[600px] h-auto'
							/>
						</div>
						<p className='text-lg mb-4'>
							A comprehensive fitness tracking dashboard built with React.
							Features include calorie intake monitoring, sleep duration
							tracking, recent workouts display, and quick links to various
							fitness-related pages.
						</p>
						<div className='flex space-x-4'>
							<a
								href='https://github.com/PeterArmitage/FitnessApp'
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center text-blue-500 hover:underline'
							>
								<FaGithub className='mr-2' /> GitHub Repository
							</a>
							{/* Uncomment when you have a live site */}
							{/* <a
								href='https://your-fitness-dashboard-url.com'
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center text-green-500 hover:underline'
							>
								<FaExternalLinkAlt className='mr-2' /> Live Site
							</a> */}
						</div>
					</div>
					{/* Add more projects here */}
				</div>
			</div>
		</div>
	);
};

export default Projects;
