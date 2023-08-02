import { BaseContainer } from '@base/index';
import Image from 'next/image';
import React from 'react';
import s from './HowWeWork.module.scss';

const HowWeWork: React.FC = () => {
	return (
		<BaseContainer>
			<div className={s.HowWeWork}>
				<div className={s.HowWeWork_Image}>
					<Image
						src='/images/pictures/bg-stars.png'
						fill
						alt={'stars'}
						unoptimized={true}
						className={s.Image}
					/>
				</div>

				<div className={s.HowWeWork_IconBefore}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 92 123'
						fill='none'
					>
						<path
							d='M1 0.000488281L1 87.9458L34.7537 121.961H92'
							stroke='white'
							strokeWidth='1.00599'
							strokeDasharray='5.03 5.03'
						/>
						<path
							d='M1.49805 103.516V122H19.8401L1.49805 103.516Z'
							fill='white'
						/>
					</svg>
				</div>

				<div className={s.HowWeWork_Title}>
					<h2>How we work?</h2>
				</div>

				<div className={s.HowWeWork_Content}>
					<div className={s.Step}>
						<div className={s.Step_Icon}>
							<svg
								viewBox='0 0 36 36'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M31.5 4.5V3H4.5V4.5H3V25.5H4.5V27H7.5V33H13.5V31.5H15V30H16.5V28.5H18V27H31.5V25.5H33V4.5H31.5ZM30 22.5H28.5V24H16.5V25.5H15V27H13.5V28.5H12V30H10.5V24H7.5V22.5H6V7.5H7.5V6H28.5V7.5H30V22.5Z'
									fill='#BED252'
								/>
							</svg>
						</div>
						<div className={s.Step_Text}>
							<span>You send</span> us a merchant account opening request.
						</div>
						<div className={`${s.Step_IconNext} ${s.Step_IconNext1}`}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 254 82'
								fill='none'
								className={s.Step_IconNext_Desktop}
							>
								<path
									d='M2 1C14.3126 29.8399 81.7504 85.9142 253 79.4922'
									stroke='#BED252'
									strokeWidth='4'
									strokeDasharray='6 6'
								/>
							</svg>

							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 102 67'
								fill='none'
								className={s.Step_IconNext_Mobile}
							>
								<path
									d='M2 1C6.85638 24.364 33.4553 69.7913 101 64.5886'
									stroke='#BED252'
									strokeWidth='4'
									strokeDasharray='6 6'
								/>
							</svg>
						</div>
					</div>

					<div className={s.Step}>
						<div className={s.Step_Icon}>
							<svg
								viewBox='0 0 36 36'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M19.5 16.5V9H16.5V19.5H24V16.5H19.5Z' fill='#BED252' />
								<path
									d='M31.5 7.5V6H30V4.5H28.5V3H7.5V4.5H6V6H4.5V7.5H3V28.5H4.5V30H6V31.5H7.5V33H28.5V31.5H30V30H31.5V28.5H33V7.5H31.5ZM30 25.5H28.5V27H27V28.5H25.5V30H10.5V28.5H9V27H7.5V25.5H6V10.5H7.5V9H9V7.5H10.5V6H25.5V7.5H27V9H28.5V10.5H30V25.5Z'
									fill='#BED252'
								/>
							</svg>
						</div>

						<div className={s.Step_Text}>
							<span>During 24</span> hours we review your application and
							provide feedback.
						</div>

						<div className={`${s.Step_IconNext} ${s.Step_IconNext2}`}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 254 82'
								fill='none'
								className={s.Step_IconNext_Desktop}
							>
								<path
									d='M2 1C14.3126 29.8399 81.7504 85.9142 253 79.4922'
									stroke='#BED252'
									strokeWidth='4'
									strokeDasharray='6 6'
								/>
							</svg>

							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 102 67'
								fill='none'
								className={s.Step_IconNext_Mobile}
							>
								<path
									d='M2 1C6.85638 24.364 33.4553 69.7913 101 64.5886'
									stroke='#BED252'
									strokeWidth='4'
									strokeDasharray='6 6'
								/>
							</svg>
						</div>
					</div>

					<div className={s.Step}>
						<div className={s.Step_Icon}>
							<svg
								viewBox='0 0 36 36'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M30 7.5V4.5H27V7.5H24V10.5H27V13.5H30V10.5H33V7.5H30Z'
									fill='#BED252'
								/>
								<path
									d='M30 16.5V28.5H28.5V30H7.5V28.5H6V16.5H7.5V18H10.5V19.5H13.5V21H15V22.5H21V21H22.5V19.5H25.5V16.5H19.5V18H16.5V16.5H13.5V15H10.5V13.5H7.5V12H6V10.5H7.5V9H19.5V6H4.5V7.5H3V31.5H4.5V33H31.5V31.5H33V16.5H30Z'
									fill='#BED252'
								/>
							</svg>
						</div>
						<div className={s.Step_Text}>
							<span>During 48</span> hours we send you reply and merchant
							account offers from variety of banks and service providers.
						</div>
					</div>
				</div>

				<div className={s.HowWeWork_IconAfter}>
					<svg
						viewBox='0 0 651 136'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className={s.HowWeWork_IconAfter_Desktop}
					>
						<path
							d='M650 0V50.3556L618.199 85.5768H1V136'
							stroke='white'
							strokeDasharray='5.19 5.19'
						/>
						<path d='M650.117 68V87.117H631L650.117 68Z' fill='white' />
					</svg>

					<svg
						viewBox='0 0 434 162'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className={s.HowWeWork_IconAfter_Mobile}
					>
						<path
							d='M433.003 81.752V100.833H413.9L433.003 81.752Z'
							fill='white'
						/>
						<path
							d='M431.002 0V63.0104L395.849 98.1243H1V162'
							stroke='white'
							strokeWidth='1.03812'
							strokeDasharray='5.19 5.19'
						/>
					</svg>
				</div>
			</div>
		</BaseContainer>
	);
};

export default HowWeWork;
