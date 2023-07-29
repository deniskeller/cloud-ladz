import { BaseInput } from '@base/index';
import { Default } from '@layouts/index';
import React from 'react';
// import { Main } from '@view/landing';

const MainPage = () => {
	const [value, setValue] = React.useState<IValue>({
		name: '',
		email: '',
	});

	const setNewValue = (val: string | number, key: string) => {
		setValue((prev) => ({ ...prev, [key]: val }));
	};

	return (
		<Default>
			{/* <Main /> */}

			<BaseInput
				name='name'
				label='Your name'
				value={value.name}
				onChange={(val: string) => setNewValue(val, 'name')}
				// className={s.LicensingRequestPopup_Form_Input}
			/>
		</Default>
	);
};

export default MainPage;
