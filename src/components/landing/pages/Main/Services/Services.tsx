import { BaseContainer } from '@base/index';
import Image from 'next/image';
import React from 'react';
import s from './Services.module.scss';

const Services: React.FC = () => {
	return (
		<div className={s.Services}>
			<BaseContainer>
				<div className={s.Services_Title}>
					<h2>Services:</h2>
				</div>

				<div className={s.Services_Pictures}>
					<Image
						src='/images/pictures/services-pictures-1.png'
						fill
						alt={''}
						unoptimized={true}
						className={s.Image1}
					/>
					<Image
						src='/images/pictures/services-pictures-2.png'
						fill
						alt={''}
						unoptimized={true}
						className={s.Image2}
					/>

					<Image
						src='/images/pictures/services-pictures-3.png'
						fill
						alt={''}
						unoptimized={true}
						className={s.Image3}
					/>

					<Image
						src='/images/pictures/services-pictures-4.png'
						fill
						alt={''}
						unoptimized={true}
						className={s.Image4}
					/>
				</div>
			</BaseContainer>
		</div>
	);
};

export default Services;
