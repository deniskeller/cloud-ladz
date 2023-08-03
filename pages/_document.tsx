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
			</Head>
			<title>Cloud ladz</title>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
