import type { AppProps } from 'next/app';
import '../styles/globals.scss';

import { store } from '@store/store';
import Head from 'next/head';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/public/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/public/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/public/favicon-16x16.png'
				/>
				<link rel='manifest' href='/site.webmanifest' />
				<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5f41d4' />
				<meta name='msapplication-TileColor' content='#5f41d4' />
				<meta name='theme-color' content='#5f41d4'></meta>
				<link rel='icon' type='image/png' href='/public/favicon.ico'></link>

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
