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

				<div className={s.Services_Pictures}></div>
			</BaseContainer>
		</div>
	);
};

export default Services;
