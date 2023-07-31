import Image from 'next/image';
import React from 'react';
import s from './About.module.scss';

const About: React.FC = () => {
	return (
		<>
			<div className={s.Header}>
				<Image
					src='/images/pictures/about-header-bg.png'
					fill
					alt={'About header bg'}
					unoptimized={true}
					className={s.Header_Image}
					priority
					style={{ objectFit: 'cover' }}
				/>

				<div className={s.Header_Title}>
					<h1>
						We help to open merchant accounts for different kind of businesses
						worldwide.
					</h1>
				</div>
			</div>

			<div className={s.About}></div>
		</>
	);
};

export default About;
