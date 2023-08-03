/* eslint-disable react/no-unescaped-entities */
import { BaseContainer } from '@base/index';
import { Sidebar } from '@content/landing/index';
import { useRouter } from 'next/router';
import React from 'react';
import s from './PrivacyPolicy.module.scss';

const navbar_links = [
	'Personal Data',
	'User Information Azure Processing Collects',
	'Disclosures',
	'Change Of Ownership',
	'Security',
	'Privacy Complaints',
	'Revisions To This Policy',
	'Term',
	'Term',
	'Term',
	'Term',
	'Term',
	'Term',
	'Term',
	'Term',
	'Term',
];

const PrivacyPolicy: React.FC = () => {
	const router = useRouter();

	return (
		<div className={s.Wrapper}>
			<BaseContainer>
				<div className={s.Body}>
					<div className={s.Content}>
						<div className={s.Content_Header}>
							<span onClick={() => router.back()}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 32 33'
									fill='none'
								>
									<path
										d='M13.3333 25.8337L4 16.5003M4 16.5003L13.3333 7.16699M4 16.5003L28 16.5003'
										stroke='#1E1E1E'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</span>

							<h1>Azure Processing Privacy Policy</h1>
						</div>

						<div className={s.Content_Subtitle}>
							<p>
								Questions concerning this information? Please email us
								info@cloudladz.com
							</p>
						</div>

						<p>
							This Privacy Policy explains the practices and policies of Azure
							Processing (“Azure Processing”, AZURE PAYMENTS LIMITED) regarding
							the collection and protection of Personal Data supplied by users
							or collected by us from users of Azure Processing websites and the
							Azure Processing services (the “Service”).
						</p>

						<p>
							Azure Processing defines “Personal Data” as any data from which it
							is practical to directly determine the identity of an individual.
							Any capitalized terms not defined in this Privacy Policy have the
							meanings given in the Service’s License and Service Agreement (the
							“User Agreement”). This Privacy Policy may be updated by Azure
							Processing from time to time. Azure Processing will provide notice
							of materially significant changes to the Privacy Policy by posting
							notice on its websites.
						</p>

						<p>
							By registering to use the Service, you agree (1) to comply with
							the terms and conditions of this Privacy Policy and (2) Azure
							Processing may process (i.e., collect, use, etc.) your Personal
							Data as described in this Privacy Policy or the Terms and
							Conditions. Personal Data may be processed by Azure Processing in
							the country where it was collected as well as other countries
							(including the United States) where laws regarding processing of
							Personal Data may be less stringent. Please note that by visiting
							and using Azure Processing’s website, you are accepting the
							practices described in this Privacy Policy.
						</p>

						<div className={s.Subtitle} id='section-1'>
							<h2>Personal Data</h2>
						</div>

						<div className={s.Subtitle} id='section-2'>
							<h2>Cookies And Passive Data Collection</h2>
						</div>

						<div className={s.Subtitle} id='section-3'>
							<h2>Disclosures</h2>
						</div>

						<div className={s.Subtitle} id='section-1'>
							<h2>Change Of Ownership</h2>
						</div>

						<div className={s.Subtitle} id='section-1'>
							<h2></h2>
						</div>

						<div className={s.Subtitle} id='section-1'>
							<h2></h2>
						</div>

						<div className={s.Subtitle} id='section-1'>
							<h2></h2>
						</div>

						<div className={s.Subtitle} id='section-1'>
							<h2></h2>
						</div>

						<div className={s.Subtitle} id='section-1'>
							<h2></h2>
						</div>

						<div className={s.Subtitle} id='section-1'>
							<h2></h2>
						</div>

						<div className={s.Subtitle} id='section-1'>
							<h2></h2>
						</div>

						<div className={s.Subtitle} id='section-1'>
							<h2></h2>
						</div>

						<div className={s.Subtitle} id='section-1'>
							<h2></h2>
						</div>

						<div className={s.Subtitle} id='section-1'>
							<h2></h2>
						</div>

						<div className={s.Subtitle} id='section-1'>
							<h2></h2>
						</div>

						<div className={s.Subtitle} id='section-1'>
							<h2></h2>
						</div>

						<div className={s.Subtitle} id='section-1'>
							<h2></h2>
						</div>

						<div className={s.Subtitle} id='section-1'>
							<h2></h2>
						</div>

						<div className={s.Subtitle} id='section-1'>
							<h2></h2>
						</div>

						<div className={s.Subtitle} id='section-1'>
							<h2></h2>
						</div>
					</div>

					<Sidebar navbar_links={navbar_links} />
				</div>
			</BaseContainer>
		</div>
	);
};

export default PrivacyPolicy;
