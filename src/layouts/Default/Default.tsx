// import { Footer } from 'components/landing/footer';
import Header from 'components/landing/header/Header';
import React from 'react';
import s from './Default.module.scss';

interface Props {
	children: JSX.Element;
	type?: string;
}

const Default: React.FC<Props> = ({ children, type }) => {
	return (
		<div
			className={s.Wrapper}
			style={{ background: type == 'light' ? '#E3E1DC' : '#1E1E1E' }}
		>
			<Header type={type} />
			<div className={s.Content}>{children}</div>
			{/* <Footer type={type} /> */}
		</div>
	);
};

export default Default;
