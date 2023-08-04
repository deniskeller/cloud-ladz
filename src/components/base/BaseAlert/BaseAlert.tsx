//@ts-nocheck
import { ALL_ICONS } from '@constants/icons';
import React from 'react';
import { ToastType, toast as toastOBj, useToaster } from 'react-hot-toast';
import { BaseIcon } from '..';
import styles from './BaseAlert.module.scss';

const BaseAlert: React.FC = () => {
	const { toasts, handlers } = useToaster();
	const { startPause, endPause, calculateOffset, updateHeight } = handlers;

	const typeIcon = (type: ToastType) => {
		switch (type) {
			case 'success':
				return (
					<>
						<BaseIcon
							className={styles.BaseAlert_Icon}
							viewBox='0 0 50 50'
							icon={ALL_ICONS.ROKET2}
						/>
					</>
				);
			default:
				return null;
		}
	};

	return (
		<div
			className={styles.BaseAlert}
			onMouseEnter={startPause}
			onMouseLeave={endPause}
		>
			{toasts.map((toast) => {
				const offset = calculateOffset(toast, {
					reverseOrder: true,
					gutter: 1,
				});

				const ref = (el) => {
					if (el && typeof toast.height !== 'number') {
						const height = el.getBoundingClientRect().height;
						updateHeight(toast.id, height);
					}
				};

				return (
					<div
						className={styles.BaseAlert_Alert}
						key={toast.id}
						ref={ref}
						style={{
							position: 'absolute',
							transition: 'all 0.5s ease',
							opacity: toast.visible ? 1 : 0,
							transform: `translateY(-${offset}px)`,
						}}
						{...toast.ariaProps}
					>
						<div className={styles.BaseAlert_Content}>
							{typeIcon(toast.type)}
							<div className={styles.Text}>
								<span>{toast.message}</span>
							</div>
						</div>
						{
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='none'
								className={styles.BaseAlert_Close}
								onClick={() => {
									toast.visible = false;
									toastOBj.dismiss(toast.id);
								}}
							>
								<path
									d='M6 18L18 6M6 6L18 18'
									stroke='#5F41D4'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						}
					</div>
				);
			})}
		</div>
	);
};

export default BaseAlert;
