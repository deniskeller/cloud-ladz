import { About, Benefits, Header } from 'components/landing/pages/Main';
import React from 'react';

interface IValue {
	name: string;
	email: string;
}

const Main = () => {
	const [value, setValue] = React.useState<IValue>({
		name: '',
		email: '',
	});

	const setNewValue = (val: string | number, key: string) => {
		setValue((prev) => ({ ...prev, [key]: val }));
	};

	return (
		<>
			<Header />
			<About />
			<Benefits />
			{/* <BaseInput
				name='name'
				label='Your name'
				value={value.name}
				onChange={(val: string) => setNewValue(val, 'name')}
				// className={s.LicensingRequestPopup_Form_Input}
			/> */}
		</>
	);
};

export default Main;
