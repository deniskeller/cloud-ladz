import { BaseContainer } from '@base/index';
import React from 'react';
import s from './PaymentSchemes.module.scss';

const PaymentSchemes: React.FC = () => {
	return (
		<BaseContainer>
			<div className={s.PaymentSchemes}></div>
		</BaseContainer>
	);
};

export default PaymentSchemes;
