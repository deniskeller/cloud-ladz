import React from 'react';
import { Logo } from '../content';
import s from './Header.module.scss';

interface Props {
	className?: string;
	type?: string;
}

const Header: React.FC<Props> = ({ className = '', type }) => {
	return (
		<div className={s.Header}>
			<Logo type={type} />
		</div>
	);
};

export default Header;
