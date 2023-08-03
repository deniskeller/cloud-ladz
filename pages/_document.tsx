import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,200;9..40,300;9..40,400;9..40,500&family=Montserrat:wght@500&display=swap'
					rel='stylesheet'
				/>
				<link
					rel='stylesheet'
					href='https://use.typekit.net/fzy6ewm.css'
				></link>

				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
				<link rel='manifest' href='/site.webmanifest' />
				<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5f41d4' />
				<meta name='msapplication-TileColor' content='#5f41d4' />
				<meta name='theme-color' content='#5f41d4'></meta>
				<link rel='icon' type='image/png' href='/favicon.ico'></link>
			</Head>
			<title>Cloud ladz</title>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
