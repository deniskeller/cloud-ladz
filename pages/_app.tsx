import type { AppProps } from 'next/app';
import '../styles/globals.scss';

import { store } from '@store/store';
import Head from 'next/head';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, maximum-scale=1'
				/>
				<meta name='keywords' content='Cloud ladz' />
				<meta name='author' content='Cloud ladz' />
				<meta name='description' content='Cloud ladz' />
				<title>Cloud ladz</title>
			</Head>

			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</>
	);
}
