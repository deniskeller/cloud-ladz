export enum ComponentsIcons {
	CHECK = 'CHECK',
	CLOSE = 'CLOSE',
}

export const componentsIcons = {
	[ComponentsIcons.CHECK]: (
		<>
			<path
				d='M6.25 16.25L11.25 21.25L23.75 8.75'
				stroke='white'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</>
	),
	[ComponentsIcons.CLOSE]: (
		<>
			<path
				d='M10 30L30 10M10 10L30 30'
				stroke='#BED252'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			;
		</>
	),
};
