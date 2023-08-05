import { BaseContainer, BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
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
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 48 98'
						fill='none'
						className={s.Astronaut}
					>
						<path
							d='M42.8171 16.4247L39.3672 16.4238L39.3677 18.5285L42.8176 18.5294L42.8171 16.4247Z'
							fill='#CBCACA'
						/>
						<path
							d='M45.5142 29.8951L6.47076 29.8857L6.48252 78.7992L45.526 78.8086L45.5142 29.8951Z'
							fill='#423E4E'
						/>
						<path
							d='M44.2527 31.242L40.8027 31.2412L40.8091 57.7605L44.2591 57.7614L44.2527 31.242Z'
							fill='#292632'
						/>
						<path
							d='M35.5015 31.3237L29.6113 31.3223L29.62 67.3549L35.5102 67.3563L35.5015 31.3237Z'
							fill='#292632'
						/>
						<path
							d='M31.21 33.0902L17.4102 33.0869L17.4113 37.9698L31.2112 37.9732L31.21 33.0902Z'
							fill='#8C8C8D'
						/>
						<path
							d='M4.1951 13.0483L2.25977 13.0479L2.26219 23.1505L4.19753 23.1509L4.1951 13.0483Z'
							fill='#6A6571'
						/>
						<path
							d='M38.6083 10.952L35.0742 10.9512L35.0775 24.5055L38.6116 24.5064L38.6083 10.952Z'
							fill='#6A6571'
						/>
						<path
							d='M6.71778 10.9432L3.18369 10.9424L3.18694 24.4967L6.72104 24.4976L6.71778 10.9432Z'
							fill='#5A5662'
						/>
						<path
							d='M39.8032 72.3241L7.91211 72.3164L7.9147 83.0925L39.8058 83.1002L39.8032 72.3241Z'
							fill='white'
						/>
						<path
							d='M31.8795 24.9251L26.4101 24.9238L26.4109 28.2072L31.8803 28.2085L31.8795 24.9251Z'
							fill='#B89480'
						/>
						<path
							d='M31.8775 16.0853L26.4922 16.084L26.4944 25.1763L31.8797 25.1776L31.8775 16.0853Z'
							fill='#A18880'
						/>
						<path
							d='M26.4119 23.3237L16.3145 23.3213L16.3156 28.0358L26.413 28.0383L26.4119 23.3237Z'
							fill='#A18880'
						/>
						<path
							d='M26.4904 8.2537L11.0918 8.25L11.0959 25.2561L26.4945 25.2598L26.4904 8.2537Z'
							fill='#B89480'
						/>
						<path
							d='M18.5807 5.13852L18.4124 5.13848L11.0918 5.13672L11.093 9.93546L18.4136 9.93722L18.5819 9.93726L25.6501 9.93896L25.6489 5.14022L18.5807 5.13852Z'
							fill='#313132'
						/>
						<path
							d='M31.7917 3.7103L26.3223 3.70898L26.3253 16.3372L31.7948 16.3386L31.7917 3.7103Z'
							fill='#313132'
						/>
						<path
							d='M21.3653 27.8686L16.3165 27.7832L16.2337 33.0029L16.2343 35.7811L31.8012 35.7848L31.7993 27.8711L26.3299 27.8698L26.3311 32.9211L21.3665 32.9199L21.3653 27.8686Z'
							fill='white'
						/>
						<path
							d='M16.2328 36.7068L0.75 36.7031L0.758702 72.9041C0.758702 72.9041 47.1228 72.5785 47.4594 72.9154C47.7119 73.2522 47.4507 36.7144 47.4507 36.7144L31.7155 36.7106L16.2328 36.7068Z'
							fill='white'
						/>
						<path
							d='M25.4034 38.7294L21.7852 38.7285L21.7924 68.6996L25.4106 68.7004L25.4034 38.7294Z'
							fill='#CBCACA'
						/>
						<path
							d='M5.97433 68.1069L0 68.1055L0.00141671 73.9987L5.97575 74.0001L5.97433 68.1069Z'
							fill='#6A6571'
						/>
						<path
							d='M42.2413 70.4736L5.97461 70.4648L5.97522 72.9905L42.2419 72.9992L42.2413 70.4736Z'
							fill='#6A6571'
						/>
						<path
							d='M19.6133 97.9131L19.6085 77.7079L7.82812 77.7051L7.83298 97.9103'
							fill='white'
						/>
						<path
							d='M30.5525 97.9156L30.5488 82.7617L39.8048 82.7639L39.8085 97.9179'
							fill='white'
						/>
						<path
							d='M7.83224 97.9108L7.82617 72.6543L12.8749 72.6555L12.881 97.912'
							fill='#CBCACA'
						/>
						<path
							d='M28.8689 97.9156L28.8652 82.7617L34.7554 82.7631L34.7591 97.917'
							fill='#CBCACA'
						/>
						<path
							d='M18.248 21.1323L16.2285 21.1318L16.2295 25.3413L18.249 25.3417L18.248 21.1323Z'
							fill='#313132'
						/>
						<path
							d='M27.4221 33.0896L20.1855 33.0879L20.1867 37.8024L27.4232 37.8042L27.4221 33.0896Z'
							fill='#CBCACA'
						/>
						<path
							d='M26.3288 27.7845L20.8594 27.7832L20.8608 33.5922L26.3302 33.5935L26.3288 27.7845Z'
							fill='white'
						/>
						<path
							d='M26.4063 5.22365L22.2832 5.22266L22.2872 21.7236L26.4103 21.7246L26.4063 5.22365Z'
							fill='#C0A18A'
						/>
						<path
							d='M16.3146 25.2581L11.2658 25.2568L11.2665 27.9509L16.3152 27.9521L16.3146 25.2581Z'
							fill='#313132'
						/>
						<path
							d='M47.7942 67.9486L42.0723 67.9473L42.0737 73.8405L47.7956 73.8418L47.7942 67.9486Z'
							fill='#6A6571'
						/>
						<path
							d='M15.1345 13.2195L12.1895 13.2188L12.1913 21.0483L15.1364 21.049L15.1345 13.2195Z'
							fill='#A18880'
						/>
						<path
							d='M17.6561 9.09447L10.5879 9.09277L10.5884 11.1133L17.6566 11.115L17.6561 9.09447Z'
							fill='#313132'
						/>
						<path
							d='M17.4043 11.2837L15.3848 11.2832L15.3852 13.2195L17.4047 13.22L17.4043 11.2837Z'
							fill='#313132'
						/>
						<path
							d='M12.1033 11.2815L11.1777 11.2812L11.1782 13.2176L12.1038 13.2178L12.1033 11.2815Z'
							fill='#313132'
						/>
						<path
							d='M16.2288 18.438L10.0862 18.4365L10.0868 21.1305L16.2294 21.132L16.2288 18.438Z'
							fill='#313132'
						/>
						<path
							d='M36.334 6.06816L4.69531 6.06055L4.70082 28.9598L36.3395 28.9674L36.334 6.06816Z'
							fill='#CBCACA'
						/>
						<path
							d='M19.613 95.6396L7.58017 95.6367L7.58061 97.4889L19.6134 97.4918L19.613 95.6396Z'
							fill='#6A6571'
						/>
						<path
							d='M39.8068 95.6453L28.5312 95.6426L28.5317 97.4947L39.8072 97.4974L39.8068 95.6453Z'
							fill='#6A6571'
						/>
						<path
							d='M10.1002 80.9049L7.74414 80.9043L7.7444 81.9987L10.1005 81.9993L10.1002 80.9049Z'
							fill='#6A6571'
						/>
						<path
							d='M11.444 72.9076L10.0977 72.9072L10.0996 80.9051L11.4459 80.9054L11.444 72.9076Z'
							fill='#6A6571'
						/>
						<path
							d='M39.7194 80.9107L37.3633 80.9102L37.3635 82.0046L39.7196 82.0052L39.7194 80.9107Z'
							fill='#6A6571'
						/>
						<path
							d='M37.3619 72.8284L36.0156 72.8281L36.0176 80.9102L37.3639 80.9105L37.3619 72.8284Z'
							fill='#6A6571'
						/>
						<path
							d='M11.1016 43.2717L5.96875 43.2705L5.97527 70.3792L11.1081 70.3804L11.1016 43.2717Z'
							fill='#CBCACA'
						/>
						<path
							d='M42.1505 43.2805L37.0176 43.2793L37.0241 70.5563L42.157 70.5576L42.1505 43.2805Z'
							fill='#CBCACA'
						/>
						<path
							d='M11.1075 70.4661L5.97461 70.4648L5.97522 72.9905L11.1081 72.9917L11.1075 70.4661Z'
							fill='#5A5662'
						/>
						<path
							d='M42.0743 70.4739L36.9414 70.4727L36.942 72.9983L42.0749 72.9995L42.0743 70.4739Z'
							fill='#5A5662'
						/>
						<path
							d='M47.5362 43.7863L42.9082 43.7852L42.9086 45.5531L47.5366 45.5542L47.5362 43.7863Z'
							fill='#DEA641'
						/>
						<path
							d='M33.4738 3.45745L7.38867 3.45117L7.38985 8.3341L33.4749 8.34037L33.4738 3.45745Z'
							fill='#CBCACA'
						/>
						<path
							d='M31.8757 1.8568L10.082 1.85156L10.0829 5.30329L31.8765 5.30853L31.8757 1.8568Z'
							fill='#CBCACA'
						/>
						<path
							d='M29.351 0.00410846L12.2695 0L12.2704 3.78848L29.352 3.79259L29.351 0.00410846Z'
							fill='#CBCACA'
						/>
						<path
							d='M33.4793 25.8519L7.5625 25.8457L7.56367 30.7286L33.4805 30.7349L33.4793 25.8519Z'
							fill='#CBCACA'
						/>
						<path
							d='M31.7979 28.8813L9.83594 28.876L9.83677 32.3277L31.7987 32.333L31.7979 28.8813Z'
							fill='#CBCACA'
						/>
						<path
							d='M29.6935 30.3128L12.2754 30.3086L12.2763 34.0971L29.6944 34.1013L29.6935 30.3128Z'
							fill='#CBCACA'
						/>
						<path
							d='M28.1811 34.1005L16.2324 34.0977L16.2328 35.7814L28.1815 35.7843L28.1811 34.1005Z'
							fill='#8C8C8D'
						/>
						<path
							d='M16.2302 32.1611L12.2754 32.1602L12.2759 34.1807L16.2307 34.1816L16.2302 32.1611Z'
							fill='#8C8C8D'
						/>
						<path
							d='M11.8554 29.2974L9.83594 29.2969L9.83667 32.3277L11.8562 32.3281L11.8554 29.2974Z'
							fill='#8C8C8D'
						/>
						<path
							d='M9.83474 27.8658L7.39453 27.8652L7.3952 30.6435L9.83541 30.644L9.83474 27.8658Z'
							fill='#8C8C8D'
						/>
						<path
							d='M7.38798 6.06119L4.69531 6.06055L4.70082 28.9598L7.39348 28.9604L7.38798 6.06119Z'
							fill='#8C8C8D'
						/>
						<path
							d='M14.8006 30.4773L11.8555 30.4766L11.8559 32.3287L14.801 32.3294L14.8006 30.4773Z'
							fill='#8C8C8D'
						/>
						<path
							d='M9.82905 6.06115L7.30469 6.06055L7.30523 8.33363L9.8296 8.33424L9.82905 6.06115Z'
							fill='#8C8C8D'
						/>
						<path
							d='M10.0813 4.71451L7.38867 4.71387L7.38902 6.14507L10.0817 6.14572L10.0813 4.71451Z'
							fill='#8C8C8D'
						/>
						<path
							d='M12.1007 4.71449L9.49219 4.71387L9.49253 6.14507L12.101 6.1457L12.1007 4.71449Z'
							fill='#8C8C8D'
						/>
						<path
							d='M12.0156 3.45263L9.99609 3.45215L9.99642 4.79917L12.0159 4.79965L12.0156 3.45263Z'
							fill='#8C8C8D'
						/>
						<path
							d='M34.4013 8.4245L31.8769 8.42389L31.8763 6.15081L30.53 6.15048L30.5297 4.80347L28.2578 4.80292L28.2574 3.20334L13.5319 3.1998L13.5323 4.79938L11.6811 4.79894L11.6814 6.14595L9.32538 6.14538L9.32593 8.41847L7.05399 8.41792L7.05866 27.8654L9.4989 27.866L9.49925 29.2972L11.5187 29.2977L11.5191 30.7289L13.6227 30.7294L13.6231 32.2448L28.601 32.2484L28.6006 30.733L30.4518 30.7335L30.4515 29.3023L31.8819 29.3026L31.8816 27.8714L34.4059 27.872L34.4013 8.4245Z'
							fill='#313132'
						/>
						<path
							d='M31.8769 8.42389L31.8763 6.15081L30.53 6.15048L30.5297 4.80347L28.2578 4.80292L28.2574 3.20334L13.5319 3.1998L13.5323 4.79938L11.6811 4.79894L11.6814 6.14595L9.32538 6.14538L9.32593 8.41847L7.05399 8.41792L7.05565 15.3214L9.24344 15.3219L9.24311 13.9749L11.0943 13.9753L11.0939 12.3757L25.8194 12.3793L25.8198 13.9789L28.0917 13.9794L28.092 15.3264L29.4383 15.3268L29.4389 17.5998L31.9633 17.6004L31.9657 27.8714L34.4059 27.872L34.4013 8.4245L31.8769 8.42389Z'
							fill='#1E1E1E'
						/>
						<path
							d='M6.05687 51.8587L0.839844 51.8574L0.840168 53.2044L6.05719 53.2057L6.05687 51.8587Z'
							fill='#6A6571'
						/>
						<path
							d='M47.6218 51.8685L42.1523 51.8672L42.1527 53.2142L47.6221 53.2155L47.6218 51.8685Z'
							fill='#6A6571'
						/>
						<path
							d='M28.6022 34.1002L26.2461 34.0996L26.2465 35.8676L28.6026 35.8681L28.6022 34.1002Z'
							fill='#CBCACA'
						/>
						<path
							d='M13.5345 15.1549L10.8418 15.1543L10.8424 17.7641L13.5351 17.7648L13.5345 15.1549Z'
							fill='#1E1E1E'
						/>
						<path
							d='M10.2532 18.2682L7.56055 18.2676L7.56117 20.8774L10.2538 20.8781L10.2532 18.2682Z'
							fill='#1E1E1E'
						/>
						<path
							d='M28.4267 8.7594L25.9023 8.75879L25.9029 11.1161L28.4273 11.1167L28.4267 8.7594Z'
							fill='#313132'
						/>
						<path
							d='M42.1552 54.8134L5.97266 54.8047L5.97322 57.162L42.1558 57.1707L42.1552 54.8134Z'
							fill='#6A6571'
						/>
						<path
							d='M11.1055 54.8059L5.97266 54.8047L5.97322 57.162L11.1061 57.1632L11.1055 54.8059Z'
							fill='#5A5662'
						/>
						<path
							d='M42.1545 54.8138L36.9375 54.8125L36.9381 57.1698L42.1551 57.171L42.1545 54.8138Z'
							fill='#5A5662'
						/>
						<path
							d='M36.6808 38.6488L26.9199 38.6465L26.9205 41.2563L36.6814 41.2587L36.6808 38.6488Z'
							fill='#6A6571'
						/>
						<path
							d='M15.0587 56.3225L13.9648 56.3223L13.9685 71.5604L15.0624 71.5606L15.0587 56.3225Z'
							fill='#6A6571'
						/>
						<path
							d='M34.1583 56.3274L33.0645 56.3271L33.0681 71.5653L34.162 71.5655L34.1583 56.3274Z'
							fill='#6A6571'
						/>
						<path
							d='M39.7889 13.0571L37.8535 13.0566L37.8559 23.1592L39.7913 23.1597L39.7889 13.0571Z'
							fill='#6A6571'
						/>
						<path
							d='M45.0174 69.0427L42.0723 69.042L42.0726 70.389L45.0177 70.3897L45.0174 69.0427Z'
							fill='#5A5662'
						/>
						<path
							d='M5.8904 69.0339L2.94531 69.0332L2.94564 70.3802L5.89073 70.3809L5.8904 69.0339Z'
							fill='#5A5662'
						/>
						<path
							d='M20.6938 43.274L18.4219 43.2734L18.4224 45.4623L20.6943 45.4629L20.6938 43.274Z'
							fill='#6A6571'
						/>
						<path
							d='M16.9067 43.274L14.6348 43.2734L14.6353 45.4623L16.9072 45.4629L16.9067 43.274Z'
							fill='#6A6571'
						/>
						<path
							d='M44.9221 18.5288L42.8184 18.5283L42.8212 29.8938L44.9248 29.8943L44.9221 18.5288Z'
							fill='white'
						/>
					</svg>

					{/* кусты */}
					<BaseIcon
						viewBox='0 0 126 94'
						icon={ALL_ICONS.BUSH}
						className={`${s.Bush} ${s.Bush_Desktop} ${s.Bush_1}`}
					/>

					<BaseIcon
						viewBox='0 0 126 94'
						icon={ALL_ICONS.BUSH}
						className={`${s.Bush} ${s.Bush_Desktop} ${s.Bush_2}`}
					/>

					<BaseIcon
						viewBox='0 0 126 94'
						icon={ALL_ICONS.BUSH}
						className={`${s.Bush} ${s.Bush_Desktop} ${s.Bush_3}`}
					/>

					<BaseIcon
						viewBox='0 0 126 94'
						icon={ALL_ICONS.BUSH}
						className={`${s.Bush} ${s.Bush_Desktop} ${s.Bush_4}`}
					/>

					<BaseIcon
						viewBox='0 0 90 63'
						icon={ALL_ICONS.BUSH_M}
						className={`${s.Bush} ${s.Bush_Mobile} ${s.Bush_1}`}
					/>

					<BaseIcon
						viewBox='0 0 90 63'
						icon={ALL_ICONS.BUSH_M}
						className={`${s.Bush} ${s.Bush_Mobile} ${s.Bush_2}`}
					/>

					<BaseIcon
						viewBox='0 0 90 63'
						icon={ALL_ICONS.BUSH_M}
						className={`${s.Bush} ${s.Bush_Mobile} ${s.Bush_3}`}
					/>

					<BaseIcon
						viewBox='0 0 90 63'
						icon={ALL_ICONS.BUSH_M}
						className={`${s.Bush} ${s.Bush_Mobile} ${s.Bush_4}`}
					/>

					{/* трава */}

					<div className={s.Grass}></div>

					<div className={s.Tags}>
						<div className={`${s.Tags_Item} ${s.Tags_Item_1}`}>
							<div className={s.Tags_Item_Wrapper}>
								<span>MasterCard processing</span>
							</div>
						</div>

						<div className={`${s.Tags_Item} ${s.Tags_Item_2}`}>
							<div className={s.Tags_Item_Wrapper}>
								<span>Reversal</span>
							</div>
						</div>

						<div className={`${s.Tags_Item} ${s.Tags_Item_3}`}>
							<div className={s.Tags_Item_Wrapper}>
								<BaseIcon
									viewBox='0 0 29 29'
									icon={ALL_ICONS.COIN}
									className={`${s.Tags_Item_Icon} ${s.Tags_Item_Icon_1}`}
								/>
								<BaseIcon
									viewBox='0 0 29 29'
									icon={ALL_ICONS.COIN}
									className={`${s.Tags_Item_Icon} ${s.Tags_Item_Icon_2}`}
								/>
								<BaseIcon
									viewBox='0 0 29 29'
									icon={ALL_ICONS.COIN}
									className={`${s.Tags_Item_Icon} ${s.Tags_Item_Icon_3}`}
								/>
								<span>Additional payment methods</span>
							</div>
						</div>

						<div className={`${s.Tags_Item} ${s.Tags_Item_4}`}>
							<div className={s.Tags_Item_Wrapper}>
								<span>Payment form</span>
							</div>
						</div>

						<div className={`${s.Tags_Item} ${s.Tags_Item_5}`}>
							<div className={s.Tags_Item_Wrapper}>
								<BaseIcon
									viewBox='0 0 29 29'
									icon={ALL_ICONS.COIN}
									className={`${s.Tags_Item_Icon} ${s.Tags_Item_Icon_1}`}
								/>
								<BaseIcon
									viewBox='0 0 29 29'
									icon={ALL_ICONS.COIN}
									className={`${s.Tags_Item_Icon} ${s.Tags_Item_Icon_2}`}
								/>
								<BaseIcon
									viewBox='0 0 29 29'
									icon={ALL_ICONS.COIN}
									className={`${s.Tags_Item_Icon} ${s.Tags_Item_Icon_3}`}
								/>
								<span>Recurring payments</span>
							</div>
						</div>

						<div className={`${s.Tags_Item} ${s.Tags_Item_6}`}>
							<div className={s.Tags_Item_Wrapper}>
								<span>Multi-currency settlements</span>
							</div>
						</div>

						<div className={`${s.Tags_Item} ${s.Tags_Item_7}`}>
							<div className={s.Tags_Item_Wrapper}>
								<span>Token payments</span>
							</div>
						</div>

						<div className={`${s.Tags_Item} ${s.Tags_Item_8}`}>
							<div className={s.Tags_Item_Wrapper}>
								<BaseIcon
									viewBox='0 0 29 29'
									icon={ALL_ICONS.COIN}
									className={`${s.Tags_Item_Icon} ${s.Tags_Item_Icon_1}`}
								/>
								<span>Partial Deposit</span>
							</div>
						</div>

						<div className={`${s.Tags_Item} ${s.Tags_Item_9}`}>
							<div className={s.Tags_Item_Wrapper}>
								<BaseIcon
									viewBox='0 0 29 29'
									icon={ALL_ICONS.COIN}
									className={`${s.Tags_Item_Icon} ${s.Tags_Item_Icon_1}`}
								/>
								<span>CFT payouts</span>
							</div>
						</div>

						<div className={`${s.Tags_Item} ${s.Tags_Item_10}`}>
							<div className={s.Tags_Item_Wrapper}>
								<span>3DS transactions</span>
							</div>
						</div>

						<div className={`${s.Tags_Item} ${s.Tags_Item_11}`}>
							<div className={s.Tags_Item_Wrapper}>
								<span>Multi-currency processing</span>
							</div>
						</div>

						<div className={`${s.Tags_Item} ${s.Tags_Item_12}`}>
							<div className={s.Tags_Item_Wrapper}>
								<span>
									PCI DSS (Payment Card Industry Data Security Standard)
									certified gateway
								</span>
							</div>
						</div>

						<div className={`${s.Tags_Item} ${s.Tags_Item_13}`}>
							<div className={s.Tags_Item_Wrapper}>
								<BaseIcon
									viewBox='0 0 29 29'
									icon={ALL_ICONS.COIN}
									className={`${s.Tags_Item_Icon} ${s.Tags_Item_Icon_1}`}
								/>
								<BaseIcon
									viewBox='0 0 29 29'
									icon={ALL_ICONS.COIN}
									className={`${s.Tags_Item_Icon} ${s.Tags_Item_Icon_2}`}
								/>
								<BaseIcon
									viewBox='0 0 29 29'
									icon={ALL_ICONS.COIN}
									className={`${s.Tags_Item_Icon} ${s.Tags_Item_Icon_3}`}
								/>
								<span>Partial Reversal</span>
							</div>
						</div>

						<div className={`${s.Tags_Item} ${s.Tags_Item_14}`}>
							<div className={s.Tags_Item_Wrapper}>
								<span>API (SOAP- Simple Object Access Protocol)</span>
							</div>
						</div>
					</div>
				</div>
			</BaseContainer>
		</div>
	);
};

export default Services;
