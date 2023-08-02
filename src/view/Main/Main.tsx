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
		<>
			<Header />
			<About />
			<Benefits />
			<Form />
			<HowWeWork />
			<Services />
			<PaymentSchemes />
			<BaseAlert />
		</>
	);
};

export default Main;
