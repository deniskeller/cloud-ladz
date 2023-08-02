import {
	About,
	Benefits,
	Form,
	Header,
	HowWeWork,
	PaymentSchemes,
	Services,
} from 'components/landing/pages/Main';

const Main = () => {
	return (
		<>
			<Header />
			<About />
			<Benefits />
			<Form />
			<HowWeWork />
			<Services />
			<PaymentSchemes />
		</>
	);
};

export default Main;
