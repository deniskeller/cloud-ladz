import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import s from './Navbar.module.scss';

interface Props {
	fixed?: boolean;
	type?: string;
	pricing?: string;
}

interface Links {
	[key: string]: string;
}

const links: Links[] = [
	{
		href: '/dating',
		title: 'Dating',
	},
	{
		href: '/nutra',
		title: 'Nutra',
	},
	{
		href: '/gambling',
		title: 'Gambling',
	},
	{
		href: '/cryptocurrencies',
		title: 'Cryptocurrencies',
	},
];

const Navbar: React.FC<Props> = () => {
	const router = useRouter();

	return (
		<div className={s.Navbar}>
			<div className={s.Navbar_Container}>
				<ul className={s.Navbar_List}>
					{links.map((link, index) => {
						return (
							<li
								key={index}
								className={`${s.Link} ${
									router.pathname.split('/')[1] === link.href.split('/')[1]
										? s.Link_Active
										: ''
								}`}
							>
								<Link href={link.href}>{link.title}</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
