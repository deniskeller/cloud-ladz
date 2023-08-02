import { BaseContainer } from '@base/index';
import { Navbar } from '@content/landing/index';
import React from 'react';
import s from './Nutra.module.scss';

const Nutra: React.FC = () => {
	return (
		<>
			<Navbar />
			<BaseContainer>
				<div className={s.Content}>
					<div className={s.Content_Title}>
						<h1></h1>
					</div>

					<div className={s.Content_Subtitle}>
						<p>
							The following information must be provided by merchant to
							Financial Institution during onboarding process:
						</p>
					</div>

					<ul>
						<li></li>
						<li></li>
						<li></li>
					</ul>

					<div className={s.Content_Note}>
						<p>* Not all acquiring banks are asking this.</p>
					</div>
				</div>
			</BaseContainer>
		</>
	);
};

export default Nutra;
