import { BaseButton, BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { RequestPopup } from 'components/landing/modals';
import React, { useState } from 'react';
import s from './Header.module.scss';

interface Props {}

const Header: React.FC<Props> = () => {
	const [popup, setPopup] = useState(false);

	return (
		<div className={s.HeaderWrapper}>
			<div className={s.Header}>
				<div className={s.Header_Title}>
					<h1>
						Save your time Money with <span>Cloud Ladz</span> Your eCommerce
						Agents.
					</h1>
				</div>

				<div className={s.Header_Subtitle}>
					<p>The Fat Merchant is gone, the Cloud Ladz are back!</p>
				</div>

				<BaseButton
					title='SEND REQUEST'
					className={s.Header_Button}
					onClick={() => setPopup(true)}
				/>

				<BaseIcon
					viewBox='0 0 67 53'
					icon={ALL_ICONS.STAR}
					className={`${s.IconStar} ${s.IconStar1}`}
				/>

				<BaseIcon
					viewBox='0 0 67 53'
					icon={ALL_ICONS.STAR}
					className={`${s.IconStar} ${s.IconStar2}`}
				/>

				<BaseIcon
					viewBox='0 0 67 53'
					icon={ALL_ICONS.STAR}
					className={`${s.IconStar} ${s.IconStar3}`}
				/>

				<BaseIcon
					viewBox='0 0 67 53'
					icon={ALL_ICONS.STAR}
					className={`${s.IconStar} ${s.IconStar4}`}
				/>

				<BaseIcon
					viewBox='0 0 67 53'
					icon={ALL_ICONS.STAR}
					className={`${s.IconStar} ${s.IconStar5}`}
				/>

				<BaseIcon
					viewBox='0 0 161 151'
					icon={ALL_ICONS.ROKET}
					className={s.IconRoket}
				/>

				<svg
					viewBox='0 0 1409 353'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className={`${s.IconLine} ${s.IconLine_Desktop}`}
				>
					<path
						d='M703.5 1C403 1 143 152 32.4998 276C23.8582 285.697 23.5305 284.451 8.49989 308.5C0.999792 320.5 1.49984 343.833 1.49984 350.5'
						stroke='white'
						strokeWidth='0.999366'
						strokeDasharray='5 5'
					/>
					<path
						d='M1408.5 324C1300.5 145.5 1006 1 706 1'
						stroke='url(#paint0_linear_139_30778)'
						strokeWidth='0.999366'
						strokeDasharray='5 5'
					/>
					<defs>
						<linearGradient
							id='paint0_linear_139_30778'
							x1='950.5'
							y1='77'
							x2='1247.5'
							y2='163'
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='white' />
							<stop offset='1' stopColor='white' stopOpacity='0' />
						</linearGradient>
					</defs>
				</svg>

				<svg
					viewBox='0 0 866 286'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className={`${s.IconLine} ${s.IconLine_Laptop}`}
				>
					<path
						d='M440.501 11C283.323 21.1316 222.988 50.5473 158.682 85.2982C109.118 112.083 51.0602 161.526 12.5165 218.456C0.116629 236.771 0.502863 245.956 0.502779 255.123C0.502643 270.079 0.502666 279.567 0.502666 286'
						stroke='white'
						strokeWidth='0.999366'
						strokeDasharray='5 5'
					/>
					<path
						d='M865.501 193C826.954 137.363 781.407 110.731 731.838 84.5544C667.527 50.5925 610.71 25.1124 455.501 11'
						stroke='url(#paint0_linear_371_3416)'
						strokeWidth='0.999366'
						strokeDasharray='5 5'
					/>
					<defs>
						<linearGradient
							id='paint0_linear_371_3416'
							x1='587.102'
							y1='58.5109'
							x2='764.261'
							y2='115.779'
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='white' />
							<stop offset='1' stopColor='white' stopOpacity='0' />
						</linearGradient>
					</defs>
				</svg>

				<svg
					viewBox='0 0 673 314'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className={`${s.IconLine} ${s.IconLine_Tablet}`}
				>
					<path
						d='M257 1.00001C168.628 9.48641 31.8253 66.8944 7.36057 212.162C7.36057 212.162 3.16195 236.408 1.8685 252.098C-0.0856255 275.801 1.8685 313 1.8685 313'
						stroke='white'
						strokeWidth='0.999366'
						strokeDasharray='5 5'
					/>
					<path
						d='M416.239 1.00001C504.611 9.48641 641.414 66.8944 665.879 212.162C665.879 212.162 670.077 236.408 671.371 252.098C673.325 275.801 671.371 313 671.371 313'
						stroke='url(#paint0_linear_371_3428)'
						strokeWidth='0.999366'
						strokeDasharray='5 5'
					/>
					<defs>
						<linearGradient
							id='paint0_linear_371_3428'
							x1='498.409'
							y1='82.4473'
							x2='618.914'
							y2='96.6356'
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='white' />
							<stop offset='1' stopColor='white' stopOpacity='0' />
						</linearGradient>
					</defs>
				</svg>

				<svg
					viewBox='0 0 336 133'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className={`${s.IconLine} ${s.IconLine_Modile}`}
				>
					<path
						d='M125.5 1C73.3187 1 31.8786 21.2889 8.6317 62.1194C2.91638 72.1577 1.00011 83.7981 1.00011 95.3494C1.00011 98.2659 1.00013 100.768 1.00018 102.078C1.00059 112.944 1 133 1 133'
						stroke='white'
						strokeWidth='0.999366'
						strokeDasharray='5 5'
					/>
					<path
						d='M211 1C263.181 1 304.621 21.2889 327.868 62.1194C333.584 72.1577 335.5 83.7981 335.5 95.3494C335.5 98.2659 335.5 100.768 335.5 102.078C335.499 112.944 335.5 133 335.5 133'
						stroke='url(#paint0_linear_371_3434)'
						strokeWidth='0.999366'
						strokeDasharray='5 5'
					/>
					<defs>
						<linearGradient
							id='paint0_linear_371_3434'
							x1='250.962'
							y1='35.4585'
							x2='330.143'
							y2='34.5872'
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='white' />
							<stop offset='1' stopColor='white' stopOpacity='0' />
						</linearGradient>
					</defs>
				</svg>
			</div>
			<RequestPopup popup={popup} onClick={setPopup} />
		</div>
	);
};

export default Header;
