import { BaseAlert } from '@base/index';
import {
	About,
	Benefits,
	Form,
	Header,
	HowWeWork,
	PaymentSchemes,
	Services,
} from 'components/landing/pages/Main';
import React from 'react';

const Main: React.FC = () => {
	return (
		<div style={{ overflow: 'hidden' }}>
			<Header />
			<About />
			<Benefits />
			<Form />
			<HowWeWork />
			<Services />
			<PaymentSchemes />
			<BaseAlert />
		</div>
	);
};

export default Main;
