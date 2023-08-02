import { BaseContainer } from '@base/index';
import Link from 'next/link';
import React from 'react';
import { Logo } from '../content';
import s from './Footer.module.scss';

interface Props {
	className?: string;
	type?: string;
}

interface list {
	href: string;
	title: string;
}

interface Links {
	list: list[];
}

const links: Links[] = [
	{
		list: [
			{
				href: '/about',
				title: 'About',
			},
			{
				href: '/terms-and-conditions',
				title: 'Terms & Conditions',
			},
			{
				href: '/privacy-policy',
				title: 'Privacy Policy',
			},
		],
	},
	{
		list: [
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
		],
	},
];

const Footer: React.FC<Props> = ({ className = '', type }) => {
	return (
		<div
			className={s.FooterWrapper}
			style={{
				backgroundImage: `${
					type !== 'light'
						? 'url(/images/pictures/footer-bg.png)'
						: 'transparent'
				}`,
			}}
		>
			<BaseContainer>
				<div
					className={`${s.Footer} ${className} ${
						type == 'light' ? s.Footer_Light : ''
					}`}
				>
					<Logo className={s.Logo} type={type} />

					<div className={s.Content}>
						<ul className={s.Content_Navbar}>
							{links?.map((link, index) => {
								return (
									<li className={s.Link} key={index}>
										<ul className={s.Link_List}>
											{link.list?.map((el, i) => {
												return (
													<li
														key={i}
														className={`${s.Link_List_Item} ${
															type === 'light' ? s.Light : ''
														}`}
													>
														<Link href={el.href}>{el.title}</Link>
													</li>
												);
											})}
										</ul>
									</li>
								);
							})}
						</ul>

						<div className={s.Content_Info}>
							<div className={s.InfoItem}>
								<div className={s.InfoItem_Label}>
									<span className={`${type === 'light' ? s.Light : ''}`}>
										Email:
									</span>
								</div>
								<div
									className={`${s.InfoItem_Value} ${
										type === 'light' ? s.Light : ''
									}`}
								>
									info@cloudladz.com
								</div>
							</div>

							<div className={s.InfoItem}>
								<div className={s.InfoItem_Label}>
									<span className={`${type === 'light' ? s.Light : ''}`}>
										ESOQUE INC
									</span>
								</div>
								<div
									className={`${s.InfoItem_Value} ${
										type === 'light' ? s.Light : ''
									}`}
								>
									17 state street, suite 4000 NEW YORK 10004 NY United States
								</div>
							</div>

							<div className={s.InfoItem}>
								<div className={s.InfoItem_Label}>
									<span className={`${type === 'light' ? s.Light : ''}`}>
										Languages
									</span>
								</div>
								<div
									className={`${s.InfoItem_Value} ${
										type === 'light' ? s.Light : ''
									}`}
								>
									English
								</div>
							</div>

							<div className={s.InfoItem}>
								<div className={s.InfoItem_Label}>
									<span className={`${type === 'light' ? s.Light : ''}`}>
										Working Hours
									</span>
								</div>
								<div
									className={`${s.InfoItem_Value} ${
										type === 'light' ? s.Light : ''
									}`}
								>
									Monday to Friday starting from 9:00 AM till 18:00 PM. Saturday
									to Sunday office is closed.
								</div>
							</div>
						</div>
					</div>
				</div>
			</BaseContainer>
		</div>
	);
};

export default Footer;
