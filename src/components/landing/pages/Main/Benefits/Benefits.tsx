import { BaseContainer } from '@base/index';
import Image from 'next/image';
import React from 'react';
import s from './Benefits.module.scss';

const Benefits: React.FC = () => {
	return (
		<>
			<BaseContainer>
				<div className={s.Benefits_Wrapper}>
					<svg
						viewBox='0 0 650 160'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className={`${s.IconBefore} ${s.IconBefore_Desktop}`}
					>
						<path
							d='M0.997314 81.752V100.833H20.0996L0.997314 81.752Z'
							fill='white'
						/>
						<path
							d='M2.99823 0V63.0104L38.1511 98.1243H649V159.5'
							stroke='white'
							strokeWidth='1.03812'
							strokeDasharray='5.19 5.19'
						/>
					</svg>

					<svg
						width='434'
						height='162'
						viewBox='0 0 434 162'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className={`${s.IconBefore} ${s.IconBefore_Tablet}`}
					>
						<path
							d='M0.997314 81.752V100.833H20.0996L0.997314 81.752Z'
							fill='white'
						/>
						<path
							d='M2.99823 0V63.0104L38.1511 98.1243H433V162'
							stroke='white'
							strokeWidth='1.03812'
							strokeDasharray='5.19 5.19'
						/>
					</svg>

					<svg
						width='202'
						height='117'
						viewBox='0 0 202 117'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className={`${s.IconBefore} ${s.IconBefore_Mobile}`}
					>
						<path
							d='M1.40616 0V39.0104L26.1433 74.1243H201V117'
							stroke='white'
							stroke-width='1.03812'
							stroke-dasharray='5.19 5.19'
						/>
						<path d='M0.498047 56V74.4841H18.8401L0.498047 56Z' fill='white' />
					</svg>

					<div className={s.Benefits_Image}>
						<Image
							src='/images/pictures/bg-stars.png'
							fill
							alt={'stars'}
							unoptimized={true}
							className={s.Image}
						/>
					</div>

					<div className={s.Benefits}>
						<div className={s.Benefits_Title}>
							<h2>The Benefits</h2>
						</div>

						<div className={s.Benefits_Items}>
							<div className={s.Item}>
								<div className={s.Item_Number}>
									<span>01</span>
								</div>
								<div className={s.Item_Description}>
									Chance to choose the best processing solution with the best
									rates and conditions.
								</div>
							</div>

							<div className={s.Item}>
								<div className={s.Item_Number}>
									<span>02</span>
								</div>
								<div className={s.Item_Description}>
									Secured and verified network of acquiring banks and service
									providers.
								</div>
							</div>

							<div className={s.Item}>
								<div className={s.Item_Number}>
									<span>03</span>
								</div>
								<div className={s.Item_Description}>
									Fast approval and easy boarding with own professional
									assistance.
								</div>
							</div>
						</div>
					</div>

					<svg
						width='1240'
						height='147'
						viewBox='0 0 1240 147'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className={s.IconAfter}
					>
						<path
							d='M619.75 146.005V60.4346'
							stroke='white'
							strokeWidth='0.999366'
							strokeDasharray='5 5'
						/>
						<path
							d='M1 1.00586C158.303 27.2483 373.35 58.6656 619.25 58.6656C858.654 58.6656 1095 16.7608 1239 1.00586'
							stroke='white'
							strokeWidth='0.999366'
							strokeDasharray='5 5'
						/>
					</svg>

					<svg
						width='330'
						height='56'
						viewBox='0 0 330 56'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className={s.IconAfter2}
					>
						<path
							d='M165 56L165 32.1445'
							stroke='white'
							strokeWidth='0.999366'
							strokeDasharray='5 5'
						/>
						<path
							d='M1 1C42.6763 13.6667 99.6516 28.8313 164.801 28.8313C228.23 28.8313 290.847 8.60464 329 1'
							stroke='white'
							strokeWidth='0.999366'
							strokeDasharray='5 5'
						/>
					</svg>
				</div>
			</BaseContainer>
		</>
	);
};

export default Benefits;
