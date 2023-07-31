import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import Link from 'next/link';
import React from 'react';
import s from './Logo.module.scss';

interface Props {
	className?: string;
	type?: string;
}

const Logo: React.FC<Props> = ({ className = '', type }) => {
	return (
		<div
			className={`${s.Logo} ${className} ${
				type == 'light' ? s.Logo_Light : ''
			}`}
		>
			<Link href='/'>
				<BaseIcon icon={ALL_ICONS.LOGO} viewBox='0 0 180 56' />
			</Link>
		</div>
	);
};

export default Logo;
